import Link from 'next/link';
import JsonLd from './JsonLd';
import { absoluteUrl } from '@/lib/site';

// items: [{ name, href }] — the last item is the current page.
export default function Breadcrumbs({ items }) {
  const all = [{ name: 'Home', href: '/' }, ...items];
  return (
    <>
      <nav aria-label="Breadcrumb" className="breadcrumbs container">
        <ol>
          {all.map((it, i) => (
            <li key={it.href}>
              {i < all.length - 1 ? <Link href={it.href}>{it.name}</Link> : <span aria-current="page">{it.name}</span>}
            </li>
          ))}
        </ol>
      </nav>
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: all.map((it, i) => ({
            '@type': 'ListItem',
            position: i + 1,
            name: it.name,
            item: absoluteUrl(it.href),
          })),
        }}
      />
    </>
  );
}
