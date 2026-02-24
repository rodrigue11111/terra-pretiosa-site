"use client";

import { FormEvent, useMemo, useState } from "react";
import type { Dictionary } from "@/content/types";

interface MissionFormProps {
  dictionary: Dictionary;
}

interface MissionValues {
  name: string;
  email: string;
  organization: string;
  country: string;
  missionType: string;
  timeline: string;
  budget: string;
  details: string;
}

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function MissionForm({ dictionary }: MissionFormProps) {
  const [values, setValues] = useState<MissionValues>({
    name: "",
    email: "",
    organization: "",
    country: "",
    missionType: "",
    timeline: "",
    budget: "",
    details: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Partial<Record<keyof MissionValues, string>>>(
    {},
  );

  const hasErrors = useMemo(
    () => Object.values(errors).some(Boolean),
    [errors],
  );

  const validate = () => {
    const requiredFields: Array<keyof MissionValues> = [
      "name",
      "email",
      "organization",
      "country",
      "missionType",
      "timeline",
      "details",
    ];

    const nextErrors: Partial<Record<keyof MissionValues, string>> = {};
    requiredFields.forEach((field) => {
      if (!values[field].trim()) {
        nextErrors[field] = dictionary.mission.formErrors.required;
      }
    });

    if (values.email.trim() && !emailRegex.test(values.email)) {
      nextErrors.email = dictionary.mission.formErrors.email;
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

    console.log("Mission form payload:", values);
    setSubmitted(true);
    setValues({
      name: "",
      email: "",
      organization: "",
      country: "",
      missionType: "",
      timeline: "",
      budget: "",
      details: "",
    });
    setErrors({});
  };

  const fieldClass =
    "w-full rounded-sm border border-neutral-300 bg-white px-4 py-3 text-sm outline-none transition focus:border-blue-700";

  return (
    <form onSubmit={onSubmit} className="space-y-4 rounded-sm border border-neutral-200 bg-white p-6">
      <div className="grid gap-4 md:grid-cols-2">
        <div>
          <label className="mb-1 block text-xs font-semibold uppercase tracking-wide text-slate-600">
            {dictionary.mission.formFields.name}
          </label>
          <input
            value={values.name}
            onChange={(event) =>
              setValues((prev) => ({ ...prev, name: event.target.value }))
            }
            className={fieldClass}
          />
          {errors.name ? (
            <p className="mt-1 text-xs text-red-600">{errors.name}</p>
          ) : null}
        </div>

        <div>
          <label className="mb-1 block text-xs font-semibold uppercase tracking-wide text-slate-600">
            {dictionary.mission.formFields.email}
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
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <div>
          <label className="mb-1 block text-xs font-semibold uppercase tracking-wide text-slate-600">
            {dictionary.mission.formFields.organization}
          </label>
          <input
            value={values.organization}
            onChange={(event) =>
              setValues((prev) => ({ ...prev, organization: event.target.value }))
            }
            className={fieldClass}
          />
          {errors.organization ? (
            <p className="mt-1 text-xs text-red-600">{errors.organization}</p>
          ) : null}
        </div>

        <div>
          <label className="mb-1 block text-xs font-semibold uppercase tracking-wide text-slate-600">
            {dictionary.mission.formFields.country}
          </label>
          <input
            value={values.country}
            onChange={(event) =>
              setValues((prev) => ({ ...prev, country: event.target.value }))
            }
            className={fieldClass}
          />
          {errors.country ? (
            <p className="mt-1 text-xs text-red-600">{errors.country}</p>
          ) : null}
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <div>
          <label className="mb-1 block text-xs font-semibold uppercase tracking-wide text-slate-600">
            {dictionary.mission.formFields.missionType}
          </label>
          <select
            value={values.missionType}
            onChange={(event) =>
              setValues((prev) => ({ ...prev, missionType: event.target.value }))
            }
            className={fieldClass}
          >
            <option value="">--</option>
            {dictionary.mission.missionTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
          {errors.missionType ? (
            <p className="mt-1 text-xs text-red-600">{errors.missionType}</p>
          ) : null}
        </div>

        <div>
          <label className="mb-1 block text-xs font-semibold uppercase tracking-wide text-slate-600">
            {dictionary.mission.formFields.timeline}
          </label>
          <input
            value={values.timeline}
            onChange={(event) =>
              setValues((prev) => ({ ...prev, timeline: event.target.value }))
            }
            className={fieldClass}
          />
          {errors.timeline ? (
            <p className="mt-1 text-xs text-red-600">{errors.timeline}</p>
          ) : null}
        </div>
      </div>

      <div>
        <label className="mb-1 block text-xs font-semibold uppercase tracking-wide text-slate-600">
          {dictionary.mission.formFields.budget}
        </label>
        <input
          value={values.budget}
          onChange={(event) =>
            setValues((prev) => ({ ...prev, budget: event.target.value }))
          }
          className={fieldClass}
        />
      </div>

      <div>
        <label className="mb-1 block text-xs font-semibold uppercase tracking-wide text-slate-600">
          {dictionary.mission.formFields.details}
        </label>
        <textarea
          rows={5}
          value={values.details}
          onChange={(event) =>
            setValues((prev) => ({ ...prev, details: event.target.value }))
          }
          className={fieldClass}
        />
        {errors.details ? (
          <p className="mt-1 text-xs text-red-600">{errors.details}</p>
        ) : null}
      </div>

      <button type="submit" className="tp-blue-button w-full">
        {dictionary.mission.formFields.submit}
      </button>

      {submitted && !hasErrors ? (
        <p className="rounded-sm border border-emerald-200 bg-emerald-50 px-3 py-2 text-sm text-emerald-800">
          {dictionary.mission.formSuccess}
        </p>
      ) : null}
    </form>
  );
}
