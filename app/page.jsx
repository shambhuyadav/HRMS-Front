import Link from 'next/link';
import { products, industries, customers, posts } from '@/lib/data';
import { site } from '@/lib/site';
import { pageMetadata } from '@/lib/seo';
import Cta from '@/components/Cta';
import Faq from '@/components/Faq';
import JsonLd from '@/components/JsonLd';

export const metadata = pageMetadata({
  title: { absolute: `${site.name} – AI-Powered HR Software & HCM Platform for Enterprises` },
  description: site.description,
  path: '/',
});

const stats = [
  ['1,000+', 'enterprises'],
  ['3M+', 'employees managed'],
  ['120+', 'countries'],
  ['4.6/5', 'average user rating'],
];

const homeFaqs = [
  ['What is HR software?', 'HR software automates and centralises people processes such as employee records, hiring, onboarding, payroll, attendance, performance and analytics.'],
  [`Who is ${site.name} built for?`, `${site.name} is designed for mid-size and large enterprises with complex, multi-location and multi-country workforces.`],
  ['How long does implementation take?', 'Most customers go live with core modules in 8–12 weeks, using pre-configured industry templates and a dedicated implementation team.'],
];

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="container hero-inner">
          <div>
            <p className="eyebrow">AI-powered HCM platform</p>
            <h1>One platform to hire, manage, pay and grow your people</h1>
            <p className="lead">
              {site.name} brings core HR, payroll, recruitment, performance and analytics together in a mobile-first suite
              that adapts to the way your enterprise works.
            </p>
            <div className="hero-actions">
              <Link href="/request-demo/" className="btn btn-primary btn-lg">Request a demo</Link>
              <Link href="/products/" className="btn btn-ghost btn-lg">Explore products →</Link>
            </div>
          </div>
          <div className="hero-card" aria-hidden="true">
            <div className="hc-row"><span>Headcount</span><strong>48,210</strong></div>
            <div className="hc-bar"><i style={{ width: '78%' }} /></div>
            <div className="hc-row"><span>Payroll run · Nov</span><strong className="ok">Completed</strong></div>
            <div className="hc-row"><span>Open requisitions</span><strong>312</strong></div>
            <div className="hc-row"><span>Engagement score</span><strong>82%</strong></div>
            <div className="hc-bar"><i style={{ width: '82%' }} /></div>
          </div>
        </div>
      </section>

      <section className="stats" aria-label="Company statistics">
        <div className="container stats-grid">
          {stats.map(([n, l]) => (
            <div key={l}><strong>{n}</strong><span>{l}</span></div>
          ))}
        </div>
      </section>

      <section className="section container">
        <div className="section-head">
          <h2>Everything HR, in one place</h2>
          <p>Modules that share one data model, so information flows from hire to retire without re-entry.</p>
        </div>
        <div className="grid grid-3">
          {products.map((p) => (
            <Link key={p.slug} href={`/products/${p.slug}/`} className="card card-link">
              <span className="card-icon" aria-hidden="true">{p.icon}</span>
              <h3>{p.name}</h3>
              <p>{p.short}</p>
              <span className="more">Learn more →</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="section alt">
        <div className="container split">
          <div>
            <p className="eyebrow">Built-in AI</p>
            <h2>An HR copilot for every employee, manager and HR leader</h2>
            <p>Ask questions in plain language, draft job descriptions and reviews, predict attrition, and automate
              repetitive service requests, all inside the flow of work.</p>
            <ul className="checks">
              <li>Conversational HR assistant on web, mobile and chat apps</li>
              <li>Generative writing for JDs, offers and appraisals</li>
              <li>Predictive insights on attrition and hiring</li>
              <li>Enterprise-grade privacy and governance controls</li>
            </ul>
          </div>
          <div className="chat" aria-hidden="true">
            <p className="bubble me">How many people joined the Sales team this quarter?</p>
            <p className="bubble bot">142 people joined Sales in Q4, 18% more than Q3. Want a breakdown by region?</p>
            <p className="bubble me">Yes, and flag anyone at attrition risk.</p>
          </div>
        </div>
      </section>

      <section className="section container">
        <div className="section-head">
          <h2>Tailored for your industry</h2>
          <p>Pre-configured best practices for regulated, distributed and frontline workforces.</p>
        </div>
        <div className="grid grid-3">
          {industries.map((i) => (
            <Link key={i.slug} href={`/industries/${i.slug}/`} className="card card-link">
              <span className="card-icon" aria-hidden="true">{i.icon}</span>
              <h3>{i.name}</h3>
              <p>{i.description}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="section alt">
        <div className="container">
          <div className="section-head">
            <h2>Trusted by people-first enterprises</h2>
          </div>
          <div className="grid grid-2">
            {customers.slice(0, 2).map((c) => (
              <figure key={c.name} className="card quote">
                <p className="metric">{c.metric}</p>
                <blockquote>“{c.quote}”</blockquote>
                <figcaption>{c.person}</figcaption>
              </figure>
            ))}
          </div>
          <p className="center"><Link href="/customers/" className="btn btn-ghost">Read customer stories →</Link></p>
        </div>
      </section>

      <section className="section container">
        <div className="section-head">
          <h2>Latest from the HR blog</h2>
        </div>
        <div className="grid grid-3">
          {posts.slice(0, 3).map((p) => (
            <article key={p.slug} className="card">
              <p className="muted small">{p.tags.join(' · ')}</p>
              <h3><Link href={`/blog/${p.slug}/`}>{p.title}</Link></h3>
              <p>{p.excerpt}</p>
            </article>
          ))}
        </div>
      </section>

      <Faq faqs={homeFaqs} />
      <Cta />

      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'SoftwareApplication',
          name: site.name,
          applicationCategory: 'BusinessApplication',
          applicationSubCategory: 'Human Resources Software',
          operatingSystem: 'Web, iOS, Android',
          description: site.description,
          offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD', description: 'Custom enterprise pricing' },
        }}
      />
    </>
  );
}
