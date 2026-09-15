import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { JsonLd } from "@/components/JsonLd";
import { barOrPubJsonLd } from "@/lib/jsonld";
import { getSiteUrl, SITE_NAME, SITE_TAGLINE } from "@/lib/venue";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(getSiteUrl()),
  title: {
    default: `${SITE_NAME} Madrid | Irish pub & sports bar near Sol`,
    template: `%s | ${SITE_NAME} Madrid`,
  },
  description: `${SITE_NAME} — ${SITE_TAGLINE}. Calle de Espoz y Mina 7. Football screens, Thursday €1 shots.`,
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-black text-cream">
        <JsonLd data={barOrPubJsonLd()} />
        {children}
      </body>
    </html>
  );
}
