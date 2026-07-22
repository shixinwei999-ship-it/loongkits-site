"use client";

import Link from "next/link";
import { useLang } from "@/lib/i18n";
import { teachersPage } from "@/lib/content";
import { site } from "@/lib/site";
import { Reveal } from "@/components/Reveal";

export function TeachersContent() {
  const { lang } = useLang();
  const t = teachersPage[lang];

  return (
    <div className="bg-paper pt-12 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <Reveal>
          <div className="text-center mb-16">
            <span className="chip mb-5">
              <span className="seal w-6 h-6 text-xs" aria-hidden>师</span>
              {lang === "en" ? "Classroom ready" : "课堂即用"}
            </span>
            <h1 className="text-4xl font-bold text-ink mb-4 font-nunito">{t.title}</h1>
            <p className="text-xl text-ink-light">{t.subtitle}</p>
          </div>
        </Reveal>

        <section className="mb-16">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-bold text-ink mb-8 font-nunito">{t.why.title}</h2>
          </Reveal>
          <div className="grid md:grid-cols-2 gap-6">
            {t.why.reasons.map((reason, index) => (
              <Reveal key={index} delay={index * 100}>
                <div className="group bg-white rounded-2xl p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md h-full">
                  <div className="text-3xl mb-4 transition-transform duration-300 group-hover:scale-110">
                    {reason.icon}
                  </div>
                  <h3 className="text-lg font-bold text-ink mb-2 font-nunito">{reason.title}</h3>
                  <p className="text-ink-light">{reason.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        <Reveal>
          <section className="mb-16 bg-orange/5 rounded-3xl p-8">
            <h2 className="text-2xl font-bold text-ink mb-4 font-nunito">{t.bulk.title}</h2>
            <p className="text-ink-light mb-6">{t.bulk.desc}</p>
            <a href={`mailto:${site.contactEmail}`} className="btn-accent">
              {t.bulk.cta}
            </a>
          </section>
        </Reveal>

        <Reveal>
          <section className="mb-16 border-t-2 border-teal pt-8">
            <h2 className="text-2xl font-bold text-ink font-nunito">{t.resource.title}</h2>
            <p className="text-ink-light mt-3 max-w-2xl">{t.resource.desc}</p>
            <Link href="/free/zodiac-animals" className="arrow-link text-teal font-bold mt-5 hover:underline">
              {t.resource.cta} <span className="arrow">→</span>
            </Link>
          </section>
        </Reveal>

        <Reveal>
          <div className="text-center">
            <Link href="/kits" className="btn-primary text-lg px-8 py-4">
              {t.cta} <span className="arrow inline-block transition-transform hover:translate-x-1">→</span>
            </Link>
          </div>
        </Reveal>
      </div>
    </div>
  );
}
