"use client";

import Link from "next/link";
import { useLang } from "@/lib/i18n";
import { familiesPage } from "@/lib/content";
import { Reveal } from "@/components/Reveal";
import { IconHome, IconPhone, IconUsers, IconTarget, IconCheck, IconArrowRight } from "@/components/icons";

const reasonIcons = [IconHome, IconPhone, IconUsers, IconTarget];

export function FamiliesContent() {
  const { lang } = useLang();
  const t = familiesPage[lang];

  return (
    <div className="bg-paper">
      {/* HERO */}
      <section className="relative isolate overflow-hidden pt-24 pb-16 sm:pt-28 sm:pb-20 px-4 sm:px-6 lg:px-8">
        <div aria-hidden className="pointer-events-none absolute inset-0">
          <div className="paper-grain absolute inset-0 opacity-40" />
          <div className="absolute -right-20 top-8 h-64 w-64 rounded-full bg-teal/[0.06] blur-3xl" />
        </div>
        <div className="relative max-w-4xl mx-auto">
          <Reveal>
            <p className="font-inter font-semibold uppercase tracking-[0.14em] text-teal text-xs sm:text-sm mb-5">
              {lang === "en" ? "Heritage families" : "海外华裔家庭"}
            </p>
            <h1 className="display-zh text-ink !text-[clamp(2.5rem,6vw,4.5rem)] !leading-[0.98]">{t.title}</h1>
            <p className="text-xl text-ink-light mt-6 max-w-xl leading-relaxed">{t.subtitle}</p>
          </Reveal>
        </div>
      </section>

      {/* WHY - real icons, not emoji */}
      <section className="bg-cream/50 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <Reveal>
            <h2 className="display text-ink !text-3xl sm:!text-4xl mb-10">{t.why.title}</h2>
          </Reveal>
          <div className="grid md:grid-cols-2 gap-5">
            {t.why.reasons.map((reason, index) => {
              const Ic = reasonIcons[index];
              return (
                <Reveal key={index} delay={index * 80}>
                  <div className="group flex gap-5 rounded-xl border border-teal/12 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-teal/30 hover:shadow-[0_14px_30px_-20px_rgb(31_74_56/0.4)]">
                    <span className="shrink-0 flex h-12 w-12 items-center justify-center rounded-xl bg-teal/8 text-teal transition-transform duration-300 group-hover:scale-110">
                      <Ic size={26} />
                    </span>
                    <div>
                      <h3 className="text-lg font-bold text-ink mb-1 font-nunito">{reason.title}</h3>
                      <p className="text-sm text-ink-light leading-relaxed">{reason.desc}</p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* HOW - warm band */}
      <section className="section-warm py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <Reveal>
            <h2 className="display text-ink !text-3xl sm:!text-4xl mb-8">{t.how.title}</h2>
          </Reveal>
          <Reveal delay={80}>
            <div className="rounded-2xl border border-teal/15 bg-white p-7 sm:p-8">
              <ol className="space-y-5">
                {t.how.steps.map((step, index) => (
                  <li key={index} className="flex items-start gap-4">
                    <span className="flex-shrink-0 w-8 h-8 bg-teal text-white rounded-full flex items-center justify-center font-bold text-sm">
                      {index + 1}
                    </span>
                    <span className="text-ink pt-1 leading-relaxed">{step}</span>
                  </li>
                ))}
              </ol>
            </div>
          </Reveal>
          <Reveal delay={150}>
            <div className="mt-8 rounded-xl border-l-4 border-teal bg-teal/5 p-5">
              <h3 className="font-nunito text-lg font-bold text-ink mb-2">{t.resource.title}</h3>
              <p className="text-sm text-ink-light mb-4">{t.resource.desc}</p>
              <Link href="/learn/levels" className="arrow-link text-teal font-bold hover:underline">
                {t.resource.cta} <IconArrowRight size={18} className="arrow" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-paper py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <Reveal>
            <Link href="/kits" className="btn-primary text-lg px-8 py-4">
              {t.cta} <IconArrowRight size={20} />
            </Link>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
