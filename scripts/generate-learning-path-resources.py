# -*- coding: utf-8 -*-
"""Generate real bilingual starter resources for the four Loong Kits age paths."""

from pathlib import Path

import fitz
from PIL import Image
from reportlab.lib.colors import HexColor
from reportlab.lib.pagesizes import A4, letter
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.pdfgen import canvas

ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / "public" / "resources"
FONTS = Path("C:/Windows/Fonts")

CREAM = HexColor("#FAF7F2")
PAPER = HexColor("#FFFCF5")
TEAL = HexColor("#2D6A4F")
TEAL_DARK = HexColor("#1F4A38")
ORANGE = HexColor("#F4A261")
RED = HexColor("#C8102E")
INK = HexColor("#2B2B2B")
GRAY = HexColor("#68706A")
LINE = HexColor("#D8E4DC")
SAGE = HexColor("#EAF2EC")
ROSE = HexColor("#FBEDEA")
WHITE = HexColor("#FFFFFF")

RESOURCE_SPECS = {
    "new-year-lantern": {
        "title": "新年好 · 灯笼活动包",
        "english": "Hello New Year Lantern Activity Pack",
        "age": "Ages 3–6 · 3–6 岁",
        "pages": 3,
        "kicker": "TOUCH · SAY · MAKE",
        "theme": ROSE,
        "lines": [
            ["第 1 页 认识：红色、灯笼、家", "Page 1 Meet: red, lantern, home"],
            ["第 2 页 数一数：找出 5 个灯笼", "Page 2 Count: find 5 lanterns"],
            ["第 3 页 做一做：折一盏小灯笼", "Page 3 Make: fold a small lantern"],
        ],
        "activity": ["选一张卡片，说出颜色和汉字。", "数一数灯笼，再沿虚线剪一剪。", "做完后问：你想把祝福送给谁？"],
        "facts": ["春节也常被称作农历新年。", "许多家庭会用红色装饰表达美好的祝愿。", "每个家庭和地区庆祝的方式可以不一样。"],
    },
    "festival-detective": {
        "title": "节日小侦探：春节与元宵",
        "english": "Festival Detective: Spring Festival and Lantern Festival",
        "age": "Ages 6–11 · 6–11 岁",
        "pages": 4,
        "kicker": "STORY · SYMBOL · QUESTION",
        "theme": SAGE,
        "lines": [
            ["第 1 页 排顺序：准备、团圆、拜年、赏灯", "Page 1 Sequence: prepare, gather, greet, lanterns"],
            ["第 2 页 读一读：福、春、灯", "Page 2 Read: fortune, spring, lantern"],
            ["第 3 页 猜一猜：两道灯谜", "Page 3 Solve: two lantern riddles"],
            ["第 4 页 问一问：我家的一个习惯", "Page 4 Ask: one custom in my family"],
        ],
        "activity": ["把节日活动卡排成你认为合理的顺序。", "用线索猜灯谜，说说你为什么这样想。", "问一位家人：我们家会怎么过这个节日？"],
        "facts": ["春节与元宵节在许多地方都有庆祝，但活动会随地区和家庭而变化。", "年兽是民间故事，不是历史记录。", "倒贴福字是一种借谐音表达好愿望的习惯，并非所有家庭都会这样做。"],
    },
    "culture-in-motion": {
        "title": "文化在流动：节日、生肖与丝路",
        "english": "Culture in Motion: Festival, Zodiac, and Silk Roads",
        "age": "Ages 11–14 · 11–14 岁",
        "pages": 5,
        "kicker": "MAP · SOURCE · EVIDENCE",
        "theme": SAGE,
        "lines": [
            ["第 1 页 时间线：节日会如何变化", "Page 1 Timeline: how a tradition changes"],
            ["第 2 页 看地图：多条交流网络", "Page 2 Map: many exchange networks"],
            ["第 3 页 看资料：器物标签与家庭叙述", "Page 3 Sources: object label and family story"],
            ["第 4 页 分一分：观察、推断、问题", "Page 4 Sort: observation, inference, question"],
            ["第 5 页 写一写：一条有证据的观点", "Page 5 Write: one evidence-backed claim"],
        ],
        "activity": ["在地图上标出你认为人、物和想法可能交流的方向。", "比较一件器物标签和一段家庭叙述：它们各自告诉你什么？", "写一句观点，并标出支持它的两条证据。"],
        "facts": ["丝绸之路更像多条相互连接的交流网络，而不是一条单一道路。", "生肖构成十二年循环，是一种文化系统，不决定一个人的性格或命运。", "同一个节日可以在不同地区、家庭和海外社区呈现不同做法。"],
    },
    "culture-curator": {
        "title": "策展中国文化：研究与双语表达",
        "english": "Curating Chinese Culture: Research and Bilingual Expression",
        "age": "Ages 14–18 · 14–18 岁",
        "pages": 6,
        "kicker": "RESEARCH · TRANSLATE · EXPRESS",
        "theme": ROSE,
        "lines": [
            ["第 1 页 选问题：我真正想了解什么？", "Page 1 Question: what do I want to understand?"],
            ["第 2 页 看来源：谁写的、何时写的、为了谁？", "Page 2 Sources: who, when, and for whom?"],
            ["第 3 页 看物件：材料、用途、地点、时间", "Page 3 Object: material, use, place, time"],
            ["第 4 页 比翻译：直译与自然表达有什么不同？", "Page 4 Translate: literal and fluent choices"],
            ["第 5 页 写展签：事实、解释、来源", "Page 5 Label: fact, interpretation, source"],
            ["第 6 页 自评：我的证据够吗？", "Page 6 Review: is my evidence enough?"],
        ],
        "activity": ["选择一个物件或习俗，写出一个可研究的问题。", "用至少两种可靠来源核对基本事实，并标记你自己的解释。", "完成 150–250 字双语展签或三分钟讲稿。"],
        "facts": ["物件的意义会随使用者、地点和时间而变化。", "翻译需要在字面意思、语气和读者理解之间做选择。", "文化研究应区分事实、解释与个人经验，并标注来源。"],
    },
}


