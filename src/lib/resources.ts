export const zodiacAnimalsResource = {
  id: "zodiac-animals",
  publishedAt: "2026-07-22",
  pageCount: 4,
  ageRange: "4-8",
  formats: {
    a4: {
      href: "/resources/zodiac-animals/v1/zodiac-animals-starter-a4.pdf",
      label: "A4",
    },
    letter: {
      href: "/resources/zodiac-animals/v1/zodiac-animals-starter-letter.pdf",
      label: "US Letter",
    },
  },
  previews: {
    cover: "/resources/zodiac-animals/v1/preview-cover.webp",
    vocabulary: "/resources/zodiac-animals/v1/preview-vocabulary.webp",
  },
} as const;
