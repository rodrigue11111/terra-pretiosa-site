import Link from "next/link";
import { notFound } from "next/navigation";
import { FeatureCircleRow } from "@/components/home/FeatureCircleRow";
import { HeroCarousel } from "@/components/home/HeroCarousel";
import { NewsInsights } from "@/components/home/NewsInsights";
import { ServiceCardsGrid } from "@/components/home/ServiceCardsGrid";
import { ServicesSitemapHero } from "@/components/home/ServicesSitemapHero";
import { Reveal } from "@/components/motion/Reveal";
import { getDictionary, isSupportedLang } from "@/content";

interface HomePageProps {
  params: Promise<{ lang: string }>;
}

export default async function HomePage({ params }: HomePageProps) {
  const { lang } = await params;

  if (!isSupportedLang(lang)) {
    notFound();
  }

  const dictionary = getDictionary(lang);

  return (
    <>
      <HeroCarousel dictionary={dictionary} />

      {dictionary.home.features.map((feature, index) => (
        <FeatureCircleRow
          key={feature.title}
          feature={feature}
          reverse={index % 2 === 1}
        />
      ))}

      <ServicesSitemapHero lang={lang} dictionary={dictionary} />
      <ServiceCardsGrid lang={lang} dictionary={dictionary} />
      <NewsInsights dictionary={dictionary} />

      <section className="bg-blue-900 py-12 text-white">
        <Reveal y={20}>
          <div className="tp-container flex flex-col items-start justify-between gap-5 lg:flex-row lg:items-center">
            <h2 className="text-2xl font-semibold uppercase tracking-[0.06em] sm:text-3xl">
              {dictionary.home.ctaBand.title}
            </h2>
            <div className="flex flex-wrap gap-3">
              <Link href={`/${lang}/mission`} className="tp-outline-button tp-card-lift">
                {dictionary.home.ctaBand.missionCta}
              </Link>
              <Link
                href={`/${lang}/contact`}
                className="tp-blue-button tp-card-lift bg-white text-blue-900 hover:bg-blue-100"
              >
                {dictionary.home.ctaBand.contactCta}
              </Link>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
