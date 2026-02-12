import type { Metadata } from "next";
import { Geist, Geist_Mono, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const jetbrainsMono = JetBrains_Mono({subsets:['latin'],variable:'--font-sans'});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Central Civil Works Pty Ltd | Fibre Optic Solutions",
  description: "Central Civil Works Pty Ltd, located in Windhoek, Namibia. We are currently under construction. Stay tuned for our new digital hub.",
openGraph:{
  title: "Central Civil Works Pty Ltd | Fibre Optic Solutions",
  description: "Central Civil Works Pty Ltd, located in Windhoek, Namibia. We are currently under construction. Stay tuned for our new digital hub.",
  type: "website",
  // url: "https://centralcivilworks.co.za",
  siteName: "Central Civil Works Pty Ltd",
  locale: "en_NA",
}, 
twitter:{
  card: "summary_large_image",
  title: "Central Civil Works Pty Ltd | Fibre Optic Solutions",
  description: "Central Civil Works Pty Ltd, located in Windhoek, Namibia. We are currently under construction. Stay tuned for our new digital hub.",
}
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={jetbrainsMono.variable}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
