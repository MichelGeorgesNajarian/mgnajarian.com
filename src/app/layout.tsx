import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { cn } from "@/lib/utils";
import { site } from "@/data/site";
import { basePath } from "@/lib/base-path";
import { PersonJsonLd } from "@/components/json-ld";
import { ThemeProvider } from "@/components/theme-provider";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const fullTitle = `${site.name} — ${site.title}`;

export const metadata: Metadata = {
  metadataBase: new URL(`${site.url}${basePath}`),
  ...(basePath && { robots: { index: false, follow: false } }),
  title: {
    default: fullTitle,
    template: `%s · ${site.name}`,
  },
  description: site.description,
  alternates: {
    types: { "application/rss+xml": "/feed.xml" },
  },
  openGraph: {
    type: "website",
    url: site.url,
    siteName: site.name,
    title: fullTitle,
    description: site.ogDescription,
    images: [
      {
        url: site.ogImage.path,
        width: site.ogImage.width,
        height: site.ogImage.height,
        alt: site.ogImage.alt,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: fullTitle,
    description: site.ogDescription,
    images: [{ url: site.ogImage.path, alt: site.ogImage.alt }],
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
      suppressHydrationWarning
      className={cn(geistSans.variable, geistMono.variable)}
    >
      <body className="bg-background text-foreground antialiased">
        {/* Making sure SEO crawlers tie articles on this site to me */}
        <PersonJsonLd />
        <ThemeProvider>
          <a
            href="#content"
            className={cn(
              "sr-only focus:not-sr-only",
              "focus:fixed focus:top-2 focus:left-2 focus:z-60",
              "focus:rounded-md focus:bg-background focus:px-3 focus:py-2 focus:text-sm focus:shadow-md",
            )}
          >
            Skip to content
          </a>
          <div className="flex min-h-screen flex-col">
            <SiteHeader />
            <main id="content" className="flex-1">
              {children}
            </main>
            <SiteFooter />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
