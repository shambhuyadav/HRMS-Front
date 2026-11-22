import JsonLd from './JsonLd';

// Native <details> works without JavaScript; FAQPage schema can earn rich results.
export default function Faq({ faqs, heading = 'Frequently asked questions' }) {
  if (!faqs?.length) return null;
  return (
    <section className="section container faq" aria-labelledby="faq-heading">
      <h2 id="faq-heading">{heading}</h2>
      {faqs.map(([q, a]) => (
        <details key={q}>
          <summary>{q}</summary>
          <p>{a}</p>
        </details>
      ))}
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: faqs.map(([q, a]) => ({
            '@type': 'Question',
            name: q,
            acceptedAnswer: { '@type': 'Answer', text: a },
          })),
        }}
      />
    </section>
  );
}
