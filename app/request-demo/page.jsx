import { pageMetadata } from '@/lib/seo';
import Breadcrumbs from '@/components/Breadcrumbs';
import DemoForm from './DemoForm';

export const metadata = pageMetadata({
  title: 'Request a Demo – See the HR Platform in Action',
  description: 'Book a personalised demo of our AI-powered HR platform with a product expert. See core HR, payroll, recruitment and analytics tailored to your needs.',
  path: '/request-demo/',
});

export default function RequestDemo() {
  return (
    <>
      <Breadcrumbs items={[{ name: 'Request a demo', href: '/request-demo/' }]} />
      <section className="container demo">
        <div>
          <h1>Get a personalised demo</h1>
          <p className="lead">Tell us a little about your organisation and a product expert will reach out within one business day.</p>
          <ul className="checks">
            <li>A walkthrough tailored to your industry and size</li>
            <li>Answers on implementation, integrations and security</li>
            <li>A transparent pricing estimate</li>
          </ul>
        </div>
        <DemoForm />
      </section>
    </>
  );
}
