import Link from "next/link";
import { Reveal } from "@/components/motion/Reveal";
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
        <Reveal x={-20} y={22}>
          <div className="tp-soft-panel rounded-sm border border-blue-200/60 bg-gradient-to-br from-white to-blue-50/70 p-8">
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
        </Reveal>

        <Reveal x={20} y={22} delayMs={110}>
          <aside className="space-y-3">
            <div className="relative overflow-hidden rounded-sm bg-neutral-900 p-5 text-white">
              <div className="tp-ambient-grid absolute inset-0 opacity-20" />
              <p className="relative text-xs uppercase tracking-[0.18em] text-blue-200">
                Terra Pretiosa
              </p>
              <p className="relative mt-3 text-xl font-semibold">
                {dictionary.common.takeNextStep}
              </p>
            </div>

            <Link href={`/${lang}/mission`} className="tp-blue-button tp-card-lift w-full">
              {dictionary.common.partnerCta}
            </Link>
          </aside>
        </Reveal>
      </div>
    </section>
  );
}

