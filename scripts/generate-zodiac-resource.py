# -*- coding: utf-8 -*-
"""Generate the free Loong Kits Zodiac Animals Starter Worksheet assets."""

from pathlib import Path

import fitz
from PIL import Image
from reportlab.lib.colors import HexColor
from reportlab.lib.pagesizes import A4, letter
from reportlab.lib.utils import ImageReader
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.pdfgen import canvas

ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / "public" / "resources" / "zodiac-animals" / "v1"
BRAND_HERO = ROOT / "public" / "brand" / "hong-qing-hero.webp"
WINDOWS_FONTS = Path("C:/Windows/Fonts")

CREAM = HexColor("#FAF7F2")
PAPER = HexColor("#FFFCF5")
TEAL = HexColor("#2D6A4F")
TEAL_DARK = HexColor("#1F4A38")
SAGE = HexColor("#7A9B8E")
ROSE = HexColor("#D4807A")
ORANGE = HexColor("#F4A261")
RED = HexColor("#C8102E")
INK = HexColor("#2B2B2B")
GRAY = HexColor("#6F756F")
LINE = HexColor("#DDE8E1")
PALE_SAGE = HexColor("#EDF4EF")
PALE_ROSE = HexColor("#FCF0ED")
WHITE = HexColor("#FFFFFF")

ANIMALS = [
    ("鼠", "shǔ", "Rat"), ("牛", "niú", "Ox"), ("虎", "hǔ", "Tiger"),
    ("兔", "tù", "Rabbit"), ("龙", "lóng", "Dragon"), ("蛇", "shé", "Snake"),
    ("马", "mǎ", "Horse"), ("羊", "yáng", "Goat"), ("猴", "hóu", "Monkey"),
    ("鸡", "jī", "Rooster"), ("狗", "gǒu", "Dog"), ("猪", "zhū", "Pig"),
]
TRACE = [("龙", "lóng", "dragon"), ("兔", "tù", "rabbit"), ("马", "mǎ", "horse"), ("羊", "yáng", "goat")]


def register_fonts():
    pdfmetrics.registerFont(TTFont("LoongSans", str(WINDOWS_FONTS / "simhei.ttf")))
    pdfmetrics.registerFont(TTFont("LoongSerif", str(WINDOWS_FONTS / "simsun.ttc"), subfontIndex=0))
    pdfmetrics.registerFont(TTFont("LoongEnglish", str(WINDOWS_FONTS / "calibri.ttf")))
    pdfmetrics.registerFont(TTFont("LoongEnglishBold", str(WINDOWS_FONTS / "calibrib.ttf")))


def line(c, x1, y1, x2, y2, color=TEAL, width=1.2):
    c.setStrokeColor(color)
    c.setLineWidth(width)
    c.setLineCap(1)
    c.line(x1, y1, x2, y2)


def rounded(c, x, y, width, height, fill, radius=10, stroke=None, stroke_width=1):
    c.setFillColor(fill)
    c.setStrokeColor(stroke or fill)
    c.setLineWidth(stroke_width)
    c.roundRect(x, y, width, height, radius, 1, 1)


def draw_logo(c, x, y, size=28):
    c.saveState()
    c.setFillColor(RED)
    c.roundRect(x, y, size, size, size * 0.2, 1, 0)
    c.setStrokeColor(WHITE)
    c.setLineWidth(0.9)
    c.roundRect(x + 4, y + 4, size - 8, size - 8, 3, 0, 1)
    c.setFillColor(WHITE)
    c.setFont("LoongSerif", size * 0.48)
    c.drawCentredString(x + size / 2, y + size * 0.22, "龙")
    c.restoreState()


def draw_hong_qing(c, x, y, width, height):
    image = ImageReader(Image.open(BRAND_HERO))
    image_width, image_height = image.getSize()
    scale = min(width / image_width, height / image_height)
    rendered_width = image_width * scale
    rendered_height = image_height * scale
    c.drawImage(
        image,
        x + (width - rendered_width) / 2,
        y + (height - rendered_height) / 2,
        rendered_width,
        rendered_height,
        mask="auto",
    )


