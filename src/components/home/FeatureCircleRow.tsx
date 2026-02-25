import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/motion/Reveal";
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
  const imageX = reverse ? 36 : -36;
  const textX = reverse ? -24 : 24;

  return (
    <section className="py-12 sm:py-16">
      <div
        className={cn(
          "tp-container grid items-center gap-8 lg:grid-cols-2",
          reverse && "lg:[&>*:first-child]:order-2",
        )}
      >
        <Reveal x={imageX} className="relative mx-auto h-72 w-72 sm:h-80 sm:w-80">
          <div className="absolute -left-5 top-8 h-20 w-20 rounded-full bg-blue-900/10 blur-md [animation:tpFloat_7s_ease-in-out_infinite]" />
          <div className="absolute -right-3 bottom-5 h-16 w-16 rounded-full bg-blue-300/20 blur-sm [animation:tpFloat_6s_ease-in-out_infinite_0.2s]" />
          <div className="relative h-full w-full overflow-hidden rounded-full ring-8 ring-blue-900/10">
            <Image
              src={feature.image}
              alt={feature.title}
              fill
              className="object-cover transition duration-700 hover:scale-105"
              sizes="(max-width: 640px) 288px, 320px"
            />
          </div>
        </Reveal>

        <Reveal x={textX} delayMs={120} className="max-w-xl">
          <h2 className="text-3xl font-semibold uppercase tracking-[0.06em] text-blue-900 sm:text-4xl">
            {feature.title}
          </h2>
          <p className="mt-4 text-base text-slate-700">{feature.text}</p>
          <Link href={feature.ctaHref} className="tp-blue-button tp-card-lift mt-6">
            {feature.ctaLabel}
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
