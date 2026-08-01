# Loong Kits 网站 · 交接文档（给接手的智能体）

> 本文档自包含。读完即可零上下文接手。最后更新对应 git `751b7c6`。
> 配套记忆（用户级，跨会话）：`user-profile-shixinwei`、`feedback-verify-before-advising` 等，在 `~/.zcode/.../memory/`。

---

## 0. 一句话定义

**Loong Kits** = 面向**海外华裔家庭 + 国际学校老师 + 自学中文的青少年/成人**的**中英双语、可打印**中文文化学习包网站。品牌名带"龙"，所以龙元素必须有，但要**高级**不能廉价。当前阶段是**建站 + 填教学内容**，**尚未上架收费**（等用户给 Gumroad 链接）。

线上地址：**https://www.loongkits.com**（裸域 loongkits.com 也通，308 跳 www）。

---

## 1. 用户是谁 & 沟通红线（最重要，先读）

用户 = **侍新伟**（家庭家长 / 最终决策者；有海外/马来业务背景）。他的硬性偏好与红线：

- **用中文沟通**。他明确说过"说中文"。
- **不要替他做决定 / 先核实再建议**。别横跳、读全截图、给唯一指令。记忆 `feedback-verify-before-advising`。
- **压缩上下文**。他多次说"压缩一下上下文"——回复要精炼，别冗长复述。
- **禁用本机 RTX 5090**（"别用5090，别的资源随便你调用"）。ComfyUI 绑在 5090 上，**不要碰**。
- **不要擅自上架/收款**。收款账户、Gumroad 链接必须等他给。商城按钮目前都是 `Coming Soon` 占位，**不要**改成真支付，除非他给了链接。
- **审美是他在意到反复骂的点**（见第 7 节）。他给过参考站 **https://scopecopenhagen.com/**，要"高端简洁现代商务风 + 中国风 + 不廉价 + 大图"。
- 他喜欢**直接动手**，不喜欢被反问一堆；能自己查的就查，缺能力自己补能力，别把操作推回给他。

---

## 2. 技术栈

- **Next.js 16.2.10**（App Router + **Turbopack**），**React 19**，**TypeScript**，**Tailwind CSS 4**（`@import "tailwindcss"` + `@theme` 令牌，配置在 `src/app/globals.css`）。
- 字体用 `next/font/google`：Nunito / Inter / Noto Serif SC / Noto Sans SC，在 `src/app/layout.tsx` 注入为 `--font-*-base` 变量挂到 `<body>`。
- 双语方案：**单 URL**，服务端默认渲染英文（利于 SEO），客户端 `LanguageProvider`（`src/lib/i18n.tsx`）检测 `navigator.language` 以 `zh` 开头则切中文，导航栏有手动切换按钮。文案集中在 `src/lib/content.ts`，结构 `Bi<T> = Record<"en"|"zh", T>`。
- 视觉验收用 **Playwright**（devDependency，已装 chromium）。

---

## 3. 仓库 / 部署 / 域名

- 仓库：`https://github.com/shixinwei999-ship-it/loongkits-site`，工作分支 **main**。
- 部署：**push main → Vercel 自动部署**（约 60–80 秒生效）。无需手动触发。
- DNS：**Cloudflare，DNS-only（灰云，不开橙色代理）**。记录：`A @ → 76.76.21.21`；`CNAME www → cname.vercel-dns.com`。
- 项目根 = `C:\Users\admin\ZCodeProject\loongkits\loongkits-site`（注意上层 `C:\Users\admin\ZCodeProject` 也有个 package-lock，Next 会警告 turbopack.root，**无害可忽略**）。

---

## 4. 目录结构（关键文件 + 各自职责）

