/**
 * Central portfolio data for Parmeshwar Durgist.
 * Software Engineer · Full-Stack Developer · Android Developer
 */

export type Palette = { from: string; via: string; to: string; accent: string };

export const profile = {
  fullName: 'Parmeshwar Durgist',
  displayName: 'Parmeshwar Durgist',
  firstName: 'PARMESHWAR',
  seriesTag: 'THE SERIES',
  /** Fictional studio card shown at the start of the opening sequence */
  originalLabel: 'A PARMESHWAR ORIGINAL',
  role: 'Software Engineer · Full-Stack Developer · Android Developer',
  tagline: ['Software Engineer', 'Full-Stack Developer', 'Android Developer'],
  intro:
    'Hi, I\'m Parmeshwar Durgist, a Software Engineer and Full-Stack Developer passionate about building innovative digital experiences and solving real-world business problems through technology. I specialize in modern web development, backend API development, database management, and Android application development.',
  aboutFull: [
    'Hi, I\'m Parmeshwar Durgist, a Software Engineer and Full-Stack Developer passionate about building innovative digital experiences and solving real-world business problems through technology.',
    'I specialize in modern web development, backend API development, database management, and Android application development. My technical experience includes React.js, JavaScript, Node.js, Express.js, MongoDB, MySQL, Java, and Android development.',
    'I enjoy transforming ideas into functional, responsive, and user-friendly digital products—from business websites and e-commerce platforms to custom software and mobile applications.',
    'Alongside my development career, I offer freelance services to help startups, small businesses, and growing companies establish and improve their digital presence.',
    'My goal is to continuously improve my engineering skills, explore emerging technologies, and deliver high-quality solutions that create real value for clients and users.',
  ],
  experienceYears: '~2 Years Experience',
  focusAreas: ['Full-Stack Development', 'Android Apps', 'Freelancer'],
  location: 'Pune, Maharashtra, India',
  email: 'durgistparmeshwar@gmail.com',
  links: {
    github: 'https://github.com/parmeshwar-durgist',
    portfolio: 'https://parmeshwar-durgist.github.io/Developer/',
    linkedin: 'https://www.linkedin.com/in/parmeshwar-durgist',
  },
  resumePdf: '/assets/Parmeshwar_Durgist_SoftDev_Updated.pdf',
  portrait: {
    src: '/assets/portrait-720.png',
    srcSet: '/assets/portrait-420.png 420w, /assets/portrait-720.png 720w, /assets/portrait-1100.png 1100w',
    alt: 'Portrait of Parmeshwar Durgist',
  },
  interests: ['System Architecture', 'Cloud & DevOps', 'Mobile Innovation', 'AI Development Tools'],
};

export const education = [
  {
    school: 'Savitribai Phule Pune University',
    place: 'Pune, Maharashtra',
    degree: 'Master of Computer Applications (MCA), Science',
    period: '2024 – 2026',
    score: 'Pursuing',
  },
  {
    school: 'Savitribai Phule Pune University',
    place: 'Pune, Maharashtra',
    degree: 'Bachelor of Computer Applications (BCA), Science',
    period: '2021 – 2024',
    score: 'SGPA 8.92',
  },
  {
    school: 'Jawahar Madyamik High School',
    place: 'Maharashtra',
    degree: 'Class XII, Science (HSC)',
    period: '2020',
    score: '66.83%',
  },
];

export const experience = [
  {
    company: 'Shrenix Marketing Solutions Pvt. Ltd.',
    role: 'Software Developer / Software Engineer',
    place: 'Pune, India',
    period: '2024 – Present',
    points: [
      'Engineered responsive business websites and e-commerce platforms with secure customer authentication, product catalogs, and cart workflows.',
      'Implemented payment gateway integration, database connectivity with MySQL, and server-side logic matching client requirements.',
      'Managed end-to-end website deployment, domain configuration, performance tuning, and technical maintenance.',
    ],
  },
  {
    company: 'WorknAI Technologies India Pvt. Ltd.',
    role: 'Application Developer',
    place: 'Pune, India',
    period: '2023 – 2024',
    points: [
      'Developed cross-platform mobile and web application modules using React Native, Node.js, and Express.js.',
      'Engineered backend REST APIs and MongoDB document schemas for workforce management, employee workflows, and learning hub solutions.',
      'Collaborated on logistics and operations automation features, streamlining real-time employee task distribution.',
    ],
  },
  {
    company: 'Kodiodo Technologies',
    role: 'Software Development Engineer',
    place: 'Pune, India',
    period: '2023',
    points: [
      'Built full-stack web applications, RESTful APIs, and database-driven business logic using Node.js, PHP/Laravel, and relational databases.',
      'Developed and tested native Android mobile applications using Java and Android Studio.',
      'Executed performance optimizations, bug fixes, version control workflows, and rapid client feature delivery.',
    ],
  },
];

