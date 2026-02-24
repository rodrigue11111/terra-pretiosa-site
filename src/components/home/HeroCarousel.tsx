"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import type { Dictionary } from "@/content/types";
import { cn } from "@/lib/cn";

interface HeroCarouselProps {
  dictionary: Dictionary;
}

export function HeroCarousel({ dictionary }: HeroCarouselProps) {
  const slides = dictionary.home.hero;
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 6500);

    return () => {
      window.clearInterval(timer);
    };
  }, [slides.length]);

  const nextSlide = () => setIndex((prev) => (prev + 1) % slides.length);
  const prevSlide = () =>
    setIndex((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <section className="relative h-[78vh] min-h-[560px] overflow-hidden bg-neutral-900 text-white">
      {slides.map((slide, slideIndex) => (
        <div
          key={slide.title}
          className={cn(
            "absolute inset-0 transition-opacity duration-700",
            slideIndex === index ? "opacity-100" : "pointer-events-none opacity-0",
          )}
        >
          <Image
            src={slide.image}
            alt={slide.title}
            fill
            priority={slideIndex === 0}
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-black/20" />
          <div className="tp-container relative flex h-full items-center">
            <div className="max-w-3xl">
              <p className="tp-heading mb-4 text-sm text-blue-200">{dictionary.siteName}</p>
              <h1 className="text-4xl font-semibold uppercase leading-tight tracking-[0.08em] sm:text-5xl lg:text-6xl">
                {slide.title}
              </h1>
              <p className="mt-5 max-w-2xl text-base text-white/85 sm:text-lg">
                {slide.subtitle}
              </p>
              <Link href={slide.ctaHref} className="tp-blue-button mt-8">
                {slide.ctaLabel}
              </Link>
            </div>
          </div>
        </div>
      ))}

      <div className="tp-container absolute bottom-7 left-1/2 flex w-full -translate-x-1/2 items-center justify-between">
        <div className="flex gap-2">
          {slides.map((slide, dotIndex) => (
            <button
              key={`${slide.title}-${dotIndex}`}
              type="button"
              onClick={() => setIndex(dotIndex)}
              className={cn(
                "h-2.5 w-8 rounded-full transition",
                dotIndex === index ? "bg-white" : "bg-white/40 hover:bg-white/70",
              )}
              aria-label={`Slide ${dotIndex + 1}`}
            />
          ))}
        </div>
        <div className="flex gap-2">
          <button
            type="button"
            onClick={prevSlide}
            className="h-10 w-10 rounded-full border border-white/60 text-sm transition hover:bg-white/10"
            aria-label="Previous slide"
          >
            ←
          </button>
          <button
            type="button"
            onClick={nextSlide}
            className="h-10 w-10 rounded-full border border-white/60 text-sm transition hover:bg-white/10"
            aria-label="Next slide"
          >
            →
          </button>
        </div>
      </div>
    </section>
  );
}