def header(c, width, height, page, total):
    margin = width * 0.075
    draw_logo(c, margin, height - 40, 22)
    c.setFillColor(TEAL)
    c.setFont("LoongEnglishBold", 11)
    c.drawString(margin + 30, height - 31, "Loong Kits")
    c.setFillColor(GRAY)
    c.setFont("LoongEnglish", 8)
    c.drawRightString(width - margin, height - 27, "Zodiac Animals Starter Worksheet")
    c.setFont("LoongSans", 8)
    c.drawRightString(width - margin, height - 39, "十二生肖双语练习包")
    line(c, margin, height - 49, width - margin, height - 49, TEAL, 1.1)
    c.setFillColor(GRAY)
    c.setFont("LoongEnglish", 7.5)
    c.drawRightString(width - margin, 27, f"Free printable · Page {page}/{total}")


def footer(c, width):
    margin = width * 0.075
    line(c, margin, 39, width - margin, 39, LINE, 0.8)
    c.setFillColor(GRAY)
    c.setFont("LoongEnglish", 7.5)
    c.drawString(margin, 26, "loongkits.com  ·  Print at 100% on A4 or US Letter")


def section_label(c, x, y, english, chinese):
    c.setFillColor(ORANGE)
    c.circle(x + 3, y + 3, 3, 1, 0)
    c.setFillColor(TEAL)
    c.setFont("LoongEnglishBold", 9)
    c.drawString(x + 12, y, english.upper())
    c.setFillColor(GRAY)
    c.setFont("LoongSans", 9)
    c.drawString(x + 18 + pdfmetrics.stringWidth(english.upper(), "LoongEnglishBold", 9), y, chinese)


def title(c, x, y, chinese, english):
    c.setFillColor(INK)
    c.setFont("LoongSerif", 27)
    c.drawString(x, y, chinese)
    c.setFillColor(GRAY)
    c.setFont("LoongEnglish", 11)
    c.drawString(x, y - 20, english)


def draw_cover(c, width, height):
    margin = width * 0.075
    c.setFillColor(CREAM)
    c.rect(0, 0, width, height, 0, 1)
    c.setFillColor(TEAL_DARK)
    c.rect(0, 0, width * 0.32, height, 0, 1)
    c.setFillColor(WHITE)
    c.setFont("LoongEnglishBold", 11)
    c.drawCentredString(width * 0.16, height * 0.68, "LOONG KITS")
    c.setFont("LoongSans", 10)
    c.drawCentredString(width * 0.16, height * 0.65, "中英双语 · 可打印")
    draw_logo(c, width * 0.16 - 24, height * 0.74, 48)

    x = width * 0.40
    section_label(c, x, height * 0.77, "Free printable", "免费资源")
    c.setFillColor(INK)
    c.setFont("LoongSerif", 37)
    c.drawString(x, height * 0.69, "十二生肖")
    c.setFillColor(TEAL)
    c.setFont("LoongSans", 17)
    c.drawString(x, height * 0.65, "双语入门练习包")
    c.setFillColor(GRAY)
    c.setFont("LoongEnglish", 13)
    c.drawString(x, height * 0.60, "Zodiac Animals Starter Worksheet")

    pill_y = height * 0.49
    rounded(c, x, pill_y, width * 0.49, 50, PALE_SAGE, 12, TEAL, 1.2)
    labels = [("4", "pages"), ("4–8", "ages"), ("EN / 中文", "bilingual")]
    cell = width * 0.49 / len(labels)
    for index, (big, small) in enumerate(labels):
        left = x + cell * index
        if index:
            line(c, left, pill_y + 10, left, pill_y + 40, LINE, 0.9)
        c.setFillColor(TEAL)
        c.setFont("LoongEnglishBold", 13)
        c.drawCentredString(left + cell / 2, pill_y + 28, big)
        c.setFillColor(GRAY)
        c.setFont("LoongEnglish", 8)
        c.drawCentredString(left + cell / 2, pill_y + 15, small)

    draw_hong_qing(c, width * 0.39, height * 0.13, width * 0.54, height * 0.29)
    c.setFillColor(PALE_ROSE)
    c.circle(width * 0.92, height * 0.86, width * 0.12, 0, 1)
    c.setFillColor(TEAL)
    c.setFont("LoongSans", 9.5)
    c.drawString(x, height * 0.43, "认识十二生肖 · 说一说 · 描一描 · 连一连")
    c.setFillColor(GRAY)
    c.setFont("LoongEnglish", 9.5)
    c.drawString(x, height * 0.41, "Name the animals · Trace key characters · Make a match")
    footer(c, width)


