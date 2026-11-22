import Link from 'next/link';
import { notFound } from 'next/navigation';
import { products } from '@/lib/data';
import { site, absoluteUrl } from '@/lib/site';
import { pageMetadata } from '@/lib/seo';
import Breadcrumbs from '@/components/Breadcrumbs';
import Faq from '@/components/Faq';
import Cta from '@/components/Cta';
import JsonLd from '@/components/JsonLd';

export const dynamicParams = false;
export const generateStaticParams = () => products.map((p) => ({ slug: p.slug }));

const find = (slug) => products.find((p) => p.slug === slug);

export async function generateMetadata({ params }) {
  const p = find((await params).slug);
  if (!p) return {};
  return pageMetadata({ title: p.title, description: p.description, path: `/products/${p.slug}/` });
}

export default async function ProductPage({ params }) {
  const p = find((await params).slug);
  if (!p) notFound();
  const related = products.filter((x) => x.slug !== p.slug && x.category === p.category).concat(products.filter((x) => x.category !== p.category)).slice(0, 3);

  return (
    <>
      <Breadcrumbs items={[{ name: 'Products', href: '/products/' }, { name: p.name, href: `/products/${p.slug}/` }]} />
      <section className="page-hero container">
        <p className="eyebrow">{p.category}</p>
        <h1><span aria-hidden="true">{p.icon} </span>{p.name} software</h1>
        <p className="lead">{p.description}</p>
        <div className="hero-actions">
          <Link href="/request-demo/" className="btn btn-primary btn-lg">Request a demo</Link>
          <Link href="/pricing/" className="btn btn-ghost btn-lg">See pricing</Link>
        </div>
      </section>

      <section className="section container tight">
        <h2>Key features of {site.name} {p.name}</h2>
        <div className="grid grid-3">
          {p.features.map(([t, d]) => (
            <div key={t} className="card">
              <h3>{t}</h3>
              <p>{d}</p>
            </div>
          ))}
        </div>
      </section>

      <Faq faqs={p.faqs} heading={`${p.name} FAQs`} />

      <section className="section container tight">
        <h2>Related products</h2>
        <div className="grid grid-3">
          {related.map((r) => (
            <Link key={r.slug} href={`/products/${r.slug}/`} className="card card-link">
              <span className="card-icon" aria-hidden="true">{r.icon}</span>
              <h3>{r.name}</h3>
              <p>{r.short}</p>
            </Link>
          ))}
        </div>
      </section>
      <Cta title={`Ready to modernise ${p.name.toLowerCase()}?`} />

      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'SoftwareApplication',
          name: `${site.name} ${p.name}`,
          url: absoluteUrl(`/products/${p.slug}/`),
          applicationCategory: 'BusinessApplication',
          operatingSystem: 'Web, iOS, Android',
          description: p.description,
          featureList: p.features.map(([t]) => t),
          publisher: { '@id': absoluteUrl('/#organization') },
        }}
      />
    </>
  );
}
