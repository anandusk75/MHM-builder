"use client";

import { useId, useState, type FormEvent } from "react";

interface ContactFormProps {
  projectTypeLabel?: string;
  projectTypeOptions: string[];
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  projectType?: string;
  message?: string;
}

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_PATTERN = /^[0-9+()\-.\s]{7,}$/;

export default function ContactForm({
  projectTypeLabel = "Project Type",
  projectTypeOptions,
}: ContactFormProps) {
  const formId = useId();
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errors, setErrors] = useState<FormErrors>({});

  function validate(data: FormData): FormErrors {
    const next: FormErrors = {};
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const phone = String(data.get("phone") ?? "").trim();
    const projectType = String(data.get("projectType") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();

    if (!name) next.name = "Please enter your name.";
    if (!email) next.email = "Please enter your email.";
    else if (!EMAIL_PATTERN.test(email)) next.email = "Please enter a valid email address.";
    if (phone && !PHONE_PATTERN.test(phone)) next.phone = "Please enter a valid phone number.";
    if (!projectType) next.projectType = "Please select an option.";
    if (!message) next.message = "Please add a short message.";
    else if (message.length < 10) next.message = "Please add a little more detail.";

    return next;
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const validationErrors = validate(data);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) return;

    setStatus("submitting");
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          email: data.get("email"),
          phone: data.get("phone"),
          projectType: data.get("projectType"),
          message: data.get("message"),
        }),
      });

      if (!response.ok) throw new Error("Request failed");

      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div role="status" className="border border-line bg-paper-dim p-8">
        <h3 className="font-display text-2xl text-ink">Message sent.</h3>
        <p className="mt-3 text-sm leading-relaxed text-muted">
          Thanks for reaching out — a member of our team will get back to you within one
          business day.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-6 text-sm font-medium text-accent hover:text-accent-dark"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-6">
      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor={`${formId}-name`} className="text-xs font-medium uppercase tracking-widest text-muted">
            Name
          </label>
          <input
            id={`${formId}-name`}
            name="name"
            type="text"
            autoComplete="name"
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? `${formId}-name-error` : undefined}
            className="mt-2 w-full border-0 border-b border-line bg-transparent py-2 text-ink outline-none focus:border-accent"
          />
          {errors.name ? (
            <p id={`${formId}-name-error`} className="mt-2 text-xs text-red-700">
              {errors.name}
            </p>
          ) : null}
        </div>

        <div>
          <label htmlFor={`${formId}-email`} className="text-xs font-medium uppercase tracking-widest text-muted">
            Email
          </label>
          <input
            id={`${formId}-email`}
            name="email"
            type="email"
            autoComplete="email"
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? `${formId}-email-error` : undefined}
            className="mt-2 w-full border-0 border-b border-line bg-transparent py-2 text-ink outline-none focus:border-accent"
          />
          {errors.email ? (
            <p id={`${formId}-email-error`} className="mt-2 text-xs text-red-700">
              {errors.email}
            </p>
          ) : null}
        </div>

        <div>
          <label htmlFor={`${formId}-phone`} className="text-xs font-medium uppercase tracking-widest text-muted">
            Phone <span className="normal-case text-muted/70">(optional)</span>
          </label>
          <input
            id={`${formId}-phone`}
            name="phone"
            type="tel"
            autoComplete="tel"
            aria-invalid={!!errors.phone}
            aria-describedby={errors.phone ? `${formId}-phone-error` : undefined}
            className="mt-2 w-full border-0 border-b border-line bg-transparent py-2 text-ink outline-none focus:border-accent"
          />
          {errors.phone ? (
            <p id={`${formId}-phone-error`} className="mt-2 text-xs text-red-700">
              {errors.phone}
            </p>
          ) : null}
        </div>

        <div>
          <label htmlFor={`${formId}-projectType`} className="text-xs font-medium uppercase tracking-widest text-muted">
            {projectTypeLabel}
          </label>
          <select
            id={`${formId}-projectType`}
            name="projectType"
            defaultValue=""
            aria-invalid={!!errors.projectType}
            aria-describedby={errors.projectType ? `${formId}-projectType-error` : undefined}
            className="mt-2 w-full border-0 border-b border-line bg-transparent py-2 text-ink outline-none focus:border-accent"
          >
            <option value="" disabled>
              Select an option
            </option>
            {projectTypeOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
          {errors.projectType ? (
            <p id={`${formId}-projectType-error`} className="mt-2 text-xs text-red-700">
              {errors.projectType}
            </p>
          ) : null}
        </div>
      </div>

      <div>
        <label htmlFor={`${formId}-message`} className="text-xs font-medium uppercase tracking-widest text-muted">
          Message
        </label>
        <textarea
          id={`${formId}-message`}
          name="message"
          rows={5}
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? `${formId}-message-error` : undefined}
          className="mt-2 w-full resize-none border-0 border-b border-line bg-transparent py-2 text-ink outline-none focus:border-accent"
        />
        {errors.message ? (
          <p id={`${formId}-message-error`} className="mt-2 text-xs text-red-700">
            {errors.message}
          </p>
        ) : null}
      </div>

      {status === "error" ? (
        <p role="alert" className="text-sm text-red-700">
          Something went wrong sending your message. Please try again, or email us directly.
        </p>
      ) : null}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-medium tracking-wide text-paper transition-colors duration-300 hover:bg-accent-dark disabled:opacity-60"
      >
        {status === "submitting" ? "Sending…" : "Send Message"}
      </button>
    </form>
  );
}
