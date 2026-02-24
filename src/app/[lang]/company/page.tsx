import Image from "next/image";
import { notFound } from "next/navigation";
import { getDictionary, isSupportedLang } from "@/content";

interface CompanyPageProps {
  params: Promise<{ lang: string }>;
}

export default async function CompanyPage({ params }: CompanyPageProps) {
  const { lang } = await params;

  if (!isSupportedLang(lang)) {
    notFound();
  }

  const dictionary = getDictionary(lang);

  return (
    <div className="bg-white">
      <section className="bg-neutral-100 py-16">
        <div className="tp-container grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div id="about">
            <p className="tp-heading text-xs text-blue-900">{dictionary.company.pageTitle}</p>
            <h1 className="mt-4 text-4xl font-semibold uppercase tracking-[0.07em] text-blue-900 sm:text-5xl">
              {dictionary.company.introTitle}
            </h1>
            <div className="mt-8 space-y-5">
              {dictionary.company.introBlocks.map((block) => (
                <article key={block.title}>
                  <h2 className="text-lg font-semibold text-blue-900">{block.title}</h2>
                  <p className="mt-2 text-slate-700">{block.text}</p>
                </article>
              ))}
            </div>
          </div>
          <div className="relative min-h-[320px] overflow-hidden rounded-sm">
            <Image
              src="/placeholders/company-about.svg"
              alt={dictionary.company.introTitle}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 40vw"
            />
          </div>
        </div>
      </section>

      <section id="corridor" className="py-14">
        <div className="tp-container grid gap-6 md:grid-cols-2">
          <article className="rounded-sm border border-neutral-200 bg-white p-6">
            <h2 className="text-2xl font-semibold uppercase tracking-[0.06em] text-blue-900">
              {dictionary.company.corridorTitle}
            </h2>
            <ul className="mt-4 space-y-2 text-slate-700">
              {dictionary.company.corridorCountries.map((country) => (
                <li key={country}>• {country}</li>
              ))}
            </ul>
          </article>
          <article className="rounded-sm border border-neutral-200 bg-neutral-50 p-6">
            <h2 className="text-2xl font-semibold uppercase tracking-[0.06em] text-blue-900">
              {dictionary.company.hqTitle}
            </h2>
            <p className="mt-4 text-slate-700">{dictionary.company.hqAddress}</p>
          </article>
        </div>
      </section>

      <section id="megatrends" className="bg-neutral-100 py-14">
        <div className="tp-container grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="relative min-h-[260px] overflow-hidden rounded-sm">
            <Image
              src="/placeholders/company-megatrends.svg"
              alt={dictionary.company.megatrendsTitle}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 40vw"
            />
          </div>
          <article>
            <h2 className="text-3xl font-semibold uppercase tracking-[0.06em] text-blue-900">
              {dictionary.company.megatrendsTitle}
            </h2>
            <p className="mt-4 text-slate-700">{dictionary.company.megatrendsText}</p>
          </article>
        </div>
      </section>

      <section className="py-14">
        <div className="tp-container">
          <h2 className="text-3xl font-semibold uppercase tracking-[0.06em] text-blue-900">
            {dictionary.company.miningDevTitle}
          </h2>
          <p className="mt-4 max-w-5xl text-slate-700">{dictionary.company.miningDevText}</p>
        </div>
      </section>

      <section id="sustainable" className="bg-neutral-100 py-14">
        <div className="tp-container grid gap-8 lg:grid-cols-2">
          <article>
            <h2 className="text-3xl font-semibold uppercase tracking-[0.06em] text-blue-900">
              {dictionary.company.sustainableTitle}
            </h2>
            <ul className="mt-4 space-y-3 text-slate-700">
              {dictionary.company.sustainableBullets.map((bullet) => (
                <li key={bullet} className="flex items-start gap-2">
                  <span className="mt-1 block h-1.5 w-1.5 rounded-full bg-blue-800" />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          </article>
          <div className="relative min-h-[260px] overflow-hidden rounded-sm">
            <Image
              src="/placeholders/company-sustainable.svg"
              alt={dictionary.company.sustainableTitle}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 40vw"
            />
          </div>
        </div>
      </section>

      <section id="ambitions" className="py-14">
        <div className="tp-container">
          <h2 className="text-3xl font-semibold uppercase tracking-[0.06em] text-blue-900">
            {dictionary.company.ambitionsTitle}
          </h2>
          <ul className="mt-5 grid gap-3 text-slate-700 md:grid-cols-2">
            {dictionary.company.ambitionsBullets.map((bullet) => (
              <li key={bullet} className="rounded-sm border border-neutral-200 bg-white p-4">
                {bullet}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}
