"use client";

import Image from "next/image";
import Link from "next/link";
import { ResourceDownloads } from "@/components/ResourceDownloads";
import { Reveal } from "@/components/Reveal";
import { IconBook, IconCheck, IconPrint } from "@/components/icons";
import { freePage } from "@/lib/content";
import { useLang } from "@/lib/i18n";
import { zodiacAnimalsResource } from "@/lib/resources";
import { site } from "@/lib/site";

const guideIcons = [IconBook, IconPrint, IconCheck];

export function FreeContent() {
  const { lang } = useLang();
  const t = freePage[lang];

  return (
    <div className="bg-paper pt-12 pb-24">
      <section className="px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          <Reveal className="lg:col-span-6">
            <span className="seal w-10 h-10 text-lg mb-7" aria-hidden>免</span>
            <p className="font-inter font-semibold uppercase tracking-[0.12em] text-teal text-xs sm:text-sm mb-5">{t.zodiac.eyebrow}</p>
            <h1 className="display-zh text-ink">{t.title}</h1>
            <p className="text-lg sm:text-xl text-ink-light leading-relaxed mt-6 max-w-xl">{t.subtitle}</p>
            <div className="mt-9 border-y border-teal/15 grid grid-cols-3 max-w-lg">
              {t.zodiac.facts.map((fact) => (
                <span key={fact} className="py-4 pr-3 border-r last:border-r-0 border-teal/10 text-sm font-semibold text-teal">
                  {fact}
                </span>
              ))}
            </div>
            <h2 className="font-nunito font-extrabold text-3xl text-ink mt-9">{t.zodiac.title}</h2>
            <p className="text-ink-light leading-relaxed mt-3 max-w-xl">{t.zodiac.desc}</p>
            <div className="mt-7">
              <ResourceDownloads labels={t.zodiac.downloads} />
            </div>
            <Link href="/free/zodiac-animals" className="arrow-link text-teal font-bold mt-6 hover:underline">
              {t.zodiac.detail} <span className="arrow">→</span>
            </Link>
          </Reveal>

          <Reveal delay={100} className="lg:col-span-6">
            <figure className="mx-auto max-w-[27rem] border border-teal/10 bg-white p-3 shadow-[0_20px_50px_-36px_rgb(31_74_56/0.45)]">
              <Image
                src={zodiacAnimalsResource.previews.cover}
                alt={lang === "en" ? "Cover preview of the Zodiac Animals Starter Worksheet" : "十二生肖双语入门练习包封面预览"}
                width={745}
                height={1053}
                priority
                className="w-full h-auto"
              />
              <figcaption className="px-2 pt-3 text-xs text-ink-light">{lang === "en" ? "Preview from the downloadable PDF" : "真实可下载 PDF 页面预览"}</figcaption>
            </figure>
          </Reveal>
        </div>
      </section>

      <section className="section-warm mt-20 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-12 gap-12">
          <Reveal className="lg:col-span-5">
            <h2 className="display-zh text-ink !text-3xl sm:!text-4xl">{t.guide.title}</h2>
            <p className="text-ink-light leading-relaxed mt-5 max-w-md">{t.guide.desc}</p>
          </Reveal>
          <div className="lg:col-span-7 grid sm:grid-cols-3 gap-6">
            {t.guide.points.map((point, index) => {
              const Icon = guideIcons[index];
              return (
                <Reveal key={point.title} delay={index * 100}>
                  <div className="border-t-2 border-teal pt-5 h-full">
                    <Icon size={27} className="text-teal mb-4" />
                    <h3 className="font-nunito font-extrabold text-lg text-ink">{point.title}</h3>
                    <p className="text-sm text-ink-light leading-relaxed mt-2">{point.desc}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-paper pt-16 px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="max-w-4xl mx-auto text-center border-t border-teal/15 pt-12">
            <h2 className="font-nunito font-extrabold text-3xl text-ink">{t.follow.title}</h2>
            <p className="text-ink-light mt-3">{t.follow.desc}</p>
            <div className="flex flex-wrap justify-center gap-x-5 gap-y-3 mt-6">
              {site.socials.map((social) => (
                <a key={social.id} href={social.href} target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-teal hover:underline">
                  {social.label}
                </a>
              ))}
            </div>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
