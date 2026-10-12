export const SERVICES = [
  "Web Development",
  "SaaS Development",
  "n8n / Automation",
  "SEO Content & Copywriting",
  "Not sure yet",
] as const;

export const BUDGETS = ["Under $500", "$500 – $2,000", "$2,000 – $5,000", "$5,000+", "Not sure yet"] as const;

export type LeadInput = {
  fullName: string;
  email: string;
  websiteUrl: string | null;
  service: (typeof SERVICES)[number];
  budget: (typeof BUDGETS)[number] | null;
  projectDetails: string;
};

export type LeadErrors = Partial<
  Record<"fullName" | "email" | "websiteUrl" | "service" | "budget" | "projectDetails", string>
>;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
// Strip control characters (keeps \n and \t) so stored text and email bodies stay clean.
const CONTROL_RE = /[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F]/g;

/** Trims and strips control characters, but keeps one extra char so over-long input is still detectable. */
function clean(value: unknown, max: number): string {
  if (typeof value !== "string") return "";
  return value.replace(CONTROL_RE, "").trim().slice(0, max + 1);
}

function normalizeUrl(raw: string): string | null {
  const withProtocol = /^https?:\/\//i.test(raw) ? raw : `https://${raw}`;
  try {
    const url = new URL(withProtocol);
    if (!["http:", "https:"].includes(url.protocol) || !url.hostname.includes(".")) return null;
    return url.toString();
  } catch {
    return null;
  }
}

export function validateLead(
  body: unknown,
): { ok: true; value: LeadInput } | { ok: false; errors: LeadErrors } {
  const data = (body && typeof body === "object" ? body : {}) as Record<string, unknown>;
  const errors: LeadErrors = {};

  const fullName = clean(data.fullName, 100);
  if (fullName.length < 2 || fullName.length > 100) errors.fullName = "Please enter your full name.";

  const email = clean(data.email, 254).toLowerCase();
  if (!EMAIL_RE.test(email) || email.length > 254) errors.email = "Please enter a valid email address.";

  let websiteUrl: string | null = null;
  const websiteRaw = clean(data.websiteUrl, 300);
  if (websiteRaw) {
    websiteUrl = websiteRaw.length > 300 ? null : normalizeUrl(websiteRaw);
    if (!websiteUrl) errors.websiteUrl = "Please enter a valid website address, or leave it blank.";
  }

  const service = clean(data.service, 60) as LeadInput["service"];
  if (!SERVICES.includes(service)) errors.service = "Please choose a service.";

  let budget: LeadInput["budget"] = null;
  const budgetRaw = clean(data.budget, 40);
  if (budgetRaw) {
    if (BUDGETS.includes(budgetRaw as (typeof BUDGETS)[number])) budget = budgetRaw as LeadInput["budget"];
    else errors.budget = "Please choose one of the listed budgets.";
  }

  const projectDetails = clean(data.projectDetails, 3000);
  if (projectDetails.length < 10) {
    errors.projectDetails = "Please add a few details about your project (at least 10 characters).";
  } else if (projectDetails.length > 3000) {
    errors.projectDetails = "Please keep project details under 3,000 characters.";
  }

  if (Object.keys(errors).length) return { ok: false, errors };
  return { ok: true, value: { fullName, email, websiteUrl, service, budget, projectDetails } };
}
