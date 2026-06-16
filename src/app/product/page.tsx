import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Product",
  description:
    "GEOBeacon AI is an AI visibility monitoring platform for tracking mentions, citations, competitors, and entity gaps.",
  alternates: {
    canonical: "/product",
  },
};

const productFeatures = [
  "Track AI mentions",
  "Analyze citations",
  "Monitor competitors",
  "Discover entity gaps",
];

const productPageSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://geobeacon-ai.vercel.app/product#webpage",
      url: "https://geobeacon-ai.vercel.app/product",
      name: "Product",
      description:
        "GEOBeacon AI is an AI visibility monitoring platform for tracking mentions, citations, competitors, and entity gaps.",
      breadcrumb: {
        "@id": "https://geobeacon-ai.vercel.app/product#breadcrumb",
      },
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://geobeacon-ai.vercel.app/product#breadcrumb",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://geobeacon-ai.vercel.app/",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Product",
          item: "https://geobeacon-ai.vercel.app/product",
        },
      ],
    },
  ],
};

export default function ProductPage() {
  return (
    <main className="page-shell">
      <Script
        id="product-page-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(productPageSchema),
        }}
      />

      <section className="hero hero-compact">
        <p className="eyebrow">Software Product</p>
        <h1>GEOBeacon AI is an AI visibility monitoring platform.</h1>
        <p className="lead">
          Built for teams that want to understand how their brands appear across
          ChatGPT, Gemini, and Perplexity.
        </p>
      </section>

      <section className="grid-two">
        <article className="card">
          <h2>Product definition</h2>
          <p>
            GEOBeacon AI is software for monitoring brand visibility in AI
            search systems. The product helps teams understand how AI engines
            mention a brand, which sources they cite, and where competitors are
            gaining more coverage.
          </p>
        </article>

        <article className="card">
          <h2>Platform Features</h2>
          <ul className="feature-list">
            {productFeatures.map((feature) => (
              <li key={feature}>{feature}</li>
            ))}
          </ul>
        </article>
      </section>

      <section className="grid-two">
        <article className="card">
          <h2>Primary use cases</h2>
          <ul className="feature-list">
            <li>Monitor how a brand appears in AI answers</li>
            <li>Evaluate citation quality and source coverage</li>
            <li>Compare entity visibility against competitors</li>
            <li>Identify content and entity gaps to improve recall</li>
          </ul>
        </article>

        <article className="card">
          <h2>Entity outcome</h2>
          <p>
            This page helps define GEOBeacon AI as a software product in the AI
            Search Visibility Platform category, with explicit product language
            that is easy for crawlers, search engines, and AI systems to
            interpret.
          </p>
        </article>
      </section>

      <section className="card">
        <h2>Related GEOBeacon AI pages</h2>
        <nav className="link-grid" aria-label="Related pages">
          <Link href="/">Home</Link>
          <Link href="/what-is-geo">What is GEO</Link>
          <Link href="/about">About</Link>
          <Link href="/blog">Blog</Link>
        </nav>
      </section>
    </main>
  );
}