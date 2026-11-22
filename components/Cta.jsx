import Link from 'next/link';

export default function Cta({ title = 'See the platform in action', text = 'Get a personalised walkthrough tailored to your organisation.' }) {
  return (
    <section className="cta">
      <div className="container cta-inner">
        <div>
          <h2>{title}</h2>
          <p>{text}</p>
        </div>
        <Link href="/request-demo/" className="btn btn-light">Request a demo</Link>
      </div>
    </section>
  );
}