### `src/app/`（路由，App Router）
- `page.tsx` = 首页（渲染 `HomeContent`）。
- `learn/levels/page.tsx` = 等级总览（`LevelSystem`）。
- `learn/chinese/page.tsx` = 练功房（`ChineseClassroom`）。
- `learn/level/[n]/lesson/[k]/page.tsx` = **动态课页**（`LessonPage`，30 节全实装）。
- `learn/ages-3-6 | 6-11 | 11-14 | 14-18` = 旧"按年龄"入口，**仍存在**（`LearningPathPage`），与等级体系并存。
- `members/page.tsx` = 会员页（`MembersContent`，儿童/自学/教师三 tab）。
- `shop/page.tsx` = 商城（`ShopContent`，9 商品 Coming Soon）。
- `free/page.tsx` + `free/zodiac-animals/page.tsx` = 免费资源 + 生肖资源详情。
- `families | teachers | about | kits` = 各静态页。
- `globals.css` = 设计令牌 + 所有自定义动画/类（**烫金 `.gold-foil`、跑马灯 `.marquee-track`、首屏动画 `ink-bloom/dragon-breathe/calligraphy-pulse`、截图冻结 `.shot-final` 都在这里**）。
- `layout.tsx` = 字体注入 + `Navbar` + `Footer` 全局包裹。`sitemap.ts` / `robots.ts` / `icon.svg`。

### `src/components/`
- `pages/HomeContent.tsx` = **首页主体**（三板块，详见第 8 节）。
- `pages/*Content.tsx` = 各页主体。
- `LevelSystem.tsx` = 等级总览（5 篇章分色带 + 每级卡 + 通关闭环，进度存 `localStorage` key `lk-levels-done-v1`）。
- `LessonPage.tsx` = 课页壳（hero + 互动区 + 作业 + 完成标记 + 下一课）。
- `LearningPathPage.tsx` = 旧年龄课页壳。
- `ChineseClassroom.tsx` = 练功房（声调/声母/韵母/拼读/笔画/偏旁/字/词八模块）。
- 互动子组件：`ToneCards / ToneDemo / InitialGrid / FinalGrid / BlendRows / ReadingPassage / SentenceScene / Quiz / CharacterSpotlight / CountUp`。
- `Speak.tsx` = **逐字点听**（浏览器 `speechSynthesis`，lang `zh-CN`；不支持时按钮自动 disabled，**不造假**）。
- `Reveal.tsx` = 滚动渐显。**注意**：曾用 `opacity-0` 初态导致整页截图空白，已改为默认可见（见坑③）。
- `Navbar.tsx` = 导航，**4 项**：学中文 / 会员 / 商城 / 关于（+ 语言切换）。`/learn/*` 高亮"学中文"。
- `Footer.tsx` = Scope 式超大深色 footer（4 栏大衬线链接）。
- `Logo.tsx` = 朱印「龙」字标（导航用）。`icons.tsx` = 全站 SVG 图标系统（**已替换所有 emoji**）。
- `Illustration.tsx` = 旧民俗 SVG（祥云/灯笼/印章/主题封面），部分仍被引用。
- `brandAssets.ts` = **品牌资产契约**（`dragonAssets.ready` 开关 + hero/logo 路径）。

### `src/lib/`
- `content.ts` = **全站文案中枢**（`nav / home / footer / subscribe / kitsPage / freePage / familiesPage / teachersPage / aboutPage / zodiacResourcePage` 等，全 `Bi<T>`）。
- `levels.ts` = **10 级 5 篇章**课程骨架（`bands` + `levels[]`，每级 `lessons/quiz/words/outcome/skillTags/image`）。
- `learningPaths.ts` = 每级 `journey` 知识段 + `poem` + `test` + `culture`（旧结构，部分页用）。
- `curriculum.ts` = **会员教材数据**：`kidsTracks`(6 年级) / `selfStudyTracks`(4 级别 HSK1-9) / `teacherTracks`(映射 kids 加教案)。每单元 `lessons/poem/test/culture`。**中文引号一律用「」，绝不用 ASCII `"`**（否则破坏 JS 字符串，见坑②）。
- `agePaths.ts` = 旧年龄路径数据。`kits.ts` = 商品目录（12 SKU，`gumroadUrl: null`）。`resources.ts` = 免费资源清单。`site.ts` = 站点元信息。`i18n.tsx` = 语言 context。

