'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

type Lang = 'en' | 'zh';

const content = {
  en: {
    nav: {
      kits: 'Kits',
      free: 'Free Resources',
      families: 'For Families',
      teachers: 'For Teachers',
      about: 'About',
    },
    title: 'For Teachers',
    subtitle: 'Classroom-ready resources',
    why: {
      title: 'Why Teachers Choose Us',
      reasons: [
        { icon: '📚', title: 'Standards-Aligned', desc: 'Content designed for language learning standards' },
        { icon: '🖨️', title: 'Print & Go', desc: 'No prep needed, download and use immediately' },
        { icon: '🌏', title: 'Cultural Authentic', desc: 'Created by native speakers with cultural depth' },
        { icon: '💰', title: 'Bulk Pricing', desc: 'Special rates for classroom sets' },
      ],
    },
    bulk: {
      title: 'Classroom Pricing',
      desc: 'Need multiple copies? We offer special pricing for teachers and schools.',
      cta: 'Contact Us',
    },
    cta: 'Browse Kits',
  },
  zh: {
    nav: {
      kits: '学习包',
      free: '免费资源',
      families: '给家庭',
      teachers: '给老师',
      about: '关于我们',
    },
    title: '给老师',
    subtitle: '课堂即用资源',
    why: {
      title: '老师为什么选择我们',
      reasons: [
        { icon: '📚', title: '标准对齐', desc: '内容符合语言学习标准' },
        { icon: '🖨️', title: '打印即用', desc: '无需准备，下载即可使用' },
        { icon: '🌏', title: '文化地道', desc: '母语者创作，文化深度保证' },
        { icon: '💰', title: '批量优惠', desc: '班级套装特别价格' },
      ],
    },
    bulk: {
      title: '班级价格',
      desc: '需要多份副本？我们为老师和学校提供特别价格。',
      cta: '联系我们',
    },
    cta: '浏览学习包',
  },
};

export default function TeachersPage() {
  const [lang, setLang] = useState<Lang>('en');

  useEffect(() => {
    const browserLang = navigator.language.toLowerCase();
    if (browserLang.startsWith('zh')) {
      setLang('zh');
    }
  }, []);

  const t = content[lang];

  return (
    <div className="min-h-screen bg-cream">
      <nav className="fixed top-0 w-full bg-cream/95 backdrop-blur-sm z-50 border-b border-teal/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="text-2xl font-bold text-teal font-nunito">Loong Kits</Link>
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/kits" className="text-ink hover:text-teal transition-colors">{t.nav.kits}</Link>
              <Link href="/free" className="text-ink hover:text-teal transition-colors">{t.nav.free}</Link>
              <Link href="/families" className="text-ink hover:text-teal transition-colors">{t.nav.families}</Link>
              <Link href="/teachers" className="text-teal font-semibold">{t.nav.teachers}</Link>
              <Link href="/about" className="text-ink hover:text-teal transition-colors">{t.nav.about}</Link>
              <button
                onClick={() => setLang(lang === 'en' ? 'zh' : 'en')}
                className="ml-4 px-3 py-1 rounded-lg bg-teal/10 text-teal text-sm font-medium hover:bg-teal/20 transition-colors"
              >
                {lang === 'en' ? '中文' : 'EN'}
              </button>
            </div>
          </div>
        </div>
      </nav>

      <main className="pt-24 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-ink mb-4 font-nunito">{t.title}</h1>
            <p className="text-xl text-ink-light">{t.subtitle}</p>
          </div>

          <section className="mb-16">
            <h2 className="text-2xl font-bold text-ink mb-8 font-nunito">{t.why.title}</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {t.why.reasons.map((reason, index) => (
                <div key={index} className="bg-white rounded-2xl p-6 shadow-sm">
                  <div className="text-3xl mb-4">{reason.icon}</div>
                  <h3 className="text-lg font-bold text-ink mb-2 font-nunito">{reason.title}</h3>
                  <p className="text-ink-light">{reason.desc}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-16 bg-orange/5 rounded-3xl p-8">
            <h2 className="text-2xl font-bold text-ink mb-4 font-nunito">{t.bulk.title}</h2>
            <p className="text-ink-light mb-6">{t.bulk.desc}</p>
            <button className="btn-accent">
              {t.bulk.cta}
            </button>
          </section>

          <div className="text-center">
            <Link href="/kits" className="btn-primary text-lg px-8 py-4">
              {t.cta}
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}