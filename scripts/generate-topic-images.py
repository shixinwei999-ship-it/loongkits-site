# -*- coding: utf-8 -*-
"""Generate one bold full-width editorial image per cultural topic, via the
locally configured Kimi cloud image plugin (no local GPU, no browser).

Each image is shot 16:9 2K, then the bottom strip is cropped off — this both
removes the platform watermark and yields a wider cinematic banner suited to a
full-bleed topic band. Outputs land in public/age-topics/<key>.webp.
"""

import os
import subprocess
import sys
import tomllib
from pathlib import Path

from PIL import Image

ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / "public" / "age-topics"
TMP = ROOT / "tmp" / "age-topics"
OUT.mkdir(parents=True, exist_ok=True)
TMP.mkdir(parents=True, exist_ok=True)

PLUGIN = r"C:\Users\admin\AppData\Roaming\kimi-desktop\daimon-share\daimon\plugin-packages\image_generation\scripts\image_generation_tool.py"
TOML = Path(r"C:\Users\admin\AppData\Roaming\kimi-desktop\daimon-share\config.toml")

cfg = tomllib.loads(TOML.read_text(encoding="utf-8"))
prov = cfg["providers"]["daimon-kimi-code"]
ENV = {**os.environ, "KIMI_API_KEY": prov["api_key"], "KIMI_BASE_URL": prov["base_url"]}

PREFIX = (
    "Premium editorial overhead photograph for a refined bilingual Chinese-culture "
    "education brand. Muted sage green, dusty rose and warm ivory palette, soft natural "
    "daylight, generous negative space, sophisticated international publishing art "
    "direction, real tactile materials, shallow depth of field. "
)
SUFFIX = (
    " No human faces, no readable text, no letters, no numbers, no logos, no watermark, "
    "no cheap cartoon style, no plastic toys, no neon, no clutter."
)

TOPICS = [
    ("prek-zodiac", "Small child hands placing a row of hand-painted Chinese zodiac animal cards — rat, ox, tiger, rabbit, dragon — on a warm ivory table, gentle watercolor animal illustrations on the cards, a chunky wooden pencil nearby."),
    ("prek-red", "Small child hands holding a plain red paper envelope and a blank red square paper, a few red paper-cut shapes scattered on a warm ivory table, festive but restrained and elegant."),
    ("prek-greet", "Two small child hands pressed together in a warm greeting gesture above a warm ivory table with a couple of red cards and a small silk tassel, tender, simple, joyful."),
    ("g15-sequence", "Child hands arranging four small illustrated scene cards in a row on a warm wooden table — a broom, a steaming bowl, two cups toasting, a glowing lantern — telling a festival in order, muted watercolor scenes on the cards."),
    ("g15-riddle", "A few red paper lanterns with blank hanging tags over a warm table, a child hand reaching up toward one, soft festive glow, muted palette, calm and inviting."),
    ("g15-reunion", "A simple top-down family table setting with a shared steaming bowl, folded dumplings, two pairs of chopsticks and small side dishes, warm window light, muted tones, a quiet sense of togetherness."),
    ("g68-region", "Top-down flat lay comparing regional festival foods side by side — folded dumplings, a stack of rice cakes, round sweet rice balls — on warm linen, a small torn old map fragment at the edge, muted palette."),
    ("g68-cycle", "A hand-drawn circular zodiac wheel on cream paper, twelve small animal silhouettes arranged evenly around a ring, a child hand pointing with a colored pencil, muted sage and rose, clean and graphic."),
    ("g68-silk", "An aged paper map with several crossing route lines drawn in colored pencil across land and sea, small tokens of silk thread, a porcelain shard and dried spice beside it, warm desk light, sense of many connections."),
    ("g912-object", "A museum-style top-down flat lay of a single celadon ceramic vessel on neutral linen with a blank white label card and a cotton glove beside it, soft directional light, refined, quiet, scholarly."),
    ("g912-translate", "An open notebook showing two neat columns of abstract blurred handwriting, a Chinese calligraphy brush resting on one side and a fountain pen on the other, warm desk, elegant, no readable text."),
    ("g912-curate", "A drafted blank exhibit panel card with a pen resting on it, an open art reference book showing a misty ink landscape painting, a small zodiac reference sheet at the edge, warm scholarly desk light."),
]


def generate(key: str, subject: str) -> bool:
    tmp_png = TMP / f"{key}.png"
    final = OUT / f"{key}.webp"
    cmd = [
        sys.executable, PLUGIN, "generate",
        "--description", PREFIX + subject + SUFFIX,
        "--ratio", "16:9", "--resolution", "2K", "--background", "opaque",
        "--output", str(tmp_png),
    ]
    proc = subprocess.run(cmd, env=ENV, text=True, capture_output=True, timeout=420)
    if proc.returncode != 0 or not tmp_png.exists():
        print(f"  [FAIL] {key}: {proc.stderr.strip()[-300:]}")
        return False
    with Image.open(tmp_png) as img:
        img = img.convert("RGB")
        w, h = img.size
        cropped = img.crop((0, 0, w, int(h * 0.86)))  # drop bottom strip: kills watermark, widens banner
        cropped.save(final, "WEBP", quality=88, method=6)
    tmp_png.unlink(missing_ok=True)
    print(f"  [ok]   {key}: {cropped.size[0]}x{cropped.size[1]} -> {final.stat().st_size} bytes")
    return True


def main() -> int:
    ok = 0
    for key, subject in TOPICS:
        print(f"generating {key} ...")
        if generate(key, subject):
            ok += 1
    print(f"\ndone: {ok}/{len(TOPICS)} topic images in {OUT}")
    return 0 if ok == len(TOPICS) else 1


if __name__ == "__main__":
    raise SystemExit(main())
