import { site } from './site';

export const ogImage = { url: '/og-image.png', width: 1200, height: 630, alt: site.tagline };

// One helper so every page gets canonical URL, Open Graph and Twitter tags consistently.
export function pageMetadata({ title, description, path = '/', type = 'website', extra = {} }) {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: { title, description, url: path, siteName: site.name, locale: site.locale, type, images: [ogImage], ...extra.openGraph },
    twitter: { card: 'summary_large_image', title, description, site: site.twitter, images: [ogImage.url] },
  };
}
