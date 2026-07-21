import type { Metadata } from "next";
import { Nunito, Inter, Noto_Serif_SC, Noto_Sans_SC } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/lib/i18n";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { site } from "@/lib/site";

const nunito = Nunito({
  variable: "--font-nunito-base",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
});

const inter = Inter({
  variable: "--font-inter-base",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const notoSerifSC = Noto_Serif_SC({
  variable: "--font-serif-sc-base",
  subsets: ["latin"],
  weight: ["700"],
});

const notoSansSC = Noto_Sans_SC({
  variable: "--font-sans-sc-base",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Loong Kits — Printable Chinese Culture Learning Kits for Kids",
    template: "%s | Loong Kits",
  },
  description:
    "High-quality printable bilingual (EN/中文) learning materials for heritage families and educators. Stories, worksheets, crafts, and activities for ages 3-18.",
  keywords: [
    "Chinese culture for kids",
    "printable learning kits",
    "bilingual worksheets",
    "heritage Chinese",
    "Chinese New Year activities",
    "zodiac animals worksheet",
  ],
  openGraph: {
    type: "website",
    siteName: "Loong Kits",
    url: site.url,
    title: "Loong Kits — Bring Chinese Culture to Life",
    description:
      "Printable bilingual kits for curious kids. Stories, worksheets, crafts & activities for ages 3-18.",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Loong Kits — Bring Chinese Culture to Life",
    description:
      "Printable bilingual kits for curious kids. Stories, worksheets, crafts & activities for ages 3-18.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${nunito.variable} ${inter.variable} ${notoSerifSC.variable} ${notoSansSC.variable} antialiased`}
      >
        <LanguageProvider>
          <div className="min-h-screen bg-cream flex flex-col">
            <Navbar />
            <main className="flex-1 pt-16">{children}</main>
            <Footer />
          </div>
        </LanguageProvider>
      </body>
    </html>
  );
}
