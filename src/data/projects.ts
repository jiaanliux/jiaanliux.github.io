import type { ImageMetadata } from 'astro';

import urbanagents from '../assets/projects/UrbanAgents.png';
import sysuCoverage from '../assets/projects/sysu_coverage.jpg';
import sysuAnnotations from '../assets/projects/sysu_annotations.jpg';
import sysuArxiv from '../assets/projects/sysu_arxiv.png';
import sysuBlog from '../assets/projects/sysu_blog.png';
import environmaxResults from '../assets/projects/EnvironMax_results.png';
import environmaxRoutes from '../assets/projects/EnvironMax_routes.jpg';
import fwPortal from '../assets/projects/futurework_portal.png';
import fwLogin from '../assets/projects/futurework_login.png';
import aiHub from '../assets/projects/AI-agent-hub.png';
import unuLLM from '../assets/projects/UNUMacauLLM.png';
import kpi from '../assets/projects/openclaw-kpi-tracker.png';
import kpiCalc from '../assets/projects/openclaw-kpi-tracker-calculating.png';
import archTopology from '../assets/projects/architecture_topology.png';
import deployWorkflow from '../assets/projects/deployment_workflow.png';
import platformDiagram from '../assets/projects/diagram.jpg';
import remodelun1 from '../assets/projects/remodelun1.png';
import remodelun2 from '../assets/projects/remodelun2.png';
import remodelun3 from '../assets/projects/remodelun_1.png';
import tessera1 from '../assets/projects/Tessera1.png';
import tessera2 from '../assets/projects/Tessera2.png';
import aimacau from '../assets/projects/aimacau_1.png';
import cftrip from '../assets/projects/cftrip_1.png';
import ituRepo from '../assets/projects/itu_repo.png';

export type Shot = { src: ImageMetadata; alt: string; caption: string };
export type Link = { label: string; href: string };

export type Project = {
  slug: string;
  title: string;
  tagline: string;
  category: string;
  role: string;
  period: string;
  summary: string;
  description: string[];
  highlights: string[];
  tech: string[];
  links: Link[];
  cover: ImageMetadata;
  gallery: Shot[];
  featured: boolean;
};

