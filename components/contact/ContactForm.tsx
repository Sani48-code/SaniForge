"use client";

import { useState, type FormEvent } from "react";
import { Send } from "lucide-react";
import { site } from "@/lib/data/site";

type FormState = {
  name: string;
  email: string;
  projectType: string;
  message: string;
};

const initialState: FormState = {
  name: "",
  email: "",
  projectType: "Website",
  message: "",
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function ContactForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [sent, setSent] = useState(false);

  function validate(): boolean {
    const next: Partial<Record<keyof FormState, string>> = {};
    if (!form.name.trim()) next.name = "Please enter your name.";
    if (!form.email.trim() || !emailPattern.test(form.email))
      next.email = "Please enter a valid email address.";
    if (!form.message.trim() || form.message.trim().length < 10)
      next.message = "Please add a few details about your project.";
    setErrors(next);
    return Object.keys(next).length === 0;
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!validate()) return;

    const subject = encodeURIComponent(`New project inquiry: ${form.projectType}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nProject Type: ${form.projectType}\n\nMessage:\n${form.message}`
    );
    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
    setSent(true);
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-6">
      <div>
        <label htmlFor="name" className="mb-2 block text-sm text-ink-muted">
          Name
        </label>
        <input
          id="name"
          type="text"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          className="w-full rounded-xl border border-navy-border bg-navy-panel/60 px-4 py-3 text-ink placeholder:text-ink-faint focus:border-gold/50 focus:outline-none"
          placeholder="Your name"
        />
        {errors.name && <p className="mt-1.5 text-xs text-red-400">{errors.name}</p>}
      </div>

      <div>
        <label htmlFor="email" className="mb-2 block text-sm text-ink-muted">
          Email
        </label>
        <input
          id="email"
          type="email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          className="w-full rounded-xl border border-navy-border bg-navy-panel/60 px-4 py-3 text-ink placeholder:text-ink-faint focus:border-gold/50 focus:outline-none"
          placeholder="you@company.com"
        />
        {errors.email && <p className="mt-1.5 text-xs text-red-400">{errors.email}</p>}
      </div>

      <div>
        <label htmlFor="projectType" className="mb-2 block text-sm text-ink-muted">
          Project Type
        </label>
        <select
          id="projectType"
          value={form.projectType}
          onChange={(e) => setForm({ ...form, projectType: e.target.value })}
          className="w-full rounded-xl border border-navy-border bg-navy-panel/60 px-4 py-3 text-ink focus:border-gold/50 focus:outline-none"
        >
          <option>Website</option>
          <option>SEO Content</option>
          <option>Automation</option>
          <option>Other</option>
        </select>
      </div>

      <div>
        <label htmlFor="message" className="mb-2 block text-sm text-ink-muted">
          Message
        </label>
        <textarea
          id="message"
          rows={5}
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          className="w-full resize-none rounded-xl border border-navy-border bg-navy-panel/60 px-4 py-3 text-ink placeholder:text-ink-faint focus:border-gold/50 focus:outline-none"
          placeholder="Tell me a bit about your project..."
        />
        {errors.message && <p className="mt-1.5 text-xs text-red-400">{errors.message}</p>}
      </div>

      <button
        type="submit"
        className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-gold-gradient px-6 py-3.5 text-sm font-medium text-navy-deep shadow-gold-glow transition-all hover:brightness-110 sm:w-auto"
      >
        Send Message <Send size={15} />
      </button>

      {sent && (
        <p className="text-sm text-gold-light">
          Your email client should now be open with the message pre-filled —
          just hit send.
        </p>
      )}
    </form>
  );
}
