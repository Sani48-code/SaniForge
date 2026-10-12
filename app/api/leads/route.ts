import { createHash } from "node:crypto";
import { NextResponse, type NextRequest } from "next/server";
import { createAdminClient } from "@/lib/supabase/server";
import { validateLead } from "@/lib/leads/schema";
import { rateLimit } from "@/lib/rate-limit";
import { sendLeadEmails } from "@/lib/email";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const MAX_BODY_BYTES = 10_000;
const MIN_FILL_MS = 2500;
const HOUR = 60 * 60 * 1000;

function clientIp(req: NextRequest): string {
  return req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || req.headers.get("x-real-ip") || "unknown";
}

function sameOrigin(req: NextRequest): boolean {
  const origin = req.headers.get("origin");
  if (!origin) return true;
  try {
    return new URL(origin).host === req.headers.get("host");
  } catch {
    return false;
  }
}

export async function POST(req: NextRequest) {
  if (!sameOrigin(req)) return NextResponse.json({ error: "Forbidden." }, { status: 403 });

  if (!process.env.NEXT_PUBLIC_SUPABASE_URL || !process.env.SUPABASE_SERVICE_ROLE_KEY) {
    console.error("[leads] Supabase environment variables are missing");
    return NextResponse.json({ error: "Lead capture is not available right now." }, { status: 503 });
  }

  const ip = clientIp(req);
  if (!rateLimit(`leads:${ip}`, 5, 10 * 60 * 1000)) {
    return NextResponse.json({ error: "Too many requests. Please try again in a few minutes." }, { status: 429 });
  }

  const raw = await req.text();
  if (raw.length > MAX_BODY_BYTES) return NextResponse.json({ error: "Request too large." }, { status: 413 });
  let body: Record<string, unknown>;
  try {
    body = JSON.parse(raw);
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  // Spam traps: a hidden field real users never fill, and a minimum time-to-submit.
  const tooFast = typeof body.startedAt === "number" && Date.now() - body.startedAt < MIN_FILL_MS;
  if (body.nickname || tooFast) {
    // Pretend success so bots get no signal; nothing is stored or emailed.
    return NextResponse.json({ ok: true });
  }

  const result = validateLead(body);
  if (!result.ok) {
    return NextResponse.json({ error: "Please fix the highlighted fields.", fields: result.errors }, { status: 422 });
  }
  const lead = result.value;

  const ipHash = createHash("sha256").update(`${process.env.LEAD_IP_SALT ?? ""}${ip}`).digest("hex");
  const supabase = createAdminClient();
  const since = new Date(Date.now() - HOUR).toISOString();

  // Durable limits that hold across serverless instances: 5 per IP and 3 per email per hour.
  const [byIp, byEmail] = await Promise.all([
    supabase.from("leads").select("id", { count: "exact", head: true }).eq("ip_hash", ipHash).gte("created_at", since),
    supabase.from("leads").select("id", { count: "exact", head: true }).eq("email", lead.email).gte("created_at", since),
  ]);
  if (byIp.error || byEmail.error) {
    console.error("[leads] rate-limit lookup failed:", (byIp.error ?? byEmail.error)?.code);
    return NextResponse.json({ error: "Something went wrong. Please try again." }, { status: 500 });
  }
  if ((byIp.count ?? 0) >= 5 || (byEmail.count ?? 0) >= 3) {
    return NextResponse.json({ error: "Too many submissions. Please try again later." }, { status: 429 });
  }

  const { error } = await supabase.from("leads").insert({
    full_name: lead.fullName,
    email: lead.email,
    website_url: lead.websiteUrl,
    service: lead.service,
    budget: lead.budget,
    project_details: lead.projectDetails,
    ip_hash: ipHash,
    status: "new",
  });
  if (error) {
    console.error("[leads] insert failed:", error.code);
    return NextResponse.json({ error: "We couldn't save your details. Please try again." }, { status: 500 });
  }

  // The lead is already saved; an email failure must never affect the response.
  const emails = await sendLeadEmails(lead).catch(() => ({ sent: false }));
  return NextResponse.json({ ok: true, emailed: emails.sent });
}
