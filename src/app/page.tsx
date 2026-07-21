'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

// 语言类型
type Lang = 'en' | 'zh';

// 文案内容
const content = {
  en: {
    nav: {
      kits: 'Kits',
      free: 'Free Resources',
      families: 'For Families',
      teachers: 'For Teachers',
      about: 'About',
    },
    hero: {
      title: 'Bring Chinese Culture to Life',
      subtitle: 'Printable bilingual kits for curious kids',
      cta: 'Browse Kits',
      ctaSecondary: 'Free Sample',
    },
    howItWorks: {
      title: 'How It Works',
      steps: [
        { icon: '📥', title: 'Download', desc: 'Get instant access' },
        { icon: '🖨️', title: 'Print', desc: 'A4 or Letter size' },
        { icon: '❤️', title: 'Learn Together', desc: 'Quality family time' },
      ],
    },
    featuredKits: {
      title: 'Featured Kits',
      viewAll: 'View all kits',
      kits: [
        {
          id: 'cny',
          title: 'Chinese New Year Kit',
          desc: 'Celebrate with stories, crafts & traditions',
          price: '$12.99',
          image: '/images/kits/cny-cover.jpg',
          tag: 'Best Seller',
        },
        {
          id: 'zodiac',
          title: 'Zodiac Animals Kit',
          desc: 'Discover the 12 zodiac signs',
          price: '$9.99',
          image: '/images/kits/zodiac-cover.jpg',
          tag: 'Popular',
        },
        {
          id: 'panda',
          title: 'Panda Friends Kit',
          desc: 'Learn with everyone\'s favorite bear',
          price: '$9.99',
          image: '/images/kits/panda-cover.jpg',
          tag: 'New',
        },
      ],
    },
    audience: {
      families: {
        title: 'For Families',
        desc: 'Culture roots for your kids',
        cta: 'Explore',
      },
      teachers: {
        title: 'For Teachers',
        desc: 'Classroom-ready resources',
        cta: 'Explore',
      },
    },
    freeSample: {
      title: 'Try a Free Kit',
      desc: 'Join our list, get a free zodiac worksheet',
      placeholder: 'Enter your email',
      cta: 'Get Free Kit',
    },
    testimonials: {
      title: 'What Parents Say',
      items: [
        { text: 'My daughter asked for more!', author: 'Sarah M.' },
        { text: 'Perfect for my Saturday school.', author: 'Teacher Wang' },
        { text: 'Finally, quality Chinese materials.', author: 'Michael C.' },
      ],
    },
    footer: {
      copyright: '© 2026 Loong Kits. All rights reserved.',
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
    hero: {
      title: '让中国文化活起来',
      subtitle: '为好奇宝宝准备的可打印双语学习包',
      cta: '浏览学习包',
      ctaSecondary: '免费样品',
    },
    howItWorks: {
      title: '如何使用',
      steps: [
        { icon: '📥', title: '下载', desc: '立即获取' },
        { icon: '🖨️', title: '打印', desc: 'A4 或 Letter 尺寸' },
        { icon: '❤️', title: '一起学', desc: '亲子时光' },
      ],
    },
    featuredKits: {
      title: '精选学习包',
      viewAll: '查看全部',
      kits: [
        {
          id: 'cny',
          title: '春节学习包',
          desc: '故事、手工、传统习俗',
          price: '$12.99',
          image: '/images/kits/cny-cover.jpg',
          tag: '热卖',
        },
        {
          id: 'zodiac',
          title: '生肖学习包',
          desc: '探索 12 生肖',
          price: '$9.99',
          image: '/images/kits/zodiac-cover.jpg',
          tag: '热门',
        },
        {
          id: 'panda',
          title: '熊猫学习包',
          desc: '和熊猫一起学习',
          price: '$9.99',
          image: '/images/kits/panda-cover.jpg',
          tag: '新品',
        },
      ],
    },
    audience: {
      families: {
        title: '给家庭',
        desc: '给孩子种下文化根',
        cta: '进入',
      },
      teachers: {
        title: '给老师',
        desc: '课堂即用资源',
        cta: '进入',
      },
    },
    freeSample: {
      title: '免费试一个',
      desc: '订阅即送生肖 worksheet',
      placeholder: '输入邮箱',
      cta: '领取',
    },
    testimonials: {
      title: '家长评价',
      items: [
        { text: '女儿学完还要学！', author: 'Sarah M.' },
        { text: '周末中文学校神器', author: '王老师' },
        { text: '终于有高质量中文材料了', author: 'Michael C.' },
      ],
    },
    footer: {
      copyright: '© 2026 Loong Kits. 保留所有权利.',
    },
  },
};

export default function Home() {
  const [lang, setLang] = useState<Lang>('en');
  const [email, setEmail] = useState('');

  // 检测浏览器语言
  useEffect(() => {
    const browserLang = navigator.language.toLowerCase();
    if (browserLang.startsWith('zh')) {
      setLang('zh');
    }
  }, []);

  const t = content[lang];

  return (
    <div className="min-h-screen bg-cream">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-cream/95 backdrop-blur-sm z-50 border-b border-teal/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <span className="text-2xl font-bold text-teal font-nunito">Loong Kits</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/kits" className="text-ink hover:text-teal transition-colors">{t.nav.kits}</Link>
              <Link href="/free" className="text-ink hover:text-teal transition-colors">{t.nav.free}</Link>
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

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-ink mb-6 font-nunito">
                {t.hero.title}
              </h1>
              <p className="text-xl text-ink-light mb-8">
                {t.hero.subtitle}
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/kits" className="btn-primary">
                  {t.hero.cta}
                </Link>
                <Link href="/free" className="btn-secondary">
                  {t.hero.ctaSecondary}
                </Link>
              </div>
            </div>
            <div className="relative h-80 md:h-96 bg-teal/5 rounded-3xl flex items-center justify-center">
              {/* Placeholder for mascot image */}
              <div className="text-center">
                <div className="text-6xl mb-4">🐉</div>
                <p className="text-ink-light text-sm">Dragon Mascot</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-ink mb-16 font-nunito">
            {t.howItWorks.title}
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {t.howItWorks.steps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="icon-lg mx-auto mb-6 text-4xl">
                  {step.icon}
                </div>
                <h3 className="text-xl font-bold text-ink mb-2 font-nunito">
                  {step.title}
                </h3>
                <p className="text-ink-light">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Kits */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl font-bold text-ink font-nunito">
              {t.featuredKits.title}
            </h2>
            <Link href="/kits" className="text-teal font-semibold hover:underline">
              {t.featuredKits.viewAll} →
            </Link>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {t.featuredKits.kits.map((kit) => (
              <div key={kit.id} className="card-kit">
                <div className="relative h-64 bg-teal/5">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-6xl">🎨</span>
                  </div>
                  {kit.tag && (
                    <span className="absolute top-4 right-4 bg-orange text-white text-xs font-bold px-3 py-1 rounded-full">
                      {kit.tag}
                    </span>
                  )}
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-ink mb-2 font-nunito">
                    {kit.title}
                  </h3>
                  <p className="text-ink-light mb-4">
                    {kit.desc}
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-teal">
                      {kit.price}
                    </span>
                    <button className="btn-accent text-sm py-2 px-4">
                      View Kit
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Audience */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <Link href="/families" className="group">
              <div className="bg-teal/5 rounded-3xl p-12 text-center hover:bg-teal/10 transition-colors duration-300">
                <div className="text-5xl mb-6">👨‍👩‍👧</div>
                <h3 className="text-2xl font-bold text-ink mb-3 font-nunito">
                  {t.audience.families.title}
                </h3>
                <p className="text-ink-light mb-6">
                  {t.audience.families.desc}
                </p>
                <span className="btn-primary inline-block">
                  {t.audience.families.cta}
                </span>
              </div>
            </Link>
            <Link href="/teachers" className="group">
              <div className="bg-orange/5 rounded-3xl p-12 text-center hover:bg-orange/10 transition-colors duration-300">
                <div className="text-5xl mb-6">👩‍🏫</div>
                <h3 className="text-2xl font-bold text-ink mb-3 font-nunito">
                  {t.audience.teachers.title}
                </h3>
                <p className="text-ink-light mb-6">
                  {t.audience.teachers.desc}
                </p>
                <span className="btn-accent inline-block">
                  {t.audience.teachers.cta}
                </span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Free Sample */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-teal/5">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-ink mb-4 font-nunito">
            {t.freeSample.title}
          </h2>
          <p className="text-ink-light mb-8">
            {t.freeSample.desc}
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={t.freeSample.placeholder}
              className="flex-1 px-4 py-3 rounded-xl border border-teal/20 focus:border-teal focus:outline-none"
            />
            <button type="submit" className="btn-primary whitespace-nowrap">
              {t.freeSample.cta}
            </button>
          </form>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-ink mb-16 font-nunito">
            {t.testimonials.title}
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {t.testimonials.items.map((item, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-sm">
                <p className="text-lg text-ink mb-4">"{item.text}"</p>
                <p className="text-ink-light font-medium">— {item.author}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 sm:px-6 lg:px-8 bg-ink text-white">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-white/60">
            {t.footer.copyright}
          </p>
        </div>
      </footer>
    </div>
  );
}