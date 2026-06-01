export type Pub = {
  authors: string;
  year: string;
  title: string;
  venue: string;
  badges?: string[];
  href?: string;
};

// "Liu, J." is emphasized in the rendered list.
export const publications: Pub[] = [
  {
    authors: 'Le Coz, P., Liu, J., Bhattacharjya, D., Curto, G., & Stinckwich, S.',
    year: '2025',
    title: 'What would an LLM do? Evaluating policymaking capabilities of large language models',
    venue: 'CoRR abs/2509.03827 · Best Paper, AAAI 2026 Workshop on LMs for Underserved Communities',
    badges: ['Best Paper', 'AAAI 2026'],
    href: 'https://arxiv.org/abs/2509.03827',
  },
  {
    authors: 'Liu, J., Chu, C., Zhao, Y., Aoki, G., & Xiao, Z.',
    year: '2025',
    title:
      'Agentic AI for sustainable development: LLM-enhanced agent-based modeling for complex policy strategies',
    venue: 'Emerging Media, 3(3), 401–413',
    badges: ['Journal'],
    href: 'https://doi.org/10.1177/27523543251365678',
  },
  {
    authors: 'Le Coz, P., & Liu, J.',
    year: '2026',
    title: 'Cognitive urban simulation with large language models under the fifteen-minute-city paradigm',
    venue: 'In AI for Humanity: Building an Equitable Digital Future. Springer (UNU–Springer)',
    badges: ['Springer', 'Chapter'],
  },
  {
    authors: 'Han, T., Xie, X., Chen, Y., Du, Y., Ma, J., Li, A., Liu, J., & Gao, Y.',
    year: '2026',
    title:
      'A large-scale remote-sensing dataset and VLM-based algorithm for fine-grained road hierarchy classification',
    venue: 'arXiv:2603.21222 · dataset on Zenodo (DOI 10.5281/zenodo.18642747)',
    badges: ['Dataset', 'Preprint'],
    href: 'https://arxiv.org/abs/2603.21222',
  },
  {
    authors: 'Xie, K., Liu, J., Zhu, M., Ding, G., Liu, Z., Chen, H., & Chen, H.',
    year: '2024',
    title: 'Unveiling universal forensics of diffusion models with adversarial perturbations',
    venue: 'IEEE International Joint Conference on Neural Networks (IJCNN)',
    badges: ['IEEE'],
  },
  {
    authors: 'Li, F., Liu, J., Chen, Z., Huang, J., Liu, C., & Qu, Z.',
    year: '2021',
    title:
      'Navigating to urban environmental health: a personalized healthy-living assistant based on intelligent health-risk management',
    venue: 'Urban Climate, 40, 101020',
    badges: ['Q1', 'IF 6.4'],
    href: 'https://doi.org/10.1016/j.uclim.2021.101020',
  },
  {
    authors: 'Li, F., Zhang, J., Liu, W., Liu, J., Huang, J., & Zeng, G.',
    year: '2018',
    title:
      'An integrated stochastic-fuzzy pollution assessment for heavy metals in urban topsoil based on enrichment and bioaccessibility',
    venue: 'Science of the Total Environment, 644, 649–660',
    badges: ['Q1', 'IF 9.8'],
    href: 'https://doi.org/10.1016/j.scitotenv.2018.07.001',
  },
  {
    authors: 'Lastunen, J., Liu, J., & Stinckwich, S.',
    year: '2026',
    title: 'Agent-based and microsimulation modelling for tax-benefit policy analysis',
    venue: 'Working paper, UNU-WIDER',
    badges: ['Working paper'],
  },
  {
    authors: 'Chen, L., Liu, J., Wang, Y., & Lv, S.',
    year: '2024',
    title:
      'The future path of general artificial intelligence: a comparative study of AI strategies and development models',
    venue: 'Zhejiang University Press (book)',
    badges: ['Book'],
  },
  {
    authors: 'Chu, C., & Liu, J.',
    year: '2024',
    title: 'Incorporating the UN values: artificial intelligence and information integrity for the SDGs',
    venue: 'United Nations University',
    badges: ['Policy'],
  },
];
