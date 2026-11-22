// Central brand + SEO configuration. Change these values to rebrand the whole site.
export const site = {
  name: 'Talentora',
  legalName: 'Talentora Technologies Pvt. Ltd.',
  tagline: 'The AI-powered HR platform for enterprises',
  description:
    'AI-powered HCM platform for enterprises: core HR, recruitment, payroll, performance, attendance and analytics in one mobile-first suite.',
  url: (process.env.NEXT_PUBLIC_SITE_URL || 'https://www.example.com').replace(/\/$/, ''),
  locale: 'en_US',
  twitter: '@talentora',
  email: 'hello@example.com',
  phone: '+1-000-000-0000',
  social: [
    'https://www.linkedin.com/company/example',
    'https://twitter.com/example',
    'https://www.youtube.com/@example',
  ],
};

export const absoluteUrl = (path = '/') => `${site.url}${path.startsWith('/') ? path : `/${path}`}`;
