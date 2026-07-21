import type { Metadata } from "next";
import { Nunito, Inter, Noto_Serif_SC, Noto_Sans_SC } from "next/font/google";
import "./globals.css";

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const notoSerifSC = Noto_Serif_SC({
  variable: "--font-serif-sc",
  subsets: ["latin"],
  weight: ["700"],
});

const notoSansSC = Noto_Sans_SC({
  variable: "--font-sans-sc",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "Loong Kits - Printable Chinese Culture Learning Kits for Kids",
  description: "High-quality printable bilingual learning materials for heritage families and educators. Stories, worksheets, crafts, and activities.",
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
        {children}
      </body>
    </html>
  );
}