export type Metric = { value: string; label: string };

export type Project = {
  id: string;
  title: string;
  year: string;
  genre: string;
  logline: string;
  stack: string[];
  build: string[];
  features: string[];
  metrics: Metric[];
  github?: string;
  live?: string;
  palette: Palette;
  motif: 'shield' | 'flow' | 'tenants';
};

export const projects: Project[] = [
  {
    id: 'manyyata-foods',
    title: 'Manyyata Foods',
    year: '2025',
    genre: 'E-commerce • Business Platform',
    logline: 'An end-to-end online food-products store with dynamic catalog, shopping cart, customer auth, and Razorpay checkout.',
    stack: ['Node.js', 'Express.js', 'EJS', 'MySQL', 'Razorpay'],
    build: [
      'Architected and deployed a production online food-products e-commerce platform featuring catalog browsing, live cart calculations, and customer account portals.',
      'Engineered secure Razorpay payment gateway integration with real-time webhooks, order tracking, and administrative order management.',
    ],
    features: [
      'Categorized food product listings & dynamic search',
      'Shopping cart & real-time inventory management',
      'Customer registration, secure login & order history',
      'Razorpay payment gateway integration with webhook confirmation',
      'Administrative order fulfillment and tracking dashboard',
    ],
    metrics: [
      { value: 'Live', label: 'production deployment' },
      { value: 'Razorpay', label: 'secure payment flow' },
      { value: '100%', label: 'order state accuracy' },
      { value: '<600ms', label: 'fast response time' },
      { value: 'ACID', label: 'MySQL transactions' },
    ],
    live: 'https://manyyatafoods.com/',
    github: 'https://github.com/parmeshwar-durgist',
    palette: { from: '#1a0d02', via: '#8a4a07', to: '#0a0806', accent: '#ffb547' },
    motif: 'flow',
  },
  {
    id: 'worknai-hrms',
    title: 'WorknAI HRMS & Learning Hub',
    year: '2024',
    genre: 'HR Tech • Mobile & Web Platform',
    logline: 'Comprehensive workforce management and digital learning platform for organizing employee workflows and training.',
    stack: ['React Native', 'Node.js', 'Express.js', 'MongoDB', 'REST APIs'],
    build: [
      'Developed cross-platform mobile interfaces in React Native coupled with Node.js/Express REST APIs for corporate workforce coordination.',
      'Designed structured MongoDB schemas supporting modular employee training courses, attendance records, and performance metrics.',
    ],
    features: [
      'Cross-platform mobile app built with React Native',
      'Workforce attendance, scheduling and employee profiling',
      'Digital learning platform for structured training modules',
      'REST APIs for seamless mobile-to-cloud synchronization',
      'Role-based access controls for employees and HR administrators',
    ],
    metrics: [
      { value: 'Mobile+Web', label: 'unified experience' },
      { value: 'Real-time', label: 'workflow synchronization' },
      { value: 'RESTful', label: 'microservice APIs' },
      { value: 'MongoDB', label: 'scalable document store' },
    ],
    github: 'https://github.com/parmeshwar-durgist',
    palette: { from: '#04121f', via: '#0f4c6e', to: '#05080d', accent: '#4cc9ff' },
    motif: 'shield',
  },
  {
    id: 'addon-erp',
    title: 'Add On Systems ERP',
    year: '2024',
    genre: 'Enterprise Software • Manufacturing ERP',
    logline: 'Enterprise business software supporting manufacturing operations, raw materials, inventory, and production workflows.',
    stack: ['React.js', 'Node.js', 'Express.js', 'MySQL', 'REST APIs'],
    build: [
      'Engineered core business software modules tailored for manufacturing workflows including materials procurement and batch production.',
      'Implemented responsive operational dashboards giving factory managers real-time insights into machine output and inventory buffers.',
    ],
    features: [
      'Production scheduling & batch process tracking',
      'Raw materials procurement and inventory management',
      'Real-time operational reporting dashboards',
      'Strict relational database transactions in MySQL',
      'Audit logging and role-based permissions',
    ],
    metrics: [
      { value: 'ERP', label: 'enterprise grade' },
      { value: 'Modular', label: 'system architecture' },
      { value: 'MySQL', label: 'relational integrity' },
      { value: 'Real-time', label: 'inventory updates' },
    ],
    github: 'https://github.com/parmeshwar-durgist',
    palette: { from: '#2a0610', via: '#7a0f24', to: '#0b0710', accent: '#ff3d5a' },
    motif: 'tenants',
  },
  {
    id: 'flight-booking',
    title: 'Flight Booking Platform',
    year: '2024',
    genre: 'Travel Tech • Booking Architecture',
    logline: 'Intuitive flight reservation concept featuring multi-route search, schedule comparison, and streamlined itinerary booking.',
    stack: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'REST APIs'],
    build: [
      'Created an interactive flight search interface with pricing filters, airline comparisons, and dynamic schedule visualization.',
      'Constructed backend reservation endpoints handling passenger details, holding mechanisms, and automated itinerary generation.',
    ],
    features: [
      'Flight search with departure, arrival and date filters',
      'Interactive seat selection and fare breakdown preview',
      'Passenger information intake with validation',
      'Instant booking confirmation and digital itinerary generator',
      'Modular REST APIs for flight schedule aggregation',
    ],
    metrics: [
      { value: 'Instant', label: 'booking confirmations' },
      { value: 'Dynamic', label: 'filtering & search' },
      { value: 'REST API', label: 'backend integration' },
      { value: 'Responsive', label: 'mobile & desktop' },
    ],
    github: 'https://github.com/parmeshwar-durgist',
    palette: { from: '#120822', via: '#3d1a6e', to: '#07060c', accent: '#b98bff' },
    motif: 'flow',
  },
  {
    id: 'parmeshwar-ai-agent',
    title: 'Parmeshwar AI Agent',
    year: '2025',
    genre: 'AI Tools • Autonomous Assistants',
    logline: 'An intelligent software development agent assisting with automated task resolution, code analysis, and smart workflow tooling.',
    stack: ['Python', 'Node.js', 'REST APIs', 'AI SDK'],
    build: [
      'Designed an autonomous assistant interface capable of contextual codebase understanding and code generation.',
      'Connected backend tools and APIs to automate repetitive coding, test preparation, and documentation generation.',
    ],
    features: [
      'Context-aware code analysis and suggestions',
      'Multi-step workflow execution engine',
      'REST API integrations for external developer tools',
      'Interactive chat and developer assistant dashboard',
    ],
    metrics: [
      { value: 'AI-First', label: 'developer tooling' },
      { value: 'Automated', label: 'workflow execution' },
      { value: 'Fast', label: 'turnaround time' },
    ],
    github: 'https://github.com/parmeshwar-durgist',
    palette: { from: '#03150f', via: '#0d5a40', to: '#050a08', accent: '#46e3a8' },
    motif: 'shield',
  },
];

