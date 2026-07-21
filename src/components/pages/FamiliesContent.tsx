"use client";

import Link from "next/link";
import { useLang } from "@/lib/i18n";
import { familiesPage } from "@/lib/content";
import { Reveal } from "@/components/Reveal";

export function FamiliesContent() {
  const { lang } = useLang();
  const t = familiesPage[lang];

  return (
    <div className="bg-paper pt-12 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <Reveal>
          <div className="text-center mb-16">
            <span className="chip mb-5">
              <span className="seal w-6 h-6 text-xs" aria-hidden>家</span>
              {lang === "en" ? "Heritage families" : "海外华裔家庭"}
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

        <section className="mb-16">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-bold text-ink mb-8 font-nunito">{t.how.title}</h2>
          </Reveal>
          <Reveal delay={100}>
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <ol className="space-y-5">
                {t.how.steps.map((step, index) => (
                  <li key={index} className="flex items-start">
                    <span className="flex-shrink-0 w-8 h-8 bg-teal text-white rounded-full flex items-center justify-center font-bold mr-4">
                      {index + 1}
                    </span>
                    <span className="text-ink pt-1">{step}</span>
                  </li>
                ))}
              </ol>
            </div>
          </Reveal>
        </section>

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
