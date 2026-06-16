import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Content hub for GEO, AI SEO, entity optimization, and AI search visibility topics.",
  alternates: {
    canonical: "/blog",
  },
};

const posts = [
  {
    title: "What is GEO and why it matters for AI search",
    description:
      "An introduction to Generative Engine Optimization and the role of entity signals in AI visibility.",
    href: "/what-is-geo",
  },
  {
    title: "How GEOBeacon AI defines AI search visibility",
    description:
      "A product perspective on measuring brand visibility across ChatGPT, Gemini, and Perplexity.",
    href: "/product",
  },
];

export default function BlogPage() {
  return (
    <main className="page-shell">
      <section className="hero hero-compact">
        <p className="eyebrow">Content Center</p>
        <h1>GEOBeacon AI Blog</h1>
        <p className="lead">
          A lightweight content hub for GEO, AI SEO, entity optimization, and
          AI search visibility.
        </p>
      </section>

      <section className="stack">
        {posts.map((post) => (
          <article className="card" key={post.title}>
            <h2>{post.title}</h2>
            <p>{post.description}</p>
            <Link className="text-link" href={post.href}>
              Read related page
            </Link>
          </article>
        ))}
      </section>
    </main>
  );
}