export type Service = {
  id: string;
  title: string;
  category: string;
  description: string;
  deliverables: string[];
  icon: string;
  palette: Palette;
};

export const freelancingServices: Service[] = [
  {
    id: 'website-development',
    title: 'Website Development',
    category: 'Web Solutions',
    description: 'High-performance business websites, portfolio platforms, landing pages, and fully responsive web experiences tailored to convert visitors.',
    deliverables: ['Custom Business Websites', 'Portfolio & Brand Sites', 'High-Converting Landing Pages', 'Mobile-Responsive Interfaces'],
    icon: '🌐',
    palette: { from: '#04121f', via: '#0f4c6e', to: '#05080d', accent: '#4cc9ff' },
  },
  {
    id: 'ecommerce-solutions',
    title: 'E-commerce Solutions',
    category: 'Online Commerce',
    description: 'Complete online stores, interactive product catalogs, real-time shopping carts, secure payment gateways (Razorpay, Stripe), and order management systems.',
    deliverables: ['Full Online Stores', 'Product Catalogs & Cart', 'Payment Gateway Integration', 'Order Fulfillment Dashboards'],
    icon: '🛍️',
    palette: { from: '#1a0d02', via: '#8a4a07', to: '#0a0806', accent: '#ffb547' },
  },
  {
    id: 'mobile-app-development',
    title: 'Mobile App Development',
    category: 'Android & Cross-Platform',
    description: 'Native Android applications and cross-platform apps built with Android Studio, Java, Kotlin, and React Native, with smooth APIs and clean interfaces.',
    deliverables: ['Native Android Apps', 'React Native Cross-Platform', 'Backend API Integration', 'Play Store Deployment & Maintenance'],
    icon: '📱',
    palette: { from: '#03150f', via: '#0d5a40', to: '#050a08', accent: '#46e3a8' },
  },
  {
    id: 'custom-software',
    title: 'Custom Software & ERP',
    category: 'Enterprise Engineering',
    description: 'Tailor-made business management systems including CRM, ERP, workflow automation, administrative portals, analytics dashboards, and internal tooling.',
    deliverables: ['Custom ERP & CRM Systems', 'Admin Panels & Dashboards', 'Workflow Automation Tools', 'Database & API Architecture'],
    icon: '⚙️',
    palette: { from: '#2a0610', via: '#7a0f24', to: '#0b0710', accent: '#ff3d5a' },
  },
  {
    id: 'deployment-maintenance',
    title: 'Deployment & Maintenance',
    category: 'DevOps & Cloud',
    description: 'Reliable cloud hosting setup, custom domain & SSL configuration, production deployment, automated backups, bug fixes, and continuous support.',
    deliverables: ['Cloud Hosting Setup (VPS / Vercel)', 'Domain & SSL Configuration', 'Bug Fixing & Performance Tuning', 'Continuous Maintenance & SLA'],
    icon: '🚀',
    palette: { from: '#120822', via: '#3d1a6e', to: '#07060c', accent: '#b98bff' },
  },
  {
    id: 'seo-digital-presence',
    title: 'SEO & Digital Presence',
    category: 'Visibility & Growth',
    description: 'Technical SEO optimization, fast Core Web Vitals, Google Business Profile setup, structured schema markup, and digital presence improvements for local and global reach.',
    deliverables: ['Technical SEO & Meta Tags', 'Speed & Performance Audits', 'Google Business Profile Setup', 'Search Console & Analytics Integration'],
    icon: '📈',
    palette: { from: '#1c1003', via: '#6b3c06', to: '#0a0806', accent: '#ff8a5c' },
  },
];

