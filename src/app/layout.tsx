import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import Script from "next/script";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteName = "GEOBeacon AI";
const siteDescription =
  "GEOBeacon AI helps companies monitor and improve their visibility in ChatGPT, Gemini, and Perplexity.";
const siteUrl = "https://geobeacon-ai.vercel.app";

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${siteUrl}#organization`,
  name: siteName,
  description: "AI Search Visibility Platform",
  url: siteUrl,
  sameAs: [],
};

const softwareApplicationSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "@id": `${siteUrl}#software`,
  name: siteName,
  applicationCategory: "AI Marketing Software",
  description: siteDescription,
  url: siteUrl,
  applicationSubCategory: "AI Search Visibility Platform",
  operatingSystem: "Web",
  brand: {
    "@id": `${siteUrl}#organization`,
  },
};

const webSiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${siteUrl}#website`,
  name: siteName,
  url: siteUrl,
  description: siteDescription,
  publisher: {
    "@id": `${siteUrl}#organization`,
  },
  inLanguage: "en",
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "GEOBeacon AI - AI Search Visibility Platform",
    template: "%s | GEOBeacon AI",
  },
  description: siteDescription,
  applicationName: siteName,
  keywords: [
    "GEOBeacon AI",
    "AI Search Visibility Platform",
    "GEO",
    "Generative Engine Optimization",
    "AI SEO",
    "LLM Optimization",
    "ChatGPT visibility",
    "Gemini visibility",
    "Perplexity visibility",
    "entity optimization",
    "AI citation monitoring",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "GEOBeacon AI - AI Search Visibility Platform",
    description: siteDescription,
    url: siteUrl,
    siteName,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "GEOBeacon AI - AI Search Visibility Platform",
    description: siteDescription,
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
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full site-body">
        <Script
          id="geobeacon-organization-schema"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        <Script
          id="geobeacon-software-schema"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(softwareApplicationSchema),
          }}
        />
        <Script
          id="geobeacon-website-schema"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(webSiteSchema),
          }}
        />

        <header className="site-header">
          <div className="site-header-inner">
            <Link className="brand-mark" href="/">
              GEOBeacon AI
            </Link>

            <nav className="site-nav" aria-label="Global">
              <Link href="/what-is-geo">What is GEO</Link>
              <Link href="/product">Product</Link>
              <Link href="/about">About</Link>
              <Link href="/blog">Blog</Link>
            </nav>
          </div>
        </header>

        {children}

        <footer className="site-footer">
          <div className="site-footer-inner">
            <p>
              GEOBeacon AI is an AI Search Visibility Platform focused on brand
              visibility in ChatGPT, Gemini, and Perplexity.
            </p>
            <nav className="footer-nav" aria-label="Footer">
              <Link href="/">Home</Link>
              <Link href="/what-is-geo">What is GEO</Link>
              <Link href="/product">Product</Link>
              <Link href="/about">About</Link>
              <Link href="/blog">Blog</Link>
            </nav>
          </div>
        </footer>
      </body>
    </html>
  );
}
