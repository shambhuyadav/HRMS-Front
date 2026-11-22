// All page content lives here so pages stay small and every route is generated statically.

export const products = [
  {
    slug: 'core-hr',
    name: 'Core HR',
    icon: '🗂️',
    category: 'Core',
    short: 'A single source of truth for every employee record, policy and org structure.',
    title: 'Core HR Software – Employee Database & HRIS',
    description:
      'Centralise employee data, org charts, policies and documents in a configurable, secure HRIS that scales to hundreds of thousands of employees across countries.',
    features: [
      ['Unified employee profile', 'Personal, job, compensation and document data in one profile with full audit history.'],
      ['Multi-entity org design', 'Model legal entities, business units, locations and matrix reporting lines.'],
      ['No-code workflows', 'Build approval chains for transfers, promotions and data changes without IT tickets.'],
      ['Employee self-service', 'Let employees update details, download letters and raise requests from mobile.'],
      ['Role-based security', 'Granular field-level permissions, SSO, and data residency controls.'],
      ['Letters & documents', 'Generate offer, confirmation and experience letters from templates with e-sign.'],
    ],
    faqs: [
      ['What is Core HR software?', 'Core HR software (an HRIS) stores and manages employee records, organisational structure and HR policies, and automates everyday HR transactions such as joining, transfers and exits.'],
      ['Can Core HR handle multiple countries?', 'Yes. Talentora supports multiple legal entities, currencies, languages and country-specific fields and compliance rules within one tenant.'],
      ['Does it integrate with existing systems?', 'Open REST APIs, webhooks and pre-built connectors integrate with ERP, finance, identity and collaboration tools.'],
    ],
  },
  {
    slug: 'recruitment',
    name: 'Recruitment',
    icon: '🎯',
    category: 'Talent Acquisition',
    short: 'Hire faster with an AI-assisted applicant tracking system.',
    title: 'Recruitment Software – AI Applicant Tracking System (ATS)',
    description:
      'Source, screen, interview and hire top talent with AI resume matching, career sites, interview scheduling and offer management in one ATS.',
    features: [
      ['AI resume screening', 'Rank applicants against job requirements and surface best-fit candidates instantly.'],
      ['Branded career site', 'Launch an SEO-friendly, mobile careers page with job feeds to major job boards.'],
      ['Interview scheduling', 'Calendar-synced self-scheduling and structured scorecards for panels.'],
      ['Requisition approvals', 'Tie every opening to headcount plans and budget approvals.'],
      ['Offer management', 'Generate compliant offers, collect e-signatures and hand off to onboarding.'],
      ['Hiring analytics', 'Track time-to-hire, source effectiveness and funnel conversion.'],
    ],
    faqs: [
      ['What is an ATS?', 'An applicant tracking system manages the hiring pipeline from job posting to offer acceptance, helping recruiters collaborate and hire faster.'],
      ['Does it support high-volume hiring?', 'Yes. Bulk actions, chatbot screening and assessment integrations support thousands of applicants per role.'],
      ['Can candidates apply on mobile?', 'Every career page and application form is responsive and supports one-click apply.'],
    ],
  },
  {
    slug: 'onboarding',
    name: 'Onboarding',
    icon: '🚀',
    category: 'Talent Acquisition',
    short: 'Delight new hires from offer acceptance to day 90.',
    title: 'Employee Onboarding Software – Pre-boarding to Day 90',
    description:
      'Automate pre-boarding tasks, document collection, asset provisioning and buddy programmes so new hires are productive from day one.',
    features: [
      ['Pre-boarding portal', 'Collect documents and share culture content before the first day.'],
      ['Task orchestration', 'Auto-assign IT, admin and manager tasks with SLAs.'],
      ['Digital verification', 'Verify IDs and background checks through integrated partners.'],
      ['Buddy & check-ins', 'Schedule 30-60-90 day check-ins and pulse surveys.'],
    ],
    faqs: [
      ['What is employee onboarding software?', 'It automates the steps between offer acceptance and full productivity, including paperwork, provisioning, orientation and early check-ins.'],
      ['Can onboarding differ by role or location?', 'Yes. Journeys are rule-based, so tasks and content adapt by role, grade, location or entity.'],
    ],
  },
  {
    slug: 'performance-management',
    name: 'Performance Management',
    icon: '📈',
    category: 'Talent Management',
    short: 'Goals, OKRs, continuous feedback and fair reviews.',
    title: 'Performance Management Software – OKRs, Reviews & Feedback',
    description:
      'Align teams with goals and OKRs, enable continuous feedback and run fair, bias-aware performance reviews and calibration at enterprise scale.',
    features: [
      ['Goals & OKRs', 'Cascade company objectives to teams and individuals with live progress.'],
      ['Continuous feedback', 'Give praise, request feedback and log 1:1 notes anytime.'],
      ['Flexible review cycles', 'Annual, half-yearly, quarterly or project-based reviews with 360° input.'],
      ['Calibration', 'Bell-curve and 9-box calibration with bias nudges.'],
      ['AI writing assist', 'Draft balanced review summaries from goal and feedback data.'],
    ],
    faqs: [
      ['What is performance management software?', 'It helps organisations set goals, track progress, gather feedback and conduct appraisals to improve individual and team performance.'],
      ['Do you support OKRs and KPIs together?', 'Yes. You can mix OKRs, KPIs and competencies in the same review template.'],
    ],
  },
  {
    slug: 'payroll',
    name: 'Payroll',
    icon: '💰',
    category: 'Core',
    short: 'Accurate, compliant payroll in minutes, not days.',
    title: 'Payroll Software – Automated, Compliant Payroll',
    description:
      'Run accurate, statutory-compliant payroll with automated tax computation, reimbursements, arrears, payslips and bank integrations.',
    features: [
      ['One-click payroll run', 'Pull attendance, leave and variable pay automatically into each cycle.'],
      ['Statutory compliance', 'Built-in tax, social security and labour-law rules kept up to date.'],
      ['Flexible pay structures', 'Configure components, formulas and grade-based structures.'],
      ['Payslips & tax forms', 'Publish digital payslips and year-end tax documents to employees.'],
      ['Bank & GL integration', 'Generate bank files and post journal entries to your ERP.'],
    ],
    faqs: [
      ['Is payroll integrated with attendance?', 'Yes. Attendance, overtime and leave flow into payroll automatically, eliminating manual uploads.'],
      ['Which countries are supported?', 'Native payroll is available in multiple countries, with partner integrations for global coverage.'],
    ],
  },
  {
    slug: 'time-attendance',
    name: 'Time & Attendance',
    icon: '⏱️',
    category: 'Workforce Management',
    short: 'Geo-fenced, biometric and mobile attendance with shift rostering.',
    title: 'Time & Attendance Software – Shifts, Rostering & Overtime',
    description:
      'Capture attendance via mobile, geo-fencing, face recognition or biometric devices, and manage complex shifts, rosters and overtime rules.',
    features: [
      ['Multi-mode check-in', 'Mobile GPS, selfie, QR, kiosk and biometric device integration.'],
      ['Shift & roster planning', 'Drag-and-drop rosters with rotation and coverage rules.'],
      ['Overtime policies', 'Configure OT eligibility, rates and approvals per location.'],
      ['Timesheets', 'Project and task-level timesheets for billing and costing.'],
    ],
    faqs: [
      ['Does it work offline?', 'Mobile check-ins are stored offline and synced when connectivity returns, ideal for field and factory teams.'],
      ['Can it integrate with existing biometric devices?', 'Yes, with major biometric and access-control vendors.'],
    ],
  },
  {
    slug: 'leave-management',
    name: 'Leave Management',
    icon: '🏖️',
    category: 'Workforce Management',
    short: 'Policy-driven leave, holidays and accruals.',
    title: 'Leave Management Software – Policies, Accruals & Approvals',
    description:
      'Automate leave policies, accruals, carry-forward, encashment and holiday calendars with mobile approvals.',
    features: [
      ['Unlimited leave types', 'Configure accrual, eligibility and carry-forward per policy.'],
      ['Holiday calendars', 'Location-specific calendars and optional holidays.'],
      ['Team calendar', 'Managers see who is out before approving.'],
    ],
    faqs: [
      ['Can leave balances sync to payroll?', 'Yes. Loss-of-pay and encashment flow directly into payroll.'],
    ],
  },
  {
    slug: 'employee-engagement',
    name: 'Employee Engagement',
    icon: '💬',
    category: 'Employee Experience',
    short: 'Listen, recognise and act on employee sentiment.',
    title: 'Employee Engagement Software – Surveys & Recognition',
    description:
      'Measure engagement with pulse and eNPS surveys, run recognition programmes, and connect your workforce through social feeds and communities.',
    features: [
      ['Pulse & eNPS surveys', 'Anonymous surveys with AI-driven theme detection.'],
      ['Rewards & recognition', 'Peer-to-peer kudos, badges and point-based rewards.'],
      ['Social intranet', 'Announcements, groups and polls inside the HR app.'],
      ['Action planning', 'Turn survey insights into tracked action plans for managers.'],
    ],
    faqs: [
      ['Are surveys anonymous?', 'Yes. Anonymity thresholds ensure results are only shown for groups above a minimum size.'],
    ],
  },
  {
    slug: 'learning',
    name: 'Learning',
    icon: '🎓',
    category: 'Talent Management',
    short: 'Personalised learning paths and skills development.',
    title: 'Learning Management System (LMS) – Skills & Learning Paths',
    description:
      'Deliver personalised courses, certifications and learning paths mapped to skills and career goals, with content integrations and analytics.',
    features: [
      ['Skills-based paths', 'Recommend learning based on role skills and gaps.'],
      ['Content marketplace', 'Integrate leading e-learning libraries alongside in-house content.'],
      ['Compliance training', 'Assign mandatory courses with reminders and certifications.'],
    ],
    faqs: [
      ['Does it support SCORM?', 'Yes. SCORM and xAPI content can be uploaded and tracked.'],
    ],
  },
  {
    slug: 'hr-analytics',
    name: 'HR Analytics',
    icon: '📊',
    category: 'Insights',
    short: 'People analytics and AI insights for confident decisions.',
    title: 'HR Analytics Software – People Analytics & Dashboards',
    description:
      'Turn workforce data into decisions with pre-built dashboards, custom reports, attrition prediction and an AI assistant that answers HR questions in plain language.',
    features: [
      ['Pre-built dashboards', 'Headcount, attrition, diversity, hiring and cost dashboards out of the box.'],
      ['Custom report builder', 'Drag-and-drop reports across every module.'],
      ['Attrition prediction', 'Machine-learning flags employees at risk of leaving.'],
      ['Conversational AI', 'Ask “What was attrition in sales last quarter?” and get an instant answer.'],
    ],
    faqs: [
      ['Can I export data to my BI tool?', 'Yes. Scheduled exports and APIs feed your data warehouse or BI platform.'],
    ],
  },
];

