import { site } from '@/lib/site';
import { pageMetadata } from '@/lib/seo';
import Breadcrumbs from '@/components/Breadcrumbs';
import Cta from '@/components/Cta';

export const metadata = pageMetadata({
  title: 'About Us – Our Mission to Make Work Better',
  description: `Learn about ${site.name}, our mission, values and the team building the next generation of enterprise HR technology.`,
  path: '/about/',
});

const values = [
  ['Customer obsession', 'We measure success by the outcomes our customers achieve.'],
  ['Configurability first', 'Enterprises are unique; our platform adapts instead of forcing change.'],
  ['Mobile by default', 'Every experience is designed for the employee in their pocket.'],
  ['Trust & security', 'Privacy, compliance and reliability are non-negotiable.'],
];

export default function About() {
  return (
    <>
      <Breadcrumbs items={[{ name: 'About', href: '/about/' }]} />
      <section className="page-hero container">
        <h1>We are building the HR platform people love to use</h1>
        <p className="lead">{site.name} helps enterprises create great employee experiences by making HR simple, intelligent and human.</p>
      </section>
      <section className="section container tight">
        <h2>Our values</h2>
        <div className="grid grid-2">
          {values.map(([t, d]) => <div key={t} className="card"><h3>{t}</h3><p>{d}</p></div>)}
        </div>
      </section>
      <Cta title="Join the companies building better workplaces" />
    </>
  );
}
