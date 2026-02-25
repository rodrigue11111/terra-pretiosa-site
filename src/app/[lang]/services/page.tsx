import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ServicesSitemapHero } from "@/components/home/ServicesSitemapHero";
import { Reveal } from "@/components/motion/Reveal";
import { ScrollSpotlightHero } from "@/components/services/ScrollSpotlightHero";
import { getDictionary, isSupportedLang } from "@/content";

interface ServicesPageProps {
  params: Promise<{ lang: string }>;
}

export default async function ServicesPage({ params }: ServicesPageProps) {
  const { lang } = await params;

  if (!isSupportedLang(lang)) {
    notFound();
  }

  const dictionary = getDictionary(lang);
  const spotlightItems = dictionary.services.categories.slice(0, 3).map((category) => ({
    image: category.image,
    label: category.title,
  }));

  return (
    <>
      <section className="bg-neutral-100 py-16">
        <div className="tp-container grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <Reveal x={-24} y={20}>
            <div>
              <p className="tp-heading text-xs text-blue-900">{dictionary.nav.services}</p>
              <h1 className="mt-4 text-4xl font-semibold uppercase tracking-[0.07em] text-blue-900 sm:text-5xl">
                {dictionary.services.landingTitle}
              </h1>
              <p className="mt-4 max-w-3xl text-slate-700">
                {dictionary.services.landingIntro}
              </p>
            </div>
          </Reveal>
          <Reveal x={24} y={20} delayMs={80}>
            <div className="tp-card-lift relative min-h-[300px] overflow-hidden rounded-sm">
              <Image
                src="/placeholders/services-landing.svg"
                alt={dictionary.services.landingTitle}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
            </div>
          </Reveal>
        </div>
      </section>

      <ScrollSpotlightHero items={spotlightItems} />

      <section className="py-14">
        <div className="tp-container">
          <Reveal y={18}>
            <h2 className="text-3xl font-semibold uppercase tracking-[0.06em] text-blue-900">
              {dictionary.services.categoriesTitle}
            </h2>
          </Reveal>
          <div className="mt-7 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {dictionary.services.categories.map((category, index) => (
              <Reveal key={category.slug} y={20} delayMs={index * 70}>
                <article className="tp-card-lift rounded-sm border border-neutral-200 bg-white p-6">
                  <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-blue-900 text-xs font-semibold text-white">
                    {category.icon}
                  </div>
                  <h3 className="mt-4 text-xl font-semibold text-blue-900">{category.title}</h3>
                  <p className="mt-3 text-sm text-slate-700">{category.summary}</p>
                  <Link
                    href={`/${lang}/services/${category.slug}`}
                    className="mt-5 inline-flex text-sm font-semibold uppercase tracking-wide text-blue-800 hover:text-blue-700"
                  >
                    {dictionary.common.learnMore}
                  </Link>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <ServicesSitemapHero lang={lang} dictionary={dictionary} />

      <section className="py-14">
        <Reveal y={18}>
          <div className="tp-container tp-soft-panel rounded-sm border border-neutral-200 bg-neutral-100 p-8">
            <p className="tp-heading text-xs text-blue-900">
              {dictionary.services.featuredTitle}
            </p>
            <p className="mt-3 max-w-4xl text-slate-700">{dictionary.services.featuredText}</p>
          </div>
        </Reveal>
      </section>
    </>
  );
}