export const industries = [
  {
    slug: 'manufacturing',
    name: 'Manufacturing',
    icon: '🏭',
    description: 'Manage blue-collar and contract workforces across plants with shift rostering, biometric attendance and statutory compliance.',
    points: ['Contract labour management', 'Shift & overtime automation', 'Plant-level compliance', 'Offline mobile attendance'],
  },
  {
    slug: 'banking-financial-services',
    name: 'Banking & Financial Services',
    icon: '🏦',
    description: 'Secure, regulated HR for branches nationwide with fit-and-proper checks, certifications tracking and data residency.',
    points: ['Regulatory certifications', 'Branch hierarchy modelling', 'Data residency & audit trails', 'Sales incentive management'],
  },
  {
    slug: 'retail',
    name: 'Retail',
    icon: '🛍️',
    description: 'Hire seasonal staff at speed, schedule store shifts and engage a deskless frontline workforce on mobile.',
    points: ['High-volume hiring', 'Store shift scheduling', 'Frontline mobile app', 'Attrition analytics'],
  },
  {
    slug: 'healthcare',
    name: 'Healthcare',
    icon: '🏥',
    description: 'Credential tracking, 24x7 rostering and fatigue management for hospitals and care networks.',
    points: ['License & credential tracking', '24x7 rostering', 'Mandatory training', 'Multi-facility reporting'],
  },
  {
    slug: 'technology',
    name: 'Technology & IT Services',
    icon: '💻',
    description: 'Scale hiring, project timesheets and continuous performance for fast-growing tech teams.',
    points: ['Project timesheets & billing', 'Skills inventory', 'OKRs & continuous feedback', 'Global payroll'],
  },
  {
    slug: 'logistics',
    name: 'Logistics & Transportation',
    icon: '🚚',
    description: 'Geo-tagged attendance, field expenses and driver compliance for distributed operations.',
    points: ['Geo-fenced attendance', 'Field expense claims', 'Driver document compliance', 'Hub-level rosters'],
  },
];

