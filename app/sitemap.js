import { products, industries, posts } from '@/lib/data';
import { absoluteUrl } from '@/lib/site';

export const dynamic = 'force-static';

export default function sitemap() {
  const now = new Date().toISOString();
  const page = (path, priority, changeFrequency = 'monthly', lastModified = now) => ({
    url: absoluteUrl(path), lastModified, changeFrequency, priority,
  });
  return [
    page('/', 1.0, 'weekly'),
    page('/products/', 0.9),
    ...products.map((p) => page(`/products/${p.slug}/`, 0.9)),
    page('/industries/', 0.8),
    ...industries.map((i) => page(`/industries/${i.slug}/`, 0.7)),
    page('/customers/', 0.7),
    page('/pricing/', 0.8),
    page('/request-demo/', 0.8),
    page('/about/', 0.5, 'yearly'),
    page('/blog/', 0.7, 'weekly'),
    ...posts.map((p) => page(`/blog/${p.slug}/`, 0.6, 'yearly', new Date(p.date).toISOString())),
  ];
}
