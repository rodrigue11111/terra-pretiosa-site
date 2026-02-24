import Image from "next/image";
import Link from "next/link";
import type { FeatureBlock } from "@/content/types";
import { cn } from "@/lib/cn";

interface FeatureCircleRowProps {
  feature: FeatureBlock;
  reverse?: boolean;
}

export function FeatureCircleRow({
  feature,
  reverse = false,
}: FeatureCircleRowProps) {
  return (
    <section className="py-12 sm:py-16">
      <div
        className={cn(
          "tp-container grid items-center gap-8 lg:grid-cols-2",
          reverse && "lg:[&>*:first-child]:order-2",
        )}
      >
        <div className="relative mx-auto h-72 w-72 overflow-hidden rounded-full ring-8 ring-blue-900/10 sm:h-80 sm:w-80">
          <Image
            src={feature.image}
            alt={feature.title}
            fill
            className="object-cover"
            sizes="(max-width: 640px) 288px, 320px"
          />
        </div>
        <div className="max-w-xl">
          <h2 className="text-3xl font-semibold uppercase tracking-[0.06em] text-blue-900 sm:text-4xl">
            {feature.title}
          </h2>
          <p className="mt-4 text-base text-slate-700">{feature.text}</p>
          <Link href={feature.ctaHref} className="tp-blue-button mt-6">
            {feature.ctaLabel}
          </Link>
        </div>
      </div>
    </section>
  );
}
