import type { Book } from "@/components/BookReader";

// 一年级（上册）完整一本书。按真教材密度编写：每课含拼音注音课文全文、
// 会认字表、会写字表（笔画/部首/组词）、课后练习、思考说话。参考部编版一年级上册骨架。

const Ruby = ({ py, ch }: { py: string; ch: string }) => (
  <ruby className="ruby-zh">
    {ch}
    <rt>{py}</rt>
  </ruby>
);

// 一段课文：汉字与拼音逐字配对
function Passage({ pairs }: { pairs: [string, string][] }) {
  return (
    <p className="font-serif-sc text-2xl leading-[2.6] text-ink sm:text-3xl">
      {pairs.map(([py, ch], i) => (
        <Ruby key={i} py={py} ch={ch} />
      ))}
    </p>
  );
}

// 会认字表
function Recognize({ rows }: { rows: { ch: string; py: string; word: string }[] }) {
  return (
    <div className="mt-5">
      <p className="mb-2 font-bold text-[#b3121f]">会认字</p>
      <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
        {rows.map((r) => (
          <div key={r.ch} className="rounded-md bg-[#b3121f]/5 px-3 py-2 text-center">
            <div className="font-serif-sc text-2xl font-bold text-ink">{r.ch}</div>
            <div className="text-xs text-ink-light">{r.py}</div>
            <div className="text-xs text-teal-dark">{r.word}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

// 会写字表（笔画/部首/组词）
// 田字格：带虚线十字的方格，可放字或留空描红
function TianZiGe({ ch, faint }: { ch?: string; faint?: boolean }) {
  return (
    <span className="relative inline-flex h-12 w-12 items-center justify-center border border-teal/40 bg-white">
      <span className="pointer-events-none absolute left-1/2 top-0 h-full w-px border-l border-dashed border-teal/30" />
      <span className="pointer-events-none absolute left-0 top-1/2 h-px w-full border-t border-dashed border-teal/30" />
      {ch && (
        <span className={`font-serif-sc text-2xl font-bold ${faint ? "text-teal/30" : "text-ink"}`}>{ch}</span>
      )}
    </span>
  );
}

// 象形配字小图：给象形字配一幅小画（日/月/水/火/山/石/田/禾/口/耳/目/手/木/人…）
function CharPic({ ch }: { ch: string }) {
  const box = (children: React.ReactNode) => (
    <span className="inline-flex h-14 w-14 items-center justify-center rounded-md border border-stone-300 bg-white">
      <svg viewBox="0 0 40 40" className="h-11 w-11">{children}</svg>
    </span>
  );
  switch (ch) {
    case "日": return box(<circle cx="20" cy="20" r="12" fill="#e05a3a" />);
    case "月": return box(<path d="M26 6 A14 14 0 1 0 26 34 Q18 20 26 6 Z" fill="#f2c14e" />);
    case "水": return box(<><path d="M12 8 Q16 20 12 32 M20 6 Q24 20 20 34 M28 8 Q32 20 28 32" stroke="#5b9bd5" strokeWidth="3" fill="none" strokeLinecap="round" /></>);
    case "火": return box(<><path d="M20 6 Q28 16 24 24 Q30 22 28 30 Q24 36 16 34 Q10 28 14 20 Q16 12 20 6 Z" fill="#e07a3a" /><line x1="12" y1="34" x2="28" y2="30" stroke="#8a5a2a" strokeWidth="2" /></>);
    case "山": return box(<path d="M6 32 L16 12 L22 24 L28 10 L34 32 Z" fill="#7a9b6a" />);
    case "石": return box(<><ellipse cx="16" cy="26" rx="9" ry="6" fill="#8a7a6a" /><ellipse cx="28" cy="28" rx="7" ry="5" fill="#a09080" /></>);
    case "田": return box(<><rect x="8" y="10" width="24" height="20" fill="#8ab06a" /><line x1="20" y1="10" x2="20" y2="30" stroke="#5a7a4a" strokeWidth="2" /><line x1="8" y1="20" x2="32" y2="20" stroke="#5a7a4a" strokeWidth="2" /></>);
    case "禾": return box(<><line x1="20" y1="10" x2="20" y2="34" stroke="#5a7a4a" strokeWidth="2" /><path d="M20 14 Q12 18 10 24 M20 14 Q28 18 30 24 M20 22 Q14 26 12 30 M20 22 Q26 26 28 30" stroke="#7a9b6a" strokeWidth="2" fill="none" /><path d="M20 10 Q24 6 26 8" stroke="#c9a24a" strokeWidth="2" fill="none" /></>);
    case "口": return box(<rect x="12" y="14" width="16" height="12" rx="2" fill="none" stroke="#c8102e" strokeWidth="3" />);
    case "耳": return box(<path d="M16 8 Q28 8 26 20 Q24 30 18 32 M20 14 L24 14 M19 20 L24 20" stroke="#8a5a2a" strokeWidth="2.5" fill="none" />);
    case "目": return box(<><ellipse cx="20" cy="20" rx="8" ry="12" fill="none" stroke="#1a1a1a" strokeWidth="2.5" /><circle cx="20" cy="20" r="3.5" fill="#1a1a1a" /></>);
    case "手": return box(<path d="M14 10 L14 26 M20 8 L20 28 M26 10 L26 26 M12 30 Q20 36 28 30" stroke="#8a5a2a" strokeWidth="2.5" fill="none" strokeLinecap="round" />);
    case "木": return box(<><line x1="20" y1="8" x2="20" y2="34" stroke="#8a5a2a" strokeWidth="2.5" /><path d="M20 16 Q12 20 10 26 M20 16 Q28 20 30 26" stroke="#7a9b6a" strokeWidth="2.5" fill="none" /></>);
    case "人": return box(<path d="M20 8 Q18 20 12 32 M20 14 Q26 24 30 32" stroke="#1a1a1a" strokeWidth="3" fill="none" strokeLinecap="round" />);
    case "天": return box(<><line x1="10" y1="10" x2="30" y2="10" stroke="#1a1a1a" strokeWidth="2.5" /><line x1="8" y1="16" x2="32" y2="16" stroke="#1a1a1a" strokeWidth="2.5" /><path d="M20 16 Q16 26 10 32 M20 16 Q26 26 30 32" stroke="#1a1a1a" strokeWidth="2.5" fill="none" /></>);
    case "地": return box(<><ellipse cx="20" cy="26" rx="14" ry="6" fill="#c9a24a" /><path d="M8 26 Q20 18 32 26" stroke="#8a5a2a" strokeWidth="2" fill="none" /></>);
    default: return box(<rect x="10" y="10" width="20" height="20" rx="3" fill="none" stroke="#c9a24a" strokeWidth="2" strokeDasharray="3 3" />);
  }
}

function Write({ rows }: { rows: { ch: string; py: string; strokes: number; radical: string; word: string }[] }) {
  return (
    <div className="mt-5">
      <p className="mb-2 font-bold text-[#2d6a4f]">会写字（田字格描红）</p>
      <div className="space-y-3">
        {rows.map((r) => (
          <div key={r.ch} className="flex flex-wrap items-center gap-3">
            <div className="flex items-center gap-1">
              <TianZiGe ch={r.ch} />
              <TianZiGe ch={r.ch} faint />
              <TianZiGe />
            </div>
            <div className="text-xs leading-relaxed text-ink-light">
              <span className="font-serif-sc text-base font-bold text-ink">{r.ch}</span> {r.py} · {r.strokes} 画 · {r.radical}部 · 组词：{r.word}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function Practice({ items }: { items: string[] }) {
  return (
    <div className="mt-5 rounded-lg bg-teal/5 p-4">
      <p className="mb-2 font-bold text-teal">课后练习</p>
      <ol className="list-decimal space-y-1.5 pl-5 text-sm text-ink/80">
        {items.map((x, i) => (
          <li key={i}>{x}</li>
        ))}
      </ol>
    </div>
  );
}

// 课文插图：每篇一幅干净的 SVG 线条画，不用 AI 生图（生图不可靠）。
function Illustration({ topic }: { topic: string }) {
  const C = { line: "#2d6a4f", red: "#c8102e", amber: "#c9a24a", ink: "#1a1a1a" };
  const wrap = (children: React.ReactNode) => (
    <div className="my-5 flex justify-center">
      <svg viewBox="0 0 220 130" className="h-32 w-auto" role="img" aria-label={topic}>
        {children}
      </svg>
    </div>
  );
  switch (topic) {
    case "秋天":
      return wrap(<>
        <line x1="110" y1="20" x2="110" y2="100" stroke={C.ink} strokeWidth="3" strokeLinecap="round" />
        <path d="M70 40 Q110 30 150 40" stroke={C.line} strokeWidth="2" fill="none" />
        <ellipse cx="60" cy="95" rx="9" ry="5" fill={C.amber} transform="rotate(-30 60 95)" />
        <ellipse cx="95" cy="110" rx="9" ry="5" fill={C.amber} transform="rotate(20 95 110)" />
        <ellipse cx="150" cy="100" rx="9" ry="5" fill={C.red} transform="rotate(40 150 100)" />
        <ellipse cx="175" cy="115" rx="9" ry="5" fill={C.amber} transform="rotate(-15 175 115)" />
      </>);
    case "小小的船":
      return wrap(<>
        <path d="M70 60 A40 40 0 1 0 150 60 Q110 45 70 60 Z" fill={C.amber} />
        <circle cx="50" cy="30" r="2.5" fill={C.amber} />
        <circle cx="180" cy="25" r="2" fill={C.amber} />
        <circle cx="160" cy="45" r="2.5" fill={C.amber} />
        <circle cx="40" cy="55" r="2" fill={C.amber} />
      </>);
    case "江南":
      return wrap(<>
        <ellipse cx="110" cy="55" rx="55" ry="20" fill={C.line} opacity="0.35" />
        <ellipse cx="110" cy="55" rx="55" ry="20" fill="none" stroke={C.line} strokeWidth="2" />
        <path d="M80 100 Q90 90 100 100 M110 95 Q120 85 130 95" stroke={C.red} strokeWidth="2.5" fill="none" />
        <circle cx="85" cy="100" r="2" fill={C.ink} />
        <circle cx="125" cy="95" r="2" fill={C.ink} />
      </>);
    case "四季":
      return wrap(<>
        <path d="M30 90 Q30 60 45 60 Q60 60 60 90" stroke={C.line} strokeWidth="2" fill="none" />
        <circle cx="100" cy="75" r="14" fill={C.amber} />
        <path d="M140 90 Q150 70 160 90" stroke={C.amber} strokeWidth="2" fill="none" />
        <circle cx="195" cy="80" r="8" fill="none" stroke={C.line} strokeWidth="2" />
        <text x="30" y="110" fontSize="9" fill={C.ink}>春</text>
        <text x="95" y="110" fontSize="9" fill={C.ink}>夏</text>
        <text x="148" y="110" fontSize="9" fill={C.ink}>秋</text>
        <text x="190" y="110" fontSize="9" fill={C.ink}>冬</text>
      </>);
    case "画":
      return wrap(<>
        <rect x="55" y="20" width="110" height="80" rx="4" fill="none" stroke={C.ink} strokeWidth="3" />
        <path d="M55 70 L90 45 L115 60 L165 30 L165 100 L55 100 Z" fill={C.line} opacity="0.3" />
        <circle cx="140" cy="40" r="8" fill={C.amber} />
      </>);
    case "大小多少":
      return wrap(<>
        <circle cx="70" cy="70" r="35" fill="none" stroke={C.ink} strokeWidth="3" />
        <circle cx="160" cy="80" r="12" fill="none" stroke={C.red} strokeWidth="3" />
        <text x="55" y="120" fontSize="11" fill={C.ink}>大</text>
        <text x="153" y="120" fontSize="11" fill={C.ink}>小</text>
      </>);
    case "小书包":
      return wrap(<>
        <rect x="70" y="45" width="80" height="65" rx="10" fill={C.red} />
        <rect x="70" y="45" width="80" height="18" rx="9" fill={C.red} opacity="0.7" />
        <rect x="95" y="70" width="30" height="22" rx="4" fill="#faf7f2" />
        <line x1="85" y1="45" x2="85" y2="30" stroke={C.ink} strokeWidth="2" />
        <line x1="135" y1="45" x2="135" y2="30" stroke={C.ink} strokeWidth="2" />
      </>);
    case "日月明":
      return wrap(<>
        <circle cx="65" cy="55" r="20" fill={C.amber} />
        <path d="M135 35 A20 20 0 1 0 135 75 Q120 55 135 35 Z" fill="none" stroke={C.ink} strokeWidth="3" />
        <text x="100" y="110" fontSize="13" fontWeight="700" fill={C.line}>明</text>
      </>);
    case "影子":
      return wrap(<>
        <circle cx="90" cy="40" r="12" fill={C.ink} />
        <rect x="78" y="52" width="24" height="40" rx="8" fill={C.ink} />
        <ellipse cx="90" cy="100" rx="30" ry="6" fill={C.ink} opacity="0.2" />
        <line x1="120" y1="20" x2="120" y2="110" stroke={C.amber} strokeWidth="2" strokeDasharray="3 3" />
      </>);
    case "比尾巴":
      return wrap(<>
        <path d="M50 70 Q70 50 90 70 Q80 85 90 100" stroke={C.amber} strokeWidth="4" fill="none" strokeLinecap="round" />
        <path d="M130 70 Q150 50 170 70 Q160 85 170 100" stroke={C.line} strokeWidth="4" fill="none" strokeLinecap="round" />
        <text x="60" y="120" fontSize="10" fill={C.ink}>长</text>
        <text x="148" y="120" fontSize="10" fill={C.ink}>短</text>
      </>);
    case "青蛙写诗":
      return wrap(<>
        <ellipse cx="110" cy="75" rx="35" ry="22" fill={C.line} />
        <circle cx="95" cy="60" r="6" fill="#faf7f2" /><circle cx="125" cy="60" r="6" fill="#faf7f2" />
        <circle cx="95" cy="60" r="2.5" fill={C.ink} /><circle cx="125" cy="60" r="2.5" fill={C.ink} />
        <line x1="40" y1="20" x2="40" y2="40" stroke="#5b9bd5" strokeWidth="2" />
        <line x1="180" y1="15" x2="180" y2="38" stroke="#5b9bd5" strokeWidth="2" />
        <line x1="70" y1="25" x2="70" y2="45" stroke="#5b9bd5" strokeWidth="2" />
      </>);
    case "雨点儿":
      return wrap(<>
        <ellipse cx="110" cy="35" rx="50" ry="12" fill="#d0d0d0" />
        {[40, 70, 100, 130, 160].map((x, i) => (
          <line key={i} x1={x} y1="55" x2={x - 8} y2="95" stroke="#5b9bd5" strokeWidth="2.5" strokeLinecap="round" />
        ))}
      </>);
    case "明天要远足":
      return wrap(<>
        <rect x="50" y="70" width="100" height="25" rx="4" fill={C.ink} />
        <rect x="60" y="50" width="35" height="22" rx="3" fill="#faf7f2" />
        <path d="M55 70 L75 58 L95 70" fill="none" stroke="#faf7f2" strokeWidth="2" />
        <circle cx="170" cy="35" r="12" fill={C.amber} />
        <circle cx="158" cy="33" r="2" fill="#faf7f2" />
      </>);
    case "大还是小":
      return wrap(<>
        <circle cx="60" cy="45" r="10" fill={C.ink} />
        <rect x="50" y="55" width="20" height="35" rx="6" fill={C.ink} />
        <circle cx="150" cy="40" r="20" fill={C.ink} opacity="0.3" />
        <rect x="130" y="60" width="40" height="40" rx="10" fill={C.ink} opacity="0.3" />
      </>);
    case "项链":
      return wrap(<>
        <path d="M60 50 Q110 90 160 50" stroke={C.amber} strokeWidth="2" fill="none" />
        {[70, 95, 120, 145].map((x, i) => <circle key={i} cx={x} cy={70 + Math.sin(i) * 8} r="6" fill="#faf7f2" stroke={C.amber} strokeWidth="2" />)}
        <path d="M108 62 q-8 12 0 18 q8 -6 0 -18" fill={C.amber} />
      </>);
    case "雪地里的小画家":
      return wrap(<>
        <rect x="20" y="80" width="180" height="30" rx="6" fill="#faf7f2" />
        <text x="60" y="100" fontSize="10" fill={C.line}>个</text>
        <text x="100" y="100" fontSize="10" fill={C.line}>个</text>
        <text x="140" y="100" fontSize="10" fill={C.line}>个</text>
        <circle cx="60" cy="55" r="3" fill={C.red} /><circle cx="100" cy="50" r="3" fill={C.amber} /><circle cx="140" cy="58" r="3" fill={C.line} />
      </>);
    case "乌鸦喝水":
      return wrap(<>
        <ellipse cx="120" cy="40" rx="22" ry="16" fill={C.ink} />
        <circle cx="135" cy="35" r="3" fill={C.amber} />
        <path d="M120 56 L120 75 M110 75 L130 75" stroke={C.ink} strokeWidth="3" strokeLinecap="round" />
        <rect x="70" y="75" width="40" height="40" rx="6" fill="none" stroke={C.line} strokeWidth="2.5" />
        <rect x="72" y="90" width="36" height="23" fill="#5b9bd5" opacity="0.4" />
        <circle cx="80" cy="100" r="3" fill={C.amber} /><circle cx="92" cy="105" r="3" fill={C.amber} /><circle cx="100" cy="98" r="3" fill={C.amber} />
      </>);
    case "小壁虎借尾巴":
      return wrap(<>
        <path d="M40 70 Q70 50 100 70 Q120 75 140 60 Q160 50 175 60" stroke={C.line} strokeWidth="4" fill="none" strokeLinecap="round" />
        <circle cx="175" cy="60" r="9" fill={C.line} />
        <circle cx="178" cy="57" r="2" fill="#faf7f2" />
        <path d="M40 70 q-12 -2 -8 10" stroke={C.red} strokeWidth="2.5" fill="none" />
        <text x="80" y="95" fontSize="9" fill={C.ink}>断尾</text>
      </>);
    default:
      return wrap(<rect x="60" y="30" width="100" height="70" rx="6" fill="none" stroke={C.line} strokeWidth="2" strokeDasharray="4 4" />);
  }
}

export const grade1Book: Book = {
  gradeId: "g1",
  title: { en: "Grade 1 · Book One", zh: "一年级 · 上册" },
  subtitle: { en: "First Words & First Poems", zh: "第一本书 · 第一个字" },
  pages: [
    { kind: "cover", title: { en: "Cover", zh: "封面" } },
    {
      kind: "copyright", title: { en: "About this book", zh: "出版说明" },
      body: {
        en: <>Loong Kits Grade 1 Book One. A bilingual Chinese textbook, structured after the People's Education Press first-grade textbook. Read cover to back, one page at a time. Every lesson has the full text with pinyin, characters to read and to write, exercises, and a thinking question.</>,
        zh: <>《Loong Kits 一年级 · 上册》。按人教版一年级语文上册结构编写的双语教材。从封面一页一页读到封底。每课都有带拼音的课文、要认要写的字、课后练习、思考题。</>,
      },
    },
    { kind: "toc", title: { en: "Contents", zh: "目录" } },

    // 起始课
    {
      kind: "lesson", title: { en: "I Start School", zh: "我上学了" },
      body: {
        en: <>Welcome! 你好 (nǐ hǎo) = hello. 老师 (lǎo shī) = teacher. 同学 (tóng xué) = classmate. 学校 (xué xiào) = school. 中文不更难，只是不一样。每个字都是一幅有故事的小画。</>,
        zh: <>欢迎！你好（nǐ hǎo）= hello。老师（lǎo shī）= teacher。同学（tóng xué）= classmate。学校（xué xiào）= school。中文不更难，只是不一样。每个字都是一幅有故事的小画。</>,
      },
    },

    // ── 第一单元 识字 ──
    unitPage("一", "识字", "First Characters", "第一批汉字：天地人、五行、身体、自然、对韵。", ["天地人", "金木水火土", "口耳目", "日月水火", "对韵歌"]),
    shiziPage("天地人", [{ch:"天",py:"tiān",word:"天空"},{ch:"地",py:"dì",word:"大地"},{ch:"人",py:"rén",word:"人们"}], "天在上，地在下，人在中间--孩子最先认识的三个最大的字。", "一二三，三二一，一二三四五六七。天大地大，人也大。"),
    shiziPage("金木水火土", [{ch:"金",py:"jīn",word:"金子"},{ch:"木",py:"mù",word:"树木"},{ch:"水",py:"shuǐ",word:"流水"},{ch:"火",py:"huǒ",word:"生火"},{ch:"土",py:"tǔ",word:"泥土"}], "古人把世界分成金木水火土五行，它们会变化、相生相克。", "一二三四五，金木水火土。天地分上下，日月照今古。"),
    shiziPage("口耳目", [{ch:"口",py:"kǒu",word:"口腔"},{ch:"耳",py:"ěr",word:"耳朵"},{ch:"目",py:"mù",word:"目光"}], "口像张开的嘴，耳像耳朵，目像侧面的眼--都是象形字。", "口耳目，手足心。站如松，坐如钟。行如风，卧如弓。"),
    shiziPage("日月水火", [{ch:"日",py:"rì",word:"日月"},{ch:"月",py:"yuè",word:"月亮"},{ch:"水",py:"shuǐ",word:"山水"},{ch:"火",py:"huǒ",word:"火苗"}], "日是太阳，月是月亮，水火相伴--自然里最基本的字。", "日圆圆，月弯弯。水清清，火红红。"),
    shiziPage("对韵歌", [{ch:"云",py:"yún",word:"白云"},{ch:"雨",py:"yǔ",word:"下雨"},{ch:"风",py:"fēng",word:"刮风"},{ch:"雪",py:"xuě",word:"下雪"}], "云对雨，雪对风--中文喜欢成对、押韵的反义词。", "云对雨，雪对风。花对树，鸟对虫。山清对水秀，柳绿对桃红。"),
    speakPage("我说你做", "一人发指令，一人照做，练习听和做，认识身体词。", ["大声说，让别人听得见。", "听清楚，再做动作。"], ["请你举起右手。", "请你摸摸左耳。", "请你拍拍手。", "请你站起来。"]),
    gardenPage("一", ["识字加油站：人 口 手 目 耳 足--六字都是身体，也都是象形字。","字词句运用：比一比「人」和「入」、「大」和「天」，差一笔意思全不同。","书写提示：笔顺「从上到下，先横后竖」。写「十」先横后竖。"], { zhTitle: "咏鹅", lines: ["鹅鹅鹅，","曲项向天歌。","白毛浮绿水，","红掌拨清波。"] }),
    {
      kind: "reading", title: { en: "Happy Reading", zh: "快乐读书吧 · 读书真快乐" },
      body: {
        en: <>
          <p className="text-sm leading-relaxed text-ink/80">读书不是等认识所有字才读，是享受你已经认识的字。找一本中文图画书，把认识的字大声读出来。</p>
          <div className="mt-4 rounded-lg bg-amber-50/60 p-4">
            <p className="mb-2 text-sm font-bold text-amber-700">推荐书目</p>
            <ul className="list-disc space-y-1 pl-5 text-sm text-ink/80">
              <li>《猜猜我有多爱你》</li>
              <li>《好饿的毛毛虫》</li>
              <li>《爷爷一定有办法》</li>
              <li>《逃家小兔》</li>
            </ul>
          </div>
          <div className="mt-4 rounded-lg bg-teal/5 p-4">
            <p className="mb-2 text-sm font-bold text-teal">怎么读</p>
            <ol className="list-decimal space-y-1 pl-5 text-sm text-ink/80">
              <li>先看封面，猜一猜讲什么。</li>
              <li>一边看图，一边读认识的字。</li>
              <li>读给爸爸妈妈听。</li>
              <li>读完说一说：你最喜欢谁？</li>
            </ol>
          </div>
        </>,
        zh: <>
          <p className="text-sm leading-relaxed text-ink/80">读书不是等认识所有字才读，是享受你已经认识的字。找一本中文图画书，把认识的字大声读出来。</p>
          <div className="mt-4 rounded-lg bg-amber-50/60 p-4">
            <p className="mb-2 text-sm font-bold text-amber-700">推荐书目</p>
            <ul className="list-disc space-y-1 pl-5 text-sm text-ink/80">
              <li>《猜猜我有多爱你》</li>
              <li>《好饿的毛毛虫》</li>
              <li>《爷爷一定有办法》</li>
              <li>《逃家小兔》</li>
            </ul>
          </div>
          <div className="mt-4 rounded-lg bg-teal/5 p-4">
            <p className="mb-2 text-sm font-bold text-teal">怎么读</p>
            <ol className="list-decimal space-y-1 pl-5 text-sm text-ink/80">
              <li>先看封面，猜一猜讲什么。</li>
              <li>一边看图，一边读认识的字。</li>
              <li>读给爸爸妈妈听。</li>
              <li>读完说一说：你最喜欢谁？</li>
            </ol>
          </div>
        </>,
      },
    },

    // ── 第二单元 汉语拼音（一）──
    unitPage("二", "汉语拼音", "Pinyin (1)", "声母和单韵母，13 课的第一半。", ["a o e", "i u ü", "b p m f", "d t n l", "g k h", "j q x", "z c s", "zh ch sh r"]),
    pinyinPage("a o e", ["a -> mā 妈妈", "o -> ó 哦", "e -> é 鹅"], "三个开口韵母。张大嘴发 a，圆唇发 o，嘴角咧发 e。", "a：左半圆竖右弯。o：一笔圆。e：中格横再左半圆。", "哥哥打鼓 gē ge dǎ gǔ"),
    pinyinPage("i u ü", ["i -> yī 一", "u -> wǔ 五", "ü -> yú 鱼"], "i 齐齿，u 圆唇，ü 先发 i 再把嘴唇前突。", "i：竖加一点。u：竖右弯。ü：同 u 加两点。", "马虎 mǎ hu"),
    pinyinPage("b p m f", ["bà 爸", "pí 皮", "mā 妈", "fá 罚"], "双唇音。b 不送气，p 送气，m 鼻音，f 咬下唇。", "b：右半圆竖。p：竖出格。m：两半圆。f：竖弯加点。", "八百标兵 bā bǎi biāo bīng"),
    pinyinPage("d t n l", ["dà 大", "tù 兔", "nǐ 你", "lǜ 绿"], "舌尖抵上齿龈。d 不送气，t 送气，n 鼻音，l 舌尖两边出气。", "d：左下半圆。t：竖右弯加横。n：右半圆竖。l：竖加点。", "大头大头 dà tóu dà tóu"),
    pinyinPage("g k h", ["gē 哥", "kāi 开", "hǎo 好"], "舌根音。g 像鸽子咕，k 送气，h 呼气。", "g：左半圆竖左弯。k：加左斜。h：左竖弯。", "哥哥画虎 gē ge huà hǔ"),
    pinyinPage("j q x", ["jī 鸡", "qì 气", "xī 西"], "舌面音。j 紧贴，q 送气，x 留缝擦。j q x 后 ü 写 u。", "j：竖弯左斜加点。q：半圆竖右弯。x：两斜交叉。", "鸡吃米 jī chī mǐ"),
    pinyinPage("z c s", ["zì 字", "cǎi 彩", "sān 三"], "平舌音，舌尖抵齿背。z 不送气，c 送气，s 擦。", "z：左半圆横。c：左半圆。s：半圆连弯。", "三思 sān sī"),
    pinyinPage("zh ch sh r", ["zhī 知", "chī 吃", "shī 师", "rì 日"], "翘舌音，舌尖翘起抵硬腭。r 是浊擦音。", "zh ch sh：z c s 后加 h。r：竖弯带捺。", "四是四 shì shì shì"),
    gardenPage("二", ["识字加油站：用拼音读同学的名字。","字词句运用：读一读，连一连。","书写提示：拼音字母写在中格。"]),

    // ── 第三单元 汉语拼音（二）──
    unitPage("三", "汉语拼音（续）", "Pinyin (2)", "复韵母和鼻韵母，13 课的后半。", ["ai ei ui", "ao ou iu", "ie üe er", "an en in un ün", "ang eng ing ong"]),
    pinyinPage("ai ei ui", ["ài 爱", "hěi 黑", "shuǐ 水"], "复韵母，两音连读。ai 像爱，ei 像诶，ui 像威。", "ai：先 a 后 i。ei：先 e 后 i。ui：先 u 后 i。", "白菜 bái cài"),
    pinyinPage("ao ou iu", ["hǎo 好", "gǒu 狗", "liù 六"], "ao 像奥，ou 像欧，iu 像优。", "ao：先 a 后 o。ou：先 o 后 u。iu：先 i 后 u。", "小猫 xiǎo māo"),
    pinyinPage("ie üe er", ["jié 节", "xuě 雪", "èr 二"], "ie 像耶，üe 像约，er 卷舌单独成音节。", "ie üe：前音后 e。er：e 加 r。", "下雪 xià xuě"),
    pinyinPage("an en in un ün", ["sān 三", "rén 人", "jīn 金", "chūn 春", "yún 云"], "前鼻韵母，结尾舌尖抵上齿龈，气流从鼻出。", "都以 n 结尾。", "蓝天 lán tiān"),
    pinyinPage("ang eng ing ong", ["bāng 帮", "fēng 风", "xīng 星", "dōng 东"], "后鼻韵母，结尾舌根抵软腭，比前鼻更沉。", "都以 ng 结尾。", "帮助 bāng zhù"),
    gardenPage("三", ["识字加油站：拼一拼，读一读。","字词句运用：比一比，读一读。","日积月累：春眠不觉晓，处处闻啼鸟。"]),

    // ── 第四单元 课文 ──
    unitPage("四", "课文", "Texts", "秋天、小船、江南、四季--最早的散文诗。", ["秋天", "小小的船", "江南", "四季"]),
    ...lessonPage({
      zhTitle: "秋天", enTitle: "Autumn", pinyin: "qiū tiān",
      passage: [["qiū","秋"],["tiān","天"],["qì","气"],["liáng","凉"],["le","了"],["，","，"],["shù","树"],["yè","叶"],["huáng","黄"],["le","了"],["，","，"],["yī","一"],["piàn","片"],["piàn","片"],["yè","叶"],["zi","子"],["cóng","从"],["shù","树"],["shàng","上"],["luò","落"],["xià","下"],["lái","来"],["。","。"]],
      note: "最早的散文诗。「一片片」是叠词，让落叶有节奏。大雁排成「人」「一」字。",
      recognize: [{ch:"秋",py:"qiū",word:"秋天"},{ch:"气",py:"qì",word:"天气"},{ch:"树",py:"shù",word:"大树"},{ch:"叶",py:"yè",word:"树叶"},{ch:"片",py:"piàn",word:"一片"},{ch:"飞",py:"fēi",word:"飞鸟"},{ch:"会",py:"huì",word:"不会"},{ch:"个",py:"gè",word:"一个"}],
      write: [{ch:"了",py:"le",strokes:2,radical:"乙",word:"来了"},{ch:"子",py:"zi",strokes:3,radical:"子",word:"叶子"},{ch:"人",py:"rén",strokes:2,radical:"人",word:"人们"},{ch:"大",py:"dà",strokes:3,radical:"大",word:"大人"}],
      practice: ["朗读，注意「一片片」读出落叶节奏。","背诵全文。","用「一会儿……一会儿……」造句。","找叠词：一片片。"],
      think: "大雁为什么往南飞？",
    }),
    ...lessonPage({
      zhTitle: "小小的船", enTitle: "The Small Boat", pinyin: "xiǎo xiǎo de chuán",
      passage: [["wān","弯"],["wān","弯"],["de","的"],["yuè","月"],["er","儿"],["xiǎo","小"],["xiǎo","小"],["de","的"],["chuán","船"],["，","，"],["xiǎo","小"],["xiǎo","小"],["de","的"],["chuán","船"],["er","儿"],["liǎng","两"],["tóu","头"],["jiān","尖"],["。","。"],["wǒ","我"],["zài","在"],["xiǎo","小"],["xiǎo","小"],["de","的"],["chuán","船"],["lǐ","里"],["zuò","坐"],["，","，"],["zhǐ","只"],["kàn","看"],["jiàn","见"],["shǎn","闪"],["shǎn","闪"],["de","的"],["xīng","星"],["lán","蓝"],["lán","蓝"],["de","的"],["tiān","天"],["。","。"]],
      note: "叶圣陶儿歌。把弯月比作小船--比喻。全诗无生僻字，可整首背。",
      recognize: [{ch:"船",py:"chuán",word:"小船"},{ch:"弯",py:"wān",word:"弯弯"},{ch:"尖",py:"jiān",word:"尖尖"},{ch:"坐",py:"zuò",word:"坐下"},{ch:"看",py:"kàn",word:"看见"},{ch:"星",py:"xīng",word:"星星"},{ch:"蓝",py:"lán",word:"蓝天"},{ch:"只",py:"zhǐ",word:"只是"}],
      write: [{ch:"月",py:"yuè",strokes:4,radical:"月",word:"月亮"},{ch:"头",py:"tóu",strokes:5,radical:"大",word:"两头"},{ch:"里",py:"lǐ",strokes:7,radical:"里",word:"里面"},{ch:"可",py:"kě",strokes:5,radical:"口",word:"可爱"}],
      practice: ["朗读，读出叠词轻柔。","背诵全诗。","数叠词：弯弯、小小、闪闪、蓝蓝。","弯月比作什么？"],
      think: "你更喜欢弯月还是圆月？",
    }),
    ...lessonPage({
      zhTitle: "江南", enTitle: "Jiangnan", pinyin: "jiāng nán",
      passage: [["jiāng","江"],["nán","南"],["kě","可"],["cǎi","采"],["lián","莲"],["，","，"],["lián","莲"],["yè","叶"],["hé","何"],["tián","田"],["tián","田"],["。","。"],["yú","鱼"],["xì","戏"],["lián","莲"],["yè","叶"],["jiān","间"],["。","。"],["yú","鱼"],["xì","戏"],["lián","莲"],["yè","叶"],["dōng","东"],["，","，"],["xī","西"],["，","，"],["nán","南"],["，","，"],["běi","北"],["。","。"]],
      note: "汉乐府民歌。「田田」形容莲叶茂盛。鱼东西南北游，重复句式像鱼在游。",
      recognize: [{ch:"江",py:"jiāng",word:"江南"},{ch:"南",py:"nán",word:"南方"},{ch:"采",py:"cǎi",word:"采莲"},{ch:"莲",py:"lián",word:"莲花"},{ch:"鱼",py:"yú",word:"小鱼"},{ch:"北",py:"běi",word:"北方"},{ch:"东",py:"dōng",word:"东方"},{ch:"西",py:"xī",word:"西方"}],
      write: [{ch:"可",py:"kě",strokes:5,radical:"口",word:"可以"},{ch:"东",py:"dōng",strokes:5,radical:"一",word:"东西"},{ch:"西",py:"xī",strokes:6,radical:"襾",word:"西方"},{ch:"北",py:"běi",strokes:5,radical:"匕",word:"北方"}],
      practice: ["朗读，四句节奏相同像鱼在游。","背诵全诗。","「田田」什么意思？","「鱼戏莲叶」出现几次？后跟几个方向？"],
      think: "江南指长江以南，水多莲多。你家乡有水吗？",
    }),
    ...lessonPage({
      zhTitle: "四季", enTitle: "Four Seasons", pinyin: "sì jì",
      passage: [["cǎo","草"],["yá","芽"],["jiān","尖"],["jiān","尖"],["，","，"],["tā","他"],["duì","对"],["xiǎo","小"],["niǎo","鸟"],["shuō","说"],["：","："],["「","「"],["wǒ","我"],["shì","是"],["chūn","春"],["tiān","天"],["。","。"],["」","」"],["hé","荷"],["yè","叶"],["yuán","圆"],["yuán","圆"],["，","，"],["tā","他"],["shuō","说"],["：","："],["「","「"],["wǒ","我"],["shì","是"],["xià","夏"],["tiān","天"],["。","。"],["」","」"]],
      note: "童诗，每季选一代表事物说话。形状：尖、圆、弯、挺。",
      recognize: [{ch:"春",py:"chūn",word:"春天"},{ch:"夏",py:"xià",word:"夏天"},{ch:"秋",py:"qiū",word:"秋天"},{ch:"冬",py:"dōng",word:"冬天"},{ch:"草",py:"cǎo",word:"小草"},{ch:"雪",py:"xuě",word:"下雪"},{ch:"说",py:"shuō",word:"说话"},{ch:"圆",py:"yuán",word:"圆圆"}],
      write: [{ch:"天",py:"tiān",strokes:4,radical:"大",word:"春天"},{ch:"四",py:"sì",strokes:5,radical:"囗",word:"四季"},{ch:"是",py:"shì",strokes:9,radical:"日",word:"是的"},{ch:"对",py:"duì",strokes:5,radical:"又",word:"对错"}],
      practice: ["朗读，每季不同语气。","背诵全诗。","四季分别用什么代表？什么形状？","仿写一句「我是×天」。"],
      think: "你最喜欢哪个季节？为什么？",
    }),
    speakPage("我们做朋友", "找一个同学，主动介绍自己，记住对方的名字。", ["看着对方的眼睛。", "说清楚自己的名字。", "记住对方的名字。"], ["你好，我叫小明，我们做朋友吧。", "你好，我叫小红，很高兴认识你。", "你叫什么名字？我们一起玩吧。"]),
    gardenPage("四", ["识字加油站：一年四季：春夏秋冬。","字词句运用：用「也」造句--我是学生，他也是学生。","书写提示：先撇后捺。写「人」先撇后捺。","展示台：把学过的字读给家人听。"], { zhTitle: "静夜思", lines: ["床前明月光，","疑是地上霜。","举头望明月，","低头思故乡。"] }),

    // ── 第五单元 识字 ──
    unitPage("五", "识字", "More Characters", "画、大小多少、小书包、日月明、升国旗。", ["画", "大小多少", "小书包", "日月明", "升国旗"]),
    ...lessonPage({
      zhTitle: "画", enTitle: "A Painting", pinyin: "huà",
      passage: [["yuǎn","远"],["kàn","看"],["shān","山"],["yǒu","有"],["sè","色"],["，","，"],["jìn","近"],["tīng","听"],["shuǐ","水"],["wú","无"],["shēng","声"],["。","。"],["chūn","春"],["qù","去"],["huā","花"],["hái","还"],["zài","在"],["，","，"],["rén","人"],["lái","来"],["niǎo","鸟"],["bù","不"],["jīng","惊"],["。","。"]],
      note: "谜语诗，谜底是「画」。画里的山水花鸟都不真--反常就是画。",
      recognize: [{ch:"远",py:"yuǎn",word:"远处"},{ch:"色",py:"sè",word:"颜色"},{ch:"近",py:"jìn",word:"近处"},{ch:"声",py:"shēng",word:"声音"},{ch:"惊",py:"jīng",word:"惊动"},{ch:"无",py:"wú",word:"没有"},{ch:"来",py:"lái",word:"过来"},{ch:"还",py:"hái",word:"还在"}],
      write: [{ch:"人",py:"rén",strokes:2,radical:"人",word:"人们"},{ch:"来",py:"lái",strokes:7,radical:"木",word:"过来"},{ch:"去",py:"qù",strokes:5,radical:"厶",word:"过去"},{ch:"水",py:"shuǐ",strokes:4,radical:"水",word:"流水"}],
      practice: ["朗读，读出反常语气。","背诵全诗。","谜底是什么？为什么？","找反义词：远-近、有-无、来-去。"],
      think: "为什么画里的水没有声音？",
    }),
    ...lessonPage({
      zhTitle: "大小多少", enTitle: "Big, Small, More, Less", pinyin: "dà xiǎo duō shǎo",
      passage: [["yī","一"],["gè","个"],["dà","大"],["，","，"],["yī","一"],["gè","个"],["xiǎo","小"],["，","，"],["yī","一"],["zhī","只"],["huáng","黄"],["niú","牛"],["yī","一"],["zhī","只"],["māo","猫"],["。","。"],["yī","一"],["biān","边"],["duō","多"],["，","，"],["yī","一"],["biān","边"],["shǎo","少"],["，","，"],["yī","一"],["qún","群"],["yā","鸭"],["yī","一"],["zhī","只"],["niǎo","鸟"],["。","。"]],
      note: "儿歌练量词：一只、一个、一颗、一堆。不同物用不同量词。",
      recognize: [{ch:"多",py:"duō",word:"多少"},{ch:"少",py:"shǎo",word:"很少"},{ch:"只",py:"zhī",word:"一只"},{ch:"颗",py:"kē",word:"一颗"},{ch:"堆",py:"duī",word:"一堆"},{ch:"苹",py:"píng",word:"苹果"},{ch:"杏",py:"xìng",word:"杏子"},{ch:"桃",py:"táo",word:"桃子"}],
      write: [{ch:"小",py:"xiǎo",strokes:3,radical:"小",word:"大小"},{ch:"少",py:"shǎo",strokes:4,radical:"小",word:"多少"},{ch:"牛",py:"niú",strokes:4,radical:"牛",word:"黄牛"},{ch:"果",py:"guǒ",strokes:8,radical:"木",word:"苹果"}],
      practice: ["朗读，注意量词。","背诵前两段。","填空：一（ ）牛、一（ ）苹果、一（ ）枣、一（ ）杏子。","哪些是动物？哪些是水果？"],
      think: "为什么鸭子用「一群」？",
    }),
    ...lessonPage({
      zhTitle: "小书包", enTitle: "My Little Schoolbag", pinyin: "xiǎo shū bāo",
      passage: [["wǒ","我"],["de","的"],["xiǎo","小"],["shū","书"],["bāo","包"],["，","，"],["bǎo","宝"],["bèi","贝"],["zhēn","真"],["bù","不"],["shǎo","少"],["。","。"],["qiān","铅"],["bǐ","笔"],["xiàng","橡"],["pí","皮"],["zhuǎn","转"],["bǐ","笔"],["dāo","刀"],["，","，"],["zuò","作"],["yè","业"],["běn","本"],["，","，"],["liàn","练"],["xí","习"],["cè","册"],["。","。"]],
      note: "生活儿歌，文具拟人化：「天天上学带着我」。",
      recognize: [{ch:"书",py:"shū",word:"书包"},{ch:"包",py:"bāo",word:"书包"},{ch:"笔",py:"bǐ",word:"铅笔"},{ch:"刀",py:"dāo",word:"小刀"},{ch:"本",py:"běn",word:"本子"},{ch:"学",py:"xué",word:"上学"},{ch:"早",py:"zǎo",word:"早上"},{ch:"校",py:"xiào",word:"学校"}],
      write: [{ch:"书",py:"shū",strokes:4,radical:"乙",word:"书本"},{ch:"本",py:"běn",strokes:5,radical:"木",word:"本子"},{ch:"早",py:"zǎo",strokes:6,radical:"日",word:"早上"},{ch:"刀",py:"dāo",strokes:2,radical:"刀",word:"小刀"}],
      practice: ["朗读，读出喜爱。","说一说你的书包里有什么。","「带着我」是谁带谁？什么修辞？","「学」字几画？书空笔顺。"],
      think: "怎么爱惜书包和文具？",
    }),
    ...lessonPage({
      zhTitle: "日月明", enTitle: "Sun, Moon, Bright", pinyin: "rì yuè míng",
      passage: [["rì","日"],["yuè","月"],["míng","明"],["，","，"],["tián","田"],["lì","力"],["nán","男"],["。","。"],["xiǎo","小"],["dà","大"],["jiān","尖"],["，","，"],["xiǎo","小"],["tǔ","土"],["chén","尘"],["。","。"],["èr","二"],["rén","人"],["cóng","从"],["，","，"],["sān","三"],["rén","人"],["zhòng","众"],["。","。"],["shuāng","双"],["mù","木"],["lín","林"],["，","，"],["sān","三"],["mù","木"],["sēn","森"],["。","。"]],
      note: "讲「会意字」--两字合成新字。日+月=明，田+力=男，小+大=尖。",
      recognize: [{ch:"明",py:"míng",word:"明白"},{ch:"男",py:"nán",word:"男生"},{ch:"尖",py:"jiān",word:"尖尖"},{ch:"尘",py:"chén",word:"灰尘"},{ch:"从",py:"cóng",word:"从前"},{ch:"众",py:"zhòng",word:"群众"},{ch:"林",py:"lín",word:"树林"},{ch:"森",py:"sēn",word:"森林"}],
      write: [{ch:"木",py:"mù",strokes:4,radical:"木",word:"树木"},{ch:"林",py:"lín",strokes:8,radical:"木",word:"树林"},{ch:"土",py:"tǔ",strokes:3,radical:"土",word:"泥土"},{ch:"力",py:"lì",strokes:2,radical:"力",word:"力气"}],
      practice: ["朗读，注意每字都由两字合成。","背诵全诗。","日+月=？田+力=？小+大=？","猜：人+木=？（休）"],
      think: "汉字像积木，能拼。再想几个会意字？",
    }),
    shiziPage("升国旗", [{ch:"升",py:"shēng",word:"升起"},{ch:"国",py:"guó",word:"国旗"},{ch:"旗",py:"qí",word:"红旗"},{ch:"中",py:"zhōng",word:"中国"}], "国旗缓缓升起，我们立正敬礼。升、国、旗、中--认识国家。", "五星红旗，我们的国旗。国歌声中，徐徐升起。我们立正，向您敬礼。"),
    gardenPage("五", ["识字加油站：量词朋友--一只猫、一条鱼、一本书、一棵树、一朵花。","字词句运用：把「大、小、多、少」各组一个词。","书写提示：先中间后两边。写「小」先竖钩后两点。"], { zhTitle: "悯农", lines: ["锄禾日当午，","汗滴禾下土。","谁知盘中餐，","粒粒皆辛苦。"] }),

    // ── 第六单元 课文 ──
    unitPage("六", "课文", "Texts", "影子、尾巴、青蛙、雨点--身边的奇妙。", ["影子", "比尾巴", "青蛙写诗", "雨点儿"]),
    ...lessonPage({
      zhTitle: "影子", enTitle: "Shadow", pinyin: "yǐng zi",
      passage: [["yǐng","影"],["zi","子"],["zài","在"],["qián","前"],["，","，"],["yǐng","影"],["zi","子"],["zài","在"],["hòu","后"],["。","。"],["yǐng","影"],["zi","子"],["cháng","常"],["cháng","常"],["gēn","跟"],["zhe","着"],["wǒ","我"],["，","，"],["jiù","就"],["xiàng","像"],["yī","一"],["tiáo","条"],["xiǎo","小"],["hēi","黑"],["gǒu","狗"],["。","。"]],
      note: "影子像小黑狗，常跟着我。讲光影：有光才有影，光在左影在右。",
      recognize: [{ch:"影",py:"yǐng",word:"影子"},{ch:"前",py:"qián",word:"前后"},{ch:"后",py:"hòu",word:"后面"},{ch:"常",py:"cháng",word:"常常"},{ch:"跟",py:"gēn",word:"跟着"},{ch:"黑",py:"hēi",word:"黑色"}],
      write: [{ch:"在",py:"zài",strokes:6,radical:"土",word:"现在"},{ch:"后",py:"hòu",strokes:6,radical:"口",word:"后面"},{ch:"我",py:"wǒ",strokes:7,radical:"戈",word:"我们"},{ch:"好",py:"hǎo",strokes:6,radical:"女",word:"好的"}],
      practice: ["朗读，注意「常常」连读。","影子什么时候在前？在后？","为什么说影子像小黑狗？"],
      think: "晚上路灯下影子会变长变短吗？",
    }),
    ...lessonPage({
      zhTitle: "比尾巴", enTitle: "Comparing Tails", pinyin: "bǐ wěi ba",
      passage: [["shuí","谁"],["de","的"],["wěi","尾"],["ba","巴"],["cháng","长"],["？","？"],["shān","山"],["hóu","猴"],["de","的"],["wěi","尾"],["ba","巴"],["cháng","长"],["。","。"],["shuí","谁"],["de","的"],["wěi","尾"],["ba","巴"],["duǎn","短"],["？","？"],["tù","兔"],["zi","子"],["de","的"],["wěi","尾"],["ba","巴"],["duǎn","短"],["。","。"]],
      note: "问答儿歌，比动物尾巴。问答式是民歌常见句式。",
      recognize: [{ch:"尾",py:"wěi",word:"尾巴"},{ch:"巴",py:"bā",word:"下巴"},{ch:"谁",py:"shuí",word:"谁的"},{ch:"长",py:"cháng",word:"长短"},{ch:"短",py:"duǎn",word:"短小"},{ch:"猴",py:"hóu",word:"猴子"}],
      write: [{ch:"长",py:"cháng",strokes:4,radical:"长",word:"长短"},{ch:"比",py:"bǐ",strokes:4,radical:"比",word:"比较"},{ch:"巴",py:"bā",strokes:4,radical:"己",word:"下巴"},{ch:"把",py:"bǎ",strokes:7,radical:"扌",word:"把手"}],
      practice: ["一问一答朗读，问号语气上扬。","还知道谁的尾巴长/短？","用「谁的……长？……的长。」造句。"],
      think: "松鼠的尾巴像什么？孔雀的尾巴像什么？",
    }),
    ...lessonPage({
      zhTitle: "青蛙写诗", enTitle: "Frog Writes a Poem", pinyin: "qīng wā xiě shī",
      passage: [["xià","下"],["yǔ","雨"],["le","了"],["，","，"],["yǔ","雨"],["diǎn","点"],["xī","淅"],["lì","沥"],["lì","沥"],["。","。"],["qīng","青"],["wā","蛙"],["shuō","说"],["：","："],["wǒ","我"],["yào","要"],["xiě","写"],["shī","诗"],["la","啦"],["！","！"]],
      note: "青蛙把雨声当诗。蝌蚪当逗号、水泡当句号、水珠当省略号--用自然物学标点。",
      recognize: [{ch:"青",py:"qīng",word:"青蛙"},{ch:"蛙",py:"wā",word:"青蛙"},{ch:"写",py:"xiě",word:"写字"},{ch:"诗",py:"shī",word:"古诗"},{ch:"雨",py:"yǔ",word:"下雨"},{ch:"点",py:"diǎn",word:"雨点"}],
      write: [{ch:"下",py:"xià",strokes:3,radical:"一",word:"下雨"},{ch:"个",py:"gè",strokes:3,radical:"人",word:"一个"},{ch:"雨",py:"yǔ",strokes:8,radical:"雨",word:"下雨"},{ch:"们",py:"men",strokes:5,radical:"亻",word:"我们"}],
      practice: ["朗读，模仿雨声「淅沥沥」。","蝌蚪像什么标点？水泡呢？","用一种声音写一句「诗」。"],
      think: "标点符号有什么用？",
    }),
    ...lessonPage({
      zhTitle: "雨点儿", enTitle: "Raindrops", pinyin: "yǔ diǎn er",
      passage: [["shù","数"],["bù","不"],["qīng","清"],["de","的"],["yǔ","雨"],["diǎn","点"],["er","儿"],["，","，"],["cóng","从"],["yún","云"],["lǐ","里"],["luò","落"],["xià","下"],["lái","来"],["。","。"],["dà","大"],["yǔ","雨"],["diǎn","点"],["wèn","问"],["xiǎo","小"],["yǔ","雨"],["diǎn","点"],["：","："],["nǐ","你"],["yào","要"],["dào","到"],["nǎ","哪"],["lǐ","里"],["qù","去"],["？","？"]],
      note: "大雨点问小雨点去哪。大雨点去没花没草处，小雨点去有花有草处--各有所用。",
      recognize: [{ch:"数",py:"shù",word:"数数"},{ch:"清",py:"qīng",word:"清水"},{ch:"云",py:"yún",word:"白云"},{ch:"空",py:"kōng",word:"天空"},{ch:"问",py:"wèn",word:"问好"},{ch:"到",py:"dào",word:"来到"}],
      write: [{ch:"问",py:"wèn",strokes:6,radical:"门",word:"问好"},{ch:"有",py:"yǒu",strokes:6,radical:"月",word:"没有"},{ch:"半",py:"bàn",strokes:5,radical:"十",word:"一半"},{ch:"从",py:"cóng",strokes:4,radical:"人",word:"从前"}],
      practice: ["朗读，大雨点小雨点不同语气。","大雨点去哪？小雨点去哪？","雨点落下，大地有什么变化？"],
      think: "花和草有雨会怎样？没雨呢？",
    }),
    speakPage("用多大的声音", "讨论什么时候大声、什么时候小声，声音大小要看场合。", ["看场合决定声音大小。", "公共场所不大喊大叫。"], ["操场上喊同学：大声。", "图书馆里说话：小声。", "课堂上回答：清楚响亮。"]),
    gardenPage("六", ["识字加油站：我的前后左右都有谁。","字词句运用：读一读，说一说。","书写提示：笔顺「先外后内」。写「月」先外后内。"], { zhTitle: "古朗月行", lines: ["小时不识月，","呼作白玉盘。","又疑瑶台镜，","飞在青云端。"] }),

    // ── 第七单元 课文 ──
    unitPage("七", "课文", "Texts", "远足的期待、自己的大小、海边的项链。", ["明天要远足", "大还是小", "项链"]),
    ...lessonPage({
      zhTitle: "明天要远足", enTitle: "Hiking Tomorrow", pinyin: "míng tiān yào yuǎn zú",
      passage: [["fān","翻"],["guò","过"],["lái","来"],["，","，"],["āi","哎"],["yā","呀"],["！","！"],["wàng","望"],["zhe","着"],["nà","那"],["dì","地"],["fāng","方"],["，","，"],["shuì","睡"],["bù","不"],["zháo","着"],["le","了"],["。","。"]],
      note: "孩子因为明天远足激动得睡不着。把「期待」写成翻来覆去。",
      recognize: [{ch:"明",py:"míng",word:"明天"},{ch:"远",py:"yuǎn",word:"远近"},{ch:"足",py:"zú",word:"满足"},{ch:"睡",py:"shuì",word:"睡觉"},{ch:"着",py:"zhe",word:"看着"},{ch:"那",py:"nà",word:"那个"}],
      write: [{ch:"明",py:"míng",strokes:8,radical:"日",word:"明天"},{ch:"同",py:"tóng",strokes:6,radical:"口",word:"同学"},{ch:"学",py:"xué",strokes:8,radical:"子",word:"学习"},{ch:"才",py:"cái",strokes:3,radical:"扌",word:"刚才"}],
      practice: ["朗读，读出又期待又睡不着。","你有过明天有事今晚睡不着吗？","「翻过来翻过去」说明什么？"],
      think: "期待一件事，是快乐还是难受？",
    }),
    ...lessonPage({
      zhTitle: "大还是小", enTitle: "Big or Small", pinyin: "dà hái shì xiǎo",
      passage: [["yǒu","有"],["shí","时"],["hou","候"],["，","，"],["wǒ","我"],["jué","觉"],["de","得"],["zì","自"],["jǐ","己"],["hěn","很"],["dà","大"],["。","。"],["yǒu","有"],["shí","时"],["hou","候"],["，","，"],["wǒ","我"],["jué","觉"],["de","得"],["zì","自"],["jǐ","己"],["hěn","很"],["xiǎo","小"],["。","。"]],
      note: "有时候觉得自己很大，有时候觉得很小。讲孩子对「长大」的感受。",
      recognize: [{ch:"时",py:"shí",word:"时候"},{ch:"候",py:"hòu",word:"时候"},{ch:"自",py:"zì",word:"自己"},{ch:"己",py:"jǐ",word:"自己"},{ch:"觉",py:"jué",word:"觉得"},{ch:"得",py:"de",word:"觉得"}],
      write: [{ch:"自",py:"zì",strokes:6,radical:"自",word:"自己"},{ch:"己",py:"jǐ",strokes:3,radical:"己",word:"自己"},{ch:"大",py:"dà",strokes:3,radical:"大",word:"大小"},{ch:"小",py:"xiǎo",strokes:3,radical:"小",word:"大小"}],
      practice: ["朗读，读出大和小的对比。","你什么时候觉得自己大？什么时候小？","用「有时候……有时候……」造句。"],
      think: "长大好不好？为什么？",
    }),
    ...lessonPage({
      zhTitle: "项链", enTitle: "The Necklace", pinyin: "xiàng liàn",
      passage: [["dà","大"],["hǎi","海"],["lán","蓝"],["lán","蓝"],["de","的"],["，","，"],["yòu","又"],["kuān","宽"],["yòu","又"],["yuǎn","远"],["。","。"],["xiǎo","小"],["wá","娃"],["wa","娃"],["xiào","笑"],["zhe","着"],["pǎo","跑"],["chū","出"],["lái","来"],["，","，"],["rěn","捡"],["qǐ","起"],["yī","一"],["kē","颗"],["bèi","贝"],["ké","壳"],["。","。"]],
      note: "大海蓝蓝宽又远，小娃娃捡贝壳当项链。写海边童趣。",
      recognize: [{ch:"海",py:"hǎi",word:"大海"},{ch:"蓝",py:"lán",word:"蓝色"},{ch:"宽",py:"kuān",word:"宽广"},{ch:"远",py:"yuǎn",word:"远近"},{ch:"贝",py:"bèi",word:"贝壳"},{ch:"壳",py:"ké",word:"贝壳"}],
      write: [{ch:"白",py:"bái",strokes:5,radical:"白",word:"白色"},{ch:"的",py:"de",strokes:8,radical:"白",word:"好的"},{ch:"又",py:"yòu",strokes:2,radical:"又",word:"又大又远"},{ch:"和",py:"hé",strokes:8,radical:"口",word:"和好"}],
      practice: ["朗读，读出海的辽阔。","大海是什么颜色？什么样？","用「又……又……」造句（又宽又远）。","捡贝壳当什么？"],
      think: "你去过海边吗？海边还有什么？",
    }),
    gardenPage("七", ["识字加油站：哥哥、弟弟、姐姐、妹妹--家人称呼。","字词句运用：读一读，比一比。","展示台：在街上找认识的字。"], { zhTitle: "登鹳雀楼", lines: ["白日依山尽，","黄河入海流。","欲穷千里目，","更上一层楼。"] }),

    // ── 第八单元 课文 ──
    unitPage("八", "课文", "Texts", "雪地画画、乌鸦喝水、小壁虎借尾巴。", ["雪地里的小画家", "乌鸦喝水", "小壁虎借尾巴"]),
    ...lessonPage({
      zhTitle: "雪地里的小画家", enTitle: "Painters in the Snow", pinyin: "xuě dì lǐ de xiǎo huà jiā",
      passage: [["xià","下"],["xuě","雪"],["le","了"],["，","，"],["xuě","雪"],["dì","地"],["lǐ","里"],["lái","来"],["le","了"],["yī","一"],["qún","群"],["xiǎo","小"],["huà","画"],["jiā","家"],["。","。"],["xiǎo","小"],["jī","鸡"],["huà","画"],["zhú","竹"],["yè","叶"],["，","，"],["xiǎo","小"],["gǒu","狗"],["huà","画"],["méi","梅"],["huā","花"],["。","。"]],
      note: "小鸡脚印像竹叶，小狗脚印像梅花。雪是它们的纸--动物脚印当画。",
      recognize: [{ch:"雪",py:"xuě",word:"下雪"},{ch:"地",py:"dì",word:"雪地"},{ch:"画",py:"huà",word:"画画"},{ch:"家",py:"jiā",word:"画家"},{ch:"鸡",py:"jī",word:"小鸡"},{ch:"狗",py:"gǒu",word:"小狗"},{ch:"竹",py:"zhú",word:"竹叶"},{ch:"梅",py:"méi",word:"梅花"}],
      write: [{ch:"雪",py:"xuě",strokes:11,radical:"雨",word:"下雪"},{ch:"地",py:"dì",strokes:6,radical:"土",word:"雪地"},{ch:"画",py:"huà",strokes:8,radical:"田",word:"画画"},{ch:"家",py:"jiā",strokes:10,radical:"宀",word:"画家"}],
      practice: ["朗读，读出欢快。","小鸡画什么？小狗画什么？","为什么说它们是小画家？","你还知道谁的脚印像什么？"],
      think: "青蛙为什么没参加？（冬眠）",
    }),
    ...lessonPage({
      zhTitle: "乌鸦喝水", enTitle: "The Crow Drinks Water", pinyin: "wū yā hē shuǐ",
      passage: [["yī","一"],["zhī","只"],["wū","乌"],["yā","鸦"],["kǒu","口"],["kě","渴"],["le","了"],["，","，"],["dào","到"],["chù","处"],["zhǎo","找"],["shuǐ","水"],["hē","喝"],["。","。"],["wū","乌"],["yā","鸦"],["kàn","看"],["jiàn","见"],["yī","一"],["gè","个"],["píng","瓶"],["zi","子"],["，","，"],["píng","瓶"],["zi","子"],["lǐ","里"],["yǒu","有"],["shuǐ","水"],["。","。"]],
      note: "乌鸦把石子放进瓶里，水升高，喝到了。动脑筋解决问题的故事。",
      recognize: [{ch:"乌",py:"wū",word:"乌鸦"},{ch:"鸦",py:"yā",word:"乌鸦"},{ch:"渴",py:"kě",word:"口渴"},{ch:"瓶",py:"píng",word:"瓶子"},{ch:"高",py:"gāo",word:"高大"},{ch:"石",py:"shí",word:"石头"}],
      write: [{ch:"只",py:"zhī",strokes:5,radical:"口",word:"一只"},{ch:"石",py:"shí",strokes:5,radical:"石",word:"石头"},{ch:"多",py:"duō",strokes:6,radical:"夕",word:"多少"},{ch:"出",py:"chū",strokes:5,radical:"凵",word:"出来"}],
      practice: ["朗读，注意从「渴」到「喝到」的变化。","乌鸦想了什么办法？为什么行？","没有石子，乌鸦还能怎么办？"],
      think: "遇到困难不动脑，能解决吗？",
    }),
    ...lessonPage({
      zhTitle: "小壁虎借尾巴", enTitle: "The Gecko Borrows a Tail", pinyin: "xiǎo bì hǔ jiè wěi ba",
      passage: [["xiǎo","小"],["bì","壁"],["hǔ","虎"],["de","的"],["wěi","尾"],["ba","巴"],["duàn","断"],["le","了"],["，","，"],["tā","他"],["qù","去"],["jiè","借"],["wěi","尾"],["ba","巴"],["。","。"],["xiàng","向"],["lǎo","老"],["niú","牛"],["jiè","借"],["，","，"],["lǎo","老"],["niú","牛"],["shuō","说"],["：","："],["bù","不"],["xíng","行"],["。","。"]],
      note: "小壁虎尾巴断了去借，老牛、小鱼、燕子都说不行--每种动物的尾巴都有用。最后壁虎自己长出新尾巴。",
      recognize: [{ch:"壁",py:"bì",word:"壁虎"},{ch:"虎",py:"hǔ",word:"壁虎"},{ch:"尾",py:"wěi",word:"尾巴"},{ch:"借",py:"jiè",word:"借书"},{ch:"牛",py:"niú",word:"老牛"},{ch:"鱼",py:"yú",word:"小鱼"},{ch:"行",py:"xíng",word:"不行"},{ch:"新",py:"xīn",word:"新的"}],
      write: [{ch:"虫",py:"chóng",strokes:6,radical:"虫",word:"小虫"},{ch:"角",py:"jiǎo",strokes:7,radical:"角",word:"牛角"},{ch:"用",py:"yòng",strokes:5,radical:"用",word:"有用"},{ch:"它",py:"tā",strokes:5,radical:"宀",word:"它"}],
      practice: ["朗读，读出借尾巴的语气。","小壁虎向谁借了？它们怎么说？","为什么都没借到？","小壁虎最后怎样了？（长出新尾巴）"],
      think: "每种动物的尾巴有什么用？",
    }),
    speakPage("小兔运南瓜", "小兔要把大南瓜运回家，想办法并说出理由。", ["先想一想，再说一说。", "说出你的理由。"], ["我把南瓜滚回家，因为南瓜是圆的。", "我请朋友帮忙抬回家。", "我用小车把南瓜推回家。"]),
    gardenPage("八", ["识字加油站：冬天的字--雪、冰、冷、风。","字词句运用：读一读，演一演。","书写提示：笔顺「先里头后封口」。写「田」先里后封。"], { zhTitle: "风", lines: ["解落三秋叶，","能开二月花。","过江千尺浪，","入竹万竿斜。"] }),

    // ── 附表 ──
    {
      kind: "vocablist", title: { en: "Characters to Read", zh: "识字表（会认）" },
      body: {
        en: <>100 characters to <b>recognize</b>:<br/><br/>一 二 三 四 五 六 七 八 九 十<br/>人 口 手 目 耳 足<br/>日 月 水 火 山 石 田 禾<br/>上 下 大 小 多 少 半<br/>天 地 花 鸟 鱼 虫 草 木 林 森<br/>你好 我 他 她 老师 同学 学校<br/>春夏秋冬 风 云 雨 雪<br/>书 包 笔 本 刀 学 早 校<br/>明 男 尖 尘 从 众 休<br/>远 近 色 声 惊 无 来<br/>船 弯 坐 看 星 蓝 只<br/>江南 采 莲 东西 北<br/>影 前 后 常 跟 黑<br/>尾 巴 谁 长 短 猴<br/>青 蛙 写 诗 点<br/>问 有 半 从 到<br/>海 宽 贝 壳<br/>雪 画 家 鸡 狗 竹 梅<br/>乌 鸦 渴 瓶 高 石<br/>壁 虎 借 行 新</>,
        zh: <>这 100 个字要<b>会认</b>：<br/><br/>一 二 三 四 五 六 七 八 九 十<br/>人 口 手 目 耳 足<br/>日 月 水 火 山 石 田 禾<br/>上 下 大 小 多 少 半<br/>天 地 花 鸟 鱼 虫 草 木 林 森<br/>你好 我 他 她 老师 同学 学校<br/>春夏秋冬 风 云 雨 雪<br/>书 包 笔 本 刀 学 早 校<br/>明 男 尖 尘 从 众 休<br/>远 近 色 声 惊 无 来<br/>船 弯 坐 看 星 蓝 只<br/>江南 采 莲 东西 北<br/>影 前 后 常 跟 黑<br/>尾 巴 谁 长 短 猴<br/>青 蛙 写 诗 点<br/>问 有 半 从 到<br/>海 宽 贝 壳<br/>雪 画 家 鸡 狗 竹 梅<br/>乌 鸦 渴 瓶 高 石<br/>壁 虎 借 行 新</>,
      },
    },
    {
      kind: "vocablist", title: { en: "Characters to Write", zh: "写字表（会写）" },
      body: {
        en: <>These you should <b>write</b> from memory:<br/><br/>一 二 三 十 禾 木 土 力<br/>上 下 大 小 多 少<br/>日月水火山石田<br/>人口手足目耳<br/>你好我他她<br/>春夏秋冬<br/>书包笔本刀学早校<br/>明男尖尘从众林森<br/>来了 子 人们 大人 月头里可<br/>东西南北 天四是对<br/>人去来水 小少牛果<br/>在 后 我 好 问 有 半 从<br/>自 己 大 小 又 和<br/>白 的 又 和<br/>只 石 多 出 虫 角 用 它<br/>雪 地 画 家</>,
        zh: <>这些要<b>会写</b>：<br/><br/>一 二 三 十 禾 木 土 力<br/>上 下 大 小 多 少<br/>日月水火山石田<br/>人口手足目耳<br/>你好我他她<br/>春夏秋冬<br/>书包笔本刀学早校<br/>明男尖尘从众林森<br/>来了 子 人们 大人 月头里可<br/>东西南北 天四是对<br/>人去来水 小少牛果<br/>在 后 我 好 问 有 半 从<br/>自 己 大 小 又 和<br/>白 的 又 和<br/>只 石 多 出 虫 角 用 它<br/>雪 地 画 家</>,
      },
    },
    strokePage("常用偏旁名称表", "氵（三点水）-> 河、海；扌（提手旁）-> 打、拍；木（木字旁）-> 树、林；艹（草字头）-> 花、草；日（日字旁）-> 明、早；女（女字旁）-> 妈、姐；心（心字底）-> 想、念；宀（宝盖头）-> 家、它；虫（虫字旁）-> 虾、蚁；辶（走之底）-> 进、远。认偏旁，猜字义。"),
    strokePage("常用笔画名称表", "横（一）、竖（丨）、撇（丿）、捺（㇏）、点（丶）、提（㇀）、横折（ㄱ）、竖弯钩（乚）、横撇（㇇）、竖钩（亅）。写字前先认笔画，再按笔顺写。"),
    {
      kind: "back", title: { en: "Afterword", zh: "后记" },
      body: {
        en: <>You finished your first Chinese book, structured after the People's Education Press first-grade textbook. You can now read about a hundred characters and recite several poems. The next book goes further - but you have done the hardest thing: you started. 一年级 · 下册 continues here.</>,
        zh: <>你读完了第一本中文书，按人教版一年级上册的结构编写。你能认约一百个字、会背好几首诗。下一本走得更远--但你已经做了最难的事：你开始了。一年级 · 下册 从这里继续。</>,
      },
    },
  ],
};
// ── 页面构造辅助 ──
// 由声母/韵母自动派生拼读音节，让拼音课有真实的"拼读"练习。
function deriveBlends(title: string): string[] {
  const finals = ["a", "o", "e", "i", "u"];
  const tokens = title.split(/\s+/).filter(Boolean);
  const out: string[] = [];
  for (const t of tokens) {
    if (/^[bpmfdtnlgkhjqxzcs]$|^(zh|ch|sh|r)$/.test(t)) {
      out.push(`${t}-a→${t}a`, `${t}-o→${t}o`);
    } else if (/^[aeiuvü]/.test(t)) {
      out.push(`${t}→${t}ā`, `${t}→${t}á`);
    }
  }
  return out.slice(0, 8);
}

function pinyinPage(title: string, words: string[], teach: string, stroke: string, tongue: string) {
  const blends = deriveBlends(title);
  return {
    kind: "lesson" as const,
    title: { en: `Pinyin: ${title}`, zh: `汉语拼音：${title}` },
    body: {
      en: <>
        <p className="text-base leading-relaxed text-ink/80">{teach}</p>
        <div className="mt-4 rounded-lg bg-[#b3121f]/5 p-4">
          <p className="mb-2 font-bold text-[#b3121f]">读一读</p>
          <p className="font-serif-sc text-2xl tracking-wider">{words.join("   ")}</p>
        </div>
        {blends.length > 0 && (
          <div className="mt-4 rounded-lg bg-[#2d6a4f]/5 p-4">
            <p className="mb-2 font-bold text-teal">拼一拼</p>
            <p className="font-serif-sc text-xl tracking-wide">{blends.join("   ")}</p>
          </div>
        )}
        <div className="mt-4 rounded-lg bg-teal/5 p-4">
          <p className="mb-2 font-bold text-teal">书写提示（四线三格）</p>
          <p className="text-sm text-ink/80">{stroke}</p>
        </div>
        <div className="mt-4 rounded-lg bg-amber-50/60 p-4">
          <p className="mb-2 font-bold text-amber-700">练口令</p>
          <p className="font-serif-sc text-lg">{tongue}</p>
        </div>
      </>,
      zh: <>
        <p className="text-base leading-relaxed text-ink/80">{teach}</p>
        <div className="mt-4 rounded-lg bg-[#b3121f]/5 p-4">
          <p className="mb-2 font-bold text-[#b3121f]">读一读</p>
          <p className="font-serif-sc text-2xl tracking-wider">{words.join("   ")}</p>
        </div>
        {blends.length > 0 && (
          <div className="mt-4 rounded-lg bg-[#2d6a4f]/5 p-4">
            <p className="mb-2 font-bold text-teal">拼一拼</p>
            <p className="font-serif-sc text-xl tracking-wide">{blends.join("   ")}</p>
          </div>
        )}
        <div className="mt-4 rounded-lg bg-teal/5 p-4">
          <p className="mb-2 font-bold text-teal">书写提示（四线三格）</p>
          <p className="text-sm text-ink/80">{stroke}</p>
        </div>
        <div className="mt-4 rounded-lg bg-amber-50/60 p-4">
          <p className="mb-2 font-bold text-amber-700">练口令</p>
          <p className="font-serif-sc text-lg">{tongue}</p>
        </div>
      </>,
    },
  };
}

function lessonPage(opts: {
  zhTitle: string; enTitle: string; pinyin: string;
  passage: [string, string][];
  note: string;
  recognize: { ch: string; py: string; word: string }[];
  write: { ch: string; py: string; strokes: number; radical: string; word: string }[];
  practice: string[];
  think: string;
  readWords?: string[];
  picture?: string;
}) {
  const readWords = opts.readWords ?? opts.recognize.map((r) => r.word);
  const picture = opts.picture ?? `课文配插图，帮助理解《${opts.zhTitle}》的内容。看图读课文，图意和文字互相印证。`;
  const strokeHint = opts.write.map((w) => `${w.ch}（${w.strokes}画，${w.radical}部）`).join("  ");
  return [
    {
      kind: "lesson" as const,
      title: { en: opts.enTitle, zh: opts.zhTitle },
      body: {
        en: <>
          <Illustration topic={opts.zhTitle} />
          <Passage pairs={opts.passage} />
          <p className="mt-2 text-xs text-ink-light/60">{opts.pinyin}</p>
          <div className="mt-4 rounded-lg bg-teal/5 p-3">
            <p className="text-sm font-bold text-teal">朗读与背诵</p>
            <p className="mt-1 text-sm text-ink/80">朗读课文，读准字音，注意停顿。短课文试着背诵。</p>
          </div>
          <Recognize rows={opts.recognize} />
          <Write rows={opts.write} />
          <p className="mt-3 text-xs text-ink-light">笔顺书空：{strokeHint}</p>
          <div className="mt-4 rounded-lg bg-amber-50/60 p-3">
            <p className="mb-1 text-sm font-bold text-amber-700">读一读</p>
            <p className="font-serif-sc text-lg">{readWords.join("  ")}</p>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-ink/70"><b>讲一讲：</b>{opts.note}</p>
        </>,
        zh: <>
          <Illustration topic={opts.zhTitle} />
          <Passage pairs={opts.passage} />
          <p className="mt-2 text-xs text-ink-light/60">{opts.pinyin}</p>
          <div className="mt-4 rounded-lg bg-teal/5 p-3">
            <p className="text-sm font-bold text-teal">朗读与背诵</p>
            <p className="mt-1 text-sm text-ink/80">朗读课文，读准字音，注意停顿。短课文试着背诵。</p>
          </div>
          <Recognize rows={opts.recognize} />
          <Write rows={opts.write} />
          <p className="mt-3 text-xs text-ink-light">笔顺书空：{strokeHint}</p>
          <div className="mt-4 rounded-lg bg-amber-50/60 p-3">
            <p className="mb-1 text-sm font-bold text-amber-700">读一读</p>
            <p className="font-serif-sc text-lg">{readWords.join("  ")}</p>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-ink/70"><b>讲一讲：</b>{opts.note}</p>
        </>,
      },
    },
    {
      kind: "practice" as const,
      title: { en: `${opts.enTitle} · Practice`, zh: `${opts.zhTitle} · 课后练习` },
      body: {
        en: <>
          <div className="mb-4 rounded-lg bg-stone-50 p-3">
            <p className="mb-1 text-sm font-bold text-stone-600">插图</p>
            <p className="text-sm text-ink-light">{picture}</p>
          </div>
          <Practice items={opts.practice} />
          <p className="mt-4 rounded-lg bg-amber-50/60 p-3 text-sm text-ink/80"><b>Think & speak:</b> {opts.think}</p>
        </>,
        zh: <>
          <div className="mb-4 rounded-lg bg-stone-50 p-3">
            <p className="mb-1 text-sm font-bold text-stone-600">插图</p>
            <p className="text-sm text-ink-light">{picture}</p>
          </div>
          <Practice items={opts.practice} />
          <p className="mt-4 rounded-lg bg-amber-50/60 p-3 text-sm text-ink/80"><b>思考说话：</b>{opts.think}</p>
        </>,
      },
    },
  ];
}

// 三字经精选一页：原文（带拼音）+ 释义 + 小故事
function sanzijing(lines: [string, string][], meaning: string, story: string) {
  return {
    kind: "reading" as const,
    title: { en: "Three-Character Classic", zh: "三字经 · 精选" },
    body: {
      en: <>
        <p className="font-serif-sc text-2xl leading-[2.6] text-ink">{lines.map(([py, ch], i) => (<ruby className="ruby-zh" key={i}>{ch}<rt>{py}</rt></ruby>))}</p>
        <p className="mt-4 text-sm leading-relaxed text-ink/80"><b>Meaning:</b> {meaning}</p>
        <p className="mt-3 text-sm leading-relaxed text-ink/70"><b>Story:</b> {story}</p>
      </>,
      zh: <>
        <p className="font-serif-sc text-2xl leading-[2.6] text-ink">{lines.map(([py, ch], i) => (<ruby className="ruby-zh" key={i}>{ch}<rt>{py}</rt></ruby>))}</p>
        <p className="mt-4 text-sm leading-relaxed text-ink/80"><b>释义：</b>{meaning}</p>
        <p className="mt-3 text-sm leading-relaxed text-ink/70"><b>小故事：</b>{story}</p>
      </>,
    },
  };
}

// 笔顺与偏旁页
function strokePage(title: string, content: string) {
  return {
    kind: "writing" as const,
    title: { en: title, zh: title },
    body: { en: <p className="text-base leading-relaxed text-ink/80">{content}</p>, zh: <p className="text-base leading-relaxed text-ink/80">{content}</p> },
  };
}

// 单元扉页
function unitPage(num: string, zhTitle: string, enTitle: string, desc: string, lessons?: string[]) {
  return {
    kind: "reading" as const,
    title: { en: `Unit ${num}`, zh: `第${num}单元 · ${zhTitle}` },
    body: {
      en: <>
        <p className="font-serif-sc text-3xl font-bold text-ink">{enTitle}</p>
        <p className="mt-3 rounded-lg bg-[#2d6a4f]/5 p-4 text-sm leading-relaxed text-ink/80"><b>单元导语：</b>{desc}</p>
        {lessons && lessons.length > 0 && (
          <div className="mt-4">
            <p className="mb-2 text-sm font-bold text-teal">本单元我们将学习</p>
            <div className="flex flex-wrap gap-2">
              {lessons.map((l) => (
                <span key={l} className="rounded-md border border-teal/20 bg-white px-3 py-1.5 font-serif-sc text-base text-ink">{l}</span>
              ))}
            </div>
          </div>
        )}
        <div className="mt-5 rounded-lg bg-amber-50/60 p-4 text-sm leading-relaxed text-ink/70">
          <b>怎么学：</b>先看图猜一猜，再读课文认一认，最后写一写。每课都有会认字、会写字和练习。
        </div>
      </>,
      zh: <>
        <p className="font-serif-sc text-3xl font-bold text-ink">{zhTitle}</p>
        <p className="mt-3 rounded-lg bg-[#2d6a4f]/5 p-4 text-sm leading-relaxed text-ink/80"><b>单元导语：</b>{desc}</p>
        {lessons && lessons.length > 0 && (
          <div className="mt-4">
            <p className="mb-2 text-sm font-bold text-teal">本单元我们将学习</p>
            <div className="flex flex-wrap gap-2">
              {lessons.map((l) => (
                <span key={l} className="rounded-md border border-teal/20 bg-white px-3 py-1.5 font-serif-sc text-base text-ink">{l}</span>
              ))}
            </div>
          </div>
        )}
        <div className="mt-5 rounded-lg bg-amber-50/60 p-4 text-sm leading-relaxed text-ink/70">
          <b>怎么学：</b>先看图猜一猜，再读课文认一认，最后写一写。每课都有会认字、会写字和练习。
        </div>
      </>,
    },
  };
}

// 古诗页：原文带拼音 + 译文 + 题解
function poemPage(zhTitle: string, author: string, pairs: [string, string][], trans: string, note: string) {
  return {
    kind: "reading" as const,
    title: { en: `Poem · ${zhTitle}`, zh: `古诗 · ${zhTitle}` },
    body: {
      en: <>
        <p className="font-serif-sc text-2xl leading-[2.6] text-ink">{pairs.map(([py, ch], i) => (<ruby className="ruby-zh" key={i}>{ch}<rt>{py}</rt></ruby>))}</p>
        <p className="mt-1 text-xs text-ink-light/60">-- {author}</p>
        <p className="mt-4 text-sm leading-relaxed text-ink/80"><b>译文：</b>{trans}</p>
        <p className="mt-2 text-sm leading-relaxed text-ink/70"><b>题解：</b>{note}</p>
      </>,
      zh: <>
        <p className="font-serif-sc text-2xl leading-[2.6] text-ink">{pairs.map(([py, ch], i) => (<ruby className="ruby-zh" key={i}>{ch}<rt>{py}</rt></ruby>))}</p>
        <p className="mt-1 text-xs text-ink-light/60">-- {author}</p>
        <p className="mt-4 text-sm leading-relaxed text-ink/80"><b>译文：</b>{trans}</p>
        <p className="mt-2 text-sm leading-relaxed text-ink/70"><b>题解：</b>{note}</p>
      </>,
    },
  };
}

// 儿歌页
function songPage(zhTitle: string, pairs: [string, string][], tip: string) {
  return {
    kind: "reading" as const,
    title: { en: `Nursery Rhyme`, zh: `儿歌 · ${zhTitle}` },
    body: {
      en: <>
        <p className="font-serif-sc text-xl leading-[2.4] text-ink">{pairs.map(([py, ch], i) => (<ruby className="ruby-zh" key={i}>{ch}<rt>{py}</rt></ruby>))}</p>
        <p className="mt-4 text-sm text-ink/70">{tip}</p>
      </>,
      zh: <>
        <p className="font-serif-sc text-xl leading-[2.4] text-ink">{pairs.map(([py, ch], i) => (<ruby className="ruby-zh" key={i}>{ch}<rt>{py}</rt></ruby>))}</p>
        <p className="mt-4 text-sm text-ink/70">{tip}</p>
      </>,
    },
  };
}

// 识字课页：一组字 + 拼音 + 词语 + 短儿歌 + 讲解 + 课后题
function shiziPage(zhTitle: string, chars: { ch: string; py: string; word: string }[], teach: string, rhyme?: string) {
  const words = chars.map((c) => c.word);
  return {
    kind: "lesson" as const,
    title: { en: `Characters · ${zhTitle}`, zh: `识字 · ${zhTitle}` },
    body: {
      en: <>
        <div className="grid grid-cols-3 gap-3 sm:grid-cols-5">
          {chars.map((c) => (
            <div key={c.ch} className="flex flex-col items-center rounded-lg bg-[#b3121f]/5 px-2 py-3">
              <CharPic ch={c.ch} />
              <div className="mt-1 font-serif-sc text-3xl font-bold text-ink">{c.ch}</div>
              <div className="text-xs text-ink-light">{c.py}</div>
              <div className="text-xs text-teal-dark">{c.word}</div>
            </div>
          ))}
        </div>
        <div className="mt-4 rounded-lg bg-amber-50/60 p-3">
          <p className="mb-1 text-sm font-bold text-amber-700">读词语</p>
          <p className="font-serif-sc text-lg">{words.join("  ")}</p>
        </div>
        {rhyme && (
          <div className="mt-4 rounded-lg bg-[#2d6a4f]/5 p-3">
            <p className="mb-1 text-sm font-bold text-teal">读儿歌</p>
            <p className="font-serif-sc text-base leading-relaxed">{rhyme}</p>
          </div>
        )}
        <p className="mt-4 text-sm leading-relaxed text-ink/80">{teach}</p>
        <div className="mt-4 rounded-lg bg-teal/5 p-3">
          <p className="mb-1 text-sm font-bold text-teal">课后题</p>
          <ol className="list-decimal space-y-1 pl-5 text-sm text-ink/80">
            <li>读一读这些字和词语。</li>
            <li>用每个字组一个新词。</li>
            <li>在生活中找一找这些字。</li>
          </ol>
        </div>
      </>,
      zh: <>
        <div className="grid grid-cols-3 gap-3 sm:grid-cols-5">
          {chars.map((c) => (
            <div key={c.ch} className="flex flex-col items-center rounded-lg bg-[#b3121f]/5 px-2 py-3">
              <CharPic ch={c.ch} />
              <div className="mt-1 font-serif-sc text-3xl font-bold text-ink">{c.ch}</div>
              <div className="text-xs text-ink-light">{c.py}</div>
              <div className="text-xs text-teal-dark">{c.word}</div>
            </div>
          ))}
        </div>
        <div className="mt-4 rounded-lg bg-amber-50/60 p-3">
          <p className="mb-1 text-sm font-bold text-amber-700">读词语</p>
          <p className="font-serif-sc text-lg">{words.join("  ")}</p>
        </div>
        {rhyme && (
          <div className="mt-4 rounded-lg bg-[#2d6a4f]/5 p-3">
            <p className="mb-1 text-sm font-bold text-teal">读儿歌</p>
            <p className="font-serif-sc text-base leading-relaxed">{rhyme}</p>
          </div>
        )}
        <p className="mt-4 text-sm leading-relaxed text-ink/80">{teach}</p>
        <div className="mt-4 rounded-lg bg-teal/5 p-3">
          <p className="mb-1 text-sm font-bold text-teal">课后题</p>
          <ol className="list-decimal space-y-1 pl-5 text-sm text-ink/80">
            <li>读一读这些字和词语。</li>
            <li>用每个字组一个新词。</li>
            <li>在生活中找一找这些字。</li>
          </ol>
        </div>
      </>,
    },
  };
}

// 口语交际页
function speakPage(zhTitle: string, task: string, tips?: string[], examples?: string[]) {
  const tipsList = tips ?? ["大声说，让别人听得见。", "注意听别人说话。"];
  const exList = examples ?? [task];
  return {
    kind: "speaking" as const,
    title: { en: `Speaking · ${zhTitle}`, zh: `口语交际 · ${zhTitle}` },
    body: {
      en: <>
        <div className="mb-4 rounded-lg bg-[#2d6a4f]/5 p-4">
          <p className="mb-2 text-sm font-bold text-teal">交际要求</p>
          <ul className="list-disc space-y-1 pl-5 text-sm text-ink/80">{tipsList.map((t) => (<li key={t}>{t}</li>))}</ul>
        </div>
        <p className="text-sm leading-relaxed text-ink/80"><b>任务：</b>{task}</p>
        <div className="mt-4 rounded-lg bg-amber-50/60 p-4">
          <p className="mb-2 text-sm font-bold text-amber-700">这样说</p>
          <ul className="space-y-1.5 text-sm text-ink/80">{exList.map((e) => (<li key={e} className="rounded-md bg-white px-3 py-1.5 font-serif-sc">「{e}」</li>))}</ul>
        </div>
        <div className="mt-4 rounded-lg bg-teal/5 p-4">
          <p className="mb-1 text-sm font-bold text-teal">练一练</p>
          <p className="text-sm text-ink/80">和同桌或家人一起做一做，轮流说和做。</p>
        </div>
      </>,
      zh: <>
        <div className="mb-4 rounded-lg bg-[#2d6a4f]/5 p-4">
          <p className="mb-2 text-sm font-bold text-teal">交际要求</p>
          <ul className="list-disc space-y-1 pl-5 text-sm text-ink/80">{tipsList.map((t) => (<li key={t}>{t}</li>))}</ul>
        </div>
        <p className="text-sm leading-relaxed text-ink/80"><b>任务：</b>{task}</p>
        <div className="mt-4 rounded-lg bg-amber-50/60 p-4">
          <p className="mb-2 text-sm font-bold text-amber-700">这样说</p>
          <ul className="space-y-1.5 text-sm text-ink/80">{exList.map((e) => (<li key={e} className="rounded-md bg-white px-3 py-1.5 font-serif-sc">「{e}」</li>))}</ul>
        </div>
        <div className="mt-4 rounded-lg bg-teal/5 p-4">
          <p className="mb-1 text-sm font-bold text-teal">练一练</p>
          <p className="text-sm text-ink/80">和同桌或家人一起做一做，轮流说和做。</p>
        </div>
      </>,
    },
  };
}

// 语文园地页（含日积月累古诗）
function gardenPage(num: string, sections: string[], poem?: { zhTitle: string; lines: string[] }) {
  const poemBlock = poem ? (
    <p className="mt-3 rounded-lg bg-amber-50/60 p-3"><b>日积月累：</b>{poem.zhTitle} - {poem.lines.join(" ")}</p>
  ) : null;
  return {
    kind: "garden" as const,
    title: { en: `Language Garden ${num}`, zh: `语文园地 ${num}` },
    body: {
      en: <>{sections.map((s, i) => (<p key={i} className="mt-2 text-sm leading-relaxed text-ink/80">{s}</p>))}{poemBlock}</>,
      zh: <>{sections.map((s, i) => (<p key={i} className="mt-2 text-sm leading-relaxed text-ink/80">{s}</p>))}{poemBlock}</>,
    },
  };
}
