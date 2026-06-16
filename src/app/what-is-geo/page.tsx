import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";

export const metadata: Metadata = {
  title: "What is GEO",
  description:
    "Learn what Generative Engine Optimization (GEO) means and how it improves visibility in AI-generated answers.",
  alternates: {
    canonical: "/what-is-geo",
  },
};

const geoPageSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://geobeacon-ai.vercel.app/what-is-geo#webpage",
      url: "https://geobeacon-ai.vercel.app/what-is-geo",
      name: "What is GEO",
      description:
        "Learn what Generative Engine Optimization (GEO) means and how it improves visibility in AI-generated answers.",
      breadcrumb: {
        "@id": "https://geobeacon-ai.vercel.app/what-is-geo#breadcrumb",
      },
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://geobeacon-ai.vercel.app/what-is-geo#breadcrumb",
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
          name: "What is GEO",
          item: "https://geobeacon-ai.vercel.app/what-is-geo",
        },
      ],
    },
    {
      "@type": "DefinedTerm",
      name: "Generative Engine Optimization",
      alternateName: "GEO",
      description:
        "Generative Engine Optimization is the practice of improving how brands appear in AI-generated answers from systems such as ChatGPT, Gemini, and Perplexity.",
      inDefinedTermSet: "AI Search Visibility",
    },
  ],
};

export default function WhatIsGeoPage() {
  return (
    <main className="page-shell">
      <Script
        id="what-is-geo-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(geoPageSchema),
        }}
      />

      <section className="hero hero-compact">
        <p className="eyebrow">Category Entity</p>
        <h1>Generative Engine Optimization (GEO)</h1>
        <p className="lead">
          GEO is the practice of improving how brands appear in AI-generated
          answers from systems such as ChatGPT, Gemini, and Perplexity.
        </p>
      </section>

      <section className="grid-two">
        <article className="card">
          <h2>Simple definition</h2>
          <p>
            Generative Engine Optimization, or GEO, is the discipline of
            improving brand visibility inside AI-generated answers.
          </p>
          <p>
            GEO focuses on how AI systems discover entities, interpret facts,
            select sources, and cite brands in generated responses.
          </p>
        </article>

        <article className="card">
          <h2>GEO focuses on</h2>
          <ul className="feature-list">
            <li>Entity understanding</li>
            <li>AI citation</li>
            <li>Brand visibility</li>
            <li>Source credibility</li>
          </ul>
        </article>
      </section>

      <section className="grid-two">
        <article className="card">
          <h2>Why GEO matters</h2>
          <p>
            As users increasingly rely on AI systems to discover vendors,
            products, and categories, brands need clear entity signals and
            trustworthy content that can be recalled, interpreted, and cited by
            those systems.
          </p>
        </article>

        <article className="card">
          <h2>Related concepts</h2>
          <ul className="feature-list">
            <li>AI SEO</li>
            <li>LLM Optimization</li>
            <li>Entity SEO</li>
            <li>Answer Engine Optimization</li>
          </ul>
        </article>
      </section>

      <section className="card">
        <h2>Related GEOBeacon AI pages</h2>
        <nav className="link-grid" aria-label="Related pages">
          <Link href="/">Home</Link>
          <Link href="/product">Product</Link>
          <Link href="/about">About</Link>
          <Link href="/blog">Blog</Link>
        </nav>
      </section>
    </main>
  );
}