def draw_vocabulary(c, width, height):
    margin = width * 0.075
    c.setFillColor(CREAM)
    c.rect(0, 0, width, height, 0, 1)
    header(c, width, height, 2, 4)
    section_label(c, margin, height - 88, "Vocabulary", "词汇卡")
    title(c, margin, height - 125, "认识十二生肖", "Meet the 12 Zodiac Animals")
    c.setFillColor(GRAY)
    c.setFont("LoongEnglish", 9.5)
    c.drawString(margin, height - 166, "Point, say the Chinese word, then try the pinyin together.")
    c.setFont("LoongSans", 9.5)
    c.drawString(margin, height - 181, "指一指、说一说中文，再一起试试拼音。")

    grid_top = height - 210
    gap = 10
    columns = 3
    card_width = (width - margin * 2 - gap * (columns - 1)) / columns
    card_height = (grid_top - 70 - gap * 3) / 4
    for index, (character, pinyin, english) in enumerate(ANIMALS):
        row, column = divmod(index, columns)
        x = margin + column * (card_width + gap)
        y = grid_top - (row + 1) * card_height - row * gap
        background = PALE_SAGE if index % 2 == 0 else WHITE
        rounded(c, x, y, card_width, card_height, background, 8, LINE, 0.8)
        c.setFillColor(TEAL if character != "龙" else RED)
        c.setFont("LoongSerif", min(card_height * 0.53, 30))
        c.drawCentredString(x + card_width * 0.22, y + card_height * 0.34, character)
        c.setFillColor(INK)
        c.setFont("LoongEnglishBold", 10)
        c.drawString(x + card_width * 0.39, y + card_height * 0.56, english)
        c.setFillColor(TEAL)
        c.setFont("LoongEnglish", 9)
        c.drawString(x + card_width * 0.39, y + card_height * 0.35, pinyin)
        c.setFillColor(GRAY)
        c.setFont("LoongSans", 8)
        c.drawString(x + card_width * 0.39, y + card_height * 0.18, f"{character} · {english}")
    footer(c, width)


def draw_trace_box(c, x, y, size, character):
    c.setStrokeColor(TEAL)
    c.setLineWidth(1.1)
    c.rect(x, y, size, size, 1, 0)
    c.setStrokeColor(ROSE)
    c.setLineWidth(0.6)
    c.setDash(3, 3)
    c.line(x + size / 2, y, x + size / 2, y + size)
    c.line(x, y + size / 2, x + size, y + size / 2)
    c.setDash()
    c.setFillColor(HexColor("#DCE9E0"))
    c.setFont("LoongSerif", size * 0.68)
    c.drawCentredString(x + size / 2, y + size * 0.13, character)


