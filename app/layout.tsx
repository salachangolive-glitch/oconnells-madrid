import type { Metadata } from "next";
import { Geist_Mono, Libre_Baskerville, Source_Sans_3 } from "next/font/google";
import { JsonLd } from "@/components/JsonLd";
import { barOrPubJsonLd } from "@/lib/jsonld";
import {
  getSiteUrl,
  isPreviewHost,
  SITE_NAME,
  SITE_TAGLINE,
} from "@/lib/venue";
import "./globals.css";

const sourceSans = Source_Sans_3({
  variable: "--font-source-sans",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

const libreBaskerville = Libre_Baskerville({
  variable: "--font-libre-baskerville",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const preview = isPreviewHost();

export const metadata: Metadata = {
  metadataBase: new URL(getSiteUrl()),
  title: {
    default: `${SITE_NAME} Madrid | Irish pub & sports bar near Sol`,
    template: `%s | ${SITE_NAME} Madrid`,
  },
  description: `${SITE_NAME} — ${SITE_TAGLINE}. Calle de Espoz y Mina 7. Premier League, Champions League and LaLiga on the screens. Thursday €1 shots.`,
  robots: preview
    ? { index: false, follow: false }
    : { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${sourceSans.variable} ${libreBaskerville.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col text-cream">
        <JsonLd data={barOrPubJsonLd()} />
        {children}
      </body>
    </html>
  );
}
