export type ArchiveCategory = 'experience' | 'project' | 'leadership' | 'skills';

export interface ArchiveArtifact {
  id: string;
  serialNumber: string;
  category: ArchiveCategory;
  categoryLabel: string;
  title: string;
  role: string;
  organization: string;
  timeframe: string;
  shortSummary: string;
  bulletPoints: string[];
  tools: string[];
  imageUrl: string;
  capLabel?: string;
  link?: string;
  status: 'ACTIVE' | 'COMPLETED' | 'FEATURED';
  isFeatured?: boolean;
}

export const CATEGORY_DEFINITIONS: { id: ArchiveCategory; title: string; subtitle: string }[] = [
  {
    id: 'experience',
    title: '01 // WORK & APPRENTICESHIP',
    subtitle: 'FOUNDER’S OFFICE, GTM ROADMAPS, AND VENTURE OPERATIONS',
  },
  {
    id: 'project',
    title: '02 // BUILDS & ARCHITECTURE',
    subtitle: 'PREDICTIVE INVENTORY ENGINES, REAL-TIME PIPELINES & PYTHON ETL',
  },
  {
    id: 'leadership',
    title: '03 // INITIATIVES & IMPACT',
    subtitle: '40K+ MEMBER COMMUNITY SCALE, TREASURY GOVERNANCE & CREATIVE DIRECTION',
  },
  {
    id: 'skills',
    title: '04 // ARSENAL & CREDENTIALS',
    subtitle: 'TECHNICAL STACK, JADAVPUR UNIVERSITY (\'28) & COMPETITIVE HONORS',
  },
];

export const PROFILE_INFO = {
  name: 'Harsh Verma',
  tagline: 'Founder in Stealth | Chemical Engineering @ Jadavpur University (\'28)',
  positioning: 'Consumer Tech, Growth Engines & Applied Engineering',
  email: 'harshfalsegenius@gmail.com',
  phone: '+91 9749252757',
  location: 'Kolkata, West Bengal',
  education: 'Bachelor of Engineering in Chemical Engineering, Jadavpur University (2024 – 2028)',
  achievements: [
    '2nd Place – AICSSYC 2024 (National Student Tech Congress Venture Pitch)',
    '2nd Place – SRIJAN 2025 (Entropy Technical Competition)',
  ],
};