def register_fonts():
    pdfmetrics.registerFont(TTFont("LKSan", str(FONTS / "simhei.ttf")))
    pdfmetrics.registerFont(TTFont("LKSerif", str(FONTS / "simsun.ttc"), subfontIndex=0))
    pdfmetrics.registerFont(TTFont("LKEn", str(FONTS / "calibri.ttf")))
    pdfmetrics.registerFont(TTFont("LKEnBold", str(FONTS / "calibrib.ttf")))


def draw_line(c, x1, y1, x2, y2, color=TEAL, width=1):
    c.setStrokeColor(color)
    c.setLineWidth(width)
    c.setLineCap(1)
    c.line(x1, y1, x2, y2)


def draw_seal(c, x, y, size=22):
    c.setFillColor(RED)
    c.roundRect(x, y, size, size, size * 0.2, 1, 0)
    c.setStrokeColor(WHITE)
    c.setLineWidth(0.8)
    c.roundRect(x + 4, y + 4, size - 8, size - 8, 3, 0, 1)
    c.setFillColor(WHITE)
    c.setFont("LKSerif", size * 0.5)
    c.drawCentredString(x + size / 2, y + size * 0.22, "龙")


def page_frame(c, width, height, spec, page_number):
    margin = width * 0.075
    c.setFillColor(CREAM)
    c.rect(0, 0, width, height, 0, 1)
    draw_seal(c, margin, height - 40, 22)
    c.setFillColor(TEAL)
    c.setFont("LKEnBold", 10)
    c.drawString(margin + 30, height - 31, "Loong Kits")
    c.setFillColor(GRAY)
    c.setFont("LKEn", 8)
    c.drawRightString(width - margin, height - 28, spec["english"])
    c.setFont("LKSan", 8)
    c.drawRightString(width - margin, height - 40, spec["age"])
    draw_line(c, margin, height - 50, width - margin, height - 50, TEAL, 1.1)
    draw_line(c, margin, 39, width - margin, 39, LINE, 0.8)
    c.setFillColor(GRAY)
    c.setFont("LKEn", 7.5)
    c.drawString(margin, 26, "loongkits.com · Free bilingual learning resource")
    c.drawRightString(width - margin, 26, f"Page {page_number}/{spec['pages']}")


def title(c, x, y, spec, page_number):
    c.setFillColor(ORANGE)
    c.circle(x + 3, y + 3, 3, 1, 0)
    c.setFillColor(TEAL)
    c.setFont("LKEnBold", 9)
    c.drawString(x + 12, y, spec["kicker"])
    c.setFillColor(INK)
    c.setFont("LKSerif", 25)
    c.drawString(x, y - 38, spec["title"])
    c.setFillColor(GRAY)
    c.setFont("LKEn", 11)
    c.drawString(x, y - 58, spec["english"])
    c.setFillColor(TEAL)
    c.setFont("LKEnBold", 10)
    c.drawRightString(x + 430, y, f"0{page_number}")


def wrap(c, text, x, y, width, font, size, leading):
    c.setFont(font, size)
    line, current_y = "", y
    tokens = list(text) if font in ("LKSan", "LKSerif") else text.split(" ")
    for token in tokens:
        trial = line + token if font in ("LKSan", "LKSerif") else (line + " " + token).strip()
        if c.stringWidth(trial, font, size) > width and line:
            c.drawString(x, current_y, line)
            current_y -= leading
            line = token
        else:
            line = trial
    if line:
        c.drawString(x, current_y, line)
        current_y -= leading
    return current_y


