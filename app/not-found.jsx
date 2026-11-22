import Link from 'next/link';

export const metadata = { title: 'Page not found', robots: { index: false } };

export default function NotFound() {
  return (
    <section className="page-hero container center">
      <h1>Page not found</h1>
      <p className="lead">The page you are looking for has moved or no longer exists.</p>
      <Link href="/" className="btn btn-primary">Go to homepage</Link>
    </section>
  );
}
