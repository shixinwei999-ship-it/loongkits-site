# Third-party notices and retained rights

The MIT grant for the files listed in [LICENSING.md](LICENSING.md) applies only
to the maintainer-owned software in that list. It does not relicense dependencies,
fonts, assets, educational content, or another rightsholder's work.

## Software dependencies

The dependency names and resolved versions are recorded in `package.json` and
`package-lock.json`. Installations and distributed builds can include packages
under different licenses. Preserve all applicable upstream copyright notices,
license texts, NOTICE files, attribution, and other obligations when distributing
those packages or their build outputs. The project's MIT file is not a
replacement for those upstream licenses. This note is not a complete
dependency-compliance certification.

In particular, the Next.js, React, Tailwind CSS, TypeScript, Playwright and
transitive dependency packages retain their own license terms. No third-party
package source is granted a new license by the maintainer.

## Fonts and media

Fonts loaded through `next/font/google`, locally available operating-system
fonts used by generation scripts, and any embedded or distributed font data
retain their original licenses. Check the exact font distribution's license and
embedding permissions; the program-code MIT grant gives no font rights.

Images, drawings, branding, previews, PDFs and learning packs under `public/**`
are outside this grant. Do not infer reuse rights from their being generated,
publicly visible or freely downloadable. Some generation scripts depend on
additional tools or services with their own terms; those scripts and outputs
have not been included in this limited MIT scope.

## Teaching content

Course texts, translations, curricula and books, including material embedded in
TS/TSX data files, are outside this program-code grant. Attribution to, structural
reference to, or availability of a textbook does not itself establish permission
to reproduce or adapt it. Any reuse requires the original rightsholder's license
or another applicable legal basis, assessed separately.
