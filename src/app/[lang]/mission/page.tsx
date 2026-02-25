import { notFound } from "next/navigation";
import { MissionForm } from "@/components/forms/MissionForm";
import { Reveal } from "@/components/motion/Reveal";
import { getDictionary, isSupportedLang } from "@/content";

interface MissionPageProps {
  params: Promise<{ lang: string }>;
}

export default async function MissionPage({ params }: MissionPageProps) {
  const { lang } = await params;

  if (!isSupportedLang(lang)) {
    notFound();
  }

  const dictionary = getDictionary(lang);

  return (
    <section className="bg-neutral-100 py-16">
      <div className="tp-container grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <Reveal x={-20} y={18}>
          <div>
            <h1 className="text-4xl font-semibold uppercase tracking-[0.07em] text-blue-900 sm:text-5xl">
              {dictionary.mission.pageTitle}
            </h1>
            <p className="mt-4 text-slate-700">{dictionary.mission.intro}</p>
          </div>
        </Reveal>

        <Reveal x={20} y={18} delayMs={100}>
          <MissionForm dictionary={dictionary} />
        </Reveal>
      </div>
    </section>
  );
}
