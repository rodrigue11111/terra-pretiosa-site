import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/motion/Reveal";
import type { Dictionary, Lang } from "@/content/types";

interface ServiceCardsGridProps {
  lang: Lang;
  dictionary: Dictionary;
}

export function ServiceCardsGrid({ lang, dictionary }: ServiceCardsGridProps) {
  const cards = dictionary.services.categories
    .flatMap((category) =>
      category.services.slice(0, 2).map((service) => ({
        ...service,
        categorySlug: category.slug,
      })),
    )
    .slice(0, 6);

  return (
    <section className="py-16">
      <div className="tp-container">
        <Reveal y={24}>
          <h2 className="text-3xl font-semibold uppercase tracking-[0.06em] text-blue-900">
            {dictionary.home.serviceGridTitle}
          </h2>
          <p className="mt-3 max-w-3xl text-slate-700">
            {dictionary.home.serviceGridIntro}
          </p>
        </Reveal>
        <div className="mt-7 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {cards.map((card, index) => (
            <Reveal key={card.slug} y={24} delayMs={index * 90}>
              <article className="tp-card-lift group relative h-72 overflow-hidden rounded-sm">
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-5 text-white">
                  <h3 className="text-xl font-semibold">{card.title}</h3>
                  <p className="mt-2 line-clamp-2 text-sm text-white/80">{card.excerpt}</p>
                  <Link
                    href={`/${lang}/services/${card.categorySlug}/${card.slug}`}
                    className="mt-4 inline-flex text-xs font-semibold uppercase tracking-wide text-blue-200 transition hover:text-white"
                  >
                    {dictionary.common.learnMore}
                  </Link>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