### `public/`
- `hero/golden-dragon.webp` = 工笔龙图（**已弃用首屏**，文件还在）。`golden-dragon-square.webp`、`festive-hero.webp` 备用。
- `brand/hong-qing-hero.webp` + `hong-qing-logo.webp` = 双龙 Hong/Qing 资产（`brandAssets.ready` 控制是否启用；当前首屏**没用**它们，用的是烫金「龙」字）。
- `age-path/*.webp` = 4 张年龄段写实图。`age-topics/*.webp` = 12 张主题场景图（首页全宽图用其中 3 张）。`kit-covers/*.webp` = 3 张商品封面。
- `resources/<slug>/v1/` = 5 套免费 PDF（`*-a4.pdf` + `*-letter.pdf` + `preview-*.webp`）：zodiac-animals / new-year-lantern / festival-detective / culture-in-motion / culture-curator。

### `scripts/`
- `capture-visuals.mjs` = **视觉验收脚本**（用法见第 12 节）。
- `generate-zodiac-resource.py` / `generate-learning-path-resources.py` = ReportLab 生成 PDF + 预览。
- `generate-topic-images.py` = 调 Kimi 生主题图。
- `font-probe.mjs` / `font-fix-verify.mjs` = 字体加载诊断（坑①的产物，可留可删）。

---

## 5. 品牌资产现状（重要）

- **双龙 Hong/Qing**：青绿(Qing)/灰粉(Hong) 一对，文件在 `public/brand/`，`brandAssets.ts` 有契约开关 `ready`。**当前首屏没启用它们**。
- **首屏龙元素 = 烫金「龙」字 monogram**（CSS 类 `.gold-foil`：金色渐变 `background-clip:text` + drop-shadow，可无限放大不糊），背后叠极淡「龍」水印 + ambient 暖光。**这是当前方案**。
- **工笔龙图 `golden-dragon.webp` 已被用户判定"丑"，撤下首屏**。文件保留但不再引用。
- **想换真龙图**：等用户提供一张满意的龙图（或他用 Midjourney 等专业工具生成），改 `HomeContent.tsx` hero 里那行 `<Image src=...>` 路径即可。**本智能体的生图工具出不来用户要的高端龙质感，别硬凑**（见第 10 节限制）。

---

## 6. 设计令牌（`globals.css` 的 `@theme`）

`--color-cream #faf7f2`（米白底）/ `--color-teal #2d6a4f` / `--color-teal-dark #1f4a38` / `--color-orange #f4a261` / `--color-red #c8102e` / `--color-ink #2b2b2b` / `--color-ink-light #6b6b6b`（**已从 #8a8a8a 加深修对比度**）。首页 Scope 改版另用了硬编码 `#f5f2ed`（更暖的米白）和 `#1a1a1a`（深色板块）。

---

## 7. 设计方向 & 审美要求（用户最在意，反复强调）

**总要求**：高端、简洁、现代商务风 + 中国风 + **不廉价** + 大图。参考站 **https://scopecopenhagen.com/**（丹麦建筑工作室，极简排版驱动）。

**Scope 精髓（要学的）**：
- 字即设计：超大衬线标题 + **宽字距** eyebrow（`tracking-[0.4em~0.5em]` 大写小字）。
- 全宽满铺大图（`object-cover` 铺满裁切），图与图之间用**细线分隔的索引列表**（**不是卡片网格**）。
- 跑马灯（marquee）做章节过渡。
- 明暗板块交替（米白 ↔ 深色 `#1a1a1a`）。
- 超大深色 footer，导航链接用大衬线字。
- 留白克制，零装饰堆砌。

