import Link from "next/link";
import type { Dictionary } from "@/content/types";

interface NewsInsightsProps {
  dictionary: Dictionary;
}

export function NewsInsights({ dictionary }: NewsInsightsProps) {
  return (
    <section className="bg-neutral-100 py-16">
      <div className="tp-container">
        <h2 className="tp-heading text-sm text-blue-900">
          {dictionary.home.insights.title}
        </h2>
        <div className="mt-6 grid gap-6 lg:grid-cols-[1.2fr_1fr]">
          <article className="rounded-sm border border-neutral-200 bg-white p-8">
            <h3 className="text-2xl font-semibold text-blue-900">
              {dictionary.home.insights.featuredTitle}
            </h3>
            <p className="mt-4 text-slate-700">
              {dictionary.home.insights.featuredExcerpt}
            </p>
            <Link
              href={dictionary.home.insights.featuredHref}
              className="mt-6 inline-flex text-sm font-semibold uppercase tracking-wide text-blue-900 hover:text-blue-700"
            >
              {dictionary.common.readMore}
            </Link>
          </article>

          <div className="space-y-4">
            {dictionary.home.insights.items.map((item) => (
              <article
                key={item.title}
                className="rounded-sm border border-neutral-200 bg-white p-5"
              >
                <h4 className="text-lg font-semibold text-blue-900">{item.title}</h4>
                <p className="mt-2 text-sm text-slate-700">{item.excerpt}</p>
                <Link
                  href={item.href}
                  className="mt-3 inline-flex text-xs font-semibold uppercase tracking-wide text-blue-800 hover:text-blue-700"
                >
                  {dictionary.common.readMore}
                </Link>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