export type Achievement = {
  id: string;
  title: string;
  org: string;
  detail: string;
  laurel: string;
  link?: string;
};

export const achievements: Achievement[] = [
  {
    id: 'bca-distinction',
    title: 'SGPA 8.92 Distinction',
    org: 'Savitribai Phule Pune University',
    detail: 'Achieved outstanding academic standing during Bachelor of Computer Applications (BCA) Science.',
    laurel: 'Academic Excellence',
  },
  {
    id: 'manyyata-launch',
    title: 'Live E-commerce Platform',
    org: 'Manyyata Foods',
    detail: 'Successfully built and deployed live e-commerce platform with catalog, Razorpay checkout, and order management.',
    laurel: 'Production Launch',
    link: 'https://manyyatafoods.com/',
  },
  {
    id: 'fullstack-experience',
    title: '~2 Years Industry Work',
    org: 'Software Engineering',
    detail: 'Proven experience across Shrenix Marketing Solutions, WorknAI Technologies, and Kodiodo Technologies.',
    laurel: 'Engineering Track',
  },
  {
    id: 'enterprise-erp',
    title: 'Manufacturing ERP',
    org: 'Add On Systems',
    detail: 'Delivered robust enterprise software for manufacturing operations, batch processes, and inventory tracking.',
    laurel: 'Enterprise Systems',
  },
  {
    id: 'freelance-services',
    title: 'Active Freelance Partner',
    org: 'Client Solutions',
    detail: 'Helping startups, small businesses, and growing companies establish modern websites, mobile apps, and systems.',
    laurel: 'Client Impact',
  },
];

