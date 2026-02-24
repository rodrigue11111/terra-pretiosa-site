import Image from "next/image";
import Link from "next/link";
import type { Dictionary, Lang } from "@/content/types";

interface ServicesSitemapHeroProps {
  lang: Lang;
  dictionary: Dictionary;
}

export function ServicesSitemapHero({ lang, dictionary }: ServicesSitemapHeroProps) {
  return (
    <section className="relative overflow-hidden bg-neutral-900 py-16 text-white">
      <Image
        src="/placeholders/services-dark-hero.svg"
        alt={dictionary.home.servicesSitemapTitle}
        fill
        className="object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-neutral-950/65" />
      <div className="tp-container relative z-10">
        <p className="tp-heading text-xs text-blue-200">
          {dictionary.home.servicesSitemapTitle}
        </p>
        <h2 className="mt-3 max-w-2xl text-3xl font-semibold uppercase tracking-[0.08em] sm:text-4xl">
          {dictionary.home.servicesSitemapSubtitle}
        </h2>
        <div className="mt-8 grid gap-3 sm:grid-cols-2">
          {dictionary.services.categories.map((category) => (
            <Link
              key={category.slug}
              href={`/${lang}/services/${category.slug}`}
              className="border-l-2 border-blue-400/80 pl-4 text-base text-white/90 transition hover:border-white hover:text-white"
            >
              {category.title}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
