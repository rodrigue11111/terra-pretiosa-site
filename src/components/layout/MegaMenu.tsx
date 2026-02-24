"use client";

import Image from "next/image";
import Link from "next/link";
import { companyMenuAnchors, megaMenuTileImages } from "@/content/nav";
import type { Dictionary, Lang, ServiceCategory } from "@/content/types";
import { cn } from "@/lib/cn";

interface MegaMenuProps {
  mode: "services" | "company" | null;
  lang: Lang;
  dictionary: Dictionary;
  activeCategorySlug: string;
  onCategoryChange: (slug: string) => void;
  onClose: () => void;
}

export function MegaMenu({
  mode,
  lang,
  dictionary,
  activeCategorySlug,
  onCategoryChange,
  onClose,
}: MegaMenuProps) {
  if (!mode) {
    return null;
  }

  const categories = dictionary.services.categories;
  const activeCategory =
    categories.find((category) => category.slug === activeCategorySlug) ??
    categories[0];

  if (mode === "company") {
    const companyLinks = [
      {
        label: dictionary.nav.companyLinks.about,
        href: `/${lang}/company#about`,
      },
      {
        label: dictionary.nav.companyLinks.megatrends,
        href: `/${lang}/company#megatrends`,
      },
      {
        label: dictionary.nav.companyLinks.sustainable,
        href: `/${lang}/company#sustainable`,
      },
      {
        label: dictionary.nav.companyLinks.ambitions,
        href: `/${lang}/company#ambitions`,
      },
      {
        label: dictionary.nav.companyLinks.contact,
        href: `/${lang}/contact`,
      },
    ];

    return (
      <div className="absolute inset-x-0 top-full z-40 border-t border-white/10 bg-neutral-900 shadow-2xl">
        <div className="tp-container py-8">
          <p className="mb-6 text-xs font-semibold uppercase tracking-[0.2em] text-blue-200">
            {dictionary.nav.companyMenu}
          </p>
          <div className="space-y-4">
            {companyLinks.map((link, index) => (
              <Link
                key={`${link.href}-${index}`}
                href={link.href}
                className="block text-xl font-medium text-white transition hover:text-blue-200"
                onClick={onClose}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="absolute inset-x-0 top-full z-40 border-t border-white/10 bg-neutral-900 shadow-2xl">
      <div className="tp-container grid gap-8 py-8 md:grid-cols-[280px_1fr]">
        <div className="space-y-2">
          {categories.map((category: ServiceCategory) => (
            <button
              key={category.slug}
              type="button"
              className={cn(
                "w-full rounded-sm px-4 py-3 text-left text-sm font-semibold uppercase tracking-wide transition",
                category.slug === activeCategory.slug
                  ? "bg-blue-900 text-white"
                  : "text-blue-100 hover:bg-white/10 hover:text-white",
              )}
              onMouseEnter={() => onCategoryChange(category.slug)}
              onFocus={() => onCategoryChange(category.slug)}
              onClick={() => onCategoryChange(category.slug)}
            >
              {category.title}
            </button>
          ))}
        </div>
        <div>
          <p className="mb-5 text-xs uppercase tracking-[0.22em] text-blue-200">
            {activeCategory.title}
          </p>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
            {activeCategory.services.slice(0, 6).map((service, index) => (
              <Link
                key={service.slug}
                href={`/${lang}/services/${activeCategory.slug}/${service.slug}`}
                className="group flex items-center gap-3 rounded-sm border border-white/10 bg-white/5 p-2 transition hover:bg-white/10"
                onClick={onClose}
              >
                <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-full ring-1 ring-white/20">
                  <Image
                    src={
                      megaMenuTileImages[activeCategory.slug]?.[index] ??
                      service.image
                    }
                    alt={service.title}
                    fill
                    className="object-cover transition duration-300 group-hover:scale-105"
                    sizes="64px"
                  />
                </div>
                <span className="text-sm leading-tight text-white">
                  {service.title}
                </span>
              </Link>
            ))}
          </div>
          <div className="mt-6">
            <Link
              href={`/${lang}/services/${activeCategory.slug}`}
              className="text-sm font-semibold uppercase tracking-wide text-blue-200 transition hover:text-white"
              onClick={onClose}
            >
              {dictionary.common.learnMore}
            </Link>
          </div>
        </div>
      </div>
      <div className="sr-only">
        {companyMenuAnchors.map((anchor) => anchor.anchor).join(" ")}
      </div>
    </div>
  );
}
