export const projectFilters = ['All', 'Full-Stack', 'Enterprise', 'AI']

export const projects = [
  {
    id: 'noventra',
    title: 'NovEntra',
    subtitle: 'Multi-tenant SaaS platform',
    year: '2025',
    role: 'Full-Stack Developer',
    description:
      'A SaaS enterprise management platform built around a multi-tenant architecture, centralizing commercial activity, invoicing, expenses and customer relationships in one place.',
    image: '/images/projects/noventra.webp',
    categories: ['Full-Stack', 'Enterprise'],
    tags: ['React', 'NestJS', 'PostgreSQL', 'Docker', 'Kubernetes'],
    highlight: 'Strict data isolation between tenants',
    details: [
      'Multi-tenant architecture with strict data isolation and security between organizations.',
      'Centralized management of commercial activities, invoicing, expenses and customer relationships.',
      'React front-end for a fast, responsive experience and a NestJS API designed for scale.',
      'Containerized with Docker and orchestrated with Kubernetes for high availability.',
    ],
    links: { github: 'https://github.com/imenbouchriha12' },
  },
  {
    id: 'smiters',
    title: 'Smiters',
    subtitle: 'AI-powered email automation',
    year: '2024',
    role: 'Full-Stack Developer · CodeBox',
    description:
      'An AI platform that answers customer emails automatically, generating context-aware replies from a structured company knowledge base. Built as my final-year internship project.',
    image: '/images/projects/smiters.webp',
    categories: ['Full-Stack', 'AI'],
    tags: ['Angular', 'Spring Boot', 'MySQL', 'OpenAI'],
    highlight: 'Context-aware replies powered by OpenAI',
    details: [
      'Automated customer email responses powered by the OpenAI API and a structured knowledge base.',
      'Knowledge base covering product information, company policies, FAQs and business data.',
      'Reduced email processing time while improving responsiveness and customer satisfaction.',
      'Angular front-end and Spring Boot back-end for a robust, maintainable full-stack solution.',
    ],
    links: { github: 'https://github.com/imenbouchriha12/smiters.io' },
  },
  {
    id: 'bt-doccenter',
    title: 'BT DocCenter',
    subtitle: 'Banking document management',
    year: '2026',
    role: 'Full-Stack Developer',
    description:
      'A document management system for banking client files: authentication, document storage, real-time notifications, OCR, fraud detection and reporting.',
    image: '/images/projects/bt-dossier.webp',
    categories: ['Full-Stack', 'Enterprise'],
    tags: ['Angular 18', 'ASP.NET Core', 'SQL Server', 'SignalR', 'OCR'],
    highlight: 'Real-time workflows with SignalR',
    details: [
      'REST API built with ASP.NET Core 8, Entity Framework Core and SQL Server.',
      'JWT authentication with role-based access control over sensitive client documents.',
      'Real-time notifications and dashboards powered by SignalR and Chart.js.',
      'OCR, AI assistance, fraud detection and integration with an SSIS data pipeline.',
    ],
    links: { github: 'https://github.com/imenbouchriha12/BT_DossierBackend' },
  },
  {
    id: 'order-management',
    title: 'OrderFlow',
    subtitle: 'E-commerce order management',
    year: '2025',
    role: 'Full-Stack Developer',
    description:
      'A complete order management application covering products, cart, checkout and order tracking, with dedicated admin and customer experiences.',
    image: '/images/projects/order-management.webp',
    categories: ['Full-Stack'],
    tags: ['Angular', 'Spring Boot', 'JWT', 'REST API'],
    highlight: 'Secured role-based access (Admin / Client)',
    details: [
      'Spring Boot API secured with JWT authentication and role-based authorization.',
      'Angular front-end protected by AuthGuard and RoleGuard with an HTTP token interceptor.',
      'Product catalog, shopping cart, checkout and order tracking flows.',
      'Separate admin and client dashboards for a clear, role-aware experience.',
    ],
    links: { github: 'https://github.com/imenbouchriha12/Gestion_Commande_Angular-SpringBoot' },
  },
  {
    id: 'bizflow',
    title: 'BizFlow',
    subtitle: 'Integrated business suite',
    year: '2026',
    role: 'Full-Stack Developer · Projet Intégré',
    description:
      'An integrated management platform for businesses, bringing purchases, stock, accounts and organizations together in a single back-office and front-office experience.',
    image: '/images/projects/esprit-to-peer.webp',
    categories: ['Full-Stack', 'Enterprise'],
    tags: ['NestJS', 'React', 'TypeScript', 'TypeORM'],
    highlight: 'Typed front-to-back architecture',
    details: [
      'Modular NestJS API organized by domain: accounts, businesses, purchases and stock.',
      'Authentication guards and strategies for secure, role-aware access.',
      'React + TypeScript front-end with distinct back-office and front-office layouts.',
      'Shared typed API layer and schema validation for reliable data flows.',
    ],
    links: { github: 'https://github.com/imenbouchriha12/PI_Back' },
  },
]

export const stats = [
  { value: '5+', label: 'Projects shipped' },
  { value: '3', label: 'Professional internships' },
  { value: '15+', label: 'Technologies mastered' },
  { value: '4+', label: 'Years writing code' },
]

export const techStack = [
  'Angular',
  'Spring Boot',
  'React',
  'NestJS',
  '.NET',
  'TypeScript',
  'PostgreSQL',
  'Docker',
  'Kubernetes',
  'OpenAI',
  'Jenkins',
  'Tailwind CSS',
]
