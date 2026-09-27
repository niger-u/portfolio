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
}

export const CATEGORY_DEFINITIONS: { id: ArchiveCategory; title: string; subtitle: string }[] = [
  {
    id: 'experience',
    title: '01 // EXPERIENCE & INTERNSHIPS',
    subtitle: 'PRODUCT STRATEGY, GTM ROADMAPS, AND FOUNDER’S OFFICE OPERATIONS',
  },
  {
    id: 'project',
    title: '02 // DATA & SYSTEMS ENGINEERING',
    subtitle: 'STOCHASTIC SUPPLY CHAIN OPTIMIZATION, RISK AUTOMATION & PYTHON ETL',
  },
  {
    id: 'leadership',
    title: '03 // LEADERSHIP & POSITIONS OF RESPONSIBILITY',
    subtitle: 'TREASURY GOVERNANCE, CAMPAIGN ANALYTICS, AND 40K+ MEMBER COMMUNITY GROWTH',
  },
  {
    id: 'skills',
    title: '04 // SKILLS, EDUCATION & ACHIEVEMENTS',
    subtitle: 'TECHNICAL TOOLKIT, JADAVPUR UNIVERSITY (‘28), AND COMPETITIVE HONORS',
  },
];

export const PROFILE_INFO = {
  name: 'Harsh Verma',
  tagline: 'Product Strategy, Operations & Systems Engineering | Chemical Engineering @ Jadavpur University (\'28)',
  positioning: 'Product Management, Strategy & Growth, and Data/Workflow Engineering',
  email: 'harshfalsegenius@gmail.com',
  phone: '+91 9749252757',
  location: 'Kolkata, West Bengal',
  education: 'Bachelor of Engineering in Chemical Engineering, Jadavpur University (2024 – 2028)',
  achievements: [
    '2nd Place – AICSSYC 2024 (All India Computer Society Student Congress Pitch)',
    '2nd Place – SRIJAN 2025 (Entropy Technical Competition)',
  ],
};