export type Certification = { issuer: string; name: string; link?: string };

export const certifications: Certification[] = [
  { issuer: 'SPPU Pune', name: 'Master of Computer Applications (MCA) – Candidate 2026' },
  { issuer: 'SPPU Pune', name: 'Bachelor of Computer Applications (BCA) – SGPA 8.92' },
  { issuer: 'Full-Stack', name: 'Modern Full-Stack Development (React, Node.js, Express)' },
  { issuer: 'Android', name: 'Mobile App Development (Android Studio, Java, Kotlin)' },
  { issuer: 'Database', name: 'Relational & NoSQL Database Architecture (MySQL, MongoDB)' },
  { issuer: 'DevOps', name: 'Version Control, CI/CD, Containerization & Cloud Deployment' },
  { issuer: 'E-commerce', name: 'Payment Gateway Integration (Razorpay, Webhooks & Security)' },
  { issuer: 'High School', name: 'Higher Secondary Science (Class XII) – 66.83%' },
];

export type Skill = { name: string; mono: string; note?: string };
export type SkillCategory = { id: string; title: string; subtitle: string; skills: Skill[] };

export const skillCategories: SkillCategory[] = [
  {
    id: 'frontend',
    title: 'Frontend Development',
    subtitle: 'Responsive, dynamic & modern user interfaces',
    skills: [
      { name: 'HTML5', mono: 'H5' },
      { name: 'CSS3', mono: 'C3' },
      { name: 'JavaScript', mono: 'JS', note: 'Core' },
      { name: 'React.js', mono: 'Re', note: 'Primary' },
      { name: 'Bootstrap 5', mono: 'Bs' },
      { name: 'React Native', mono: 'RN', note: 'Mobile' },
    ],
  },
  {
    id: 'backend',
    title: 'Backend Development',
    subtitle: 'Scalable APIs, business logic & server architecture',
    skills: [
      { name: 'Node.js', mono: 'No', note: 'Primary' },
      { name: 'Express.js', mono: 'Ex' },
      { name: 'REST APIs', mono: 'Ap' },
      { name: 'Java', mono: 'Jv', note: 'Core' },
      { name: 'PHP / Laravel', mono: 'Ph' },
    ],
  },
  {
    id: 'database-mobile',
    title: 'Database & Mobile',
    subtitle: 'Data persistence & native mobile systems',
    skills: [
      { name: 'MySQL', mono: 'My', note: 'Relational' },
      { name: 'MongoDB', mono: 'Mg', note: 'NoSQL' },
      { name: 'Android Studio', mono: 'As' },
      { name: 'Android Java', mono: 'AJ' },
      { name: 'Kotlin', mono: 'Kt' },
    ],
  },
  {
    id: 'tools-deployment',
    title: 'Tools & Deployment',
    subtitle: 'Version control, cloud shipping & workflow tooling',
    skills: [
      { name: 'Git & GitHub', mono: 'Gt' },
      { name: 'Docker', mono: 'Dk' },
      { name: 'CI/CD', mono: 'Ci' },
      { name: 'Website Deployment', mono: 'Dp' },
      { name: 'AI Development Tools', mono: 'AI' },
    ],
  },
];

