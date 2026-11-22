import Link from 'next/link';
import { notFound } from 'next/navigation';
import { posts } from '@/lib/data';
import { site, absoluteUrl } from '@/lib/site';
import { pageMetadata } from '@/lib/seo';
import Breadcrumbs from '@/components/Breadcrumbs';
import Cta from '@/components/Cta';
import JsonLd from '@/components/JsonLd';

export const dynamicParams = false;
export const generateStaticParams = () => posts.map((p) => ({ slug: p.slug }));
const find = (slug) => posts.find((p) => p.slug === slug);

export async function generateMetadata({ params }) {
  const p = find((await params).slug);
  if (!p) return {};
  return pageMetadata({
    title: p.title,
    description: p.excerpt,
    path: `/blog/${p.slug}/`,
    type: 'article',
    extra: { openGraph: { publishedTime: p.date, authors: [p.author], tags: p.tags } },
  });
}

function Block([type, content]) {
  if (type === 'h2') return <h2 key={content}>{content}</h2>;
  if (type === 'ul') return <ul key={content.join()}>{content.map((li) => <li key={li}>{li}</li>)}</ul>;
  return <p key={content}>{content}</p>;
}

export default async function PostPage({ params }) {
  const p = find((await params).slug);
  if (!p) notFound();
  const url = absoluteUrl(`/blog/${p.slug}/`);
  return (
    <>
      <Breadcrumbs items={[{ name: 'Blog', href: '/blog/' }, { name: p.title, href: `/blog/${p.slug}/` }]} />
      <article className="container article">
        <header>
          <p className="tags">{p.tags.map((t) => <span key={t}>{t}</span>)}</p>
          <h1>{p.title}</h1>
          <p className="muted">By {p.author} · <time dateTime={p.date}>{new Date(p.date).toLocaleDateString('en-US', { dateStyle: 'long' })}</time> · {p.readTime}</p>
          <p className="lead">{p.excerpt}</p>
        </header>
        {p.body.map(Block)}
        <p><Link href="/blog/">← Back to all articles</Link></p>
      </article>
      <Cta />
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'BlogPosting',
          headline: p.title,
          description: p.excerpt,
          datePublished: p.date,
          dateModified: p.date,
          author: { '@type': 'Person', name: p.author },
          publisher: { '@id': absoluteUrl('/#organization'), name: site.name },
          mainEntityOfPage: url,
          url,
          image: absoluteUrl('/og-image.png'),
          keywords: p.tags.join(', '),
        }}
      />
    </>
  );
}
