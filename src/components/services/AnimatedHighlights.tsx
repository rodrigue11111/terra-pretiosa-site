"use client";

import Image from "next/image";
import Link from "next/link";
import type { HighlightItem, Lang } from "@/content/types";
import { useInView } from "@/hooks/useInView";
import { cn } from "@/lib/cn";

interface AnimatedHighlightsProps {
  lang: Lang;
  items: HighlightItem[];
}

function HighlightCard({
  item,
  index,
}: {
  item: HighlightItem;
  index: number;
}) {
  const { ref, inView } = useInView<HTMLDivElement>({
    threshold: 0.3,
    rootMargin: "0px 0px -10% 0px",
  });
  const isRight = index % 2 !== 0;

  return (
    <article
      ref={ref}
      className={cn(
        "grid gap-6 rounded-sm border border-neutral-200 bg-white p-6 transition-all duration-700 lg:grid-cols-[180px_1fr]",
        isRight ? "lg:translate-x-10" : "lg:-translate-x-10",
        inView ? "translate-x-0 opacity-100" : "translate-y-10 opacity-0",
      )}
      style={{ transitionDelay: `${index * 120}ms` }}
    >
      <div className="mx-auto h-36 w-36 overflow-hidden rounded-full ring-4 ring-blue-900/10 transition duration-500 hover:scale-105">
        <Image
          src={item.image}
          alt={item.title}
          width={144}
          height={144}
          className="h-full w-full object-cover"
        />
      </div>
      <div>
        <h3 className="text-2xl font-semibold text-blue-900">{item.title}</h3>
        <p className="mt-3 text-slate-700">{item.text}</p>
        <Link
          href={item.ctaHref}
          className="mt-4 inline-flex text-sm font-semibold uppercase tracking-wide text-blue-800 transition hover:text-blue-700"
        >
          {item.ctaLabel}
        </Link>
      </div>
    </article>
  );
}

export function AnimatedHighlights({ lang, items }: AnimatedHighlightsProps) {
  return (
    <section className="bg-neutral-100 py-14">
      <div className="tp-container">
        <div className="space-y-6">
          {items.slice(0, 6).map((item, index) => (
            <HighlightCard key={`${lang}-${item.title}`} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