export const skillEvidence: Record<string, string[]> = {
  'HTML5': ['Manyyata Foods', 'Shrenix Marketing Solutions', 'Responsive Web Apps'],
  'CSS3': ['Modern UI Design', 'Custom Themes', 'Tailwind / Bootstrap'],
  'JavaScript': ['Manyyata Foods', 'WorknAI HRMS', 'Node.js / Express Services'],
  'React.js': ['Add On Systems ERP', 'Flight Booking Application', 'Portfolio Series'],
  'Bootstrap 5': ['Client Dashboards', 'Responsive Business Portals'],
  'React Native': ['WorknAI HRMS & Learning Hub', 'Cross-Platform Mobile Modules'],
  'Node.js': ['Manyyata Foods', 'WorknAI HRMS', 'Add On Systems ERP', 'REST APIs'],
  'Express.js': ['Manyyata Foods E-commerce', 'WorknAI HRMS Backend', 'Flight Booking'],
  'REST APIs': ['Add On Systems ERP', 'WorknAI HRMS', 'Kodiodo Technologies'],
  'Java': ['Kodiodo Technologies', 'Android Mobile Development', 'Core Systems'],
  'PHP / Laravel': ['Kodiodo Technologies', 'Web Applications & Database Portals'],
  'MySQL': ['Manyyata Foods (ACID)', 'Add On Systems ERP', 'Shrenix Marketing'],
  'MongoDB': ['WorknAI HRMS & Learning Hub', 'Flight Booking Application'],
  'Android Studio': ['Kodiodo Technologies', 'Native Android Projects', 'Mobile Billing System'],
  'Android Java': ['Android Studio Native Apps', 'Mobile Billing & POS Solutions'],
  'Kotlin': ['Modern Android Applications', 'Clean Architecture Mobile Code'],
  'Git & GitHub': ['parmeshwar-durgist GitHub', 'Team Version Control & CI'],
  'Docker': ['Containerized Microservices', 'Consistent Environments'],
  'CI/CD': ['Automated Deployment Workflows', 'Testing & Build Pipelines'],
  'Website Deployment': ['manyyatafoods.com Live Deployment', 'Vercel, VPS & Cloud Setup'],
  'AI Development Tools': ['Parmeshwar AI Agent', 'AI Code Assistants & SDKs'],
};

export type Episode = {
  code: string;
  title: string;
  description: string;
  tags: string[];
  runtime: string;
  palette: Palette;
};

export type Season = {
  number: number;
  title: string;
  period: string;
  synopsis: string;
  episodes: Episode[];
};

const crimson: Palette = { from: '#24060b', via: '#6e0d1d', to: '#09070a', accent: '#ff3d5a' };
const amber: Palette = { from: '#1c1003', via: '#6b3c06', to: '#0a0806', accent: '#ffb547' };
const ocean: Palette = { from: '#04121f', via: '#0f4c6e', to: '#05080d', accent: '#4cc9ff' };
const violet: Palette = { from: '#120822', via: '#3d1a6e', to: '#07060c', accent: '#b98bff' };
const jade: Palette = { from: '#03150f', via: '#0d5a40', to: '#050a08', accent: '#46e3a8' };

