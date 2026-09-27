export type ArchiveCategory = 'internship' | 'project' | 'leadership' | 'honors';

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
    id: 'internship',
    title: '01 // INTERNSHIPS & PROFESSIONAL EXPERIENCE',
    subtitle: 'CORE PRODUCTION, OPERATIONS, AND QUALITATIVE UX SYSTEMS',
  },
  {
    id: 'project',
    title: '02 // FLAGSHIP PROJECTS & VENTURES',
    subtitle: 'PREDICTIVE AI, EDTECH NETWORKS, AND HACKATHON PLATFORMS',
  },
  {
    id: 'leadership',
    title: '03 // POSITIONS OF RESPONSIBILITY',
    subtitle: 'CREATIVE DIRECTION, MOTION PIPELINES, AND TECH AFFAIRS',
  },
  {
    id: 'honors',
    title: '04 // HONORS, VENTURE & VOLUNTEERING',
    subtitle: 'GLOBAL PITCH AWARDS AND INSTITUTIONAL IDENTITY',
  },
];

export const ARCHIVE_ARTIFACTS: ArchiveArtifact[] = [
  // 01 // INTERNSHIPS
  {
    id: 'hiredue',
    serialNumber: '001',
    category: 'internship',
    categoryLabel: 'INTERNSHIP // OPERATIONS',
    title: 'HIREDUE STARTUP OPERATIONS',
    role: 'Operations Intern',
    organization: 'Hiredue',
    timeframe: '2026 — PRESENT',
    shortSummary:
      'Spearheading cross-functional operational workflows spanning marketing strategy, video editing, UI design, and user research.',
    bulletPoints: [
      'Orchestrating end-to-end operational pipelines across marketing and growth experiments.',
      'Sole director of video post-production and motion graphics for promotional campaigns.',
      'Designing wireframes and design system tokens in Figma for internal product interfaces.',
      'Conducting user interviews and UX research to optimize candidate recruitment funnel.',
    ],
    tools: ['Operations Strategy', 'Figma', 'DaVinci Resolve', 'CapCut', 'UX Research'],
    imageUrl:
      'https://images.unsplash.com/photo-1509967419530-da38b4704bc6?q=80&w=1200&auto=format&fit=crop',
    capLabel: 'MUSIC',
    status: 'ACTIVE',
  },

  // 02 // FLAGSHIP PROJECTS
  {
    id: 'crop-yield-ai',
    serialNumber: '002',
    category: 'project',
    categoryLabel: 'FLAGSHIP PROJECT // UX RESEARCH',
    title: 'AI CROP YIELD PREDICTOR',
    role: 'Lead UX Researcher & Product Designer',
    organization: 'Agricultural AI Initiative',
    timeframe: '2026',
    shortSummary:
      'UX research study evaluating predictive machine learning models for estimating agricultural yields across Indian states using soil & meteorological telemetry.',
    bulletPoints: [
      'Synthesized multi-parameter datasets: Indian Ministry of Agriculture soil records, historical rainfall indices, and satellite NDVI indices.',
      'Designed intuitive, low-latency dashboard interfaces tailored for non-technical farming cooperative operators.',
      'Developed user journey maps identifying telemetry trust friction in predictive automated recommendations.',
    ],
    tools: ['UX Research', 'Information Architecture', 'Figma', 'Data Modeling', 'Field Testing'],
    imageUrl:
      'https://images.unsplash.com/photo-1574943320219-553eb213f72d?q=80&w=1200&auto=format&fit=crop',
    capLabel: 'MUSIC',
    status: 'COMPLETED',
  },
  {
    id: 'universe-unboxed',
    serialNumber: '003',
    category: 'project',
    categoryLabel: 'EDTECH VENTURE // CO-FOUNDER',
    title: 'UNIVERSE UNBOXED',
    role: 'Co-Founder & Community Architect',
    organization: 'Universe Unboxed Network',
    timeframe: '2025 — 2026',
    shortSummary:
      'Co-founded and scaled a student-led IIT JEE competitive preparation ecosystem from zero to 40,000+ active members in under one calendar year.',
    bulletPoints: [
      'Grew organic engagement to 40,000+ active aspirants across Mathematics, Physics, and Chemistry channels.',
      'Fostered collaborative peer problem-solving environments producing top percentile ranks including AIR 16 & AIR 17 in JEE Mains 2026.',
      'Directed community branding, visual guidelines, and resource distribution architecture.',
    ],
    tools: ['Community Strategy', 'Brand Architecture', 'Discord Ops', 'Content Direction'],
    imageUrl:
      'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop',
    capLabel: 'MUSIC',
    status: 'FEATURED',
  },
  {
    id: 'doubleslash',
    serialNumber: '004',
    category: 'project',
    categoryLabel: 'WEB PLATFORM // UI/UX',
    title: 'DOUBLESLASH 4.0',
    role: 'Design & Ideation Lead',
    organization: 'DoubleSlash Hackathon',
    timeframe: '2025',
    shortSummary:
      'Conceptualized and crafted key design systems and user experience architecture for the largest student hackathon portal in West Bengal.',
    bulletPoints: [
      'Formulated cyber-industrial visual identity and responsive wireframes in Figma.',
      'Streamlined registration flow for 1,500+ hacker applicants with frictionless form design.',
      'Collaborated closely with frontend engineers to ensure 100% token fidelity.',
    ],
    tools: ['Figma', 'UI Design', 'Interaction Prototyping', 'Design Systems'],
    imageUrl:
      'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=1200&auto=format&fit=crop',
    capLabel: 'MUSIC',
    link: 'https://doubleslash4.ieee-jaduniv.in',
    status: 'COMPLETED',
  },
  {
    id: 'elevatex',
    serialNumber: '005',
    category: 'project',
    categoryLabel: 'EVENT PORTAL // UI/UX',
    title: 'ELEVATEX 3.0',
    role: 'Lead UI/UX Designer',
    organization: 'ElevateX Flagship',
    timeframe: '2025',
    shortSummary:
      'Spearheaded wireframing, layout hierarchy, and complete design tokens in Figma for the ElevateX technological summit.',
    bulletPoints: [
      'Produced modular component libraries including schedule matrices, speaker grids, and ticket tiers.',
      'Optimized viewport readability across mobile, tablet, and widescreen breakpoints.',
      'Delivered interactive developer handoff specs reducing styling turnaround by 40%.',
    ],
    tools: ['Figma', 'Wireframing', 'Responsive Design', 'Design Systems'],
    imageUrl:
      'https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1200&auto=format&fit=crop',
    capLabel: 'MUSIC',
    link: 'https://elevatex3.ieee-jaduniv.in',
    status: 'COMPLETED',
  },

  // 03 // POSITIONS OF RESPONSIBILITY
  {
    id: 'ieee-reels',
    serialNumber: '006',
    category: 'leadership',
    categoryLabel: 'LEADERSHIP // MOTION DIRECTION',
    title: 'IEEE JUSB VIDEO PRODUCTION',
    role: 'Motion Graphics & Video Director',
    organization: 'IEEE Jadavpur University Student Branch',
    timeframe: '2024 — 2026',
    shortSummary:
      'Sole video editor directing rhythm, sound design, color grading, and motion graphics for all social reels and promotional teasers.',
    bulletPoints: [
      'Engineered rapid-turnaround editing pipeline delivering high-retention video content.',
      'Synthesized sound effects, kinetic typography, and audio beat-syncing in DaVinci Resolve.',
      'Achieved consistent viral engagement spikes across technical student demographics.',
    ],
    tools: ['DaVinci Resolve', 'CapCut', 'Motion Design', 'Sound Editing'],
    imageUrl:
      'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=1200&auto=format&fit=crop',
    capLabel: 'MUSIC',
    link: 'https://www.instagram.com/_ieeeju/',
    status: 'ACTIVE',
  },
  {
    id: 'ieee-posters',
    serialNumber: '007',
    category: 'leadership',
    categoryLabel: 'LEADERSHIP // DESIGN LEAD',
    title: 'IEEE JUSB VISUAL STRATEGY',
    role: 'Design Lead',
    organization: 'IEEE Jadavpur University Student Branch',
    timeframe: '2024 — 2026',
    shortSummary:
      'Directed institutional design strategy and personally authored major event posters, certificates, and campaign collateral.',
    bulletPoints: [
      'Established cohesive brutalist and modern brand guidelines for all workshops and symposiums.',
      'Mentored junior design team members in composition, color theory, and typographic balance.',
      'Created high-impact digital posters viewed by tens of thousands of university engineering peers.',
    ],
    tools: ['Canva', 'Pinterest Curations', 'Poster Typography', 'Visual Strategy'],
    imageUrl:
      'https://images.unsplash.com/photo-1541701494587-cb58502866ab?q=80&w=1200&auto=format&fit=crop',
    capLabel: 'MUSIC',
    link: 'https://www.instagram.com/_ieeeju/',
    status: 'ACTIVE',
  },
  {
    id: 'jumun',
    serialNumber: '008',
    category: 'leadership',
    categoryLabel: 'LEADERSHIP // EXECUTIVE',
    title: 'JU MODEL UNITED NATIONS',
    role: 'Under-Secretary-General (USG) of Tech Affairs',
    organization: 'Jadavpur University Debating Society',
    timeframe: '2025',
    shortSummary:
      'Directed digital presence, promotional campaign collateral, and technical infrastructure for the annual Model UN conference.',
    bulletPoints: [
      'Curated distinct color palettes and typography kits establishing diplomatic conference authority.',
      'Designed print dossiers, delegate country guides, and official credential badges.',
      'Coordinated technical broadcast setups for international delegate committees.',
    ],
    tools: ['Technical Direction', 'Event Branding', 'Editorial Design', 'Print Systems'],
    imageUrl:
      'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1200&auto=format&fit=crop',
    capLabel: 'MUSIC',
    link: 'https://www.instagram.com/judebatingsociety/',
    status: 'COMPLETED',
  },

  // 04 // HONORS & VOLUNTEERING
  {
    id: 'aicssyc',
    serialNumber: '009',
    category: 'honors',
    categoryLabel: 'HONORS // VENTURE PITCH',
    title: 'AICSSYC GLOBAL PITCHING COMPETITION',
    role: 'Venture Pitcher & Strategist',
    organization: 'All India Computer Society Student Congress',
    timeframe: '2025',
    shortSummary:
      'Secured $800 international prize in competitive startup pitching competition defending technical innovation before industry venture panelists.',
    bulletPoints: [
      'Formulated comprehensive product feasibility, financial projections, and value proposition.',
      'Delivered high-pressure pitch presentation and defended technical implementation during Q&A.',
      'Recognized by venture adjudicators for exceptional presentation clarity and market validation.',
    ],
    tools: ['Venture Strategy', 'Public Pitching', 'Slide Architecture', 'Market Analysis'],
    imageUrl:
      'https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=1200&auto=format&fit=crop',
    capLabel: 'MUSIC',
    status: 'FEATURED',
  },
  {
    id: 'juds',
    serialNumber: '010',
    category: 'honors',
    categoryLabel: 'VOLUNTEER // IDENTITY DESIGN',
    title: 'JU DEBATING SOCIETY (JUDS)',
    role: 'Creative Designer & Visual Contributor',
    organization: 'Jadavpur University Debating Society',
    timeframe: '2024 — 2025',
    shortSummary:
      'Designed tournament certificates, promotional posters, and commemorative digital archives for regional parliamentary debates.',
    bulletPoints: [
      'Created standardized, high-elegance certificate templates distributed to national delegates.',
      'Maintained archival visual documentation for historic society debate motions.',
      'Contributed social media announcements and tournament fixture collateral.',
    ],
    tools: ['Certificate Design', 'Canva', 'Typography', 'Social Collateral'],
    imageUrl:
      'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?q=80&w=1200&auto=format&fit=crop',
    capLabel: 'MUSIC',
    link: 'https://www.instagram.com/judebatingsociety/',
    status: 'COMPLETED',
  },
];
