import Link from 'next/link';
import { products } from '@/lib/data';
import { pageMetadata } from '@/lib/seo';
import Breadcrumbs from '@/components/Breadcrumbs';
import Cta from '@/components/Cta';

export const metadata = pageMetadata({
  title: 'HR Software Products – Core HR, Payroll & More',
  description: 'Explore every module of our HCM suite: core HR, recruitment, onboarding, performance, payroll, attendance, leave, engagement, learning and analytics.',
  path: '/products/',
});

export default function ProductsPage() {
  const groups = [...new Set(products.map((p) => p.category))];
  return (
    <>
      <Breadcrumbs items={[{ name: 'Products', href: '/products/' }]} />
      <section className="page-hero container">
        <h1>The complete HCM suite</h1>
        <p className="lead">Pick the modules you need today and add more as you grow. Everything shares one employee record.</p>
      </section>
      {groups.map((g) => (
        <section key={g} className="section container tight">
          <h2>{g}</h2>
          <div className="grid grid-3">
            {products.filter((p) => p.category === g).map((p) => (
              <Link key={p.slug} href={`/products/${p.slug}/`} className="card card-link">
                <span className="card-icon" aria-hidden="true">{p.icon}</span>
                <h3>{p.name}</h3>
                <p>{p.short}</p>
              </Link>
            ))}
          </div>
        </section>
      ))}
      <Cta />
    </>
  );
}
