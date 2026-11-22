import Link from 'next/link';
import { industries } from '@/lib/data';
import { pageMetadata } from '@/lib/seo';
import Breadcrumbs from '@/components/Breadcrumbs';
import Cta from '@/components/Cta';

export const metadata = pageMetadata({
  title: 'HR Software by Industry – Manufacturing, BFSI & Retail',
  description: 'Industry-specific HR solutions for manufacturing, banking, retail, healthcare, technology and logistics enterprises.',
  path: '/industries/',
});

export default function IndustriesPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: 'Industries', href: '/industries/' }]} />
      <section className="page-hero container">
        <h1>HR solutions built for your industry</h1>
        <p className="lead">Pre-configured processes, compliance and analytics for the way your sector works.</p>
      </section>
      <section className="section container tight">
        <div className="grid grid-3">
          {industries.map((i) => (
            <Link key={i.slug} href={`/industries/${i.slug}/`} className="card card-link">
              <span className="card-icon" aria-hidden="true">{i.icon}</span>
              <h2 className="h3">{i.name}</h2>
              <p>{i.description}</p>
            </Link>
          ))}
        </div>
      </section>
      <Cta />
    </>
  );
}
