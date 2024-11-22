import "./globals.css";
import { Analytics } from "@vercel/analytics/react";

export const metadata = {
  title: "McLovin ID Card Generator - Create Your Own McLovin License",
  description:
    "Create your very own McLovin ID card with our fun and interactive generator! Inspired by the iconic Superbad movie, it's fast, easy, and totally free to use. Perfect for fans and nostalgic fun!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Icons & metadata */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href="/android-chrome-192x192.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="512x512"
          href="/android-chrome-512x512.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}