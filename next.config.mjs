/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',          // pre-render every route to static HTML (best for SEO + CDN hosting)
  trailingSlash: true,       // /products/payroll/ -> canonical, consistent URLs
  images: { unoptimized: true },
  reactStrictMode: true,
};
export default nextConfig;