export const projects: Project[] = [
  {
    slug: 'urbanagents',
    title: 'UrbanAgents',
    tagline: 'LLM-driven agents that simulate a city, block by block.',
    category: 'Agentic AI · Geospatial',
    role: 'Lead researcher',
    period: '2024 – present',
    summary:
      'A reproducibility-first framework for LLM-enhanced agent-based urban simulation. Spatially grounded agents perceive, plan, and act inside a minute-resolution model of Macau to test policy under heat, access, and misinformation.',
    description: [
      'UrbanAgents couples high-resolution geospatial infrastructure (OpenStreetMap, points of interest, accessibility graphs) with demographically diverse populations and LLM-based decision chains. Each agent perceives its surroundings, plans, and acts, so micro-level behaviour rolls up into city-level patterns of mobility, access, and wellbeing.',
      'I designed scenario pipelines for the challenges that matter to dense cities: heatwave resilience, healthcare accessibility, and misinformation diffusion, all on a fifteen-minute-city accessibility model. The framework ships a React interface so the results read as policy, not just plots.',
    ],
    highlights: [
      'Minute-resolution model of Macau built from real demographic and accessibility data',
      'Agents grounded in OpenStreetMap and point-of-interest reachability',
      'Published in Emerging Media and the Springer "AI for Humanity" volume',
    ],
    tech: ['Python', 'GeoPandas', 'GDAL', 'OpenStreetMap', 'LLM agents', 'React'],
    links: [
      { label: 'Paper (Emerging Media)', href: 'https://doi.org/10.1177/27523543251365678' },
    ],
    cover: urbanagents,
    gallery: [
      {
        src: urbanagents,
        alt: 'The UrbanAgents web interface showing a city model and agent panels',
        caption:
          'The UrbanAgents interface: spatially grounded LLM agents moving through a minute-resolution model of Macau.',
      },
    ],
    featured: true,
  },
  {
    slug: 'sysu-hiroads',
    title: 'SYSU-HiRoads',
    tagline: 'A large-scale remote-sensing road dataset, released openly.',
    category: 'Remote sensing · Open science',
    role: 'Co-lead & co-author',
    period: '2025 – 2026',
    summary:
      'A large, fine-grained remote-sensing road dataset paired with a vision-language-geometry algorithm for hierarchical road classification, released openly with a DOI for the research community.',
    description: [
      'SYSU-HiRoads packages thousands of square kilometres of high-resolution satellite imagery with fine-grained road-hierarchy labels, alongside a vision-language-geometry (VLG) algorithm that classifies roads at scale. It is built for open research on transport mapping, urban planning, and disaster response.',
      'I co-led the public release, with documentation aimed at external researchers, and authored the dissemination article that made the dataset and method accessible to the remote-sensing community. The dataset is archived on Zenodo with a citable DOI.',
    ],
    highlights: [
      'Public dataset with a citable Zenodo DOI for reproducible research',
      'Vision-language-geometry algorithm for fine-grained road hierarchy',
      'Companion arXiv preprint and an open-science dissemination article',
    ],
    tech: ['Python', 'PyTorch', 'Vision-language models', 'GDAL', 'Zenodo'],
    links: [
      { label: 'Paper (arXiv)', href: 'https://arxiv.org/abs/2603.21222' },
      { label: 'Dataset (Zenodo)', href: 'https://doi.org/10.5281/zenodo.18642747' },
      {
        label: 'UNU article',
        href: 'https://unu.edu/macau/blog-post/mapping-roads-more-openly-releasing-sysu-hiroads-remote-sensing-research',
      },
    ],
    cover: sysuCoverage,
    gallery: [
      {
        src: sysuCoverage,
        alt: 'Geographic coverage of the SYSU-HiRoads dataset over satellite imagery',
        caption: 'Geographic coverage of the dataset over high-resolution satellite imagery.',
      },
      {
        src: sysuAnnotations,
        alt: 'Fine-grained road-hierarchy annotations on remote-sensing tiles',
        caption: 'Fine-grained road-hierarchy annotations on remote-sensing tiles.',
      },
      {
        src: sysuArxiv,
        alt: 'The SYSU-HiRoads paper on arXiv',
        caption: 'The dataset and VLM-based method, released as an arXiv preprint.',
      },
      {
        src: sysuBlog,
        alt: 'The open-science dissemination article on the UNU Macau site',
        caption: 'Open-science dissemination on the UNU Macau site.',
      },
    ],
    featured: true,
  },
  {
    slug: 'environmax',
    title: 'EnvironMax',
    tagline: 'Turning live environmental data into personal health guidance.',
    category: 'Geospatial · Environmental health',
    role: 'Lead researcher & developer',
    period: '2018 – 2021',
    summary:
      'A geospatial platform that fuses IoT, GPS, mobile-sensing, and meteorological data into location-based health-risk assessment and personalized, hazard-aware navigation. The research behind it reached two top-tier Q1 journals.',
    description: [
      'EnvironMax integrates multi-source, real-time spatial data to compute where environmental health risk is highest and to route people around it. Dynamic risk models translate raw sensor and trajectory data into guidance a resident can act on.',
      'The work produced sustained, high-impact research: a paper in Urban Climate (Q1, IF 6.4) and earlier work in Science of the Total Environment (Q1, IF 9.8), one of the most cited venues in environmental science.',
    ],
    highlights: [
      'Published in Urban Climate (Q1, IF 6.4) and Science of the Total Environment (Q1, IF 9.8)',
      'Dynamic risk models over IoT, GPS, and meteorological feeds',
      'Personalized, hazard-aware spatial navigation',
    ],
    tech: ['Python', 'GIS', 'Spatial analysis', 'IoT / GPS fusion'],
    links: [
      { label: 'Urban Climate (2021)', href: 'https://doi.org/10.1016/j.uclim.2021.101020' },
    ],
    cover: environmaxResults,
    gallery: [
      {
        src: environmaxResults,
        alt: 'EnvironMax risk-assessment results across an urban area',
        caption: 'Risk-assessment results across the urban area.',
      },
      {
        src: environmaxRoutes,
        alt: 'Health-aware route guidance around environmental hazards',
        caption: 'Health-aware route guidance that steers residents around environmental hazards.',
      },
    ],
    featured: true,
  },
  {
    slug: 'institutional-ai-platform',
    title: 'Institutional AI Platform',
    tagline: 'The full AI and cloud stack of a UN institute, run by one person.',
    category: 'Systems · Cloud · DevOps',
    role: 'Sole ICT focal point',
    period: '2024 – present',
    summary:
      'As the only ICT focal point at UNU Macau, I designed and operate the institute’s AI platform end to end: chat and agent services, an LLM router, authenticated tool portals, and the multi-cloud and on-prem infrastructure under them.',
    description: [
      'The platform spans an AWS VM and an on-prem GPU workstation, consolidated behind a secure edge. It serves LLM chat, an agent orchestration harness, an LLM routing gateway, and FutureWork Studio, a portal of authenticated AI tools for staff, all gated by Microsoft Entra ID and OAuth2-Proxy.',
      'Everything is infrastructure-as-code: templated Docker Compose, per-host environment files, scripted deploys, versioned containers, documented snapshot and restore, and rollback to a previous tag within minutes. I cover identity and access, reverse proxies and TLS, monitoring, backups, and continuity.',
    ],
    highlights: [
      'Multi-cloud + on-prem GPU, fully containerized and scripted',
      'SSO, content safety, and audit gates required by UN standards',
      'Documented disaster recovery and minutes-to-rollback releases',
    ],
    tech: ['Docker', 'AWS', 'Azure', 'Cloudflare', 'Caddy / Nginx', 'FastAPI', 'Entra ID'],
    links: [{ label: 'FutureWork Studio', href: 'https://futurework.unu-macau.org/' }],
    cover: fwPortal,
    gallery: [
      {
        src: fwPortal,
        alt: 'The FutureWork Studio portal of AI tools',
        caption: 'FutureWork Studio: authenticated AI tools and workflows for UNU Macau staff.',
      },
      {
        src: archTopology,
        alt: 'Service topology diagram of the institutional platform',
        caption: 'Service topology: an AWS VM and an on-prem GPU host behind a secure edge.',
      },
      {
        src: deployWorkflow,
        alt: 'Staged deployment workflow diagram',
        caption: 'Staged deployment from on-prem dev and staging to production, with versioned rollback.',
      },
      {
        src: platformDiagram,
        alt: 'Detailed platform architecture diagram',
        caption: 'The platform end to end, from identity and ingress to services and storage.',
      },
      {
        src: aiHub,
        alt: 'The institutional AI agent hub interface',
        caption: 'The institutional AI agent hub.',
      },
      {
        src: unuLLM,
        alt: 'The UNU Macau LLM chat interface',
        caption: 'The institute’s LLM chat interface.',
      },
      {
        src: kpi,
        alt: 'An agentic KPI tracker dashboard',
        caption: 'An agentic KPI tracker built on the institute’s agent harness.',
      },
      {
        src: kpiCalc,
        alt: 'The KPI tracker computing indicators',
        caption: 'The tracker computing indicators across documents.',
      },
      {
        src: fwLogin,
        alt: 'Single sign-on screen via Microsoft Entra ID',
        caption: 'Single sign-on via Microsoft Entra ID and OAuth2-Proxy.',
      },
    ],
    featured: true,
  },
  {
    slug: 'remodelun',
    title: 'ReModelUN',
    tagline: 'AI-augmented Model UN that turns youth debate into policy insight.',
    category: 'AI for education · Platform',
    role: 'Co-developer & researcher',
    period: '2025 – present',
    summary:
      'An AI-enhanced Model UN initiative, with the Learning Planet Institute, that uses agentic AI to support delegates, amplify under-represented perspectives, and synthesize youth deliberation into structured reports.',
    description: [
      'ReModelUN combines an LLM research assistant for delegates, AI digital envoys that surface under-represented perspectives, and agent-based modeling so delegates can test proposals and generate ex-ante impact assessments. AI facilitates before, during, and after each session.',
      'I built the live platform that hosts the programme: a single FastAPI codebase serving project microsites with shared infrastructure, deployed for the UNU Digital Future training across Macau, Paris, and Geneva.',
    ],
    highlights: [
      'Multi-stage AI facilitation: RAG research, live facilitation, post-session synthesis',
      'Single-codebase platform hosting independent project microsites',
      'Live for the 2026 GBA International Model UN Conference',
    ],
    tech: ['FastAPI', 'Jinja2', 'Tailwind CSS', 'Docker', 'RAG', 'LLM routing'],
    links: [{ label: 'ReModelUN (live)', href: 'https://projects.unu-macau.org/ReModelUN' }],
    cover: remodelun1,
    gallery: [
      { src: remodelun1, alt: 'The ReModelUN platform landing page', caption: 'The ReModelUN programme hub.' },
      { src: remodelun2, alt: 'A ReModelUN content page', caption: 'Background guides and a resource library for delegates.' },
      { src: remodelun3, alt: 'Another ReModelUN interface view', caption: 'Bilingual training materials for an international cohort.' },
    ],
    featured: true,
  },
  {
    slug: 'tessera',
    title: 'Tessera',
    tagline: 'A reproducible agent harness for large-scale content analysis.',
    category: 'Agentic systems · Research infrastructure',
    role: 'Designer & lead engineer',
    period: 'Research → production',
    summary:
      'An end-to-end agent framework that brings modern engineering to qualitative research: a YAML recipe language, content-addressed caching for byte-level reproducibility, and claim-level evidence traceability.',
    description: [
      'Tessera lets researchers analyse text corpora far larger than hand-coding allows, without giving up rigour. A YAML recipe DSL defines pipelines, content-addressed result caching makes runs byte-for-byte reproducible, and deferred-event handling makes them fault-tolerant.',
      'The harness is built for audit: prompt hashes, reproducibility manifests, cost and token tracking, schema validation, inter-coder reliability, and post-hoc ablation, exactly the data-integrity guarantees that serious research and policy work demand.',
    ],
    highlights: [
      'YAML recipe DSL with content-addressed, byte-reproducible caching',
      'Claim-level evidence traceability and inter-coder reliability',
      'Audit infrastructure: prompt hashes, manifests, cost tracking',
    ],
    tech: ['Python', 'FastAPI', 'PostgreSQL', 'React', 'TypeScript', 'Docker'],
    links: [],
    cover: tessera1,
    gallery: [
      { src: tessera1, alt: 'The Tessera content-analysis interface', caption: 'Tessera: recipes, runs, and traceable results.' },
      { src: tessera2, alt: 'A second Tessera interface view', caption: 'Reproducible, auditable analysis at corpus scale.' },
    ],
    featured: true,
  },
];

