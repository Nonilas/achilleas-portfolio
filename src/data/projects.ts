export interface ProjectMetric {
  label: string;
  value: string;
}

export interface PipelineStage {
  title: string;
  subtitle: string;
  points: string[];
  color: string;
}

export interface Project {
  slug: string;
  title: string;
  subtitle: string;
  category: 'ai-ml' | 'fullstack' | 'mobile' | 'game' | 'research';
  categoryLabel: string;
  categoryColor: string;
  organization: string;
  period: string;
  featured: boolean;
  confidential: boolean;
  problem: string;
  approach: string;
  results: string;
  metrics: ProjectMetric[];
  pipeline?: PipelineStage[];
  technologies: string[];
  highlightedTech?: string[];
  liveUrl?: string;
  githubUrl?: string;
  downloadUrl?: string;
  downloadLabel?: string;
  heroImage?: string;
  videoUrl?: string;
  gallery?: { src: string; alt: string }[];
  description: string;
}

export const projects: Project[] = [
  // ── FEATURED (top 4) ──────────────────────────────────────────────
  {
    slug: 'contrail-thesis',
    title: 'Aviation Contrail Detection & Tracking',
    subtitle: 'AI pipeline for ground-based contrail detection, tracking, and flight attribution',
    category: 'ai-ml',
    categoryLabel: 'AI / ML',
    categoryColor: '#8b5cf6',
    organization: 'EUROCONTROL MUAC',
    period: 'Feb 2025 – Jul 2025',
    featured: true,
    confidential: false,
    problem:
      'Contrails and contrail-cirrus account for roughly 40% of aviation\'s total warming effect, yet no validated pipeline existed for ground-based contrail monitoring with flight attribution.',
    approach:
      'Built a 3-stage AI pipeline: Mask R-CNN (ResNet-101 FPN) for contrail detection and classification, multi-object tracking evaluated with DeepSORT vs Norfair (Norfair selected  - MOTA 43.3%, IDF1 67.9%), and a novel 4D-to-2D projection system for attributing tracked contrails to specific flights. Processed data at scale using Azure Databricks and Apache Spark.',
    results:
      'First validated end-to-end ground-based contrail monitoring pipeline. Thesis graded 9/10. Achieved >90% class accuracy for detection, 71.75% overall attribution accuracy (95–100% for short contrails), and two novel attribution methods (geometric projection and convolution-based).',
    metrics: [
      { label: 'Thesis Grade', value: '9/10' },
      { label: 'Pipeline', value: 'End-to-End' },
      { label: 'Detection', value: '>90% acc' },
      { label: 'Attribution', value: '71.75%' },
    ],
    pipeline: [
      {
        title: 'Detection',
        subtitle: 'Mask R-CNN segmentation',
        points: ['ResNet-101 FPN backbone', 'Contrail type classification (short, thin, wide, cirrus)', '>90% class accuracy'],
        color: '#3b82f6',
      },
      {
        title: 'Tracking',
        subtitle: 'Multi-object tracking',
        points: ['DeepSORT vs Norfair evaluation', 'Norfair selected: MOTA 43.3%, IDF1 67.9%', 'Stable track identities across frames'],
        color: '#8b5cf6',
      },
      {
        title: 'Attribution',
        subtitle: 'Novel 4D→2D projection',
        points: ['Geometric & convolution-based methods', '3D flight paths → 2D camera images', '71.75% overall accuracy'],
        color: '#ec4899',
      },
    ],
    technologies: [
      'Python', 'Detectron2', 'Norfair', 'DeepSORT', 'Azure Databricks', 'Apache Spark',
      'PyTorch', 'Mask R-CNN', 'Computer Vision',
    ],
    highlightedTech: ['Detectron2', 'Norfair', 'Mask R-CNN'],
    videoUrl: '/MediaVid2.mp4',
    downloadUrl: '/Thesis_AchilleasLeivadiotis.pdf',
    downloadLabel: 'Download Thesis (PDF)',
    description:
      'First validated ground-based contrail monitoring pipeline  - detection, tracking, and flight attribution. Bachelor thesis at EUROCONTROL MUAC, graded 9/10.',
  },
  {
    slug: 'byzantine-dna',
    title: 'Byzantine DNA Ancestry Analyzer',
    subtitle: 'Bioinformatics tool exploring Greek Byzantine heritage through genomic analysis',
    category: 'research',
    categoryLabel: 'Research',
    categoryColor: '#f59e0b',
    organization: 'Personal Project',
    period: 'Feb 2026',
    featured: true,
    confidential: false,
    problem:
      'Modern Greeks lack accessible tools to explore their Byzantine-era genetic heritage. Existing ancestry services focus on broad continental categories and miss the rich genetic substructure of the Byzantine world (330–1453 CE).',
    approach:
      'Built a comprehensive genomic analysis pipeline processing raw DNA data (MyHeritage ~700K SNP markers). Runs PCA with smartPCA/scikit-learn against the Allen Ancient DNA Resource (AADR v54+), supervised ADMIXTURE analysis (K=2–12 with cross-validation), genetic distance calculations (Euclidean + Fst), and haplogroup determination  - all visualized in an interactive 6-page web dashboard.',
    results:
      'A working tool producing Byzantine ancestry composition reports. All screenshots show my own DNA results  - Byzantine Score 62.04, Y-DNA haplogroup J2b-M12. Includes interactive PCA plots (West Eurasian overview, Mediterranean zoom, temporal animation), admixture bar charts, geographic heatmaps with Byzantine Empire boundary overlay, and haplogroup context.',
    metrics: [
      { label: 'My Byzantine Score', value: '62.04' },
      { label: 'Ancient Samples', value: '379' },
      { label: 'My Y-DNA', value: 'J2b-M12' },
      { label: 'Dashboard', value: '7 Pages' },
    ],
    pipeline: [
      {
        title: 'Data Processing',
        subtitle: 'Raw DNA ingestion',
        points: ['23andMe / AncestryDNA parsing', 'SNP quality control', 'Reference panel merging'],
        color: '#f59e0b',
      },
      {
        title: 'PCA Analysis',
        subtitle: 'Population structure',
        points: ['Dimensionality reduction', 'Byzantine reference projection', 'Cluster identification'],
        color: '#8b5cf6',
      },
      {
        title: 'Admixture',
        subtitle: 'Ancestry estimation',
        points: ['Supervised ADMIXTURE', 'K-component optimization', 'Confidence intervals'],
        color: '#10b981',
      },
      {
        title: 'Reporting',
        subtitle: 'Visual output',
        points: ['Ancestry composition chart', 'PCA scatter plot', 'Haplogroup context'],
        color: '#3b82f6',
      },
    ],
    technologies: [
      'Python', 'PLINK', 'ADMIXTURE', 'smartPCA', 'pandas', 'NumPy',
      'SciPy', 'scikit-learn', 'Plotly', 'Folium', 'FastAPI', 'React', 'Docker',
    ],
    highlightedTech: ['PLINK', 'ADMIXTURE', 'smartPCA'],
    gallery: [
      { src: '/projects/byzantine-dna/overview.png', alt: 'My DNA results  - Byzantine Score 62.04 with Y-DNA J2b-M12 haplogroup and closest ancient match' },
      { src: '/projects/byzantine-dna/pca-explorer.png', alt: 'My DNA on PCA  - PC1 vs PC2, PC1 vs PC3, and Mediterranean zoom scatter plots showing my position among ancient populations' },
      { src: '/projects/byzantine-dna/ancestry.png', alt: 'My ancestry composition  - NMF-based admixture analysis at K=3 with cross-validation on my own DNA data' },
      { src: '/projects/byzantine-dna/distances.png', alt: 'My genetic distances  - Top 50 closest ancient individuals to my DNA ranked by distance' },
      { src: '/projects/byzantine-dna/haplogroups.png', alt: 'My haplogroups  - Y-DNA J2b-M12 lineage analysis with Byzantine historical context' },
      { src: '/projects/byzantine-dna/methodology.png', alt: 'Methodology  - Technical details of the analysis pipeline with references' },
      { src: '/projects/byzantine-dna/run-analysis.png', alt: 'Run Analysis  - Upload MyHeritage CSV to run the Byzantine ancestry pipeline' },
    ],
    description:
      'Comprehensive genomic analysis pipeline determining genetic proximity to Byzantine-era populations, with interactive dashboard and ancestry composition reports.',
  },
  {
    slug: 'kassandra-properties',
    title: 'Kassandra Properties VIP',
    subtitle: 'Enterprise construction & real-estate platform with booking and payments',
    category: 'fullstack',
    categoryLabel: 'Full-Stack',
    categoryColor: '#2563eb',
    organization: 'Vadiotech',
    period: 'Jul 2025 – Sep 2025',
    featured: true,
    confidential: false,
    problem:
      'A construction company needed a modern platform to showcase properties, handle bookings with payments, and manage content  - replacing a legacy workflow of phone calls and spreadsheets.',
    approach:
      'Designed and built a full-stack Next.js application with Prisma ORM, PostgreSQL, and Stripe integration. Implemented role-based access control, an admin CMS dashboard, image optimization pipeline, and SEO infrastructure.',
    results:
      'Live production platform handling property listings, real-time booking with Stripe payments, admin content management, and multi-language support. Built as a one-person team from zero to deployment.',
    metrics: [
      { label: 'Completion', value: '~90%' },
      { label: 'Stack', value: 'Full-Stack' },
      { label: 'Payments', value: 'Stripe' },
      { label: 'Team', value: 'Solo Dev' },
    ],
    technologies: [
      'Next.js', 'TypeScript', 'Prisma', 'PostgreSQL', 'Stripe',
      'Supabase', 'NextAuth', 'Tailwind CSS', 'Vercel',
    ],
    highlightedTech: ['Next.js', 'Prisma', 'Stripe'],
    liveUrl: 'https://kassandraproperties.com',
    githubUrl: 'https://github.com/Nonilas/construction-company',
    description:
      'Enterprise-grade construction platform with property management, Stripe payments, admin CMS, and role-based access control.',
  },
  {
    slug: 'mep-predictor',
    title: '3D MEP Component Predictor',
    subtitle: 'Neural network system for automated MEP placement in BIM models',
    category: 'ai-ml',
    categoryLabel: 'AI / ML',
    categoryColor: '#8b5cf6',
    organization: 'Equans / Maastricht University',
    period: '2025',
    featured: true,
    confidential: false,
    problem:
      'Placing MEP (Mechanical, Electrical, Plumbing) components in 3D building models is a time-consuming manual process requiring specialized knowledge. Equans engineers spend significant hours on repetitive placement tasks.',
    approach:
      'Developed PyTorch neural networks (MLP and 1D CNN with depthwise separable convolutions and residual blocks) that predict both the 3D coordinates (x, y, z) and component type for MEP elements within Revit building models.',
    results:
      'Achieved over 50% reduction in resource requirements for MEP placement tasks. The model accurately predicts component locations and types, significantly accelerating the BIM workflow.',
    metrics: [
      { label: 'Resource Savings', value: '>50%' },
      { label: 'Prediction', value: '3D + Type' },
      { label: 'Models', value: 'MLP + CNN' },
      { label: 'Domain', value: 'BIM/Revit' },
    ],
    pipeline: [
      {
        title: 'Data Extraction',
        subtitle: 'BIM model parsing',
        points: ['Revit IFC export', '3D coordinate extraction', 'Component type labeling'],
        color: '#3b82f6',
      },
      {
        title: 'Feature Engineering',
        subtitle: 'Spatial encoding',
        points: ['Room context features', 'Adjacency matrices', 'Normalized coordinates'],
        color: '#8b5cf6',
      },
      {
        title: 'Model Training',
        subtitle: 'Neural network',
        points: ['MLP baseline', '1D CNN with residual blocks', 'Depthwise separable convolutions'],
        color: '#ec4899',
      },
      {
        title: 'Deployment',
        subtitle: 'Revit integration',
        points: ['Coordinate prediction', 'Component type classification', 'Batch placement'],
        color: '#10b981',
      },
    ],
    technologies: [
      'Python', 'PyTorch', 'Revit API', 'IFC', 'NumPy',
      'pandas', 'scikit-learn', 'Matplotlib',
    ],
    highlightedTech: ['PyTorch', 'Revit API', 'IFC'],
    downloadUrl: '/Draft_Report__Group_1_.pdf',
    downloadLabel: 'Download Report (PDF)',
    description:
      'AI system predicting 3D coordinates and component types for MEP placement in BIM models, reducing resource usage by over 50%.',
  },

  // ── MORE WORK GRID ─────────────────────────────────────────────────
  {
    slug: 'coav',
    title: 'COAV  - Contrail Avoidance System',
    subtitle: 'Real-time air traffic management system for contrail climate impact reduction',
    category: 'fullstack',
    categoryLabel: 'Full-Stack',
    categoryColor: '#2563eb',
    organization: 'EUROCONTROL MUAC',
    period: 'Nov 2025 – Present',
    featured: false,
    confidential: true,
    problem: 'Aviation contrails have a significant climate forcing effect, but there was no operational system to advise flights in real-time on altitude changes to avoid contrail-prone regions.',
    approach: 'Working across the full system: Python backend services integrating with live radar data (RTTS) and contrail prediction models, Node.js scheduling and monitoring services, Vue.js + D3.js frontend dashboard with CO2e trajectory analysis and sector prediction tables, and data infrastructure with Redis pub/sub, MariaDB, and MinIO. Deployed on Kubernetes/OpenShift.',
    results: 'Deployed internally at EUROCONTROL. The system generates real-time flight altitude advisories, only issuing them when the net climate benefit outweighs extra fuel burn.',
    metrics: [
      { label: 'Status', value: 'Deployed' },
      { label: 'Scope', value: 'Enterprise' },
      { label: 'Data', value: 'Real-time' },
    ],
    technologies: ['Python', 'Vue.js', 'JavaScript', 'Node.js', 'D3.js', 'Redis', 'MariaDB', 'Kubernetes', 'OpenShift', 'MinIO', 'Shapely', 'GeoPandas'],
    highlightedTech: ['Python', 'Vue.js', 'Kubernetes'],
    description:
      'Real-time contrail avoidance system at EUROCONTROL generating flight altitude advisories to reduce aviation climate impact. Full-stack work across Python backend services, Vue.js dashboard, and Kubernetes infrastructure.',
  },
  {
    slug: 'neuragallery',
    title: 'NeuraGallery',
    subtitle: 'AI-powered image clustering platform using DINOv3 vision transformer',
    category: 'ai-ml',
    categoryLabel: 'AI / ML',
    categoryColor: '#8b5cf6',
    organization: 'Personal Project',
    period: '2025',
    featured: false,
    confidential: false,
    problem: 'Organizing large image collections manually is tedious. Existing solutions require manual tagging or expensive GPU instances for AI-based clustering.',
    approach: 'Built a 3-tier microservices architecture: Next.js PWA frontend, FastAPI backend with Azure Blob Storage, and a PyTorch ML service using Meta\'s DINOv3 vision transformer. The key innovation is an embedding cache  - compute embeddings once, then re-cluster in milliseconds without GPU.',
    results: 'Live platform achieving 95% cost reduction vs GPU instances (~$30/month vs ~$550/month). Users upload photos and the system automatically groups them into coherent clusters using K-Means and HDBSCAN.',
    metrics: [
      { label: 'Cost Reduction', value: '95%' },
      { label: 'Status', value: 'Live' },
      { label: 'Architecture', value: '3-tier' },
    ],
    technologies: ['PyTorch', 'DINOv3', 'FastAPI', 'Next.js', 'TypeScript', 'Azure Blob Storage', 'Docker', 'MongoDB', 'Redis', 'K-Means', 'HDBSCAN'],
    highlightedTech: ['DINOv3', 'FastAPI', 'PyTorch'],
    liveUrl: 'https://dinov3-storyboard-app.vercel.app',
    description: 'AI image clustering platform using DINOv3 vision transformer with 95% cost reduction via embedding caching. 3-tier microservices architecture.',
  },
  {
    slug: 'dental-booking',
    title: 'Polichroniadou Dental Booking',
    subtitle: 'Production SaaS booking system for a Greek dental clinic',
    category: 'fullstack',
    categoryLabel: 'Full-Stack',
    categoryColor: '#2563eb',
    organization: 'Vadiotech',
    period: '2025',
    featured: false,
    confidential: false,
    problem: 'A Greek dental practice needed a modern appointment booking system with calendar sync, notifications, and patient management  - replacing manual phone scheduling.',
    approach: 'Built a desktop-first two-pane dashboard (420px booking form + calendar view) with Supabase real-time subscriptions, Google Calendar OAuth sync, SendGrid email and Twilio SMS notifications, conflict detection, and GDPR-compliant data handling with Row Level Security.',
    results: 'Production-ready PWA with smart patient lookup, status tracking (Booked → Confirmed → Completed), magic link auth, and full Greek localization.',
    metrics: [
      { label: 'Type', value: 'SaaS' },
      { label: 'Status', value: 'Production' },
    ],
    technologies: ['Next.js', 'TypeScript', 'Supabase', 'Google Calendar API', 'SendGrid', 'Twilio', 'Tailwind CSS', 'PWA'],
    description: 'Production SaaS dental booking system with real-time calendar, Google Calendar sync, SMS/email notifications, and GDPR compliance.',
  },
  {
    slug: 'investorhub',
    title: 'InvestorHub',
    subtitle: 'AI-powered personal finance and investment dashboard',
    category: 'fullstack',
    categoryLabel: 'Full-Stack',
    categoryColor: '#2563eb',
    organization: 'Personal Project',
    period: '2025',
    featured: false,
    confidential: false,
    problem: 'Needed an all-in-one dashboard for tracking income, budgeting, and multi-asset portfolio management with intelligent market insights.',
    approach: 'Built a Next.js dashboard with Supabase backend, Claude API for AI market insights (web search, sentiment analysis), real-time price feeds from Yahoo Finance and CoinGecko, and Upstash Redis for caching. Includes Dutch Box 3 wealth tax estimation.',
    results: 'Functional investment tracking tool supporting ETFs, stocks, crypto, and REITs with AI-powered market analysis and P&L analytics.',
    metrics: [
      { label: 'Type', value: 'Dashboard' },
      { label: 'AI', value: 'Claude API' },
    ],
    technologies: ['Next.js', 'TypeScript', 'Supabase', 'Prisma', 'Claude API', 'Recharts', 'Upstash Redis', 'Tailwind CSS'],
    description: 'AI-powered personal finance dashboard with multi-asset portfolio tracking, Claude API market insights, and Dutch tax estimation.',
  },
  {
    slug: 'mobile-app-nda',
    title: 'Confidential Client Mobile App',
    subtitle: 'Full cross-platform mobile application under NDA',
    category: 'mobile',
    categoryLabel: 'Mobile',
    categoryColor: '#10b981',
    organization: 'Confidential Client',
    period: '2025',
    featured: false,
    confidential: true,
    problem: 'A client needed a cross-platform mobile application with authentication, inventory management, real-time messaging, and e-commerce capabilities.',
    approach: 'Designed and built the full app from scratch with Expo SDK 54 and React Native. Implemented biometric auth (fingerprint/face ID), a 6-stage creation wizard, real-time in-app messaging, inventory management with filtering and bulk operations, animated onboarding, and a custom OLED-optimized dark theme design system (8pt grid, 48x48px touch targets).',
    results: 'Delivered a full-featured cross-platform mobile app with atomic design pattern component library, Zustand state management, React Query for server state, and physics-based animations.',
    metrics: [
      { label: 'Platform', value: 'Cross-platform' },
      { label: 'Status', value: 'NDA' },
    ],
    technologies: ['Expo SDK 54', 'React Native', 'TypeScript', 'Zustand', 'React Query', 'React Hook Form', 'Reanimated 4', 'Expo Router'],
    description: 'Full cross-platform mobile app with biometric auth, real-time messaging, inventory management, and atomic design system. Details under NDA.',
  },
  {
    slug: 'hairloss-ai',
    title: 'HairlossAI',
    subtitle: 'AI-powered scalp analysis and hair loss tracking app',
    category: 'mobile',
    categoryLabel: 'Mobile',
    categoryColor: '#10b981',
    organization: 'Personal Project',
    period: '2025',
    featured: false,
    confidential: false,
    problem: 'People want accessible hair loss tracking and analysis before consulting dermatologists, with progress monitoring over time.',
    approach: 'Built a mobile app with Expo/React Native using OpenAI Vision API for AI scalp scanning. Features before/after progress comparisons, personalized treatment routines, gamification (streaks, achievements), and Stripe premium subscriptions.',
    results: 'Working mobile app with AI-powered scalp analysis, progress tracking, and personalized treatment recommendations.',
    metrics: [
      { label: 'AI', value: 'OpenAI Vision' },
      { label: 'Platform', value: 'Mobile' },
    ],
    technologies: ['Expo SDK 54', 'React Native', 'TypeScript', 'Zustand', 'MMKV', 'Supabase', 'OpenAI Vision API', 'Stripe'],
    description: 'Mobile app for AI-powered hair loss tracking with OpenAI Vision, progress comparisons, and personalized treatment routines.',
  },
  {
    slug: 'ai-image-detector',
    title: 'AI Image Detector',
    subtitle: 'Detecting AI-generated images with deep learning',
    category: 'ai-ml',
    categoryLabel: 'AI / ML',
    categoryColor: '#8b5cf6',
    organization: 'Maastricht University',
    period: '2024',
    featured: false,
    confidential: false,
    problem: 'As AI-generated images become indistinguishable from real ones, tools are needed to detect synthetic media.',
    approach: 'Developed convolutional and residual neural networks with GradCAM visualization to identify AI-generated images and highlight discriminative regions.',
    results: 'High-accuracy detector with interpretable heatmap outputs. Graded 9.5/10.',
    metrics: [
      { label: 'Grade', value: '9.5/10' },
      { label: 'Explainability', value: 'GradCAM' },
    ],
    technologies: ['Python', 'PyTorch', 'CNN', 'GradCAM', 'OpenCV', 'ResNet'],
    description: 'Deep learning system detecting AI-generated images with GradCAM heatmap visualization. Grade: 9.5/10.',
  },
  {
    slug: 'uno-game',
    title: 'UNO Game with AI',
    subtitle: 'Card game with Monte Carlo Tree Search AI bots',
    category: 'game',
    categoryLabel: 'Game Dev',
    categoryColor: '#ff3366',
    organization: 'Maastricht University',
    period: '2024',
    featured: false,
    confidential: false,
    problem: 'Wanted to implement game AI using advanced search algorithms in a familiar card game context.',
    approach: 'Recreated UNO with Monte Carlo Tree Search algorithms and neural-network-based strategy, plus a graphical interface.',
    results: 'Playable UNO game where AI bots use MCTS to make strategic decisions.',
    metrics: [
      { label: 'AI', value: 'MCTS' },
      { label: 'Interface', value: 'GUI' },
    ],
    technologies: ['Python', 'Pygame', 'MCTS', 'Neural Networks'],
    description: 'UNO card game with AI bots using Monte Carlo Tree Search and neural network strategy.',
  },
  {
    slug: 'card-game',
    title: 'Online Card Game',
    subtitle: 'Multiplayer card game with real-time gameplay',
    category: 'game',
    categoryLabel: 'Game Dev',
    categoryColor: '#ff3366',
    organization: 'Personal Project',
    period: '2024',
    featured: false,
    confidential: false,
    problem: 'Wanted to build a real-time multiplayer game with WebSocket communication.',
    approach: 'Developed a browser-based card game with real-time multiplayer using WebSockets and a Node.js backend.',
    results: 'Live playable card game supporting multiple concurrent players.',
    metrics: [
      { label: 'Multiplayer', value: 'Real-time' },
      { label: 'Status', value: 'Live' },
    ],
    technologies: ['JavaScript', 'Node.js', 'WebSockets', 'HTML/CSS'],
    liveUrl: 'https://card-game-nine-kohl.vercel.app',
    description: 'Real-time multiplayer card game built with WebSockets.',
  },
];

export function getFeaturedProjects(): Project[] {
  return projects.filter((p) => p.featured);
}

export function getMoreWorkProjects(): Project[] {
  return projects.filter((p) => !p.featured);
}

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getProjectsByCategory(category: Project['category']): Project[] {
  return projects.filter((p) => p.category === category);
}

export function getAllSlugs(): string[] {
  return projects.map((p) => p.slug);
}
