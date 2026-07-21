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
    title: 'For Families',
    subtitle: 'Culture roots for your kids',
    why: {
      title: 'Why Loong Kits?',
      reasons: [
        { icon: '🏠', title: 'Heritage Connection', desc: 'Help your kids connect with their roots' },
        { icon: '📱', title: 'Screen-Free', desc: 'Printable activities, no devices needed' },
        { icon: '👨‍👩‍👧', title: 'Family Bonding', desc: 'Quality time together, learning side by side' },
        { icon: '🎯', title: 'Age-Appropriate', desc: 'Content designed for 3-18 years old' },
      ],
    },
    how: {
      title: 'How to Use',
      steps: [
        'Choose a kit that matches your child\'s age',
        'Download and print at home',
        'Follow the parent guide for activities',
        'Watch your child learn and have fun',
      ],
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
    title: '给家庭',
    subtitle: '给孩子种下文化根',
    why: {
      title: '为什么选择 Loong Kits？',
      reasons: [
        { icon: '🏠', title: '文化传承', desc: '帮助孩子连接文化根源' },
        { icon: '📱', title: '无屏幕', desc: '可打印活动，无需电子设备' },
        { icon: '👨‍👩‍👧', title: '亲子时光', desc: '一起学习，增进感情' },
        { icon: '🎯', title: '适龄内容', desc: '为 3-18 岁设计' },
      ],
    },
    how: {
      title: '如何使用',
      steps: [
        '选择适合孩子年龄的学习包',
        '在家下载并打印',
        '按照家长指南进行活动',
        '看着孩子快乐学习',
      ],
    },
    cta: '浏览学习包',
  },
};

export default function FamiliesPage() {
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
              <Link href="/families" className="text-teal font-semibold">{t.nav.families}</Link>
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

          <section className="mb-16">
            <h2 className="text-2xl font-bold text-ink mb-8 font-nunito">{t.how.title}</h2>
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <ol className="space-y-4">
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