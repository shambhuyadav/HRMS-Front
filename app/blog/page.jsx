import Link from 'next/link';
import { posts } from '@/lib/data';
import { pageMetadata } from '@/lib/seo';
import Breadcrumbs from '@/components/Breadcrumbs';

export const metadata = pageMetadata({
  title: 'HR Blog – Guides on HCM, Payroll & People Analytics',
  description: 'Practical guides and research for HR leaders on HCM software, payroll compliance, performance management, retention and people analytics.',
  path: '/blog/',
});

const fmt = (d) => new Date(d).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });

export default function BlogIndex() {
  return (
    <>
      <Breadcrumbs items={[{ name: 'Blog', href: '/blog/' }]} />
      <section className="page-hero container">
        <h1>The HR leadership blog</h1>
        <p className="lead">Ideas, research and how-tos for building a high-performing workforce.</p>
      </section>
      <section className="section container tight">
        <div className="grid grid-2">
          {posts.map((p) => (
            <article key={p.slug} className="card">
              <p className="muted small"><time dateTime={p.date}>{fmt(p.date)}</time> · {p.readTime}</p>
              <h2 className="h3"><Link href={`/blog/${p.slug}/`}>{p.title}</Link></h2>
              <p>{p.excerpt}</p>
              <p className="tags">{p.tags.map((t) => <span key={t}>{t}</span>)}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