def draw_activity(c, width, height):
    margin = width * 0.075
    c.setFillColor(PAPER)
    c.rect(0, 0, width, height, 0, 1)
    header(c, width, height, 3, 4)
    section_label(c, margin, height - 88, "Practice", "练一练")
    title(c, margin, height - 125, "描一描 · 连一连", "Trace, then make a match")
    c.setFillColor(GRAY)
    c.setFont("LoongSans", 9.5)
    c.drawString(margin, height - 164, "沿着浅色汉字描一遍，再把中文和英文连起来。")
    c.setFont("LoongEnglish", 9.5)
    c.drawString(margin, height - 180, "Trace each pale character, then connect the Chinese word to its English match.")

    top = height - 220
    box = min((width - margin * 2 - 42) / 4, 95)
    for index, (character, pinyin, english) in enumerate(TRACE):
        x = margin + index * (box + 14)
        draw_trace_box(c, x, top - box, box, character)
        c.setFillColor(TEAL)
        c.setFont("LoongEnglishBold", 9.5)
        c.drawCentredString(x + box / 2, top - box - 14, pinyin)
        c.setFillColor(GRAY)
        c.setFont("LoongEnglish", 8.5)
        c.drawCentredString(x + box / 2, top - box - 27, english)

    match_top = height * 0.43
    c.setFillColor(TEAL_DARK)
    c.setFont("LoongSans", 16)
    c.drawString(margin, match_top + 104, "连一连 Match the pairs")
    c.setFillColor(GRAY)
    c.setFont("LoongEnglish", 9)
    c.drawString(margin, match_top + 88, "Draw a line between the Chinese word and the English animal.")

    left = [("兔", "tù"), ("龙", "lóng"), ("马", "mǎ"), ("羊", "yáng")]
    right = ["goat", "dragon", "rabbit", "horse"]
    row_height = 42
    left_x = margin + 20
    right_x = width - margin - 125
    for index, (character, pinyin) in enumerate(left):
        y = match_top + 48 - index * row_height
        rounded(c, left_x, y - 13, 94, 28, PALE_SAGE, 8, TEAL, 0.8)
        c.setFillColor(TEAL)
        c.setFont("LoongSerif", 17)
        c.drawString(left_x + 12, y - 6, character)
        c.setFont("LoongEnglish", 9)
        c.drawString(left_x + 42, y - 4, pinyin)
        rounded(c, right_x, y - 13, 105, 28, WHITE, 8, ORANGE, 0.8)
        c.setFillColor(INK)
        c.setFont("LoongEnglishBold", 10)
        c.drawCentredString(right_x + 52, y - 4, right[index])
        line(c, left_x + 104, y, right_x - 8, y, LINE, 0.7)

    c.setFillColor(PALE_ROSE)
    c.roundRect(margin, 67, width - margin * 2, 62, 10, 1, 0)
    c.setFillColor(TEAL_DARK)
    c.setFont("LoongSans", 11)
    c.drawString(margin + 15, 104, "说一说：我喜欢 ____ ，因为它很 ____ 。")
    c.setFillColor(GRAY)
    c.setFont("LoongEnglish", 9.5)
    c.drawString(margin + 15, 84, "Say it: I like the ____ because it is ____.")
    footer(c, width)


