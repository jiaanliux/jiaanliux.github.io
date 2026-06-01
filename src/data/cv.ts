export type Role = {
  org: string;
  title: string;
  period: string;
  location: string;
  points: string[];
};

export const experience: Role[] = [
  {
    org: 'United Nations University Institute in Macau',
    title: 'Research Assistant & ICT Focal Point (Artificial Intelligence)',
    period: 'Jan 2024 – present',
    location: 'Macau SAR, China',
    points: [
      'Lead applied AI research on agentic systems, LLM-enhanced simulation, and AI for sustainable development.',
      'Sole ICT focal point: design, deploy, and operate the institute’s AI platforms and multi-cloud infrastructure.',
      'Represent UNU Macau in the UNU ICT Network, OneIT, and the Information Security Policy working group.',
    ],
  },
  {
    org: 'International Telecommunication Union (ITU)',
    title: 'Operational Bulletin Automation Intern, TSB',
    period: 'Aug 2024 – Nov 2024',
    location: 'Geneva (remote)',
    points: [
      'Evaluated, integrated, and deployed an editor application on AWS to automate the ITU Operational Bulletin.',
      'Co-wrote the internal documentation and user guide supporting adoption.',
    ],
  },
  {
    org: 'Shanghai Cooperation Organization (SCO)',
    title: 'Team Lead Intern, International Exchange & Judicial Cooperation',
    period: 'Jul 2021 – Sep 2021',
    location: 'Shanghai, China',
    points: [
      'Coordinated a China–ASEAN symposium and developed new international training programmes.',
    ],
  },
  {
    org: 'Health Commission of Zhejiang Province',
    title: 'Team Lead Intern',
    period: 'Jul 2021 – Aug 2021',
    location: 'Hangzhou, China',
    points: [
      'Supported the design and deployment of the province’s "Health Cloud" and reported on data interoperability.',
    ],
  },
];

export type Edu = {
  org: string;
  degree: string;
  period: string;
  detail: string;
};

export const education: Edu[] = [
  {
    org: 'Zhejiang University',
    degree: 'M.Eng., Computer Science & Technology (AI specialization)',
    period: '2019 – 2023',
    detail:
      'GPA 3.8/4.0. Minor in International Organizations & International Development (3.92/4.0). Graduated with Honors; Outstanding Student Award.',
  },
  {
    org: 'Zhongnan University of Economics and Law',
    degree: 'B.Mgmt., E-Commerce Technology',
    period: '2015 – 2019',
    detail: 'Interdisciplinary training across computer science, management, economics, and law.',
  },
];

export type TalkGroup = { heading: string; items: string[] };

export const talks: TalkGroup[] = [
  {
    heading: 'Keynotes & invited talks',
    items: [
      'Keynote, China (Macau) International Cross-border E-commerce Expo 2025',
      'Keynote, GBA International Model UN Conference 2025 (Hong Kong)',
      'Joint keynote & jury, Asian Social Simulation Association 2025 (Wuhan)',
      'Panelist, Smart City Expo Kuala Lumpur 2025',
      'Speaker, IEEE Universal Village 2024 (Boston)',
      'Speaker & reviewer, UNIDO AIM Global Forum 2024 (Vienna)',
    ],
  },
  {
    heading: 'Capacity building & training',
    items: [
      'Lecturer, UNU Digital Technology & Sustainable Development Talent Programme 2026 (Macau / Bonn / Maastricht)',
      'Lecturer, "Demystifying AI for Diplomats" 2025 (UN China & British Consulate, Hong Kong)',
      'Lecturer, China–ASEAN Seminar for In-service Statistical Personnel 2025 (Nanning)',
      'Lecturer, Global Youth Forum 2025 (ILO / ITCILO)',
    ],
  },
];

export type SkillGroup = { heading: string; items: string[] };

export const skills: SkillGroup[] = [
  {
    heading: 'AI & machine learning',
    items: ['PyTorch', 'LLM agents & RAG', 'Agent-based modeling', 'Computer vision', 'Vision-language models', 'LLM evaluation', 'Responsible AI'],
  },
  {
    heading: 'Geospatial & remote sensing',
    items: ['QGIS / PostGIS', 'GeoPandas', 'GDAL', 'Satellite imagery', 'Accessibility analysis', 'Leaflet / Mapbox'],
  },
  {
    heading: 'Systems & cloud',
    items: ['Docker', 'AWS', 'Azure', 'Cloudflare', 'Caddy / Nginx', 'Entra ID / OAuth2', 'Monitoring & recovery'],
  },
  {
    heading: 'Programming & web',
    items: ['Python (FastAPI)', 'TypeScript / React', 'PostgreSQL', 'C / C++', 'Git', 'Astro / Vite'],
  },
  {
    heading: 'Policy & engagement',
    items: ['Digital governance', 'AI as public goods', 'Policy briefs', 'Capacity building', 'Bilingual (中文 / English)'],
  },
];

export const awards: string[] = [
  'Best Paper Award, AAAI 2026 Workshop on Language Models for Underserved Communities',
  'Outstanding Student Award, Zhejiang University (2023)',
  'Graduated with Honors, Minor in International Organizations & Development (GPA 3.92/4.0)',
  'Member, ZJU Global Engagement Program',
];