**当前首页结构（三板块，Scope 骨架）**：
1. **Hero**：米白留白 + 左对齐宽字距 eyebrow + 衬线大标题 + 细线下划线 CTA + 右侧烫金「龙」monogram。
2. 生肖跑马灯。
3. **板块①免费学习**：居中大标题 + 全宽实景图 + 10 级细线列表。
4. **板块②会员**：深色 + 全宽图 + 3 行大文字列表（儿童/自学/教师）。
5. **板块③商城**：全宽图 + 4 行细线列表（带价格）。
6. 深色大 footer。

**已踩过的审美坑（别重蹈）**：
- ❌ 纯红底 + 写实龙 = 年画，土。
- ❌ 龙缩在角落 / 竖版龙塞宽容器 = 一大片奶油空白。
- ❌ 龙做全屏背景 = 副标题压在龙身上看不清。
- ❌ 工笔龙放大显脏显凶 = 丑。
- ❌ 三张等宽卡片 = AI 模板标配，廉价。
- ❌ emoji 当图标 = 廉价（已全部换 SVG）。
- ✅ 最终：留白 + 烫金字标 + 细线列表 + 全宽图 + 明暗交替。

---

## 8. 内容体系现状

- **10 级 / 5 篇章**（`levels.ts`）：foundations(I,1-2) / going(II,3-4) / building(III,5-6) / expanding(IV,7-8) / owning(V,9-10)。
- **30 节课全部实装**（`/learn/level/[n]/lesson/[k]`），每节 `type ∈ {vocab,reading,writing,grammar,culture,listening}` + 真实教学内容 + 逐字点听 + 小测 + 完成标记。
- **会员教材**（`curriculum.ts`）：儿童 6 年级 / 自学 4 级别(HSK1-9) / 教师(映射儿童加 45 分钟教案)，每单元含课 + 古诗(咏鹅/静夜思/春晓/登鹳雀楼…带拼音注释) + 试卷 + 文化注。
- **商城 9 商品**（试卷包/笔顺练习册/古诗闪卡/HSK 模拟考/文化读本，$2.99–6.99）**全 Coming Soon**。
- **免费资源 5 套 PDF** 已生成在 `public/resources/`。

---

## 9. 本地工具链 & 生图限制

- **视觉验收**：`VISUAL_BASE_URL=http://127.0.0.1:<port> npm run visual:check`，截图存 `artifacts/visual/`，脚本会注入 `.shot-final` 冻结动画、scroll 触发懒加载、断言 `overflow=false` + 图加载。**改首页后必跑**。
- **PDF 生成**：`scripts/generate-*-resource.py`（ReportLab + 本地 Noto 字体实例化）。
- **生图限制（关键）**：
  - 本机 **5090 禁用**，ComfyUI 不碰。
  - 云端生图（百炼 `~/.bailian/config.json`、Kimi `agent-gw`）渲染"中国龙"质量差，达不到高端质感 → 工笔龙已弃用。
  - **Kimi 的 API 不支持直接文生图**（`config.toml` 里 capabilities 只有 `image_in/video_in`）。Kimi 配置含 **api_key 明文**，路径 `C:\Users\admin\AppData\Roaming\kimi-desktop\daimon-share\config.toml` 与 `...\daimon\config.json`；百炼密钥在 `C:\Users\admin\.bailian\config.json`。**接手者自行读取，绝不提交进 git、绝不外泄、绝不在回复/日志里打印明文**。
  - 之前用 Kimi 桌面端浏览器自动化（pywinauto 操作窗口句柄）生过主题图，流程脆、不推荐复用。

---

## 10. 已踩过的技术坑（清单，避免重蹈）

