import Link from "next/link";
import { notFound } from "next/navigation";
import { AnimatedHighlights } from "@/components/services/AnimatedHighlights";
import { RelatedServices } from "@/components/services/RelatedServices";
import { ServiceIntro } from "@/components/services/ServiceIntro";
import { ServiceMasthead } from "@/components/services/ServiceMasthead";
import {
  getCategoryBySlug,
  getDictionary,
  getServiceBySlug,
  isSupportedLang,
} from "@/content";

interface ServiceDetailPageProps {
  params: Promise<{ lang: string; category: string; slug: string }>;
}

export const dynamicParams = false;

export function generateStaticParams() {
  const dictionary = getDictionary("fr");
  return dictionary.services.categories.flatMap((category) =>
    category.services.map((service) => ({
      category: category.slug,
      slug: service.slug,
    })),
  );
}

export default async function ServiceDetailPage({ params }: ServiceDetailPageProps) {
  const { lang, category, slug } = await params;

  if (!isSupportedLang(lang)) {
    notFound();
  }

  const dictionary = getDictionary(lang);
  const categoryData = getCategoryBySlug(dictionary, category);

  if (!categoryData) {
    notFound();
  }

  const service = getServiceBySlug(categoryData, slug);

  if (!service) {
    notFound();
  }

  return (
    <>
      <ServiceMasthead
        lang={lang}
        dictionary={dictionary}
        categoryTitle={categoryData.title}
        serviceTitle={service.title}
      />
      <ServiceIntro service={service} />
      <AnimatedHighlights lang={lang} items={service.highlights} />
      <RelatedServices
        lang={lang}
        dictionary={dictionary}
        category={categoryData}
        currentServiceSlug={service.slug}
      />
      <section className="bg-blue-900 py-12 text-white">
        <div className="tp-container flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
          <h2 className="text-2xl font-semibold uppercase tracking-[0.06em]">
            {dictionary.services.ctaBand.title}
          </h2>
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
