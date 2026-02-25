"use client";

import type { CSSProperties, ReactNode } from "react";
import { useInView } from "@/hooks/useInView";
import { cn } from "@/lib/cn";

interface RevealProps {
  children: ReactNode;
  className?: string;
  delayMs?: number;
  x?: number;
  y?: number;
  once?: boolean;
  threshold?: number;
}

export function Reveal({
  children,
  className,
  delayMs = 0,
  x = 0,
  y = 30,
  once = true,
  threshold = 0.2,
}: RevealProps) {
  const { ref, inView } = useInView<HTMLDivElement>({
    threshold,
    rootMargin: "0px 0px -8% 0px",
    once,
  });

  const style: CSSProperties = {
    transitionDelay: `${delayMs}ms`,
    opacity: inView ? 1 : 0,
    transform: inView ? "translate3d(0,0,0)" : `translate3d(${x}px, ${y}px, 0)`,
  };

  return (
    <div
      ref={ref}
      style={style}
      className={cn(
        "transition-[opacity,transform] duration-700 ease-out motion-reduce:transform-none motion-reduce:opacity-100",
        className,
      )}
    >
      {children}
    </div>
  );
}
