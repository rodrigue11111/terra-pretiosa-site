"use client";

import { FormEvent, useMemo, useState } from "react";
import type { Dictionary } from "@/content/types";

interface ContactFormProps {
  dictionary: Dictionary;
}

interface ContactValues {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function ContactForm({ dictionary }: ContactFormProps) {
  const [values, setValues] = useState<ContactValues>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Partial<Record<keyof ContactValues, string>>>(
    {},
  );

  const hasErrors = useMemo(
    () => Object.values(errors).some(Boolean),
    [errors],
  );

  const validate = () => {
    const nextErrors: Partial<Record<keyof ContactValues, string>> = {};

    (Object.keys(values) as Array<keyof ContactValues>).forEach((key) => {
      if (!values[key].trim()) {
        nextErrors[key] = dictionary.contact.formErrors.required;
      }
    });

    if (values.email.trim() && !emailRegex.test(values.email)) {
      nextErrors.email = dictionary.contact.formErrors.email;
    }

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(false);

    if (!validate()) {
      return;
    }

    console.log("Contact form payload:", values);
    setSubmitted(true);
    setValues({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
    setErrors({});
  };

  const fieldClass =
    "w-full rounded-sm border border-neutral-300 bg-white px-4 py-3 text-sm outline-none transition duration-300 focus:-translate-y-0.5 focus:border-blue-700 focus:shadow-[0_8px_18px_rgba(29,78,216,0.16)]";

  return (
    <form
      onSubmit={onSubmit}
      className="tp-card-lift space-y-4 rounded-sm border border-neutral-200 bg-white p-6"
    >
      <div>
        <label className="mb-1 block text-xs font-semibold uppercase tracking-wide text-slate-600">
          {dictionary.contact.formFields.name}
        </label>
        <input
          value={values.name}
          onChange={(event) =>
            setValues((prev) => ({ ...prev, name: event.target.value }))
          }
          className={fieldClass}
        />
        {errors.name ? <p className="mt-1 text-xs text-red-600">{errors.name}</p> : null}
      </div>

      <div>
        <label className="mb-1 block text-xs font-semibold uppercase tracking-wide text-slate-600">
          {dictionary.contact.formFields.email}
        </label>
        <input
          type="email"
          value={values.email}
          onChange={(event) =>
            setValues((prev) => ({ ...prev, email: event.target.value }))
          }
          className={fieldClass}
        />
        {errors.email ? (
          <p className="mt-1 text-xs text-red-600">{errors.email}</p>
        ) : null}
      </div>

      <div>
        <label className="mb-1 block text-xs font-semibold uppercase tracking-wide text-slate-600">
          {dictionary.contact.formFields.subject}
        </label>
        <input
          value={values.subject}
          onChange={(event) =>
            setValues((prev) => ({ ...prev, subject: event.target.value }))
          }
          className={fieldClass}
        />
        {errors.subject ? (
          <p className="mt-1 text-xs text-red-600">{errors.subject}</p>
        ) : null}
      </div>

      <div>
        <label className="mb-1 block text-xs font-semibold uppercase tracking-wide text-slate-600">
          {dictionary.contact.formFields.message}
        </label>
        <textarea
          rows={5}
          value={values.message}
          onChange={(event) =>
            setValues((prev) => ({ ...prev, message: event.target.value }))
          }
          className={fieldClass}
        />
        {errors.message ? (
          <p className="mt-1 text-xs text-red-600">{errors.message}</p>
        ) : null}
      </div>

      <button type="submit" className="tp-blue-button w-full">
        {dictionary.contact.formFields.submit}
      </button>

      {submitted && !hasErrors ? (
        <p className="tp-enter-up rounded-sm border border-emerald-200 bg-emerald-50 px-3 py-2 text-sm text-emerald-800">
          {dictionary.contact.formSuccess}
        </p>
      ) : null}
    </form>
  );
}
