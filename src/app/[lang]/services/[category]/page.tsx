import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getCategoryBySlug, getDictionary, isSupportedLang } from "@/content";

interface ServiceCategoryPageProps {
  params: Promise<{ lang: string; category: string }>;
}

export default async function ServiceCategoryPage({
  params,
}: ServiceCategoryPageProps) {
  const { lang, category } = await params;

  if (!isSupportedLang(lang)) {
    notFound();
  }

  const dictionary = getDictionary(lang);
  const categoryData = getCategoryBySlug(dictionary, category);

  if (!categoryData) {
    notFound();
  }

  return (
    <>
      <section className="bg-neutral-100 py-16">
        <div className="tp-container grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="tp-heading text-xs text-blue-900">{dictionary.nav.services}</p>
            <h1 className="mt-4 text-4xl font-semibold uppercase tracking-[0.07em] text-blue-900 sm:text-5xl">
              {categoryData.title}
            </h1>
            <p className="mt-4 max-w-3xl text-slate-700">{categoryData.summary}</p>
          </div>
          <div className="relative min-h-[260px] overflow-hidden rounded-sm">
            <Image
              src={categoryData.image}
              alt={categoryData.title}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 40vw"
            />
          </div>
        </div>
      </section>

      <section className="py-14">
        <div className="tp-container">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {categoryData.services.map((service) => (
              <article
                key={service.slug}
                className="rounded-sm border border-neutral-200 bg-white p-5"
              >
                <div className="relative mb-4 h-24 w-24 overflow-hidden rounded-full ring-4 ring-blue-900/10">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                    sizes="96px"
                  />
                </div>
                <h2 className="text-lg font-semibold text-blue-900">{service.title}</h2>
                <p className="mt-2 text-sm text-slate-700">{service.excerpt}</p>
                <Link
                  href={`/${lang}/services/${categoryData.slug}/${service.slug}`}
                  className="mt-4 inline-flex text-xs font-semibold uppercase tracking-wide text-blue-800 hover:text-blue-700"
                >
                  {dictionary.common.learnMore}
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {categoryData.faq?.length ? (
        <section className="bg-neutral-100 py-14">
          <div className="tp-container max-w-4xl">
            <h2 className="text-3xl font-semibold uppercase tracking-[0.06em] text-blue-900">
              {dictionary.services.faqTitle}
            </h2>
            <div className="mt-6 space-y-3">
              {categoryData.faq.map((item) => (
                <details
                  key={item.question}
                  className="rounded-sm border border-neutral-200 bg-white p-4"
                >
                  <summary className="cursor-pointer text-sm font-semibold text-blue-900">
                    {item.question}
                  </summary>
                  <p className="mt-2 text-sm text-slate-700">{item.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <section className="bg-blue-900 py-12 text-white">
        <div className="tp-container flex flex-col items-start justify-between gap-4 lg:flex-row lg:items-center">
          <div>
            <h2 className="text-2xl font-semibold uppercase tracking-[0.06em]">
              {dictionary.services.ctaBand.title}
            </h2>
            <p className="mt-2 text-white/80">{dictionary.services.ctaBand.subtitle}</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link href={`/${lang}/mission`} className="tp-outline-button">
              {dictionary.services.ctaBand.primaryCta}
            </Link>
            <Link href={`/${lang}/contact`} className="tp-blue-button bg-white text-blue-900 hover:bg-blue-100">
              {dictionary.services.ctaBand.secondaryCta}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