export const ARCHIVE_ARTIFACTS: ArchiveArtifact[] = [
  // 00 // STEALTH STARTUP (FLAGSHIP FEATURED)
  {
    id: 'stealth-startup',
    serialNumber: '000',
    category: 'experience',
    categoryLabel: 'STEALTH VENTURE // FOUNDER',
    title: 'CONFIDENTIAL CONSUMER VENTURE',
    role: 'Founder & Builder',
    organization: '[CONFIDENTIAL] // STEALTH STARTUP',
    timeframe: '2026 – PRESENT',
    shortSummary:
      'Building a zero-to-one consumer venture in stealth. Obsessing over early distribution loops, rapid iteration, and user behavior.',
    bulletPoints: [
      'Designing and engineering a zero-to-one product focused on frictionless consumer mechanics.',
      'Iterating on early functional prototypes and conducting closed user feedback sessions.',
      'Currently heads-down in build mode. Architecture and roadmap shared upon inquiry.',
    ],
    tools: ['Zero-to-One', 'Consumer Tech', 'Viral Loops', 'Fast Prototyping', 'Stealth Mode'],
    imageUrl:
      'https://images.unsplash.com/photo-1514565131-fce0801e5785?q=80&w=1200&auto=format&fit=crop',
    capLabel: 'MUSIC',
    status: 'ACTIVE',
    isFeatured: true,
  },

  // 01 // EXPERIENCE & INTERNSHIPS
  {
    id: 'hiredue',
    serialNumber: '001',
    category: 'experience',
    categoryLabel: 'VENTURE OPS // GROWTH & PRODUCT',
    title: 'FOUNDER’S OFFICE & GROWTH OPERATIONS',
    role: 'Founder’s Office Intern',
    organization: 'HIREDUE',
    timeframe: 'APR 2026 – AUG 2026',
    shortSummary:
      'Ran customer discovery with 400+ target prospects, engineered cold outreach funnels converting at 15%, and hunted down 20+ product bugs before public launch.',
    bulletPoints: [
      'Spearheaded user research and qualification across 400+ targeted industry profiles.',
      'Built automated outreach sequences that achieved an exceptional 15% conversion rate.',
      'Pioneered the national campus ambassador program, onboarding 10 high-performing regional representatives.',
      'Tested and resolved 20+ UX bottlenecks alongside the engineering team prior to rollout.',
    ],
    tools: ['Founder’s Office', '15% Conversion Loops', 'User Discovery', 'Product QA', 'Growth Ops'],
    imageUrl:
      'https://images.unsplash.com/photo-1509967419530-da38b4704bc6?q=80&w=1200&auto=format&fit=crop',
    capLabel: 'MUSIC',
    status: 'COMPLETED',
    isFeatured: true,
  },
  {
    id: 'iit-roorkee-kanpur',
    serialNumber: '002',
    category: 'experience',
    categoryLabel: 'RESEARCH // COMMERCIALIZATION',
    title: 'ARTISAN COMMERCE & MARKET FEASIBILITY',
    role: 'Research Intern – Commercialization & GTM',
    organization: 'IIT ROORKEE & IIT KANPUR',
    timeframe: 'JUNE 2026 – JULY 2026',
    shortSummary:
      'Commercialized heritage Etikoppaka lacquer-wood crafts into premium consumer board games, securing live retail placement at Karigari 5.0.',
    bulletPoints: [
      'Developed viable unit economics, pricing models, and manufacturing contracts with 5+ artisanal vendors.',
      'Conducted consumer demand tests at Karigari 5.0 (KCC) to validate product appeal and pricing power.',
      'Formulated the commercial rollout blueprint bridging grassroots craftspeople with modern retail channels.',
    ],
    tools: ['Market Feasibility', 'Unit Economics', 'Vendor Negotiation', 'Artisanal Commerce', 'Retail Testing'],
    imageUrl:
      'https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=1200&auto=format&fit=crop',
    capLabel: 'MUSIC',
    status: 'COMPLETED',
    isFeatured: true,
  },

  // 02 // DATA & SYSTEMS BUILDS
  {
    id: 'supply-chain-optimization',
    serialNumber: '003',
    category: 'project',
    categoryLabel: 'ENGINEERING // INVENTORY ENGINE',
    title: 'PREDICTIVE SUPPLY CHAIN ENGINE',
    role: 'Creator & Systems Architect',
    organization: 'PREDICTIVE INVENTORY ENGINE',
    timeframe: '2026',
    shortSummary:
      'Analyzed 100,000+ e-commerce records to balance stockout penalties against holding costs, reaching a 93.75% optimal service level across 27 regional nodes.',
    bulletPoints: [
      'Cleaned and modeled 100k+ multi-database transaction logs across 70 product categories.',
      'Implemented the Newsvendor probability formula to balance a 30% stockout penalty with a 2% holding cost.',
      'Packaged dynamic SciPy reorder calculations into an intuitive interactive Streamlit cockpit.',
    ],
    tools: ['Python', 'SciPy', 'Pandas', 'Streamlit', 'Newsvendor Model', 'Inventory Math'],
    imageUrl:
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop',
    capLabel: 'MUSIC',
    status: 'FEATURED',
    isFeatured: true,
  },
  {
    id: 'supply-chain-risk-pipeline',
    serialNumber: '004',
    category: 'project',
    categoryLabel: 'AUTOMATION // REAL-TIME MONITOR',
    title: 'TRANSIT RISK & ALERT PIPELINE',
    role: 'Creator & Automation Engineer',
    organization: 'REAL-TIME RISK PIPELINE',
    timeframe: '2026',
    shortSummary:
      'Locally hosted n8n Docker pipeline parsing 120+ live weather and route disruption feeds daily, triggering sub-800ms alerts before stock runs dry.',
    bulletPoints: [
      'Self-hosted automated n8n workflow engine in Docker to track transit disruptions across 27 logistics nodes.',
      'Cross-referenced live environmental warnings from OpenWeatherMap against real-time warehouse threshold tables.',
      'Triggered sub-800ms Slack dispatch notifications whenever safety stock dropped below 15% during adverse weather.',
    ],
    tools: ['n8n', 'Docker', 'REST APIs', 'Slack Webhooks', 'Real-Time Triggers', 'Alert Infrastructure'],
    imageUrl:
      'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=1200&auto=format&fit=crop',
    capLabel: 'MUSIC',
    status: 'COMPLETED',
    isFeatured: false,
  },

  // 03 // LEADERSHIP & IMPACT
  {
    id: 'unboxed-community',
    serialNumber: '005',
    category: 'leadership',
    categoryLabel: 'SCALE // 40K+ MEMBER COMMUNITY',
    title: 'UNBOXED STEM COMMUNITY',
    role: 'Co-Founder & Growth Lead',
    organization: 'UNBOXED COMMUNITY',
    timeframe: 'AUG 2022 – JUNE 2025',
    shortSummary:
      'Built and scaled a nationwide student learning community from scratch to 40,000+ members through high-retention cohorts and organic peer loops.',
    bulletPoints: [
      'Engineered organic acquisition flywheels, growing the community to 40,000+ active student members.',
      'Created daily peer accountability challenges and curated collaborative study sprints.',
      'Mentored student cohorts to top national finishes, including AIR 16 and AIR 17 in JEE Mains 2026.',
    ],
    tools: ['Viral Growth Loops', 'Community Scale (40k+)', 'Cohort Retention', 'Peer Mentorship'],
    imageUrl:
      'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop',
    capLabel: 'MUSIC',
    status: 'COMPLETED',
    isFeatured: true,
  },
  {
    id: 'juds-treasurer',
    serialNumber: '006',
    category: 'leadership',
    categoryLabel: 'GOVERNANCE // FINANCIAL OPERATIONS',
    title: 'EXECUTIVE TREASURY & SPONSORSHIPS',
    role: 'Treasurer & Officer in Charge',
    organization: 'JU DEBATING SOCIETY',
    timeframe: 'JUL 2025 – PRESENT',
    shortSummary:
      'Direct financial allocations for society budgets exceeding ₹1,00,000; negotiated and closed ₹30,000+ in corporate brand sponsorships across 7 partners for JUMUN.',
    bulletPoints: [
      'Governed society-wide finances, budget allocations, and compliance for eastern India\'s premier debating circuit.',
      'Served as Officer in Charge for JUMUN, closing 7 brand sponsorships totaling ₹30,000+.',
      'Instituted transparent financial reconciliation and milestone-driven vendor payouts.',
    ],
    tools: ['Treasury Management', 'Sponsorship Closing', 'Financial Modeling', 'Event Governance'],
    imageUrl:
      'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1200&auto=format&fit=crop',
    capLabel: 'MUSIC',
    link: 'https://www.instagram.com/judebatingsociety/',
    status: 'ACTIVE',
    isFeatured: false,
  },
  {
    id: 'ieee-strategy-lead',
    serialNumber: '007',
    category: 'leadership',
    categoryLabel: 'DIRECTION // CAMPAIGN & BRAND',
    title: 'CREATIVE DIRECTION & CAMPAIGNS',
    role: 'Design & Creative Director',
    organization: 'IEEE JADAVPUR UNIVERSITY',
    timeframe: 'MAR 2025 – PRESENT',
    shortSummary:
      'Headed visual identity and acquisition campaigns across 15+ university tech events, including DoubleSlash 4.0, maximizing student participation.',
    bulletPoints: [
      'Led creative branding and digital promotional campaigns for DoubleSlash 4.0 and 15+ student technical events.',
      'Tested different creative angles to boost registration and attendance from regional campuses.',
      'Standardized design assets and brand guidelines across social channels and live event stages.',
    ],
    tools: ['Creative Direction', 'Campaign Design', 'Attendee Acquisition', 'Event Branding'],
    imageUrl:
      'https://images.unsplash.com/photo-1541701494587-cb58502866ab?q=80&w=1200&auto=format&fit=crop',
    capLabel: 'MUSIC',
    link: 'https://www.instagram.com/_ieeeju/',
    status: 'ACTIVE',
    isFeatured: false,
  },

  // 04 // SKILLS & HONORS
  {
    id: 'skills-toolkit',
    serialNumber: '008',
    category: 'skills',
    categoryLabel: 'CAPABILITIES // TECHNICAL ARSENAL',
    title: 'TECHNICAL & OPERATIONAL ARSENAL',
    role: 'Builder Toolkit',
    organization: 'CORE CAPABILITIES',
    timeframe: 'CONTINUOUS',
    shortSummary:
      'Hands-on execution stack spanning Python data pipelines, self-hosted Docker automation, zero-to-one product prototyping, and customer acquisition loops.',
    bulletPoints: [
      'Engineering: Python (Pandas, NumPy, SciPy), Docker, n8n Automation, REST APIs, Streamlit.',
      'Growth & Product: User Discovery, Cold Outreach Sequences, Unit Economics, Rapid Prototyping, Figma.',
      'Finance & Ops: Treasury Management, Sponsor Negotiation, Vendor Contracts, Event Operations.',
    ],
    tools: ['Python', 'Docker', 'n8n', 'Streamlit', 'Figma', 'Pandas', 'SciPy', 'Unit Economics', 'Growth Loops'],
    imageUrl:
      'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200&auto=format&fit=crop',
    capLabel: 'MUSIC',
    status: 'FEATURED',
    isFeatured: false,
  },
  {
    id: 'education-achievements',
    serialNumber: '009',
    category: 'skills',
    categoryLabel: 'ACADEMICS // HONORS & CONTESTS',
    title: 'JADAVPUR UNIVERSITY & HONORS',
    role: 'Chemical Engineering (\'28) & Pitch Winner',
    organization: 'JADAVPUR UNIVERSITY',
    timeframe: '2024 – 2028',
    shortSummary:
      'Chemical Engineering student at Jadavpur University with national awards across startup pitch competitions and engineering innovation contests.',
    bulletPoints: [
      'B.E. in Chemical Engineering, Jadavpur University (2024 – 2028).',
      '2nd Place – AICSSYC 2024 (National Student Tech Congress Startup Pitch Competition).',
      '2nd Place – SRIJAN 2025 (Entropy Technical Competition).',
    ],
    tools: ['Chemical Engineering', 'Jadavpur University (\'28)', 'AICSSYC 2024 (2nd Place)', 'SRIJAN 2025 (2nd Place)'],
    imageUrl:
      'https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1200&auto=format&fit=crop',
    capLabel: 'MUSIC',
    status: 'FEATURED',
    isFeatured: false,
  },
];
