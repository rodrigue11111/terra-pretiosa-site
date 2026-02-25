import { notFound } from "next/navigation";
import { ContactForm } from "@/components/forms/ContactForm";
import { Reveal } from "@/components/motion/Reveal";
import { getDictionary, isSupportedLang } from "@/content";

interface ContactPageProps {
  params: Promise<{ lang: string }>;
}

export default async function ContactPage({ params }: ContactPageProps) {
  const { lang } = await params;

  if (!isSupportedLang(lang)) {
    notFound();
  }

  const dictionary = getDictionary(lang);

  return (
    <section className="bg-neutral-100 py-10 sm:py-14">
      <div className="tp-container max-w-6xl">
        <Reveal y={14}>
          <h1 className="text-4xl font-semibold text-slate-800 sm:text-5xl">
            {dictionary.contact.formTitle}
          </h1>
          <p className="mt-3 max-w-4xl text-slate-700">{dictionary.contact.intro}</p>
        </Reveal>

        <Reveal y={18} delayMs={80} className="mt-6">
          <ContactForm dictionary={dictionary} />
        </Reveal>

        <Reveal y={16} delayMs={120} className="mt-8">
          <div className="grid gap-4 rounded-sm border border-neutral-200 bg-white p-5 text-sm text-slate-700 md:grid-cols-3">
            <article>
              <p className="tp-heading text-xs text-blue-900">{dictionary.contact.hqTitle}</p>
              <p className="mt-2">{dictionary.contact.hqAddress}</p>
            </article>
            <article>
              <p className="tp-heading text-xs text-blue-900">
                {dictionary.contact.corridorTitle}
              </p>
              <p className="mt-2">{dictionary.contact.corridorCountries.join(", ")}</p>
            </article>
            <article>
              <p>
                <strong>{dictionary.contact.phoneLabel}:</strong>{" "}
                {dictionary.contact.phoneValue}
              </p>
              <p className="mt-2">
                <strong>{dictionary.contact.emailLabel}:</strong>{" "}
                {dictionary.contact.emailValue}
              </p>
            </article>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
