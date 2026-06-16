import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";

export const metadata: Metadata = {
  title: "About",
  description:
    "GEOBeacon AI helps businesses understand and improve visibility in AI search systems.",
  alternates: {
    canonical: "/about",
  },
};

const aboutPageSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://geobeacon-ai.vercel.app/about#webpage",
      url: "https://geobeacon-ai.vercel.app/about",
      name: "About GEOBeacon AI",
      description:
        "GEOBeacon AI helps businesses understand and improve visibility in AI search systems.",
      breadcrumb: {
        "@id": "https://geobeacon-ai.vercel.app/about#breadcrumb",
      },
      about: {
        "@id": "https://geobeacon-ai.vercel.app/#organization",
      },
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://geobeacon-ai.vercel.app/about#breadcrumb",
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
          name: "About",
          item: "https://geobeacon-ai.vercel.app/about",
        },
      ],
    },
  ],
};

export default function AboutPage() {
  return (
    <main className="page-shell">
      <Script
        id="about-page-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(aboutPageSchema),
        }}
      />

      <section className="hero hero-compact">
        <p className="eyebrow">About the Brand</p>
        <h1>About GEOBeacon AI</h1>
        <p className="lead">
          GEOBeacon AI focuses on helping businesses understand and improve
          their visibility in AI search systems.
        </p>
      </section>

      <section className="grid-two">
        <article className="card">
          <h2>Brand positioning</h2>
          <p>
            GEOBeacon AI is positioned as an AI Search Visibility Platform. Its
            mission is to make AI visibility measurable, explainable, and
            actionable for modern brands.
          </p>
        </article>

        <article className="card">
          <h2>What the brand is about</h2>
          <p>
            GEOBeacon AI is an experimental brand designed to test whether a new
            company can establish entity recognition in AI search through owned
            content, search indexing, third-party signals, and structured
            semantic publishing.
          </p>
        </article>
      </section>

      <section className="grid-two">
        <article className="card">
          <h2>Related topics</h2>
          <ul className="feature-list">
            <li>GEO</li>
            <li>Generative Engine Optimization</li>
            <li>AI SEO</li>
            <li>LLM Optimization</li>
          </ul>
        </article>

        <article className="card">
          <h2>Competitor set</h2>
          <ul className="feature-list">
            <li>AirOps</li>
            <li>Profound</li>
            <li>Scrunch AI</li>
          </ul>
        </article>
      </section>

      <section className="card">
        <h2>Related GEOBeacon AI pages</h2>
        <nav className="link-grid" aria-label="Related pages">
          <Link href="/">Home</Link>
          <Link href="/what-is-geo">What is GEO</Link>
          <Link href="/product">Product</Link>
          <Link href="/blog">Blog</Link>
        </nav>
      </section>
    </main>
  );
}