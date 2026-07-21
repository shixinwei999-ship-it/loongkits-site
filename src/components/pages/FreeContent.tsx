"use client";

import { useLang } from "@/lib/i18n";
import { freePage, common } from "@/lib/content";
import { SubscribeForm } from "@/components/SubscribeForm";
import { Reveal } from "@/components/Reveal";

export function FreeContent() {
  const { lang } = useLang();
  const t = freePage[lang];
  const c = common[lang];

  return (
    <div className="bg-paper pt-12 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <Reveal>
          <div className="text-center mb-12">
            <span className="seal w-10 h-10 text-lg mb-5" aria-hidden>免</span>
            <h1 className="text-4xl font-bold text-ink mb-4 font-nunito">{t.title}</h1>
            <p className="text-xl text-ink-light">{t.subtitle}</p>
          </div>
        </Reveal>

        {/* 免费生肖练习纸（P1 资产任务完成前为诚实的"即将上线"状态） */}
        <Reveal delay={120}>
          <div className="bg-white rounded-3xl p-8 mb-12 shadow-sm">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="relative bg-teal/5 rounded-2xl h-64 flex items-center justify-center overflow-hidden">
                <div aria-hidden className="absolute w-48 h-48 rounded-full border-2 border-dashed border-teal/15" />
                <span className="text-6xl animate-float" role="img" aria-label={t.zodiac.title}>
                  🐉
                </span>
                <span aria-hidden className="absolute bottom-4 right-6 text-2xl animate-float-slow">🐼</span>
              </div>
              <div>
                <span className="chip mb-4">{lang === "en" ? "First freebie" : "第一份免费礼"}</span>
                <h2 className="text-2xl font-bold text-ink mb-3 font-nunito">{t.zodiac.title}</h2>
                <p className="text-ink-light mb-6">{t.zodiac.desc}</p>
                <span className="btn-disabled" title={c.comingSoonNote}>
                  {t.zodiac.cta}
                </span>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={200}>
          <div className="bg-teal/5 rounded-3xl p-8 text-center">
            <h2 className="text-2xl font-bold text-ink mb-3 font-nunito">{t.email.title}</h2>
            <p className="text-ink-light mb-6">{t.email.desc}</p>
            <SubscribeForm />
          </div>
        </Reveal>
      </div>
    </div>
  );
}
