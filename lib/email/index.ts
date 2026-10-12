import type { LeadInput } from "@/lib/leads/schema";
import { site } from "@/lib/data/site";

/**
 * Transactional email via Resend's REST API. Server-only.
 * Nothing is sent unless RESEND_API_KEY and EMAIL_FROM (an address on a domain verified in Resend) are set.
 */
type Message = { to: string; subject: string; html: string; text: string; replyTo?: string };

export function emailConfigured(): boolean {
  return Boolean(process.env.RESEND_API_KEY && process.env.EMAIL_FROM);
}

const esc = (s: string) =>
  s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");

async function send(msg: Message): Promise<boolean> {
  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${process.env.RESEND_API_KEY}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        from: process.env.EMAIL_FROM,
        to: [msg.to],
        subject: msg.subject,
        html: msg.html,
        text: msg.text,
        ...(msg.replyTo ? { reply_to: msg.replyTo } : {}),
      }),
      signal: AbortSignal.timeout(8000),
    });
    if (!res.ok) {
      console.error(`[email] provider rejected message (status ${res.status})`);
      return false;
    }
    return true;
  } catch (err) {
    console.error("[email] send failed:", err instanceof Error ? err.name : "unknown error");
    return false;
  }
}

/** Sends the visitor acknowledgement and the internal notification. Never throws. */
export async function sendLeadEmails(lead: LeadInput): Promise<{ sent: boolean }> {
  if (!emailConfigured()) {
    console.info("[email] not configured; skipping lead emails");
    return { sent: false };
  }
  const notifyTo = process.env.LEAD_NOTIFY_TO || site.email;
  const first = lead.fullName.split(/\s+/)[0];

  const [ack, notify] = await Promise.all([
    send({
      to: lead.email,
      replyTo: notifyTo,
      subject: "Thanks for reaching out to SaniForge",
      text: `Hi ${first},\n\nThanks for sharing your project details. I have received them and will reply personally soon.\n\nIf you have not already, you can pick a time for a 30-minute discovery call here: ${site.calendlyUrl}\n(You will receive a separate confirmation from Calendly once you book.)\n\nAbdul Kalyum Sani, SaniForge`,
      html: `<p>Hi ${esc(first)},</p><p>Thanks for sharing your project details. I have received them and will reply personally soon.</p><p>If you have not already, you can pick a time for a 30-minute discovery call <a href="${site.calendlyUrl}">here</a>. You will receive a separate confirmation from Calendly once you book.</p><p>Abdul Kalyum Sani, SaniForge</p>`,
    }),
    send({
      to: notifyTo,
      replyTo: lead.email,
      subject: `New lead: ${lead.fullName} (${lead.service})`,
      text: `Name: ${lead.fullName}\nEmail: ${lead.email}\nWebsite: ${lead.websiteUrl ?? "-"}\nService: ${lead.service}\nBudget: ${lead.budget ?? "-"}\n\n${lead.projectDetails}`,
      html: `<p><b>Name:</b> ${esc(lead.fullName)}<br><b>Email:</b> ${esc(lead.email)}<br><b>Website:</b> ${esc(lead.websiteUrl ?? "-")}<br><b>Service:</b> ${esc(lead.service)}<br><b>Budget:</b> ${esc(lead.budget ?? "-")}</p><p style="white-space:pre-wrap">${esc(lead.projectDetails)}</p>`,
    }),
  ]);
  return { sent: ack && notify };
}
