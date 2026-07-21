"use client";

import { useLang } from "@/lib/i18n";
import { aboutPage } from "@/lib/content";
import { site } from "@/lib/site";
import { Reveal } from "@/components/Reveal";

export function AboutContent() {
  const { lang } = useLang();
  const t = aboutPage[lang];

  return (
    <div className="bg-paper pt-12 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <Reveal>
          <div className="text-center mb-16">
            <span className="seal w-10 h-10 text-lg mb-5" aria-hidden>龙</span>
            <h1 className="text-4xl font-bold text-ink font-nunito">{t.title}</h1>
          </div>
        </Reveal>

        <Reveal delay={80}>
          <section className="mb-12 bg-white rounded-3xl p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-ink mb-4 font-nunito">{t.story.title}</h2>
            <p className="text-ink-light text-lg leading-relaxed">{t.story.text}</p>
          </section>
        </Reveal>

        <Reveal delay={140}>
          <section className="mb-12 bg-teal/5 rounded-3xl p-8">
            <h2 className="text-2xl font-bold text-ink mb-4 font-nunito">{t.mission.title}</h2>
            <p className="text-ink-light text-lg leading-relaxed">{t.mission.text}</p>
          </section>
        </Reveal>

        <section className="mb-12">
          <Reveal>
            <h2 className="text-2xl font-bold text-ink mb-8 font-nunito">{t.values.title}</h2>
          </Reveal>
          <div className="grid md:grid-cols-2 gap-6">
            {t.values.items.map((item, index) => (
              <Reveal key={index} delay={index * 100}>
                <div className="group bg-white rounded-2xl p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md h-full">
                  <div className="text-3xl mb-4 transition-transform duration-300 group-hover:scale-110">
                    {item.icon}
                  </div>
                  <h3 className="text-lg font-bold text-ink mb-2 font-nunito">{item.title}</h3>
                  <p className="text-ink-light">{item.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        <Reveal>
          <section className="text-center bg-white rounded-3xl p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-ink mb-4 font-nunito">{t.contact.title}</h2>
            <a
              href={`mailto:${site.contactEmail}`}
              className="text-teal text-lg font-medium hover:underline"
            >
              {site.contactEmail}
            </a>
            <div className="flex flex-wrap justify-center gap-3 mt-6">
              {site.socials.map((s) => (
                <a
                  key={s.id}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-xl bg-teal/5 text-teal text-sm font-medium hover:bg-teal/10 transition-colors"
                >
                  {s.label}
                </a>
              ))}
            </div>
          </section>
        </Reveal>
      </div>
    </div>
  );
}
