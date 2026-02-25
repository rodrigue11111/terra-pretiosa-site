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
    <section className="bg-neutral-100 py-16">
      <div className="tp-container grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
        <Reveal x={-20} y={18}>
          <div className="space-y-6">
            <div>
              <h1 className="text-4xl font-semibold uppercase tracking-[0.07em] text-blue-900 sm:text-5xl">
                {dictionary.contact.pageTitle}
              </h1>
              <p className="mt-4 text-slate-700">{dictionary.contact.intro}</p>
            </div>

            <article className="tp-card-lift rounded-sm border border-neutral-200 bg-white p-5">
              <h2 className="tp-heading text-xs text-blue-900">
                {dictionary.contact.hqTitle}
              </h2>
              <p className="mt-3 text-slate-700">{dictionary.contact.hqAddress}</p>
            </article>

            <article className="tp-card-lift rounded-sm border border-neutral-200 bg-white p-5">
              <h2 className="tp-heading text-xs text-blue-900">
                {dictionary.contact.corridorTitle}
              </h2>
              <ul className="mt-3 grid gap-2 text-slate-700 sm:grid-cols-2">
                {dictionary.contact.corridorCountries.map((country) => (
                  <li key={country}>{country}</li>
                ))}
              </ul>
            </article>

            <article className="tp-card-lift rounded-sm border border-neutral-200 bg-white p-5 text-sm text-slate-700">
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

        <Reveal x={20} y={18} delayMs={100}>
          <div>
            <h2 className="mb-4 text-xl font-semibold text-blue-900">
              {dictionary.contact.formTitle}
            </h2>
            <ContactForm dictionary={dictionary} />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
