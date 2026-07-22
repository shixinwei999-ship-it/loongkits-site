"use client";

import Image from "next/image";
import { useLang } from "@/lib/i18n";
import { common } from "@/lib/content";
import {
  type Kit,
  themeLabels,
  ageLabels,
  kitTitle,
  formatPages,
} from "@/lib/kits";
import { IconArrowRight } from "@/components/icons";

export function KitCard({ kit }: { kit: Kit }) {
  const { lang } = useLang();
  const t = common[lang];

  return (
    <div className="card-kit flex flex-col h-full">
      <div className="relative h-52 overflow-hidden">
        <Image
          src={`/kit-covers/${kit.theme}.webp`}
          alt={themeLabels[kit.theme][lang]}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="kit-cover object-cover"
        />
        {/* 主题角标：印章式 */}
        <span className="absolute top-3 left-3 chip !bg-white/90 !border-white/60 backdrop-blur-sm text-[0.7rem]">
          {themeLabels[kit.theme][lang]}
        </span>
        {kit.tag && (
          <span className="seal absolute top-3 right-3 px-2.5 py-1 text-xs font-bold">
            {kit.tag[lang]}
          </span>
        )}
      </div>

      <div className="p-6 flex flex-col flex-1">
        <p className="text-xs font-bold uppercase tracking-wider text-orange mb-1.5">
          {ageLabels[kit.age][lang]} · {formatPages(kit.pages, lang)}
        </p>
        <h3 className="text-xl font-extrabold text-ink mb-3 font-nunito leading-tight">
          {kitTitle(kit, lang)}
        </h3>
        <div className="flex justify-between items-center mt-auto pt-2">
          <span className="text-2xl font-extrabold text-teal font-nunito">${kit.priceUsd}</span>
          {kit.gumroadUrl ? (
            <a
              href={kit.gumroadUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-sm !py-2.5 !px-4"
            >
              {t.buy} <IconArrowRight size={16} />
            </a>
          ) : (
            <span className="btn-disabled text-sm !py-2.5 !px-4" title={t.comingSoonNote}>
              {t.comingSoon}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
