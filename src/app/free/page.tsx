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
    title: 'Free Resources',
    subtitle: 'Download and print instantly',
    zodiac: {
      title: 'Zodiac Animals Worksheet',
      desc: '12 zodiac animals coloring page + Chinese character tracing',
      cta: 'Download Free',
    },
    email: {
      title: 'Get More Freebies',
      desc: 'Join our newsletter for weekly free resources',
      placeholder: 'Enter your email',
      cta: 'Subscribe',
    },
  },
  zh: {
    nav: {
      kits: '学习包',
      free: '免费资源',
      families: '给家庭',
      teachers: '给老师',
      about: '关于我们',
    },
    title: '免费资源',
    subtitle: '下载即可打印',
    zodiac: {
      title: '生肖动物练习纸',
      desc: '12生肖涂色页 + 汉字描红',
      cta: '免费下载',
    },
    email: {
      title: '获取更多免费资源',
      desc: '订阅我们的通讯，每周获取免费资源',
      placeholder: '输入邮箱',
      cta: '订阅',
    },
  },
};

export default function FreePage() {
  const [lang, setLang] = useState<Lang>('en');
  const [email, setEmail] = useState('');

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
              <Link href="/free" className="text-teal font-semibold">{t.nav.free}</Link>
              <Link href="/families" className="text-ink hover:text-teal transition-colors">{t.nav.families}</Link>
              <Link href="/teachers" className="text-ink hover:text-teal transition-colors">{t.nav.teachers}</Link>
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
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-ink mb-4 font-nunito">{t.title}</h1>
            <p className="text-xl text-ink-light">{t.subtitle}</p>
          </div>

          <div className="bg-white rounded-3xl p-8 mb-12 shadow-sm">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="bg-teal/5 rounded-2xl h-64 flex items-center justify-center">
                <span className="text-6xl">🐉</span>
              </div>
              <div>
                <h2 className="text-2xl font-bold text-ink mb-3 font-nunito">{t.zodiac.title}</h2>
                <p className="text-ink-light mb-6">{t.zodiac.desc}</p>
                <button className="btn-primary">
                  {t.zodiac.cta}
                </button>
              </div>
            </div>
          </div>

          <div className="bg-teal/5 rounded-3xl p-8 text-center">
            <h2 className="text-2xl font-bold text-ink mb-3 font-nunito">{t.email.title}</h2>
            <p className="text-ink-light mb-6">{t.email.desc}</p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={t.email.placeholder}
                className="flex-1 px-4 py-3 rounded-xl border border-teal/20 focus:border-teal focus:outline-none"
              />
              <button type="submit" className="btn-primary whitespace-nowrap">
                {t.email.cta}
              </button>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
}