import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "VOLTSPACE - Arduino Learning Platform",
  description: "Learn, collaborate, and innovate with the most electrifying Arduino learning platform. Join our community of makers and explore Arduino projects.",
  keywords: ["Arduino", "learning", "electronics", "programming", "marketplace", "community"],
  authors: [{ name: "VOLTSPACE" }],
  openGraph: {
    title: "VOLTSPACE - Arduino Learning Platform",
    description: "Power Your Arduino Journey",
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
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
