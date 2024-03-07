import React from "react";
import type { Metadata, Viewport } from "next";
import { Footer } from "@/components/marketing/footer";
import { Header } from "@/components/marketing/header";
import { Toaster } from "@/components/ui/sonner";
import { cn } from "@/utils/classes";
import { truncateOnWord } from "@/utils/text";
import { fontDisplay, geistMono, geistSans } from "@/styles/fonts";
import "@/styles/globals.css";
import { siteConfig } from "@/config";
import { Providers } from "./providers";

const config = siteConfig.global;

export const metadata: Metadata = {
  title: { default: config.title, template: `${config.name} - %s` },
  description: truncateOnWord(config.description, 148, true),
  keywords: config.keywords,
  authors: config.authors,
  creator: config.creator,
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: config.url,
    title: config.title,
    description: truncateOnWord(config.description, 148, true),
    siteName: config.name,
    images: [config.thumbnail],
  },
  twitter: {
    card: "summary_large_image",
    title: config.title,
    description: truncateOnWord(config.description, 148, true),
    images: [config.thumbnail],
    creator: config.twitter.creator,
  },
  metadataBase: new URL(config.url),
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen",
          geistMono.variable,
          geistSans.variable,
          fontDisplay.variable
        )}
        suppressHydrationWarning
      >
        <Providers>
          <Toaster />
          <div className="relative">
            <Background />
            <Header />
            <div className="min-h-[calc(100vh-64px)] pt-10">{children}</div>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}

const Background = () => {
  return (
    <div className="pointer-events-none">
      <div
        className="absolute h-screen w-full duration-300 animate-in fade-in"
        style={{
          background:
            "radial-gradient(ellipse 80% 80% at 30% -10%,rgba(120,119,198,0.3),rgba(0,0,0,0))",
        }}
      />
    </div>
  );
};