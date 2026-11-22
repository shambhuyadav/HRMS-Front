import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import JsonLd from '@/components/JsonLd';
import { site, absoluteUrl } from '@/lib/site';
import { ogImage } from '@/lib/seo';

export const metadata = {
  metadataBase: new URL(site.url),
  title: { default: `${site.name} – ${site.tagline}`, template: `%s | ${site.name}` },
  description: site.description,
  applicationName: site.name,
  icons: { icon: '/icon.svg', apple: '/icon.svg' },
  keywords: ['HR software', 'HCM', 'HRMS', 'payroll software', 'recruitment software', 'performance management', 'HR analytics'],
  alternates: { canonical: '/' },
  openGraph: { type: 'website', siteName: site.name, locale: site.locale, url: '/', title: site.name, description: site.description, images: [ogImage] },
  twitter: { card: 'summary_large_image', site: site.twitter, images: [ogImage.url] },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } },
  formatDetection: { telephone: false },
};

export const viewport = { themeColor: '#4f46e5', width: 'device-width', initialScale: 1 };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <JsonLd
          data={{
            '@context': 'https://schema.org',
            '@graph': [
              {
                '@type': 'Organization',
                '@id': absoluteUrl('/#organization'),
                name: site.name,
                legalName: site.legalName,
                url: site.url,
                logo: absoluteUrl('/icon.svg'),
                sameAs: site.social,
                contactPoint: { '@type': 'ContactPoint', contactType: 'sales', email: site.email },
              },
              {
                '@type': 'WebSite',
                '@id': absoluteUrl('/#website'),
                url: site.url,
                name: site.name,
                publisher: { '@id': absoluteUrl('/#organization') },
                inLanguage: 'en',
              },
            ],
          }}
        />
      </body>
    </html>
  );
}
