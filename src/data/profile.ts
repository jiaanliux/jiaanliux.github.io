export const profile = {
  name: 'Jia An Liu',
  role: 'Research Assistant & ICT Focal Point',
  org: 'United Nations University Institute in Macau',
  orgShort: 'UNU Macau',
  location: 'Macau SAR, China',

  // Hero
  eyebrow: 'Artificial Intelligence & ICT · UNU Macau',
  positioning:
    'I research agentic AI, build the systems that run it, and turn both into policy for the United Nations.',
  lede:
    'Applied AI researcher and institutional technologist at the United Nations University. I work across three fronts at once: peer-reviewed research on agentic AI and computational social science, the production cloud platforms that deliver it inside a UN institute, and the policy work that carries it to governments.',

  // Stat strip (true, defensible numbers)
  stats: [
    { value: '10', label: 'Publications & book chapters' },
    { value: 'IF 9.8', label: 'Top-tier Q1 research' },
    { value: 'Best Paper', label: 'AAAI 2026 workshop' },
    { value: '4 clouds', label: 'AWS · Azure · Cloudflare · on-prem' },
  ],

  // Three pillars
  pillars: [
    {
      icon: 'ph:brain',
      title: 'Applied AI research',
      blurb:
        'Agentic AI, LLM-enhanced agent-based modeling, computer vision, and remote sensing, published in Q1 journals and at IEEE and AAAI venues.',
      points: [
        'LLM-driven urban and social simulation',
        'Vision-language models for remote sensing',
        'LLM evaluation for real policymaking',
      ],
    },
    {
      icon: 'ph:stack',
      title: 'Production systems',
      blurb:
        'Sole ICT focal point at UNU Macau: I design, deploy, and operate the institute’s AI platforms and cloud infrastructure end to end.',
      points: [
        'Multi-cloud + on-prem GPU, containerized',
        'Secure access, routing, monitoring, recovery',
        'Full-stack web and agent platforms',
      ],
    },
    {
      icon: 'ph:globe-hemisphere-west',
      title: 'Digital governance',
      blurb:
        'Research that reaches decision-makers: AI as a digital public good, open-source readiness, and capacity building for the UN and member states.',
      points: [
        'AI as digital public goods (ADB)',
        'Open-source readiness for the public sector',
        'Keynotes and trainings across Asia',
      ],
    },
  ],

  // Links (public). LinkedIn + UNU profile are primary; GitHub + email are
  // subtle footer links. No phone number is ever published.
  links: {
    linkedin: 'https://www.linkedin.com/in/jiaanliu/',
    unu: 'https://go.unu.edu/liu',
    github: 'https://github.com/jiaanliux',
    email: 'jiaan@unu.edu',
  },

  affiliations: [
    { name: 'United Nations University', logo: 'unu' },
    { name: 'United Nations', logo: 'un' },
    { name: 'International Telecommunication Union', logo: 'itu' },
    { name: 'Zhejiang University', logo: 'zju' },
  ],
} as const;
