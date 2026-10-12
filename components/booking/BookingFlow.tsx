"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";
import { CalendarCheck, CheckCircle2, ExternalLink, Loader2, Send } from "lucide-react";
import { site } from "@/lib/data/site";
import { BUDGETS, SERVICES, type LeadErrors } from "@/lib/leads/schema";

type FormState = {
  fullName: string;
  email: string;
  websiteUrl: string;
  service: string;
  budget: string;
  projectDetails: string;
  nickname: string; // honeypot
};

const initial: FormState = {
  fullName: "",
  email: "",
  websiteUrl: "",
  service: "",
  budget: "",
  projectDetails: "",
  nickname: "",
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

const inputClass =
  "w-full rounded-xl border border-sv-border bg-white px-4 py-3 text-base text-sv-navy placeholder:text-sv-slate/60 focus:border-sv-blue focus:outline-none focus:ring-2 focus:ring-sv-blue/20";
const labelClass = "mb-1.5 block text-sm font-semibold text-sv-navy";

function Field({
  id,
  label,
  optional,
  error,
  children,
}: {
  id: string;
  label: string;
  optional?: boolean;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label htmlFor={id} className={labelClass}>
        {label} {optional && <span className="font-normal text-sv-slate">(optional)</span>}
      </label>
      {children}
      {error && (
        <p id={`${id}-error`} role="alert" className="mt-1.5 text-sm text-red-600">
          {error}
        </p>
      )}
    </div>
  );
}

function CalendlyEmbed({ name, email }: { name?: string; email?: string }) {
  const [loaded, setLoaded] = useState(false);
  const [slow, setSlow] = useState(false);
  const [src, setSrc] = useState<string | null>(null);

  useEffect(() => {
    const params = new URLSearchParams({
      embed_domain: window.location.hostname,
      embed_type: "Inline",
      hide_gdpr_banner: "1",
    });
    if (name) params.set("name", name);
    if (email) params.set("email", email);
    setSrc(`${site.calendlyUrl}?${params.toString()}`);
    const t = window.setTimeout(() => setSlow(true), 10000);
    return () => window.clearTimeout(t);
  }, [name, email]);

  return (
    <div>
      <div className="relative overflow-hidden rounded-2xl border border-sv-border bg-white shadow-sm">
        {!loaded && (
          <div className="absolute inset-0 flex items-center justify-center gap-2 text-sv-slate" aria-live="polite">
            <Loader2 className="animate-spin" size={18} aria-hidden="true" /> Loading calendar…
          </div>
        )}
        {src && (
          <iframe
            src={src}
            title="Book a 30-minute discovery call on Calendly"
            onLoad={() => setLoaded(true)}
            loading="lazy"
            className="block h-[760px] w-full border-0 sm:h-[700px]"
          />
        )}
      </div>
      <p className="mt-3 text-sm text-sv-slate">
        {slow && !loaded ? "The calendar is taking a while to load. " : "Calendar not showing? "}
        <a
          href={site.calendlyUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 font-semibold text-sv-blue underline underline-offset-2"
        >
          Open it in a new tab <ExternalLink size={13} aria-hidden="true" />
        </a>
      </p>
    </div>
  );
}

export default function BookingFlow() {
  const [form, setForm] = useState<FormState>(initial);
  const [errors, setErrors] = useState<LeadErrors>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "error">("idle");
  const [message, setMessage] = useState("");
  const [step, setStep] = useState<"form" | "schedule">("form");
  const [saved, setSaved] = useState(false);
  const startedAt = useRef(Date.now());
  const scheduleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (step === "schedule") scheduleRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, [step]);

  function set<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((f) => ({ ...f, [key]: value }));
  }

  function validate(): boolean {
    const next: LeadErrors = {};
    if (form.fullName.trim().length < 2) next.fullName = "Please enter your full name.";
    if (!EMAIL_RE.test(form.email.trim())) next.email = "Please enter a valid email address.";
    if (!form.service) next.service = "Please choose a service.";
    if (form.projectDetails.trim().length < 10) next.projectDetails = "Please add a few details about your project (at least 10 characters).";
    setErrors(next);
    return Object.keys(next).length === 0;
  }

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    if (status === "submitting" || !validate()) return;
    setStatus("submitting");
    setMessage("");
    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, startedAt: startedAt.current }),
      });
      const data = await res.json().catch(() => ({}));
      if (res.ok) {
        setSaved(true);
        setStatus("idle");
        setStep("schedule");
        return;
      }
      if (data.fields) setErrors(data.fields);
      setMessage(data.error || "Something went wrong. Please try again.");
      setStatus("error");
    } catch {
      setMessage("Network error. Please check your connection and try again.");
      setStatus("error");
    }
  }

  if (step === "schedule") {
    return (
      <div ref={scheduleRef} className="scroll-mt-28">
        {saved ? (
          <div role="status" className="mb-6 flex items-start gap-3 rounded-2xl border border-emerald-200 bg-emerald-50 p-5 text-emerald-900">
            <CheckCircle2 className="mt-0.5 shrink-0" size={20} aria-hidden="true" />
            <div>
              <p className="font-semibold">Thanks, your project details are in.</p>
              <p className="mt-1 text-sm">
                Now pick a time below to confirm your call. Your booking is only confirmed once Calendly shows its confirmation screen.
              </p>
            </div>
          </div>
        ) : (
          <p className="mb-6 text-base text-sv-slate">Pick a time that suits you. Your booking is only confirmed once Calendly shows its confirmation screen.</p>
        )}
        <CalendlyEmbed name={saved ? form.fullName.trim() : undefined} email={saved ? form.email.trim() : undefined} />
        {!saved && (
          <button type="button" onClick={() => setStep("form")} className="mt-4 text-sm font-semibold text-sv-blue underline underline-offset-2">
            Share project details first
          </button>
        )}
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-5 rounded-2xl border border-sv-border bg-white p-6 shadow-sm sm:p-8" aria-describedby={message ? "form-message" : undefined}>
      <div className="grid gap-5 sm:grid-cols-2">
        <Field id="fullName" label="Full name" error={errors.fullName}>
          <input id="fullName" name="fullName" type="text" autoComplete="name" maxLength={100} required value={form.fullName} onChange={(e) => set("fullName", e.target.value)} aria-invalid={!!errors.fullName} aria-describedby={errors.fullName ? "fullName-error" : undefined} className={inputClass} placeholder="Jane Doe" />
        </Field>
        <Field id="email" label="Email address" error={errors.email}>
          <input id="email" name="email" type="email" autoComplete="email" maxLength={254} required value={form.email} onChange={(e) => set("email", e.target.value)} aria-invalid={!!errors.email} aria-describedby={errors.email ? "email-error" : undefined} className={inputClass} placeholder="you@company.com" />
        </Field>
      </div>

      <Field id="websiteUrl" label="Website URL" optional error={errors.websiteUrl}>
        <input id="websiteUrl" name="websiteUrl" type="text" inputMode="url" autoComplete="url" maxLength={300} value={form.websiteUrl} onChange={(e) => set("websiteUrl", e.target.value)} aria-invalid={!!errors.websiteUrl} aria-describedby={errors.websiteUrl ? "websiteUrl-error" : undefined} className={inputClass} placeholder="yourcompany.com" />
      </Field>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field id="service" label="Service required" error={errors.service}>
          <select id="service" name="service" required value={form.service} onChange={(e) => set("service", e.target.value)} aria-invalid={!!errors.service} aria-describedby={errors.service ? "service-error" : undefined} className={inputClass}>
            <option value="">Select a service</option>
            {SERVICES.map((s) => (
              <option key={s} value={s}>{s}</option>
            ))}
          </select>
        </Field>
        <Field id="budget" label="Estimated budget" optional error={errors.budget}>
          <select id="budget" name="budget" value={form.budget} onChange={(e) => set("budget", e.target.value)} className={inputClass}>
            <option value="">Prefer not to say</option>
            {BUDGETS.map((b) => (
              <option key={b} value={b}>{b}</option>
            ))}
          </select>
        </Field>
      </div>

      <Field id="projectDetails" label="Project details" error={errors.projectDetails}>
        <textarea id="projectDetails" name="projectDetails" rows={5} maxLength={3000} required value={form.projectDetails} onChange={(e) => set("projectDetails", e.target.value)} aria-invalid={!!errors.projectDetails} aria-describedby={errors.projectDetails ? "projectDetails-error" : undefined} className={`${inputClass} resize-y`} placeholder="What are you trying to achieve? Any timeline or existing tools I should know about?" />
      </Field>

      {/* Honeypot: hidden from people and assistive tech; bots tend to fill it. */}
      <div aria-hidden="true" className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
        <label htmlFor="nickname">Leave this field empty</label>
        <input id="nickname" name="nickname" type="text" tabIndex={-1} autoComplete="off" value={form.nickname} onChange={(e) => set("nickname", e.target.value)} />
      </div>

      {message && (
        <p id="form-message" role="alert" className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
          {message}
        </p>
      )}

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
        <button type="submit" disabled={status === "submitting"} className="inline-flex items-center justify-center gap-2 rounded-xl bg-sv-blue px-7 py-4 text-base font-semibold text-white shadow-lg shadow-blue-600/20 transition hover:-translate-y-0.5 hover:bg-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-jn-gold disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:translate-y-0">
          {status === "submitting" ? (<><Loader2 className="animate-spin" size={17} aria-hidden="true" /> Sending…</>) : (<><Send size={17} aria-hidden="true" /> Continue to scheduling</>)}
        </button>
        <button type="button" onClick={() => setStep("schedule")} className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-sv-border px-6 py-3.5 text-base font-semibold text-sv-navy transition hover:border-jn-gold hover:bg-jn-pale focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-jn-gold">
          <CalendarCheck size={17} aria-hidden="true" /> Skip to calendar
        </button>
      </div>
      <p className="text-xs text-sv-slate">Your details are used only to reply about your project. Please don&apos;t include passwords or payment information.</p>
    </form>
  );
}
