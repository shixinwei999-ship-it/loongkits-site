"use client";

import { useLang } from "@/lib/i18n";
import { aboutPage } from "@/lib/content";
import { site } from "@/lib/site";
import { Reveal } from "@/components/Reveal";
import { IconHeart, IconSparkles, IconGlobe2, IconSprout, IconArrowRight } from "@/components/icons";

const valueIcons = [IconHeart, IconSparkles, IconGlobe2, IconSprout];

export function AboutContent() {
  const { lang } = useLang();
  const t = aboutPage[lang];

  return (
    <div className="bg-paper">
      {/* HERO */}
      <section className="relative isolate overflow-hidden pt-24 pb-16 sm:pt-28 sm:pb-20 px-4 sm:px-6 lg:px-8">
        <div aria-hidden className="pointer-events-none absolute inset-0">
          <div className="paper-grain absolute inset-0 opacity-40" />
          <div className="absolute right-[10%] top-10 h-72 w-72 rounded-full bg-[#b3121f]/6 blur-3xl" />
        </div>
        <div className="relative max-w-4xl mx-auto">
          <Reveal>
            <span className="seal w-10 h-10 text-lg mb-6 inline-flex" aria-hidden>龙</span>
            <h1 className="display-zh text-ink !text-[clamp(2.5rem,6vw,4.5rem)] !leading-[0.98]">{t.title}</h1>
          </Reveal>
        </div>
      </section>

      {/* STORY */}
      <section className="bg-cream/50 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <Reveal>
            <h2 className="display text-ink !text-3xl sm:!text-4xl mb-6">{t.story.title}</h2>
            <p className="text-lg text-ink/85 leading-relaxed max-w-2xl">{t.story.text}</p>
          </Reveal>
        </div>
      </section>

      {/* MISSION - teal band */}
      <section className="section-teal py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <Reveal>
            <h2 className="display !text-white !text-3xl sm:!text-4xl mb-6">{t.mission.title}</h2>
            <p className="text-lg text-white/80 leading-relaxed max-w-2xl">{t.mission.text}</p>
          </Reveal>
        </div>
      </section>

      {/* VALUES */}
      <section className="section-warm py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <Reveal>
            <h2 className="display text-ink !text-3xl sm:!text-4xl mb-10">{t.values.title}</h2>
          </Reveal>
          <div className="grid md:grid-cols-2 gap-5">
            {t.values.items.map((item, index) => {
              const Ic = valueIcons[index];
              return (
                <Reveal key={index} delay={index * 80}>
                  <div className="group flex gap-5 rounded-xl border border-teal/12 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-teal/30 hover:shadow-[0_14px_30px_-20px_rgb(31_74_56/0.4)]">
                    <span className="shrink-0 flex h-12 w-12 items-center justify-center rounded-xl bg-teal/8 text-teal transition-transform duration-300 group-hover:scale-110">
                      <Ic size={26} />
                    </span>
                    <div>
                      <h3 className="text-lg font-bold text-ink mb-1 font-nunito">{item.title}</h3>
                      <p className="text-sm text-ink-light leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="bg-paper py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <Reveal>
            <div className="rounded-2xl border border-teal/15 bg-white p-8 sm:p-10 text-center">
              <h2 className="display text-ink !text-3xl mb-4">{t.contact.title}</h2>
              <a href={`mailto:${site.contactEmail}`} className="text-teal text-lg font-medium hover:underline">
                {site.contactEmail}
              </a>
              <div className="flex flex-wrap justify-center gap-3 mt-6">
                {site.socials.map((s) => (
                  <a key={s.id} href={s.href} target="_blank" rel="noopener noreferrer" className="px-4 py-2 rounded-xl bg-teal/5 text-teal text-sm font-medium hover:bg-teal/10 transition-colors">
                    {s.label}
                  </a>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