export const seasons: Season[] = [
  {
    number: 1,
    title: 'The Foundation',
    period: '2020 – 2024',
    synopsis: 'Academic foundation in computer applications and science at Savitribai Phule Pune University.',
    episodes: [
      {
        code: 'S01 E01',
        title: 'Science Beginnings',
        description: 'Higher Secondary Certificate (HSC) in Science from Jawahar Madyamik High School.',
        tags: ['HSC Science', 'Foundation', '2020'],
        runtime: '2020',
        palette: amber,
      },
      {
        code: 'S01 E02',
        title: 'BCA (Science) Distinction',
        description: 'Graduated with Bachelor of Computer Applications (Science) from Savitribai Phule Pune University, securing an SGPA of 8.92.',
        tags: ['SPPU Pune', 'BCA Science', 'SGPA 8.92'],
        runtime: '2021 – 2024',
        palette: violet,
      },
    ],
  },
  {
    number: 2,
    title: 'Industry Immersion',
    period: '2023 – 2024',
    synopsis: 'Hands-on software development across web applications, REST APIs, and mobile systems.',
    episodes: [
      {
        code: 'S02 E01',
        title: 'Software Development Engineer',
        description: 'Kodiodo Technologies: Built web applications, REST APIs, database systems, and native Android solutions with Java.',
        tags: ['Kodiodo', 'Node.js', 'Android', 'Java'],
        runtime: '2023',
        palette: jade,
      },
      {
        code: 'S02 E02',
        title: 'Application Developer',
        description: 'WorknAI Technologies India: Engineered mobile applications with React Native, Node.js APIs, and workforce logistics software.',
        tags: ['WorknAI', 'React Native', 'MongoDB', 'APIs'],
        runtime: '2023 – 2024',
        palette: ocean,
      },
    ],
  },
  {
    number: 3,
    title: 'Full-Stack & E-Commerce',
    period: '2024 – Present',
    synopsis: 'Production-level software engineering, e-commerce platforms, database integration, and ongoing MCA studies.',
    episodes: [
      {
        code: 'S03 E01',
        title: 'Software Engineer',
        description: 'Shrenix Marketing Solutions: Delivering commercial websites, e-commerce systems, database integrations, and client deployments.',
        tags: ['Shrenix', 'E-commerce', 'Full-Stack', 'MySQL'],
        runtime: '2024 – Present',
        palette: crimson,
      },
      {
        code: 'S03 E02',
        title: 'Master of Computer Applications',
        description: 'Advancing deep computer science specialization with Master of Computer Applications (MCA) Science at Savitribai Phule Pune University.',
        tags: ['SPPU Pune', 'MCA Science', 'Candidate 2026'],
        runtime: '2024 – 2026',
        palette: violet,
      },
    ],
  },
  {
    number: 4,
    title: 'The Originals & Freelance',
    period: '2025',
    synopsis: 'Launching live production platforms, manufacturing ERP systems, and providing end-to-end client engineering services.',
    episodes: [
      {
        code: 'S04 E01',
        title: 'Manyyata Foods Live',
        description: 'Delivered an end-to-end food products e-commerce store with catalog, shopping cart, and Razorpay payment integration.',
        tags: ['manyyatafoods.com', 'Razorpay', 'E-commerce'],
        runtime: 'Production',
        palette: amber,
      },
      {
        code: 'S04 E02',
        title: 'Manufacturing ERP & Travel Tech',
        description: 'Engineered Add On Systems Manufacturing ERP and Flight Booking Application with high-availability REST architecture.',
        tags: ['ERP', 'React', 'Node.js', 'MySQL'],
        runtime: 'Enterprise',
        palette: ocean,
      },
      {
        code: 'S04 E03',
        title: 'Client Services Worldwide',
        description: 'Offering specialized freelance services: Web development, e-commerce, Android apps, custom software, DevOps, and technical SEO.',
        tags: ['Freelancer', 'Client Solutions', 'Consulting'],
        runtime: 'Active',
        palette: jade,
      },
    ],
  },
];

export type TopPick = { label: string; title: string; detail: string; palette: Palette };

export const topPicks: TopPick[] = [
  { label: 'Live Platform', title: 'Manyyata Foods', detail: 'Live e-commerce store with Razorpay payment integration', palette: amber },
  { label: 'Experience', title: '~2 Years', detail: 'Full-stack web, backend APIs & Android development', palette: crimson },
  { label: 'Academic Standing', title: 'SGPA 8.92', detail: 'BCA (Science) Distinction • Savitribai Phule Pune University', palette: jade },
  { label: 'Advanced Degree', title: 'MCA (Science)', detail: 'Savitribai Phule Pune University • Class of 2026', palette: violet },
  { label: 'Mobile Engineering', title: 'Android & React Native', detail: 'Native Java/Kotlin and cross-platform apps', palette: ocean },
  { label: 'Enterprise Systems', title: 'Manufacturing ERP', detail: 'Add On Systems operational software', palette: amber },
  { label: 'Workforce Platform', title: 'WorknAI HRMS', detail: 'Employee workflow & learning hub platform', palette: ocean },
  { label: 'Client Services', title: '6 Freelance Domains', detail: 'Web, E-Commerce, Mobile, ERP, Deployment & SEO', palette: jade },
  { label: 'Database Depth', title: 'MySQL & MongoDB', detail: 'ACID transactions & scalable NoSQL models', palette: crimson },
  { label: 'Core Stack', title: 'React · Node · Java', detail: 'JavaScript, TypeScript, Express, PHP/Laravel & Docker', palette: violet },
];

export type IntroSlide = { kicker: string; title: string; lines: string[]; chips?: string[] };

