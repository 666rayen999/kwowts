import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

import icon from "@/app/icon.png";
import apple from "@/app/apple-icon.png";

export const metadata: Metadata = {
  title: "Kwowts",
  description: "Explore Quotes. Get Inspired.",
  icons: { icon: icon.src, apple: apple.src },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
