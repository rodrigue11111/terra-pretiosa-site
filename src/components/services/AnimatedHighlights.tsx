"use client";

import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/motion/Reveal";
import type { HighlightItem, Lang } from "@/content/types";
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
  const isRight = index % 2 !== 0;

  return (
    <Reveal x={isRight ? 34 : -34} y={30} delayMs={index * 90}>
      <article
        className={cn(
          "tp-card-lift grid gap-7 rounded-sm border border-blue-200/60 bg-gradient-to-br from-white to-blue-50/70 p-6 sm:p-7 lg:grid-cols-[250px_1fr] lg:items-center",
          isRight ? "lg:ml-12" : "lg:mr-12",
        )}
      >
        <div className="relative mx-auto h-40 w-40 sm:h-44 sm:w-44 lg:h-52 lg:w-52">
          <span className="absolute -inset-3 rounded-full border border-blue-900/10" />
          <span className="absolute -left-3 top-3 h-10 w-10 rounded-full bg-blue-900/15 blur-sm [animation:tpFloat_6s_ease-in-out_infinite]" />
          <div className="h-full w-full overflow-hidden rounded-full ring-4 ring-blue-900/10 transition duration-500 hover:scale-105">
            <Image
              src={item.image}
              alt={item.title}
              width={208}
              height={208}
              className="h-full w-full object-cover"
            />
          </div>
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
    </Reveal>
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

