import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getDictionary, isSupportedLang } from "@/content";

interface TeamPageProps {
  params: Promise<{ lang: string }>;
}

export default async function TeamPage({ params }: TeamPageProps) {
  const { lang } = await params;

  if (!isSupportedLang(lang)) {
    notFound();
  }

  const dictionary = getDictionary(lang);

  return (
    <section className="bg-neutral-100 py-16">
      <div className="tp-container">
        <h1 className="text-4xl font-semibold uppercase tracking-[0.07em] text-blue-900 sm:text-5xl">
          {dictionary.team.pageTitle}
        </h1>
        <p className="mt-4 max-w-4xl text-slate-700">{dictionary.team.intro}</p>
        <p className="mt-3 rounded-sm border border-amber-200 bg-amber-50 px-3 py-2 text-sm text-amber-800">
          {dictionary.team.note}
        </p>

        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {dictionary.team.members.map((member) => (
            <article
              key={member.name}
              className="rounded-sm border border-neutral-200 bg-white p-6"
            >
              <div className="relative h-24 w-24 overflow-hidden rounded-full ring-4 ring-blue-900/10">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover"
                  sizes="96px"
                />
              </div>
              <h2 className="mt-4 text-lg font-semibold text-blue-900">{member.name}</h2>
              <p className="mt-1 text-sm font-medium text-slate-600">{member.role}</p>
              <p className="mt-3 text-sm text-slate-700">{member.bio}</p>
              <Link
                href="#"
                className="mt-4 inline-flex text-xs font-semibold uppercase tracking-wide text-blue-800 hover:text-blue-700"
              >
                {dictionary.team.cvLabel}
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
