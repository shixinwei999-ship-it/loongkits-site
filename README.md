# Loong Kits website

Loong Kits is an early-stage bilingual (English / Chinese) learning website
for Chinese learners, heritage families, and educators. This repository contains
the Next.js / React / TypeScript website and its maintenance tooling.

## Reusable program modules

Selected maintainer-owned modules are available under the MIT License:

- bilingual language context and interface switching;
- browser speech-synthesis playback;
- reusable book/reading and sentence interaction components;
- quiz interaction, count-up and reveal effects;
- visual-check and font-diagnostic tooling.

These modules are reference implementations from a maintained application, not
a separately packaged SDK. Some import application types or content and may need
adaptation in another project. The teaching content and visual assets referenced
by the application are not automatically licensed with the program code.

## Development

The application uses Next.js 16, React 19, TypeScript, and Tailwind CSS 4.
After installing the declared dependencies, `npm run dev` starts development
and `npm run build` performs the production build. Browser visual checks are
available via `npm run visual:check` against a developer-supplied test URL.
Do not use production credentials or submit paid media-generation requests just
to inspect or test this repository.

## License and rights boundaries

**Only the specific maintainer-owned files listed in [LICENSING.md](LICENSING.md)
are released under the standard [MIT License](LICENSE). This is a mixed-license
repository.**

Books, teaching texts, translations, curricula, commercial/editorial copy,
pictures, logos, the Loong Kits brand, PDFs, downloadable learning packs,
third-party dependencies, and all other unlisted material are not included in
that grant. Free access to the site or a download does not grant blanket reuse
rights. See [THIRD_PARTY_NOTICES.md](THIRD_PARTY_NOTICES.md).

The maintainer welcomes issue reports about the reusable code. Project adoption,
download counts and educational outcomes have not been independently established;
no claim of broad ecosystem adoption is made.
