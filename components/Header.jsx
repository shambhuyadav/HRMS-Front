'use client';
import Link from 'next/link';
import { useState } from 'react';
import { products, industries } from '@/lib/data';
import { site } from '@/lib/site';

export default function Header() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);
  return (
    <header className="header">
      <a href="#main" className="skip-link">Skip to content</a>
      <div className="container header-inner">
        <Link href="/" className="logo" onClick={close} aria-label={`${site.name} home`}>
          <span className="logo-mark" aria-hidden="true">T</span>{site.name}
        </Link>
        <button
          className="menu-toggle"
          aria-expanded={open}
          aria-controls="primary-nav"
          aria-label="Toggle menu"
          onClick={() => setOpen(!open)}
        >
          <span /><span /><span />
        </button>
        <nav id="primary-nav" className={`nav ${open ? 'open' : ''}`} aria-label="Primary">
          <ul>
            <li className="has-menu">
              <Link href="/products/" onClick={close}>Products</Link>
              <div className="mega">
                {products.map((p) => (
                  <Link key={p.slug} href={`/products/${p.slug}/`} onClick={close}>
                    <span aria-hidden="true">{p.icon}</span>
                    <span><strong>{p.name}</strong><small>{p.short}</small></span>
                  </Link>
                ))}
              </div>
            </li>
            <li className="has-menu">
              <Link href="/industries/" onClick={close}>Industries</Link>
              <div className="mega mega-sm">
                {industries.map((i) => (
                  <Link key={i.slug} href={`/industries/${i.slug}/`} onClick={close}>
                    <span aria-hidden="true">{i.icon}</span><span><strong>{i.name}</strong></span>
                  </Link>
                ))}
              </div>
            </li>
            <li><Link href="/customers/" onClick={close}>Customers</Link></li>
            <li><Link href="/blog/" onClick={close}>Resources</Link></li>
            <li><Link href="/pricing/" onClick={close}>Pricing</Link></li>
            <li><Link href="/about/" onClick={close}>About</Link></li>
          </ul>
          <Link href="/request-demo/" className="btn btn-primary" onClick={close}>Request a demo</Link>
        </nav>
      </div>
    </header>
  );
}
