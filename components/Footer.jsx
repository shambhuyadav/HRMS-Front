import Link from 'next/link';
import { products, industries } from '@/lib/data';
import { site } from '@/lib/site';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <p className="logo"><span className="logo-mark" aria-hidden="true">T</span>{site.name}</p>
          <p className="muted">{site.tagline}.</p>
        </div>
        <div>
          <h2>Products</h2>
          <ul>{products.slice(0, 6).map((p) => <li key={p.slug}><Link href={`/products/${p.slug}/`}>{p.name}</Link></li>)}</ul>
        </div>
        <div>
          <h2>Industries</h2>
          <ul>{industries.map((i) => <li key={i.slug}><Link href={`/industries/${i.slug}/`}>{i.name}</Link></li>)}</ul>
        </div>
        <div>
          <h2>Company</h2>
          <ul>
            <li><Link href="/about/">About us</Link></li>
            <li><Link href="/customers/">Customers</Link></li>
            <li><Link href="/blog/">Blog</Link></li>
            <li><Link href="/pricing/">Pricing</Link></li>
            <li><Link href="/request-demo/">Contact sales</Link></li>
          </ul>
        </div>
      </div>
      <div className="container footer-bottom">
        <p>© {new Date().getFullYear()} {site.legalName}. All rights reserved.</p>
        <Link href="/sitemap.xml">Sitemap</Link>
      </div>
    </footer>
  );
}
