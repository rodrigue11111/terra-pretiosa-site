import Link from "next/link";
import type { Dictionary, Lang } from "@/content/types";

interface ServiceMastheadProps {
  lang: Lang;
  dictionary: Dictionary;
  categoryTitle: string;
  serviceTitle: string;
}

export function ServiceMasthead({
  lang,
  dictionary,
  categoryTitle,
  serviceTitle,
}: ServiceMastheadProps) {
  return (
    <section className="bg-neutral-100 py-10">
      <div className="tp-container grid gap-6 lg:grid-cols-[1fr_360px]">
        <div className="rounded-sm bg-white p-8">
          <p className="text-xs uppercase tracking-[0.18em] text-blue-800">
            <Link href={`/${lang}`} className="hover:text-blue-600">
              {dictionary.common.breadcrumbs.home}
            </Link>{" "}
            /{" "}
            <Link href={`/${lang}/services`} className="hover:text-blue-600">
              {dictionary.common.breadcrumbs.services}
            </Link>{" "}
            / <span>{categoryTitle}</span>
          </p>
          <h1 className="mt-4 text-4xl font-semibold uppercase leading-tight tracking-[0.06em] text-blue-900 sm:text-5xl">
            {serviceTitle}
          </h1>
        </div>

        <aside className="space-y-3">
          <div className="rounded-sm bg-neutral-900 p-5 text-white">
            <p className="text-xs uppercase tracking-[0.18em] text-blue-200">
              Terra Pretiosa
            </p>
            <p className="mt-3 text-xl font-semibold">{dictionary.common.takeNextStep}</p>
          </div>

          <Link href={`/${lang}/mission`} className="tp-blue-button w-full">
            {dictionary.common.partnerCta}
          </Link>

          <div className="rounded-sm border border-neutral-300 bg-white p-5">
            <p className="text-sm text-slate-700">{dictionary.common.contactUs}</p>
            <Link
              href={`/${lang}/contact`}
              className="mt-3 inline-flex text-sm font-semibold uppercase tracking-wide text-blue-900 hover:text-blue-700"
            >
              {dictionary.nav.contact}
            </Link>
          </div>
        </aside>
      </div>
    </section>
  );
}