export const customers = [
  { name: 'Northwind Retail', industry: 'Retail', employees: '45,000+', quote: 'We cut hiring time for store associates by 40% and finally have one view of our frontline workforce.', person: 'CHRO, Northwind Retail', metric: '40% faster hiring' },
  { name: 'Apex Manufacturing', industry: 'Manufacturing', employees: '28,000+', quote: 'Attendance and payroll across 60 plants now close in a day instead of a week.', person: 'VP HR Operations, Apex Manufacturing', metric: '5x faster payroll close' },
  { name: 'Meridian Bank', industry: 'Banking', employees: '60,000+', quote: 'Compliance reporting that took weeks is now a dashboard our regulators love.', person: 'Head of People, Meridian Bank', metric: '100% audit readiness' },
  { name: 'Brightpath Health', industry: 'Healthcare', employees: '18,000+', quote: 'Credential expiry alerts alone saved us from countless compliance gaps.', person: 'Director HR, Brightpath Health', metric: '0 lapsed credentials' },
];

export const posts = [
  {
    slug: 'what-is-hcm-software',
    title: 'What Is HCM Software? A Complete Guide for Enterprises',
    excerpt: 'Human capital management software unifies HR, payroll and talent processes. Here is what it includes, how it differs from HRIS, and how to choose one.',
    date: '2026-10-14',
    author: 'Priya Raman',
    readTime: '8 min read',
    tags: ['HCM', 'Buyer Guide'],
    body: [
      ['h2', 'HCM, HRIS and HRMS: what is the difference?'],
      ['p', 'An HRIS (human resource information system) focuses on employee records and transactions. An HRMS adds payroll, time and attendance. HCM (human capital management) goes further, covering the full talent lifecycle: recruiting, onboarding, performance, learning, engagement and analytics.'],
      ['h2', 'Core capabilities to look for'],
      ['ul', ['A unified employee data model across modules', 'Configurable workflows without code', 'Native mobile apps for deskless workers', 'Multi-country payroll and compliance', 'Embedded analytics and AI']],
      ['h2', 'How to evaluate vendors'],
      ['p', 'Shortlist vendors that have customers of your size and industry, ask for a sandbox, and score them on configurability, implementation time, total cost of ownership and product roadmap.'],
    ],
  },
  {
    slug: 'reduce-employee-attrition',
    title: '7 Data-Driven Ways to Reduce Employee Attrition',
    excerpt: 'Attrition is expensive. Use people analytics to spot risk early and act before your best people walk out the door.',
    date: '2026-09-28',
    author: 'Daniel Ortiz',
    readTime: '6 min read',
    tags: ['Analytics', 'Retention'],
    body: [
      ['p', 'Replacing an employee can cost between half and twice their annual salary. The good news is that attrition is predictable when you look at the right signals.'],
      ['h2', 'Signals that predict attrition'],
      ['ul', ['Stagnant compensation relative to market', 'No promotion in 24+ months', 'Declining engagement survey scores', 'Manager changes', 'Reduced participation in learning']],
      ['h2', 'Turn insight into action'],
      ['p', 'Give managers a risk dashboard, pair it with stay-interview prompts, and track the impact of each intervention over time.'],
    ],
  },
  {
    slug: 'okrs-vs-kpis',
    title: 'OKRs vs KPIs: Which Should Your Organisation Use?',
    excerpt: 'OKRs drive ambitious change; KPIs measure health. Learn how high-performing teams use both together.',
    date: '2026-08-19',
    author: 'Mei Chen',
    readTime: '5 min read',
    tags: ['Performance'],
    body: [
      ['p', 'KPIs (key performance indicators) track the ongoing health of a process. OKRs (objectives and key results) define where you want to go next and how you will measure getting there.'],
      ['h2', 'Using them together'],
      ['p', 'Keep KPIs as your dashboard of business-as-usual metrics, and use OKRs each quarter for a few stretch priorities. When a KPI drops, it can become the focus of a new OKR.'],
    ],
  },
  {
    slug: 'payroll-compliance-checklist',
    title: 'The 2026 Payroll Compliance Checklist',
    excerpt: 'A practical checklist to keep multi-state and multi-country payroll compliant all year long.',
    date: '2026-07-02',
    author: 'Priya Raman',
    readTime: '7 min read',
    tags: ['Payroll', 'Compliance'],
    body: [
      ['p', 'Payroll errors damage trust and invite penalties. Use this checklist every cycle and at year-end.'],
      ['h2', 'Every pay cycle'],
      ['ul', ['Reconcile attendance and leave inputs', 'Validate new joiners and exits', 'Review statutory deductions', 'Approve variance report before release']],
      ['h2', 'Every year'],
      ['ul', ['Update tax slabs and statutory rates', 'Issue year-end tax forms', 'Audit access permissions to payroll data']],
    ],
  },
];

export const plans = [
  { name: 'Essentials', price: 'Talk to sales', blurb: 'Core HR, leave, attendance and self-service for growing companies.', features: ['Core HR & ESS', 'Leave & attendance', 'Mobile app', 'Standard reports'] },
  { name: 'Professional', price: 'Talk to sales', blurb: 'Adds payroll, recruitment and performance for mid-size enterprises.', features: ['Everything in Essentials', 'Payroll', 'Recruitment & onboarding', 'Performance & OKRs', 'Workflow builder'], highlight: true },
  { name: 'Enterprise', price: 'Custom', blurb: 'The full suite with AI, analytics and global capabilities.', features: ['Everything in Professional', 'HR analytics & AI', 'Engagement & learning', 'Multi-country', 'Dedicated success team'] },
];
