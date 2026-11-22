import { customers } from '@/lib/data';
import { pageMetadata } from '@/lib/seo';
import Breadcrumbs from '@/components/Breadcrumbs';
import Cta from '@/components/Cta';

export const metadata = pageMetadata({
  title: 'Customer Stories – How Enterprises Transform HR',
  description: 'See how retail, manufacturing, banking and healthcare enterprises use our HR platform to hire faster, pay accurately and engage their people.',
  path: '/customers/',
});

export default function Customers() {
  return (
    <>
      <Breadcrumbs items={[{ name: 'Customers', href: '/customers/' }]} />
      <section className="page-hero container">
        <h1>Customer success stories</h1>
        <p className="lead">Enterprises across industries trust us with their most important asset: their people.</p>
      </section>
      <section className="section container tight">
        <div className="grid grid-2">
          {customers.map((c) => (
            <figure key={c.name} className="card quote">
              <div className="cust-head">
                <span className="monogram" aria-hidden="true">{c.name.split(' ').map((w) => w[0]).join('')}</span>
                <div>
                  <h2 className="h3">{c.name}</h2>
                  <p className="muted small">{c.industry} · {c.employees} employees</p>
                </div>
              </div>
              <p className="metric">{c.metric}</p>
              <blockquote>“{c.quote}”</blockquote>
              <figcaption>{c.person}</figcaption>
            </figure>
          ))}
        </div>
      </section>
      <Cta title="Become our next success story" />
    </>
  );
}