// Smaller, link-out work shown below the featured set.
export type MoreItem = {
  title: string;
  category: string;
  note: string;
  links: Link[];
  image?: ImageMetadata;
};

export const moreWork: MoreItem[] = [
  {
    title: 'LLMs for social policymaking',
    category: 'LLM evaluation · with IBM Research',
    note: 'An evaluation framework comparing LLM policy recommendations with expert judgment across four cities on four continents. Best Paper, AAAI 2026 workshop.',
    links: [{ label: 'Paper (arXiv)', href: 'https://arxiv.org/abs/2509.03827' }],
  },
  {
    title: 'AI for the UN & the SDGs',
    category: 'Capacity building · Microsoft-funded',
    note: 'Co-developed a global online course translating AI research into applied learning for diplomats, development practitioners, and policy analysts.',
    links: [{ label: 'AI Macau', href: 'https://aimacau-2024.org' }],
    image: aimacau,
  },
  {
    title: 'Diffusion-model forensics',
    category: 'Computer vision · IEEE IJCNN 2024',
    note: 'Detecting AI-generated images and the universal artifacts shared across diffusion models and GANs, with analysis of adversarial robustness.',
    links: [],
  },
  {
    title: 'Serverless full-stack demo',
    category: 'Web · Cloudflare edge',
    note: 'A public reference app on Cloudflare Workers, D1, and R2 (React, Vite, TypeScript), showing cost-efficient edge deployment.',
    links: [{ label: 'trip.jiaan.me', href: 'https://trip.jiaan.me' }],
    image: cftrip,
  },
  {
    title: 'ITU Operational Bulletin automation',
    category: 'Internship · ITU Geneva',
    note: 'Evaluated, integrated, and deployed an editor application on AWS to automate the ITU Operational Bulletin, with internal documentation.',
    links: [{ label: 'GitHub', href: 'https://github.com/jiaanliux/itu-ob-editor' }],
    image: ituRepo,
  },
  {
    title: 'AI as digital public goods',
    category: 'Policy research · ADB-funded',
    note: 'Defining and operationalizing open, governed AI as public infrastructure for development contexts across the Asia-Pacific.',
    links: [],
  },
];
