"use client";

import Image from "next/image";
import { useEffect, useMemo, useRef, useState } from "react";
import { cn } from "@/lib/cn";

export interface SpotlightItem {
  image: string;
  label: string;
}

interface ScrollSpotlightHeroProps {
  items: SpotlightItem[];
  className?: string;
}

const clamp = (value: number, min: number, max: number) =>
  Math.min(max, Math.max(min, value));

export function ScrollSpotlightHero({ items, className }: ScrollSpotlightHeroProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);
  const [reduceMotion, setReduceMotion] = useState(false);

  const displayItems = useMemo(() => {
    const cleaned = items
      .filter((item) => item.image && item.label)
      .slice(0, 6);

    const deduped: SpotlightItem[] = [];
    const seen = new Set<string>();
    cleaned.forEach((item) => {
      const key = `${item.image}-${item.label}`;
      if (!seen.has(key)) {
        seen.add(key);
        deduped.push(item);
      }
    });

    if (deduped.length === 0) {
      return [];
    }

    const seed = [...deduped];
    while (deduped.length < 3) {
      deduped.push(seed[deduped.length % seed.length]);
    }

    return deduped.slice(0, 3);
  }, [items]);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setReduceMotion(media.matches);
    sync();
    media.addEventListener("change", sync);
    return () => {
      media.removeEventListener("change", sync);
    };
  }, []);

  useEffect(() => {
    if (reduceMotion || displayItems.length === 0) {
      return;
    }

    let rafId = 0;

    const updateProgress = () => {
      if (!sectionRef.current) {
        return;
      }

      const rect = sectionRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      const start = viewportHeight * 0.9;
      const end = -rect.height * 0.2;
      const raw = (start - rect.top) / (start - end);
      setProgress(clamp(raw, 0, 1));
    };

    const requestUpdate = () => {
      if (rafId) {
        return;
      }
      rafId = window.requestAnimationFrame(() => {
        updateProgress();
        rafId = 0;
      });
    };

    updateProgress();
    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);

    return () => {
      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);
      if (rafId) {
        window.cancelAnimationFrame(rafId);
      }
    };
  }, [displayItems.length, reduceMotion]);

  if (displayItems.length === 0) {
    return null;
  }

  const spotlightX = 18 + progress * 62;
  const spotlightY = 50 + Math.sin(progress * Math.PI) * 7;
  const spotlightRadius = 24 + progress * 10;
  const activeIndex = Math.min(
    displayItems.length - 1,
    Math.round(progress * (displayItems.length - 1)),
  );

  return (
    <section className={cn("py-6 sm:py-8", className)}>
      <div ref={sectionRef} className="tp-container">
        <div className="overflow-hidden rounded-sm border border-white/10 bg-neutral-900 shadow-[0_18px_40px_rgba(15,23,42,0.28)]">
          <div className="relative h-[260px] sm:h-[320px] lg:h-[360px]">
            <div className="absolute inset-0 grid grid-cols-1 sm:grid-cols-3">
              {displayItems.map((item, index) => (
                <div key={`${item.label}-base-${index}`} className="relative">
                  <Image
                    src={item.image}
                    alt={item.label}
                    fill
                    className="object-cover grayscale"
                    sizes="(max-width: 640px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-neutral-900/55" />
                </div>
              ))}
            </div>

            <div
              className={cn("absolute inset-0 grid grid-cols-1 sm:grid-cols-3")}
              style={
                reduceMotion
                  ? undefined
                  : {
                      clipPath: `circle(${spotlightRadius}% at ${spotlightX}% ${spotlightY}%)`,
                    }
              }
            >
              {displayItems.map((item, index) => (
                <div key={`${item.label}-color-${index}`} className="relative">
                  <Image
                    src={item.image}
                    alt={item.label}
                    fill
                    className="object-cover transition duration-500"
                    sizes="(max-width: 640px) 100vw, 33vw"
                  />
                </div>
              ))}
            </div>

            <div
              className="pointer-events-none absolute inset-0"
              style={
                reduceMotion
                  ? undefined
                  : {
                      background: `radial-gradient(circle at ${spotlightX}% ${spotlightY}%, rgba(125,211,252,0.35), rgba(59,130,246,0.12) 24%, rgba(0,0,0,0) 44%)`,
                    }
              }
            />
            <div className="tp-ambient-grid pointer-events-none absolute inset-0 opacity-20" />
          </div>

          <div className="flex flex-wrap gap-2 border-t border-white/10 bg-neutral-900/95 px-4 py-3">
            {displayItems.map((item, index) => (
              <span
                key={`${item.label}-${index}`}
                className={cn(
                  "rounded-full border px-3 py-1 text-xs font-medium uppercase tracking-wide transition",
                  index === activeIndex
                    ? "border-blue-300/70 bg-blue-500/20 text-blue-100"
                    : "border-white/25 text-white/70",
                )}
              >
                {item.label}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
