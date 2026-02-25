import Link from "next/link";
import type { Dictionary, Lang } from "@/content/types";

interface FooterProps {
  lang: Lang;
  dictionary: Dictionary;
}

export function Footer({ lang, dictionary }: FooterProps) {
  return (
    <footer className="relative overflow-hidden bg-neutral-900 text-white">
      <div className="tp-ambient-grid absolute inset-0 opacity-20" />
      <div className="tp-container py-12">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
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

          {dictionary.footer.columns.map((column) => (
            <div key={column.title}>
              <p className="tp-heading text-xs text-blue-200">{column.title}</p>
              <div className="mt-4 space-y-2">
                {column.links.map((link) => (
                  <Link
                    key={`${column.title}-${link.href}`}
                    href={link.href}
                    className="block text-sm text-white/80 transition hover:translate-x-1 hover:text-white"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-col items-start justify-between gap-3 border-t border-white/10 pt-6 text-xs text-white/60 sm:flex-row sm:items-center">
          <p>{dictionary.footer.legal}</p>
          <div className="flex gap-4">
            {dictionary.footer.socials.map((social) => (
              <a
                key={social}
                href="#"
                className="transition hover:text-white"
                aria-label={social}
              >
                {social}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
