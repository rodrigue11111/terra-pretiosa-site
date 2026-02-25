import { Reveal } from "@/components/motion/Reveal";
import type { ServiceItem } from "@/content/types";

interface ServiceIntroProps {
  service: ServiceItem;
}

export function ServiceIntro({ service }: ServiceIntroProps) {
  return (
    <section className="py-14">
      <div className="tp-container grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <Reveal x={-22} y={20} className="space-y-4">
          {service.paragraphs.map((paragraph) => (
            <p key={paragraph} className="text-base leading-relaxed text-slate-700">
              {paragraph}
            </p>
          ))}
        </Reveal>

        <Reveal delayMs={110} x={22} y={20}>
          <div className="tp-card-lift rounded-sm border border-neutral-200 bg-neutral-50 p-6">
            <h2 className="tp-heading text-xs text-blue-900">Capabilities</h2>
            <ul className="mt-4 space-y-3 text-sm text-slate-700">
              {service.capabilities.map((capability) => (
                <li key={capability} className="flex items-start gap-2">
                  <span className="mt-1 block h-1.5 w-1.5 rounded-full bg-blue-800" />
                  <span>{capability}</span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
