"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useMemo, useRef, useState } from "react";
import { MegaMenu } from "@/components/layout/MegaMenu";
import { SearchOverlay } from "@/components/layout/SearchOverlay";
import { megaMenuCategoryOrder } from "@/content/nav";
import type { Dictionary, Lang } from "@/content/types";
import { useOnClickOutside } from "@/hooks/useOnClickOutside";
import { cn } from "@/lib/cn";

interface NavbarProps {
  lang: Lang;
  dictionary: Dictionary;
}

export function Navbar({ lang, dictionary }: NavbarProps) {
  const pathname = usePathname();
  const rootRef = useRef<HTMLDivElement>(null);
  const [openMenu, setOpenMenu] = useState<"services" | "company" | null>(null);
  const [searchOpen, setSearchOpen] = useState(false);
  const [activeCategorySlug, setActiveCategorySlug] = useState<string>(
    megaMenuCategoryOrder[0],
  );

  const altLang: Lang = lang === "fr" ? "en" : "fr";

  const switchHref = useMemo(() => {
    if (!pathname) {
      return `/${altLang}`;
    }

    if (/^\/(fr|en)(\/|$)/.test(pathname)) {
      return pathname.replace(/^\/(fr|en)/, `/${altLang}`);
    }

    return `/${altLang}${pathname}`;
  }, [altLang, pathname]);

  useOnClickOutside(
    rootRef,
    () => {
      setOpenMenu(null);
    },
    Boolean(openMenu),
  );

  useEffect(() => {
    setOpenMenu(null);
    setSearchOpen(false);
  }, [pathname]);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpenMenu(null);
        setSearchOpen(false);
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
    };
  }, []);

  useEffect(() => {
    const shouldLockScroll = Boolean(openMenu) || searchOpen;
    document.body.style.overflow = shouldLockScroll ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [openMenu, searchOpen]);

  return (
    <div ref={rootRef} className="fixed inset-x-0 top-0 z-50">
      <header className="border-b border-blue-500/30 bg-blue-900 text-white">
        <div className="tp-container flex h-14 items-center gap-3">
          <Link
            href={`/${lang}`}
            className="flex shrink-0 items-center gap-2 text-sm font-semibold uppercase tracking-[0.14em]"
          >
            <span className="inline-block h-6 w-6 rounded-full border border-white/70 bg-blue-800" />
            {dictionary.logoLabel}
          </Link>

          <nav className="mx-auto hidden items-center gap-4 lg:flex">
            <button
              type="button"
              className={cn(
                "px-3 py-1 text-sm font-medium transition",
                openMenu === "services" ? "text-blue-200" : "hover:text-blue-200",
              )}
              onClick={() =>
                setOpenMenu((prev) => (prev === "services" ? null : "services"))
              }
            >
              {dictionary.nav.services}
            </button>
            <button
              type="button"
              className={cn(
                "px-3 py-1 text-sm font-medium transition",
                openMenu === "company" ? "text-blue-200" : "hover:text-blue-200",
              )}
              onClick={() =>
                setOpenMenu((prev) => (prev === "company" ? null : "company"))
              }
            >
              {dictionary.nav.company}
            </button>
            <Link href={`/${lang}/team`} className="px-3 py-1 text-sm hover:text-blue-200">
              {dictionary.nav.team}
            </Link>
            <Link
              href={`/${lang}/contact`}
              className="px-3 py-1 text-sm hover:text-blue-200"
            >
              {dictionary.nav.contact}
            </Link>
          </nav>

          <div className="ml-auto flex items-center gap-4 text-xs uppercase tracking-wide">
            <button
              type="button"
              onClick={() => setSearchOpen(true)}
              className="transition hover:text-blue-200"
            >
              {dictionary.nav.search}
            </button>
            <Link href={switchHref} className="transition hover:text-blue-200">
              {altLang.toUpperCase()}
            </Link>
            <Link href="#" className="hidden transition hover:text-blue-200 sm:inline">
              {dictionary.nav.login}
            </Link>
          </div>
        </div>

        <div className="tp-container flex h-10 items-center justify-start gap-4 border-t border-blue-700/60 text-xs uppercase tracking-wide lg:hidden">
          <button
            type="button"
            className="transition hover:text-blue-200"
            onClick={() =>
              setOpenMenu((prev) => (prev === "services" ? null : "services"))
            }
          >
            {dictionary.nav.services}
          </button>
          <button
            type="button"
            className="transition hover:text-blue-200"
            onClick={() =>
              setOpenMenu((prev) => (prev === "company" ? null : "company"))
            }
          >
            {dictionary.nav.company}
          </button>
          <Link href={`/${lang}/team`} className="transition hover:text-blue-200">
            {dictionary.nav.team}
          </Link>
          <Link href={`/${lang}/contact`} className="transition hover:text-blue-200">
            {dictionary.nav.contact}
          </Link>
        </div>
      </header>

      <MegaMenu
        mode={openMenu}
        lang={lang}
        dictionary={dictionary}
        activeCategorySlug={activeCategorySlug}
        onCategoryChange={setActiveCategorySlug}
        onClose={() => setOpenMenu(null)}
      />

      <SearchOverlay
        isOpen={searchOpen}
        lang={lang}
        dictionary={dictionary}
        onClose={() => setSearchOpen(false)}
      />
    </div>
  );
}