export const introSlides: IntroSlide[] = [
  {
    kicker: 'The Profile',
    title: 'Parmeshwar Durgist',
    lines: ['Software Engineer · Full-Stack Developer · Android Developer', 'Pune, Maharashtra, India', 'Building modern websites, mobile apps & business software'],
    chips: ['~2 Yrs Exp', 'Full-Stack', 'Freelancer'],
  },
  {
    kicker: 'Technical Core',
    title: 'Multi-Stack Versatility',
    lines: ['Frontend: React.js, JavaScript, HTML5, CSS3, Bootstrap 5, React Native', 'Backend: Node.js, Express.js, REST APIs, Java, PHP / Laravel', 'Databases & Tools: MySQL, MongoDB, Docker, Git, Android Studio'],
    chips: ['React.js', 'Node.js', 'Java', 'Android', 'MySQL', 'MongoDB'],
  },
  {
    kicker: 'Experience Arc',
    title: 'Industry Experience',
    lines: ['Shrenix Marketing Solutions — Software Developer / Software Engineer', 'WorknAI Technologies — Application Developer (Mobile & APIs)', 'Kodiodo Technologies — Software Development (Web & Android)'],
  },
  {
    kicker: 'Featured Originals',
    title: 'Proven Digital Products',
    lines: ['Manyyata Foods — E-commerce platform with Razorpay checkout (Live)', 'WorknAI HRMS & Learning Hub — Workforce & training platform', 'Add On Systems ERP — Enterprise manufacturing software'],
  },
  {
    kicker: 'Freelance Services',
    title: 'Hire Me For Your Next Build',
    lines: ['Modern Business Websites & High-Converting Landing Pages', 'Complete E-Commerce Stores with Payment Integration', 'Native Android & Custom Business Software / ERP Systems'],
  },
  {
    kicker: 'Education',
    title: 'Academic Excellence',
    lines: ['MCA (Science) — Savitribai Phule Pune University, 2026', 'BCA (Science) — Savitribai Phule Pune University (SGPA 8.92, 2024)', 'Class XII Science — Jawahar Madyamik High School (66.83%, 2020)'],
  },
];

export type ProfileId = 'parmeshwar' | 'recruiter' | 'developer' | 'client';
export type SectionId = 'about' | 'skills' | 'originals' | 'services' | 'journey' | 'picks' | 'moments' | 'story';

export const viewerProfiles: {
  id: ProfileId;
  name: string;
  blurb: string;
  color: string;
  order: SectionId[];
}[] = [
  {
    id: 'parmeshwar',
    name: 'Parmeshwar',
    blurb: 'The full series, in recommended order',
    color: '#e5132b',
    order: ['about', 'skills', 'originals', 'services', 'journey', 'picks', 'moments', 'story'],
  },
  {
    id: 'client',
    name: 'Client / Founder',
    blurb: 'Freelance services & live work first',
    color: '#ffb547',
    order: ['services', 'originals', 'about', 'skills', 'moments', 'journey', 'picks', 'story'],
  },
  {
    id: 'recruiter',
    name: 'Recruiter',
    blurb: 'Resume, experience & skills first',
    color: '#4cc9ff',
    order: ['story', 'moments', 'journey', 'skills', 'originals', 'about', 'services', 'picks'],
  },
  {
    id: 'developer',
    name: 'Developer',
    blurb: 'Projects, architecture & stack first',
    color: '#46e3a8',
    order: ['originals', 'skills', 'services', 'journey', 'moments', 'about', 'picks', 'story'],
  },
];

export const sectionMeta: Record<SectionId, { nav: string; card: string; meta: string; palette: Palette }> = {
  about: { nav: 'About', card: 'About Me', meta: 'The Pilot • Software Engineer Bio', palette: violet },
  skills: { nav: 'Skills', card: 'Tech Universe', meta: `${skillCategories.length} Categories • Interactive Cards`, palette: ocean },
  originals: { nav: 'Projects', card: 'Featured Work', meta: `${projects.length} Originals • Demos & Repos`, palette: crimson },
  services: { nav: 'Services', card: 'Client Services', meta: `${freelancingServices.length} Offerings • Hire Me`, palette: amber },
  journey: { nav: 'Journey', card: 'My Journey', meta: `${seasons.length} Seasons • Professional Timeline`, palette: jade },
  picks: { nav: 'Top Picks', card: 'Top Highlights', meta: 'Top 10 Career Milestones', palette: ocean },
  moments: { nav: 'Credentials', card: 'Top Moments', meta: `${achievements.length} Moments • Degrees & Certs`, palette: crimson },
  story: { nav: 'Resume', card: 'The Screenplay', meta: 'Resume Sheet • View & Download', palette: violet },
};
