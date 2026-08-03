import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import "./ccw.css";
import { DotGridBackground } from "@/components/site/dot-grid-background";
import { Navbar } from "@/components/site/navbar";
import { Footer } from "@/components/site/footer";
import { BottomChrome } from "@/components/site/bottom-chrome";

const nexa = localFont({
  src: [
    { path: "./fonts/Nexa-ExtraLight.ttf", weight: "200", style: "normal" },
    { path: "./fonts/Nexa-Heavy.ttf", weight: "800", style: "normal" },
  ],
  variable: "--font-nexa",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-jetbrains",
  display: "swap",
});

const SITE_DESCRIPTION =
  "Central Civil Works is a 100% Namibian-owned contractor in Swakopmund and Windhoek, delivering civil works, construction and fibre optic networks. 32+ projects completed. Request a site visit today.";

export const metadata: Metadata = {
  metadataBase: new URL("https://ccw.com.na"),
  title: {
    default: "Central Civil Works | Civil, Construction & Fibre Optics, Namibia",
    template: "%s | Central Civil Works",
  },
  description: SITE_DESCRIPTION,
  openGraph: {
    title: "Central Civil Works | Civil, Construction & Fibre Optics, Namibia",
    description: SITE_DESCRIPTION,
    type: "website",
    url: "https://ccw.com.na",
    siteName: "Central Civil Works Pty Ltd",
    locale: "en_NA",
  },
  twitter: {
    card: "summary_large_image",
    title: "Central Civil Works | Civil, Construction & Fibre Optics, Namibia",
    description: SITE_DESCRIPTION,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${nexa.variable} ${inter.variable} ${jetbrainsMono.variable}`}
    >
      <body className="ccw antialiased">
        <DotGridBackground />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <BottomChrome />
      </body>
    </html>
  );
}
