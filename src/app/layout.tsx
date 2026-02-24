import type { Metadata } from "next";
import { Barlow, Lora } from "next/font/google";
import "./globals.css";

const barlow = Barlow({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-barlow",
});

const lora = Lora({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-lora",
});

export const metadata: Metadata = {
  title: "Terra Pretiosa",
  description:
    "Terra Pretiosa - Services miniers et gouvernance des matières premières minérales",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${barlow.variable} ${lora.variable} font-[var(--font-barlow)] antialiased`}>
        {children}
      </body>
    </html>
  );
}
