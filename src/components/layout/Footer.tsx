import Link from "next/link";
import type { Dictionary, Lang } from "@/content/types";

interface FooterProps {
  lang: Lang;
  dictionary: Dictionary;
}

export function Footer({ lang, dictionary }: FooterProps) {
  return (
    <footer className="relative overflow-hidden bg-neutral-900 text-white">
      <div className="tp-ambient-grid pointer-events-none absolute inset-0 opacity-20" />
      <div className="tp-container relative z-10 py-14">
        <div className="grid gap-10 lg:grid-cols-[220px_1fr]">
          <div className="space-y-5">
            <Link
              href={`/${lang}`}
              className="inline-flex h-20 w-20 items-center justify-center rounded-full bg-blue-800 text-lg font-semibold uppercase tracking-[0.16em] text-white ring-2 ring-white/20 transition hover:scale-105 hover:bg-blue-700"
            >
              TP
            </Link>
            <div>
              <p className="tp-heading text-sm text-blue-200">{dictionary.siteName}</p>
              <p className="mt-4 text-sm text-white/75">
                438 N Frederick Ave
                <br />
                Gaithersburg, MD 20877
              </p>
              <Link
                href={`/${lang}/mission`}
                className="mt-5 inline-flex text-sm font-semibold uppercase tracking-wide text-blue-200 transition hover:text-white"
              >
                {dictionary.nav.mission}
              </Link>
            </div>
          </div>

          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
            {dictionary.footer.columns.map((column, columnIndex) => (
              <div key={`footer-col-${columnIndex}`} className="space-y-7">
                {column.groups.map((group) => (
                  <div key={`${columnIndex}-${group.title}`}>
                    <p className="text-[1.02rem] font-semibold text-white">{group.title}</p>
                    <div className="mt-3 space-y-2">
                      {group.links.map((link) => (
                        <Link
                          key={`${group.title}-${link.href}`}
                          href={link.href}
                          className="block text-sm text-white/80 underline-offset-2 transition hover:translate-x-1 hover:text-white hover:underline"
                        >
                          {link.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 grid gap-6 border-t border-white/10 pt-6 text-xs text-white/60 lg:grid-cols-[1fr_auto_auto] lg:items-center">
          <p>{dictionary.footer.legal}</p>

          <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
            <span className="font-semibold uppercase tracking-wide text-blue-200">
              {dictionary.footer.quickLinksTitle}
            </span>
            {dictionary.footer.quickLinks.map((link) => (
              <Link
                key={`quick-${link.href}`}
                href={link.href}
                className="text-white/70 transition hover:text-white"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="flex gap-4 lg:justify-end">
            {dictionary.footer.socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                className="text-white/70 transition hover:text-white"
                aria-label={social.label}
              >
                {social.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
