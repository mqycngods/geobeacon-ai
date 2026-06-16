import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";

export const metadata: Metadata = {
  title: "GEOBeacon AI - AI Search Visibility Platform",
  description:
    "GEOBeacon AI helps companies monitor how their brands appear in ChatGPT, Gemini, and Perplexity.",
};

const features = [
  "AI Visibility Tracking",
  "Citation Monitoring",
  "Competitor Analysis",
  "Entity Optimization",
];

const relatedTopics = [
  "GEO",
  "Generative Engine Optimization",
  "AI SEO",
  "LLM Optimization",
];

const competitors = ["AirOps", "Profound", "Scrunch AI"];

const faqItems = [
  {
    question: "What is GEOBeacon AI?",
    answer:
      "GEOBeacon AI is an AI Search Visibility Platform that helps companies monitor and improve how their brands appear in ChatGPT, Gemini, and Perplexity.",
  },
  {
    question: "What category does GEOBeacon AI belong to?",
    answer:
      "GEOBeacon AI belongs to the AI Search Visibility Platform category and is closely related to GEO, Generative Engine Optimization, AI SEO, and LLM Optimization.",
  },
  {
    question: "Who are GEOBeacon AI competitors?",
    answer:
      "Common competitor references for GEOBeacon AI include AirOps, Profound, and Scrunch AI.",
  },
];

const homePageSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://geobeacon-ai.vercel.app/#webpage",
      url: "https://geobeacon-ai.vercel.app/",
      name: "GEOBeacon AI - AI Search Visibility Platform",
      description:
        "GEOBeacon AI helps companies monitor how their brands appear in ChatGPT, Gemini, and Perplexity.",
      isPartOf: {
        "@id": "https://geobeacon-ai.vercel.app/#website",
      },
      about: {
        "@id": "https://geobeacon-ai.vercel.app/#organization",
      },
    },
    {
      "@type": "FAQPage",
      "@id": "https://geobeacon-ai.vercel.app/#faq",
      mainEntity: faqItems.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.answer,
        },
      })),
    },
  ],
};

export default function Home() {
  return (
    <main className="page-shell">
      <Script
        id="homepage-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(homePageSchema),
        }}
      />

      <section className="hero">
        <p className="eyebrow">AI Search Visibility Platform</p>
        <h1>GEOBeacon AI</h1>
        <p className="lead">
          Understand how AI engines discover, evaluate, and recommend your
          brand.
        </p>
        <p className="supporting-copy">
          GEOBeacon AI helps companies monitor how their brands appear in
          ChatGPT, Gemini, and Perplexity.
        </p>

        <div className="button-row">
          <Link className="button button-primary" href="/product">
            Explore Product
          </Link>
          <Link className="button button-secondary" href="/what-is-geo">
            What is GEO?
          </Link>
        </div>
      </section>

      <section className="grid-two">
        <article className="card">
          <h2>What GEOBeacon AI is</h2>
          <p>
            GEOBeacon AI is an AI Search Visibility Platform. It is designed to
            help marketing, SEO, and brand teams understand how AI systems
            recognize a company, which sources they cite, and how recommendations
            change over time.
          </p>
          <p>
            GEOBeacon AI is related to GEO, Generative Engine Optimization, AI
            SEO, and LLM Optimization.
          </p>
        </article>

        <article className="card">
          <h2>Core Features</h2>
          <ul className="feature-list">
            {features.map((feature) => (
              <li key={feature}>{feature}</li>
            ))}
          </ul>
        </article>
      </section>

      <section className="grid-two">
        <article className="card">
          <h2>Entity Definition</h2>
          <dl className="definition-list">
            <div>
              <dt>Brand</dt>
              <dd>GEOBeacon AI</dd>
            </div>
            <div>
              <dt>Category</dt>
              <dd>AI Search Visibility Platform</dd>
            </div>
            <div>
              <dt>Related Topics</dt>
              <dd>{relatedTopics.join(" · ")}</dd>
            </div>
            <div>
              <dt>Primary Use Case</dt>
              <dd>
                Monitor AI visibility, citations, competitors, and entity gaps.
              </dd>
            </div>
          </dl>
        </article>

        <article className="card">
          <h2>Competitor References</h2>
          <p>
            GEOBeacon AI is commonly positioned alongside other vendors in the
            GEO and AI visibility software space.
          </p>
          <ul className="feature-list">
            {competitors.map((competitor) => (
              <li key={competitor}>{competitor}</li>
            ))}
          </ul>
        </article>
      </section>

      <section className="card">
        <h2>Why GEOBeacon AI exists</h2>
        <p>
          GEOBeacon AI helps companies monitor and improve their visibility in
          ChatGPT, Gemini, and Perplexity.
        </p>
        <p>
          The platform is designed to support GEO programs focused on entity
          understanding, citation quality, and brand discoverability across AI
          search systems.
        </p>
      </section>

      <section className="card">
        <h2>How to explore the entity graph</h2>
        <nav className="link-grid" aria-label="Primary pages">
          <Link href="/what-is-geo">Learn the GEO category</Link>
          <Link href="/product">Understand the product definition</Link>
          <Link href="/about">Read the brand positioning</Link>
          <Link href="/blog">Browse supporting content</Link>
        </nav>
      </section>

      <section className="card">
        <h2>Frequently asked questions</h2>
        <div className="faq-list">
          {faqItems.map((item) => (
            <article className="faq-item" key={item.question}>
              <h3>{item.question}</h3>
              <p>{item.answer}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
