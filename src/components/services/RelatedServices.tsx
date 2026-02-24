import Image from "next/image";
import Link from "next/link";
import type { Dictionary, Lang, ServiceCategory, ServiceItem } from "@/content/types";

interface RelatedServicesProps {
  lang: Lang;
  dictionary: Dictionary;
  category: ServiceCategory;
  currentServiceSlug: string;
}

export function RelatedServices({
  lang,
  dictionary,
  category,
  currentServiceSlug,
}: RelatedServicesProps) {
  const related: ServiceItem[] = category.services
    .filter((service) => service.slug !== currentServiceSlug)
    .slice(0, 3);

  if (related.length === 0) {
    return null;
  }

  return (
    <section className="py-14">
      <div className="tp-container">
        <h2 className="text-3xl font-semibold uppercase tracking-[0.06em] text-blue-900">
          {dictionary.services.relatedTitle}
        </h2>
        <div className="mt-6 grid gap-5 md:grid-cols-3">
          {related.map((service) => (
            <article
              key={service.slug}
              className="overflow-hidden rounded-sm border border-neutral-200 bg-white"
            >
              <div className="relative h-44">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="p-5">
                <h3 className="text-lg font-semibold text-blue-900">{service.title}</h3>
                <p className="mt-2 text-sm text-slate-700">{service.excerpt}</p>
                <Link
                  href={`/${lang}/services/${category.slug}/${service.slug}`}
                  className="mt-4 inline-flex text-sm font-semibold uppercase tracking-wide text-blue-800 hover:text-blue-700"
                >
                  {dictionary.common.learnMore}
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