def draw_guide(c, width, height):
    margin = width * 0.075
    c.setFillColor(CREAM)
    c.rect(0, 0, width, height, 0, 1)
    header(c, width, height, 4, 4)
    section_label(c, margin, height - 88, "Use together", "一起学")
    title(c, margin, height - 125, "家庭与课堂小指南", "A short guide for families and teachers")

    card_gap = 16
    card_width = (width - margin * 2 - card_gap) / 2
    card_top = height - 205
    card_height = 184
    cards = [
        (
            "15–20 minutes",
            "家庭一起学",
            [
                "1. Pick three animals and name them.",
                "2. Trace one character slowly.",
                "3. Ask: Which animal do you like? Why?",
            ],
            ["选三个生肖，说出名字。", "慢慢描一个汉字。", "问问孩子：你喜欢哪一个？为什么？"],
            PALE_SAGE,
        ),
        (
            "Print and teach",
            "老师课堂用",
            [
                "Print at 100% in color or grayscale.",
                "Use page 2 for a 12-animal word wall.",
                "Pair learners to say and match together.",
            ],
            ["按 100% 打印，彩色或黑白都可以。", "第 2 页可做十二生肖词汇墙。", "两人一组，说一说、连一连。"],
            PALE_ROSE,
        ),
    ]
    for index, (english_title, chinese_title, english_steps, chinese_steps, background) in enumerate(cards):
        x = margin + index * (card_width + card_gap)
        y = card_top - card_height
        rounded(c, x, y, card_width, card_height, background, 10, LINE, 0.8)
        c.setFillColor(TEAL)
        c.setFont("LoongEnglishBold", 11)
        c.drawString(x + 16, y + card_height - 26, english_title)
        c.setFillColor(INK)
        c.setFont("LoongSans", 13)
        c.drawString(x + 16, y + card_height - 46, chinese_title)
        for step_index, step in enumerate(english_steps):
            baseline = y + card_height - 72 - step_index * 31
            c.setFillColor(TEAL)
            c.circle(x + 20, baseline + 2, 2.2, 1, 0)
            c.setFillColor(INK)
            c.setFont("LoongEnglish", 8.3)
            c.drawString(x + 30, baseline, step)
            c.setFillColor(GRAY)
            c.setFont("LoongSans", 7.6)
            c.drawString(x + 30, baseline - 11, chinese_steps[step_index])

    lower_y = 130
    c.setFillColor(TEAL_DARK)
    c.setFont("LoongSans", 16)
    c.drawString(margin, lower_y + 96, "打印小贴士")
    c.setFillColor(GRAY)
    c.setFont("LoongEnglish", 10)
    c.drawString(margin, lower_y + 79, "Print tips")
    tips = [
        ("A4 or US Letter", "两种尺寸都已准备好"),
        ("Print at 100%", "不要选择‘适应页面’"),
        ("Pencil first", "先用铅笔描红更轻松"),
    ]
    tip_width = (width - margin * 2 - 20) / 3
    for index, (english, chinese) in enumerate(tips):
        x = margin + index * (tip_width + 10)
        rounded(c, x, lower_y, tip_width, 58, WHITE, 9, LINE, 0.8)
        c.setFillColor(TEAL)
        c.setFont("LoongEnglishBold", 9.3)
        c.drawCentredString(x + tip_width / 2, lower_y + 35, english)
        c.setFillColor(GRAY)
        c.setFont("LoongSans", 8.2)
        c.drawCentredString(x + tip_width / 2, lower_y + 19, chinese)
    footer(c, width)


def build(pagesize, tag):
    width, height = pagesize
    target = OUT / f"zodiac-animals-starter-{tag}.pdf"
    c = canvas.Canvas(str(target), pagesize=pagesize)
    c.setTitle("Loong Kits · Zodiac Animals Starter Worksheet")
    c.setAuthor("Loong Kits")
    c.setSubject("Free printable bilingual Chinese zodiac learning resource")
    draw_cover(c, width, height)
    c.showPage()
    draw_vocabulary(c, width, height)
    c.showPage()
    draw_activity(c, width, height)
    c.showPage()
    draw_guide(c, width, height)
    c.save()
    return target


def render_preview(pdf_path, page_number, output_name):
    document = fitz.open(pdf_path)
    pixmap = document[page_number].get_pixmap(matrix=fitz.Matrix(1.25, 1.25), alpha=False)
    png_path = OUT / f".{output_name}.png"
    pixmap.save(png_path)
    with Image.open(png_path) as image:
        image.save(OUT / output_name, "WEBP", quality=90, method=6)
    png_path.unlink()
    document.close()


def main():
    OUT.mkdir(parents=True, exist_ok=True)
    register_fonts()
    a4 = build(A4, "a4")
    letter_pdf = build(letter, "letter")
    render_preview(a4, 0, "preview-cover.webp")
    render_preview(a4, 1, "preview-vocabulary.webp")
    print(f"generated {a4.name}")
    print(f"generated {letter_pdf.name}")


if __name__ == "__main__":
    main()
