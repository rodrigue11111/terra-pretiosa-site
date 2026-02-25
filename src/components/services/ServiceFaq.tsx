import type { FaqItem } from "@/content/types";
import { Reveal } from "@/components/motion/Reveal";

interface ServiceFaqProps {
  title: string;
  items: FaqItem[];
}

export function ServiceFaq({ title, items }: ServiceFaqProps) {
  if (!items.length) {
    return null;
  }

  return (
    <section className="bg-neutral-100 py-14">
      <Reveal y={16}>
        <div className="tp-container max-w-4xl">
          <h2 className="text-3xl font-semibold uppercase tracking-[0.06em] text-blue-900">
            {title}
          </h2>
          <div className="mt-6 space-y-3">
            {items.map((item) => (
              <details
                key={item.question}
                className="tp-card-lift rounded-sm border border-neutral-200 bg-white p-4"
              >
                <summary className="cursor-pointer text-sm font-semibold text-blue-900">
                  {item.question}
                </summary>
                <p className="mt-2 text-sm text-slate-700">{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}

