import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  title: "VOLTSPACE - Modern Arduino Learning Platform",
  description: "Experience the most sophisticated Arduino learning platform. Design, build, and innovate with professional tools and community support.",
  keywords: ["Arduino", "learning", "electronics", "programming", "tech education"],
  authors: [{ name: "VOLTSPACE" }],
  viewport: "width=device-width, initial-scale=1, maximum-scale=1",
  themeColor: "#030305",
  openGraph: {
    title: "VOLTSPACE - Modern Arduino Learning Platform",
    description: "Experience the most sophisticated Arduino learning platform",
    type: "website",
    locale: "en_US",
    siteName: "VOLTSPACE",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans antialiased bg-background text-white selection:bg-primary/20 selection:text-primary">
        {children}
      </body>
    </html>
  );
}
