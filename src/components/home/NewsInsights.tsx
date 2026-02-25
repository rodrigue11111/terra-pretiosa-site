import Link from "next/link";
import { Reveal } from "@/components/motion/Reveal";
import type { Dictionary } from "@/content/types";

interface NewsInsightsProps {
  dictionary: Dictionary;
}

export function NewsInsights({ dictionary }: NewsInsightsProps) {
  return (
    <section className="bg-neutral-100 py-16">
      <div className="tp-container">
        <Reveal y={18}>
          <h2 className="tp-heading text-sm text-blue-900">
            {dictionary.home.insights.title}
          </h2>
        </Reveal>
        <div className="mt-6 grid gap-6 lg:grid-cols-[1.2fr_1fr]">
          <Reveal y={26}>
            <article className="tp-card-lift rounded-sm border border-blue-200/60 bg-gradient-to-br from-white to-blue-50/70 p-8">
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
          </Reveal>

          <div className="space-y-4">
            {dictionary.home.insights.items.map((item, index) => (
              <Reveal key={item.title} x={18} y={16} delayMs={index * 90}>
                <article className="tp-card-lift rounded-sm border border-blue-200/60 bg-gradient-to-br from-white to-blue-50/70 p-5">
                  <h4 className="text-lg font-semibold text-blue-900">{item.title}</h4>
                  <p className="mt-2 text-sm text-slate-700">{item.excerpt}</p>
                  <Link
                    href={item.href}
                    className="mt-3 inline-flex text-xs font-semibold uppercase tracking-wide text-blue-800 hover:text-blue-700"
                  >
                    {dictionary.common.readMore}
                  </Link>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