1. **字体不加载**：`next/font` 变量类挂 `<body>`，但 `@theme` 的 `--font-*` 在 `:root` 解析时 `--font-*-base` 未定义 → 全站退回系统字体。**修复**：在 `globals.css` 的 `body{}` 里**重声明** `--font-nunito / --font-inter / --font-serif-sc / --font-sans-sc`。
2. **中文引号破坏 JS**：`curriculum.ts` 等数据文件里中文语境用了 ASCII `"` 会截断字符串。**规则**：中文引号一律「」。曾写正则批量修但跨行误伤，**手写最稳**。
3. **Reveal 动画致截图空白**：`opacity-0` 初态 + 整页截图不滚动 = 全白。已改 Reveal 默认可见；截图脚本注入 `.shot-final` 冻结动画。
4. **懒加载图致截图空白/闪白**：全宽图默认 lazy，整页截图不触发 → 改 `loading="eager"`，或脚本里 scroll。
5. **dev 端口常被占**：`taskkill /F /IM node.exe` 或按 PID kill，换端口（3001/3002/3003/3004/3005/3010 都用过）。
6. **Playwright `networkidle` 在 dev 易超时**：改 `waitUntil:'domcontentloaded'` + `waitForTimeout(3500)`。
7. **竖版图塞宽容器**：`object-cover` 裁不出想要的，要么重生成横版图，要么改用文字 monogram（最终选后者）。

---

## 11. 验收 & 发布流程（标准动作）

1. `npm run build`（必须过，TS 严格）。
2. 起 dev（先 kill 旧 node，换空闲端口）：`(npx next dev --port <N> >/dev/null 2>&1 &) && sleep 22`。
3. 本地验收：`VISUAL_BASE_URL=http://127.0.0.1:<N> npm run visual:check`，看 `artifacts/visual/*.png`。
4. `git add -A && git commit -m "..." && git push origin main`。
5. 等 Vercel ~70s，公网复核：`curl` 各路由 200 + `VISUAL_BASE_URL=https://www.loongkits.com npm run visual:check`。

---

## 12. git 关键提交节点（近→远）

- `751b7c6` 首屏改烫金「龙」monogram + Scope 留白，弃用工笔龙。
- `c206d88` 龙做全屏背景（已被 751b7c6 取代）。
- `5d9168d` Scope 风改版（排版驱动/列表/跑马灯/深色板块）。
- `69dbc21` 三板块架构（免费+会员+商城）。
- `2d6071a` 30 节课全实装。
- `39bceab` 字体全站生效 + 去 emoji + 加深对比度。
- `b92b9e2` 21 节互动课 + 完成追踪。

---

## 13. 待办 / 未完成（接手优先级）

1. **钱路**：等用户给 **Gumroad 链接** → 把 `/shop` 与 `kits.ts` 的 `Coming Soon` 接成真购买按钮。**不要擅动收款账户**。
2. **龙图**：等用户提供/专业工具生成满意龙图 → 改 `HomeContent.tsx` hero 的 `<Image src>` 一行换首屏（现用烫金「龙」字顶着）。
3. **教学内容**：继续往各级/各单元填更厚的课与练习（用户多次嫌"内容太少"）。
4. **可继续优化**：会员页/商城页视觉打磨；更多 SEO/JSON-LD（课页已加部分 `LearningResource`/`Course` JSON-LD）；移动端细调。

---

## 14. 接手第一步建议

1. 读本文档。
2. 读 `src/lib/site.ts` → `content.ts` → `levels.ts` → `curriculum.ts`（理解数据驱动）。
3. `npm install`（已含 playwright）。
4. `npm run build` 确认绿。
5. 起 dev，浏览器看 `/`、`/learn/levels`、`/learn/chinese`、`/members`、`/shop`。
6. 改东西后跑 `visual:check`，看截图，再 push。
7. **牢记第 1 节红线**（中文、不替决策、不用 5090、不擅上架、审美照 Scope、密钥不外泄）。

---

## 附：常用命令速查

```bash
npm run build                 # 生产构建（TS 严格）
npm run dev                   # 本地 dev（默认 3000，常被占，换端口）
npm run visual:check          # 截图验收（先设 VISUAL_BASE_URL）
VISUAL_BASE_URL=https://www.loongkits.com npm run visual:check
python scripts/generate-learning-path-resources.py   # 重生成会员教材 PDF
python scripts/generate-zodiac-resource.py           # 重生成生肖 PDF
git push origin main          # → Vercel 自动部署
```