def cover(c, width, height, spec):
    page_frame(c, width, height, spec, 1)
    margin = width * 0.075
    title(c, margin, height - 94, spec, 1)
    c.setFillColor(spec["theme"])
    c.roundRect(margin, height * 0.35, width - margin * 2, height * 0.25, 12, 1, 0)
    c.setFillColor(TEAL_DARK)
    c.setFont("LKSan", 14)
    c.drawString(margin + 22, height * 0.55, "这份学习包里有什么？")
    c.setFillColor(INK)
    c.setFont("LKEn", 10)
    c.drawString(margin + 22, height * 0.525, "What you will explore")
    item_y = height * 0.48
    for index, (zh, en) in enumerate(spec["lines"][:3]):
        c.setFillColor(TEAL)
        c.circle(margin + 26, item_y - index * 35 + 2, 2.4, 1, 0)
        c.setFillColor(INK)
        c.setFont("LKSan", 10.5)
        c.drawString(margin + 38, item_y - index * 35, zh)
        c.setFillColor(GRAY)
        c.setFont("LKEn", 8.5)
        c.drawString(margin + 38, item_y - index * 35 - 11, en)
    c.setFillColor(TEAL_DARK)
    c.setFont("LKSerif", 21)
    c.drawString(margin, height * 0.24, "从一个问题开始")
    c.setFillColor(GRAY)
    c.setFont("LKEn", 10)
    c.drawString(margin, height * 0.215, "Start with one question, then learn by doing.")


def content_page(c, width, height, spec, page_number, index):
    page_frame(c, width, height, spec, page_number)
    margin = width * 0.075
    title(c, margin, height - 94, spec, page_number)
    item = spec["lines"][min(index, len(spec["lines"]) - 1)]
    c.setFillColor(spec["theme"])
    c.roundRect(margin, height * 0.47, width * 0.38, height * 0.20, 10, 1, 0)
    c.setFillColor(TEAL)
    c.setFont("LKSerif", 50)
    c.drawCentredString(margin + width * 0.19, height * 0.55, str(page_number))
    c.setFillColor(TEAL_DARK)
    c.setFont("LKSan", 15)
    c.drawString(margin + width * 0.44, height * 0.63, item[0])
    c.setFillColor(GRAY)
    c.setFont("LKEn", 10)
    c.drawString(margin + width * 0.44, height * 0.60, item[1])
    c.setFillColor(INK)
    c.setFont("LKSan", 12)
    y = wrap(c, spec["facts"][index % len(spec["facts"])], margin + width * 0.44, height * 0.54, width * 0.43, "LKSan", 12, 19)
    c.setFillColor(GRAY)
    c.setFont("LKEn", 9.5)
    wrap(c, "Notice what is certain, what can vary by family or place, and what you want to ask next.", margin + width * 0.44, y - 8, width * 0.43, "LKEn", 9.5, 14)
    c.setFillColor(WHITE)
    c.setStrokeColor(LINE)
    c.roundRect(margin, height * 0.17, width - margin * 2, height * 0.19, 10, 1, 1)
    c.setFillColor(TEAL_DARK)
    c.setFont("LKSan", 13)
    c.drawString(margin + 18, height * 0.32, "现在试一试")
    c.setFillColor(GRAY)
    c.setFont("LKEn", 9)
    c.drawString(margin + 18, height * 0.30, "Try it now")
    step = spec["activity"][index % len(spec["activity"])]
    c.setFillColor(INK)
    c.setFont("LKSan", 11)
    wrap(c, step, margin + 18, height * 0.265, width - margin * 2 - 36, "LKSan", 11, 17)


def build(spec_id, pagesize, tag):
    spec = RESOURCE_SPECS[spec_id]
    target_dir = OUT / spec_id / "v1"
    target_dir.mkdir(parents=True, exist_ok=True)
    width, height = pagesize
    target = target_dir / f"{spec_id}-{tag}.pdf"
    c = canvas.Canvas(str(target), pagesize=pagesize)
    c.setTitle(f"Loong Kits · {spec['english']}")
    c.setAuthor("Loong Kits")
    c.setSubject("Free bilingual Chinese culture learning resource")
    cover(c, width, height, spec)
    for page in range(2, spec["pages"] + 1):
        c.showPage()
        content_page(c, width, height, spec, page, page - 2)
    c.save()
    return target


def preview(pdf_path, page_number, destination):
    document = fitz.open(pdf_path)
    pixmap = document[page_number].get_pixmap(matrix=fitz.Matrix(1.2, 1.2), alpha=False)
    png = destination.with_suffix(".png")
    pixmap.save(png)
    with Image.open(png) as image:
        image.save(destination, "WEBP", quality=90, method=6)
    png.unlink()
    document.close()


def main():
    register_fonts()
    for spec_id in RESOURCE_SPECS:
        a4 = build(spec_id, A4, "a4")
        letter_pdf = build(spec_id, letter, "letter")
        folder = a4.parent
        preview(a4, 0, folder / "preview-cover.webp")
        preview(a4, min(1, RESOURCE_SPECS[spec_id]["pages"] - 1), folder / "preview-activity.webp")
        print(f"generated {a4}")
        print(f"generated {letter_pdf}")


if __name__ == "__main__":
    main()
