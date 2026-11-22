import Link from 'next/link';
import { notFound } from 'next/navigation';
import { industries, products } from '@/lib/data';
import { pageMetadata } from '@/lib/seo';
import Breadcrumbs from '@/components/Breadcrumbs';
import Cta from '@/components/Cta';

export const dynamicParams = false;
export const generateStaticParams = () => industries.map((i) => ({ slug: i.slug }));
const find = (slug) => industries.find((i) => i.slug === slug);

export async function generateMetadata({ params }) {
  const i = find((await params).slug);
  if (!i) return {};
  return pageMetadata({ title: `HR Software for ${i.name}`, description: i.description, path: `/industries/${i.slug}/` });
}

export default async function IndustryPage({ params }) {
  const i = find((await params).slug);
  if (!i) notFound();
  return (
    <>
      <Breadcrumbs items={[{ name: 'Industries', href: '/industries/' }, { name: i.name, href: `/industries/${i.slug}/` }]} />
      <section className="page-hero container">
        <p className="eyebrow">Industry solution</p>
        <h1><span aria-hidden="true">{i.icon} </span>HR software for {i.name}</h1>
        <p className="lead">{i.description}</p>
        <Link href="/request-demo/" className="btn btn-primary btn-lg">Talk to an industry expert</Link>
      </section>
      <section className="section container tight">
        <h2>What {i.name.toLowerCase()} teams get</h2>
        <ul className="checks cols">{i.points.map((pt) => <li key={pt}>{pt}</li>)}</ul>
      </section>
      <section className="section container tight">
        <h2>Popular modules</h2>
        <div className="grid grid-3">
          {products.slice(0, 6).map((p) => (
            <Link key={p.slug} href={`/products/${p.slug}/`} className="card card-link">
              <span className="card-icon" aria-hidden="true">{p.icon}</span>
              <h3>{p.name}</h3>
              <p>{p.short}</p>
            </Link>
          ))}
        </div>
      </section>
      <Cta />
    </>
  );
}
