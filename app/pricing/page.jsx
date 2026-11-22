import Link from 'next/link';
import { plans } from '@/lib/data';
import { pageMetadata } from '@/lib/seo';
import Breadcrumbs from '@/components/Breadcrumbs';
import Faq from '@/components/Faq';

export const metadata = pageMetadata({
  title: 'Pricing – Flexible HR Software Plans for Every Enterprise',
  description: 'Choose the HR software plan that fits your organisation. Transparent, per-employee pricing with modules you can add as you grow.',
  path: '/pricing/',
});

const faqs = [
  ['How is pricing calculated?', 'Pricing is per employee per month, based on the modules you select and your total headcount.'],
  ['Is there an implementation fee?', 'A one-time implementation fee covers configuration, data migration and training. It is quoted with your plan.'],
  ['Can I add modules later?', 'Yes. Modules can be added at any time and are pro-rated to your contract term.'],
];

export default function Pricing() {
  return (
    <>
      <Breadcrumbs items={[{ name: 'Pricing', href: '/pricing/' }]} />
      <section className="page-hero container center">
        <h1>Plans that scale with your workforce</h1>
        <p className="lead">Start with the essentials or deploy the full suite. Every plan includes mobile apps, security and support.</p>
      </section>
      <section className="section container tight">
        <div className="grid grid-3">
          {plans.map((pl) => (
            <div key={pl.name} className={`card plan ${pl.highlight ? 'highlight' : ''}`}>
              {pl.highlight && <p className="badge">Most popular</p>}
              <h2 className="h3">{pl.name}</h2>
              <p className="price">{pl.price}</p>
              <p>{pl.blurb}</p>
              <ul className="checks">{pl.features.map((f) => <li key={f}>{f}</li>)}</ul>
              <Link href="/request-demo/" className={`btn ${pl.highlight ? 'btn-primary' : 'btn-ghost'}`}>Get a quote</Link>
            </div>
          ))}
        </div>
      </section>
      <Faq faqs={faqs} heading="Pricing FAQs" />
    </>
  );
}