export const ARCHIVE_ARTIFACTS: ArchiveArtifact[] = [
  // 01 // EXPERIENCE
  {
    id: 'iit-roorkee-kanpur',
    serialNumber: '001',
    category: 'experience',
    categoryLabel: 'RESEARCH INTERN // PRODUCT STRATEGY & GTM',
    title: 'PRODUCT STRATEGY & GTM FEASIBILITY',
    role: 'Research Intern – Product Strategy & GTM',
    organization: 'IIT Roorkee & IIT Kanpur (On-Site)',
    timeframe: 'JUNE 2026 – JULY 2026',
    shortSummary:
      'Formulated Go-To-Market (GTM) strategy and market feasibility study to commercialize traditional artisanal craft forms (Etikoppaka) into premium consumer board games.',
    bulletPoints: [
      'Formulated Go-To-Market (GTM) strategy and market feasibility study to commercialize traditional artisanal craft forms (Etikoppaka) into premium consumer board games.',
      'Managed 5+ vendors across Delhi to establish unit economics, supply chain logistics, and cost models.',
      'Secured sales placement at Karigari 5.0 (KCC) to evaluate B2C market demand and customer traction.',
    ],
    tools: ['GTM Strategy', 'Product Strategy', 'Market Research', 'Unit Economics', 'Supply Chain Logistics', 'Vendor Management'],
    imageUrl:
      'https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=1200&auto=format&fit=crop',
    capLabel: 'MUSIC',
    status: 'COMPLETED',
  },
  {
    id: 'hiredue',
    serialNumber: '002',
    category: 'experience',
    categoryLabel: 'FOUNDER\'S OFFICE // OPERATIONS & GROWTH',
    title: 'FOUNDER’S OFFICE & GROWTH OPERATIONS',
    role: 'Founder’s Office Intern',
    organization: 'HireDue (Remote)',
    timeframe: 'APR 2026 – AUG 2026',
    shortSummary:
      'Executed sales operations across 400+ ICPs, conducted prospect discovery calls, engineered outreach conversion loops, and managed pre-rollout product QA.',
    bulletPoints: [
      'Executed sales operations across 400+ ICPs, conducting lead generation and discovery calls to tier prospects.',
      'Drove cold LinkedIn outreach strategies (15% conversion) and pioneered a Campus Ambassador program scaling to 10 representatives.',
      'Partnered with the product team on QA and bug testing, resolving 20+ UX issues prior to public rollout.',
    ],
    tools: ['Sales Operations', 'Cold Outreach (15% Conv)', 'Lead Qualification', 'Product QA & Bug Testing', 'Growth Strategy'],
    imageUrl:
      'https://images.unsplash.com/photo-1509967419530-da38b4704bc6?q=80&w=1200&auto=format&fit=crop',
    capLabel: 'MUSIC',
    status: 'COMPLETED',
  },

  // 02 // DATA & SYSTEMS PROJECTS
  {
    id: 'supply-chain-optimization',
    serialNumber: '003',
    category: 'project',
    categoryLabel: 'DATA SYSTEMS // SUPPLY CHAIN ENGINE',
    title: 'PREDICTIVE SUPPLY CHAIN OPTIMIZATION ENGINE',
    role: 'Product & Data Systems Engineer',
    organization: 'Supply Chain Analytics & Modeling',
    timeframe: '2026',
    shortSummary:
      'Engineered an end-to-end demand forecasting and inventory optimization engine standardizing weekly time-series demand for 70+ product categories across 27 regional nodes.',
    bulletPoints: [
      'Processed 100,000+ raw e-commerce logs across 4 databases, standardizing weekly time-series demand for 70+ product categories across 27 regional nodes.',
      'Applied the Newsvendor Probability Model, calculating a 93.75% optimal service level by mathematically balancing a 30% stockout penalty against a 2% holding cost.',
      'Calculated dynamic reorder points via SciPy Z-scores, delivered through an interactive Streamlit web dashboard.',
    ],
    tools: ['Python', 'Pandas', 'NumPy', 'SciPy', 'Streamlit', 'Newsvendor Model', 'Time-Series Analysis'],
    imageUrl:
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop',
    capLabel: 'MUSIC',
    status: 'FEATURED',
  },
  {
    id: 'supply-chain-risk-pipeline',
    serialNumber: '004',
    category: 'project',
    categoryLabel: 'WORKFLOW AUTOMATION // RISK PIPELINE',
    title: 'AUTOMATED SUPPLY CHAIN RISK & ALERT PIPELINE',
    role: 'Workflow Systems Architect',
    organization: 'Real-Time Automation Infrastructure',
    timeframe: '2026',
    shortSummary:
      'Built a locally hosted, real-time risk automation engine in n8n (Docker) monitoring transit and weather disruptions across 27 regional nodes to prevent localized stockouts.',
    bulletPoints: [
      'Built a locally hosted, real-time risk automation engine in n8n (Docker), monitoring transit and weather disruptions across 27 regional nodes to prevent localized stockouts.',
      'Orchestrated scheduled HTTP Request nodes to parse 120+ daily REST API payloads (OpenWeatherMap/RSS), cross-referencing live environmental flags against Google Sheets inventory thresholds.',
      'Engineered conditional logic triggering sub-800ms Slack alerts when external risks intersected with <15% safety stock buffers.',
    ],
    tools: ['n8n', 'Docker', 'REST APIs', 'Google Sheets', 'Slack Webhooks', 'Workflow Automation', 'Sub-800ms Alerts'],
    imageUrl:
      'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=1200&auto=format&fit=crop',
    capLabel: 'MUSIC',
    status: 'FEATURED',
  },

  // 03 // LEADERSHIP & POSITIONS OF RESPONSIBILITY
  {
    id: 'juds-treasurer',
    serialNumber: '005',
    category: 'leadership',
    categoryLabel: 'LEADERSHIP // TREASURY & GOVERNANCE',
    title: 'TREASURER — JU DEBATING SOCIETY',
    role: 'Treasurer & Officer in Charge',
    organization: 'Jadavpur University Debating Society',
    timeframe: 'JUL 2025 – PRESENT',
    shortSummary:
      'Manage treasury operations and financial strategy for society budgets up to ₹1,00,000+ across flagship events; served as Officer in Charge for JUMUN securing 7 corporate sponsorships.',
    bulletPoints: [
      'Manage treasury operations and financial strategy for society budgets up to ₹1,00,000+ across flagship events.',
      'Served as Officer in Charge for JUMUN, securing 7 corporate sponsorships (₹30,000+).',
      'Formulated financial governance models, cash-flow allocations, and post-event sponsor reconciliations.',
    ],
    tools: ['Financial Budgeting', 'Treasury Operations', 'Corporate Sponsorships', 'Executive Governance'],
    imageUrl:
      'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1200&auto=format&fit=crop',
    capLabel: 'MUSIC',
    link: 'https://www.instagram.com/judebatingsociety/',
    status: 'ACTIVE',
  },
  {
    id: 'ieee-strategy-lead',
    serialNumber: '006',
    category: 'leadership',
    categoryLabel: 'LEADERSHIP // STRATEGY & CAMPAIGNS',
    title: 'DESIGN & STRATEGY LEAD — IEEE JUSB',
    role: 'Design & Strategy Lead',
    organization: 'IEEE Jadavpur University Student Branch',
    timeframe: 'MAR 2025 – PRESENT',
    shortSummary:
      'Co-managed campaign execution across 15+ flagship events including DoubleSlash 4.0; analyzed marketing metrics and digital assets to boost attendee acquisition and conversion.',
    bulletPoints: [
      'Co-managed campaign execution across 15+ flagship events, including DoubleSlash 4.0.',
      'Analyzed marketing metrics and digital assets to boost attendee acquisition and channel conversion rates.',
      'Directed multi-channel brand positioning, visual token guidelines, and attendee retention strategies.',
    ],
    tools: ['Campaign Strategy', 'Marketing Analytics', 'Conversion Optimization', 'Brand Direction', 'Event Operations'],
    imageUrl:
      'https://images.unsplash.com/photo-1541701494587-cb58502866ab?q=80&w=1200&auto=format&fit=crop',
    capLabel: 'MUSIC',
    link: 'https://www.instagram.com/_ieeeju/',
    status: 'ACTIVE',
  },
  {
    id: 'unboxed-community',
    serialNumber: '007',
    category: 'leadership',
    categoryLabel: 'LEADERSHIP // COMMUNITY & GROWTH',
    title: 'CO-FOUNDER — UNBOXED COMMUNITY',
    role: 'Co-Founder & Growth Architect',
    organization: 'Unboxed Community',
    timeframe: 'AUG 2022 – JUNE 2025',
    shortSummary:
      'Co-founded and scaled an online STEM learning community to 40,000+ members using data-driven organic growth loops, structured challenges, and high-retention engagement.',
    bulletPoints: [
      'Co-founded and scaled a Telegram community to 40,000+ members using data-driven growth strategies.',
      'Executed growth loops and daily engagement activities to scale the community and maintain high retention.',
      'Built collaborative peer cohorts guiding students to elite nationwide results, including AIR 16 and AIR 17 in JEE Mains 2026.',
    ],
    tools: ['Community Growth Loops', 'Organic Acquisition', 'Retention Funnels', 'Data-Driven Scale', 'Growth Strategy'],
    imageUrl:
      'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop',
    capLabel: 'MUSIC',
    status: 'COMPLETED',
  },

  // 04 // SKILLS, EDUCATION & ACHIEVEMENTS
  {
    id: 'skills-toolkit',
    serialNumber: '008',
    category: 'skills',
    categoryLabel: 'CAPABILITIES // SKILLS & TOOLKIT',
    title: 'PRODUCT, DATA & WORKFLOW TOOLKIT',
    role: 'Core Competency Matrix',
    organization: 'Professional Toolkit',
    timeframe: 'CONTINUOUS',
    shortSummary:
      'Cross-disciplinary toolkit encompassing Go-To-Market strategy, Python data modeling (Pandas, SciPy), and modern workflow automation engines (Docker, n8n).',
    bulletPoints: [
      'Business & Strategy: Go-to-Market Strategy, Product Strategy, Market Research, Unit Economics, Financial Budgeting.',
      'Data & Programming: Python (Pandas, NumPy, SciPy), Statistical Modeling, ETL Pipelines, Time-Series Analysis.',
      'Tools & Infrastructure: Docker, n8n (Workflow Automation), REST APIs, Streamlit, Figma (UX Research), Power BI, MS Excel.',
    ],
    tools: [
      'GTM Strategy',
      'Python',
      'Pandas',
      'SciPy',
      'Docker',
      'n8n',
      'REST APIs',
      'Streamlit',
      'Figma',
      'Power BI',
      'Excel',
      'Unit Economics',
    ],
    imageUrl:
      'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200&auto=format&fit=crop',
    capLabel: 'MUSIC',
    status: 'FEATURED',
  },
  {
    id: 'education-achievements',
    serialNumber: '009',
    category: 'skills',
    categoryLabel: 'ACADEMICS // EDUCATION & HONORS',
    title: 'JADAVPUR UNIVERSITY & HONORS',
    role: 'Chemical Engineering (\'28) & Award Winner',
    organization: 'Jadavpur University',
    timeframe: '2024 – 2028',
    shortSummary:
      'Pursuing B.E. in Chemical Engineering at Jadavpur University; decorated across national startup pitch and technological innovation contests.',
    bulletPoints: [
      'Bachelor of Engineering in Chemical Engineering, Jadavpur University (2024 – 2028).',
      '2nd Place – AICSSYC 2024 (All India Computer Society Student Congress Pitch Competition).',
      '2nd Place – SRIJAN 2025 (Entropy Technical Contest).',
    ],
    tools: ['Chemical Engineering', 'Jadavpur University (\'28)', 'AICSSYC 2024 (2nd Place)', 'SRIJAN 2025 (2nd Place)'],
    imageUrl:
      'https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1200&auto=format&fit=crop',
    capLabel: 'MUSIC',
    status: 'FEATURED',
  },
];
