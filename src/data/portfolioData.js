export const personalInfo = {
  name: "Om Upadhyay",
  wordmark: "Om Upadhyay",
  role: "Software Developer",
  institution: "MNNIT Allahabad",
  department: "Computer Science & Engineering",
  degree: "B.Tech. in Computer Science and Engineering",
  graduationYear: "2029",
  period: "2025 – 2029",
  cgpa: "8.82 / 10.0",
  location: "Prayagraj, Uttar Pradesh, India",
  email: "upadhyayom234@gmail.com",
  phone: "+91 9934814326",
  resumePath: "/Om_Upadhyay_Resume.pdf",
  socials: {
    github: "https://github.com/upadhyayom1",
    linkedin: "https://www.linkedin.com/in/om-upadhyay-772787371/",
    leetcode: "https://leetcode.com/upadhyayom1/",
    codeforces: "https://codeforces.com/profile/upadhyayom1",
  },
  hero: {
    eyebrow: "HELLO, I'M OM UPADHYAY",
    headline: "I build software that solves real problems.",
    description:
      "Computer Science undergraduate at MNNIT Allahabad, building full-stack applications, real-time systems, and thoughtful digital experiences.",
    primaryCta: "Explore my work",
    secondaryCta: "View resume",
    badgeDetails: {
      id: "MNNIT-CSE-2029",
      batch: "2025–2029",
      campus: "MNNIT Allahabad, Prayagraj",
      stack: ["React", "TypeScript", "Node.js", "PostgreSQL", "C++", "FastAPI"],
    },
  },
};

export const projects = [
  {
    id: "01",
    slug: "passflow",
    title: "PassFlow",
    subtitle: "Real-Time Secondary Ticket Marketplace & Matching Engine",
    category: "REAL-TIME SYSTEMS / FULL-STACK",
    period: "2026",
    description:
      "A real-time secondary ticket marketplace featuring event discovery, primary ticket sales, inventory reservation, and secure ticket ownership transfers.",
    overview:
      "PassFlow addresses scalping and fraudulent transfers with price-capped secondary exchange rules, an in-memory FIFO order book, and atomic trade settlements.",
    highlights: [
      "In-memory order book engine with price-time priority, FIFO matching, and partial fills.",
      "Event-specific market isolation to guarantee deterministic multi-asset trade concurrency.",
      "Atomic wallet reservations, transactional trade settlement, and immutable ledger operations.",
      "Live order book depth and market ticker streaming using Socket.IO.",
      "Protection against inventory overselling and invalid ownership state transitions.",
    ],
    stack: [
      "React",
      "Node.js",
      "Express",
      "PostgreSQL",
      "Prisma",
      "Redis",
      "Socket.IO",
    ],
    github: "https://github.com/krnaman2007/passflow",
    previewImage: "/images/projects/passflow-preview.svg",
    metrics: [
      { label: "Architecture", value: "Order Book Engine" },
      { label: "Matching", value: "Price-Time / FIFO" },
      { label: "Updates", value: "Socket.IO Real-Time" },
      { label: "Data Store", value: "PostgreSQL + Redis" },
    ],
    challenges:
      "Designing a high-throughput order book with price-time priority in Node.js while keeping ledger balances strictly synchronized during partial and concurrent order executions.",
    solutions:
      "Isolated order book memory structures per event, using transactional database operations with row-level locks and Redis pub/sub for broadcast.",
  },
  {
    id: "02",
    slug: "nagar-drishti",
    title: "Nagar-Drishti",
    subtitle: "Multi-Camera Urban Traffic Intelligence & Route Anomaly Platform",
    category: "URBAN INTELLIGENCE / AI INTEGRATION",
    period: "2026",
    description:
      "A multi-camera urban traffic intelligence platform enabling searchable vehicle histories, trajectory visualization, and traffic analytics.",
    overview:
      "Built for municipal surveillance and automated transport analysis, integrating machine learning models with FastAPI backend services and interactive geospatial mapping.",
    highlights: [
      "Backend services and schema models for multi-camera urban traffic tracking across city networks.",
      "ANPR/ML workflows integrated via FastAPI for high-speed automated number-plate extraction.",
      "Backend engine for real-time blacklist alerts, next-camera path prediction, and congestion forecasting.",
      "Applied Random Forest, Isolation Forest, and DBSCAN algorithms for trajectory anomaly detection.",
      "Interactive map dashboard displaying vehicle histories, cameras, and route heatmaps.",
    ],
    stack: [
      "Next.js",
      "Node.js",
      "Express",
      "PostgreSQL",
      "Prisma",
      "Python",
      "FastAPI",
    ],
    github: "https://github.com/upadhyayom1/Nagar-Drishti",
    previewImage: "/images/projects/nagardrishti-preview.svg",
    metrics: [
      { label: "Intelligence", value: "ANPR + Trajectory AI" },
      { label: "Algorithms", value: "DBSCAN / Isolation Forest" },
      { label: "APIs", value: "FastAPI + Express" },
      { label: "Spatial Data", value: "PostgreSQL / Geo-points" },
    ],
    challenges:
      "Efficiently correlating high-volume camera detection timestamps across non-adjacent city junctions to reconstruct plausible vehicle paths and flag route deviations.",
    solutions:
      "Constructed temporal graph trajectories indexed in PostgreSQL and evaluated deviations with spatial clustering and Isolation Forest models.",
  },
  {
    id: "03",
    slug: "aarohan",
    title: "Aarohan",
    subtitle: "Enterprise Campus Placement & Explainable Matching Platform",
    category: "PLACEMENT TECHNOLOGY / FULL-STACK",
    period: "2026",
    description:
      "A multi-role campus placement platform connecting students, recruiters, and placement administrators through dedicated role-based portals.",
    overview:
      "Aarohan simplifies university campus recruitment by uniting resume parsing, explainable semantic opportunity matching, and multi-tier recruitment drive management.",
    highlights: [
      "Role-based authenticated portals for students, corporate recruiters, and institute administrators.",
      "Student profiles, automated resume processing, and eligibility criteria filtering engine.",
      "Explainable opportunity matching evaluating student skills, academic milestones, and work history.",
      "Complete recruitment pipelines: job postings, application tracking, interview scheduling, and drive audits.",
      "Comprehensive administrative reporting and institutional placement analytics.",
    ],
    stack: [
      "React",
      "TypeScript",
      "Node.js",
      "Express",
      "PostgreSQL",
      "Prisma",
      "Python",
      "FastAPI",
    ],
    github: "https://github.com/upadhyayom1/Aarohan",
    previewImage: "/images/projects/aarohan-preview.png",
    detailImage: "/images/projects/aarohan-detail.png",
    metrics: [
      { label: "User Portals", value: "Student / Recruiter / Admin" },
      { label: "Matching", value: "Explainable Semantic" },
      { label: "AI Engine", value: "FastAPI Service" },
      { label: "Frontend", value: "React 19 + TypeScript" },
    ],
    challenges:
      "Generating explainable, transparent candidate-job fit scores rather than opaque black-box recommendations, while enforcing strict role permissions across three user tiers.",
    solutions:
      "Decomposed scoring into clear, inspectable skill overlap, academic eligibility criteria, and experience vectors exposed through dedicated FastAPI microservices.",
  },
  {
    id: "04",
    slug: "auradesk",
    title: "AuraDesk",
    subtitle: "Cross-Platform Context-Aware Desktop Wallpaper Engine",
    category: "DESKTOP APPLICATION / ELECTRON",
    period: "2026",
    description:
      "A cross-platform desktop wallpaper application using Electron, React, and TypeScript with multi-source discovery through Unsplash and Pexels.",
    overview:
      "Built for the Softablitz competition, AuraDesk brings multi-source wallpaper discovery, local curation, and automated context-aware rotation to the desktop.",
    highlights: [
      "Multi-source discovery via Unsplash and Pexels APIs with normalized models, caching, and fallback.",
      "Native OS desktop wallpaper manipulation with instant preview and local custom image imports.",
      "Persistent collections, automated wallpaper rotation, and local SQLite data management.",
      "Context-aware personalization adjusting backgrounds based on time of day, weather, and calendar schedules.",
      "Architected with a restricted Electron preload bridge, validated IPC handlers, and separated main-process services.",
    ],
    stack: [
      "Electron",
      "React",
      "TypeScript",
      "Vite",
      "Node.js",
      "SQLite",
      "Sharp",
      "Zod",
    ],
    github: "https://github.com/upadhyayom1/AuraDesk",
    previewImage: "/images/projects/auradesk-preview.png",
    detailImage: "/images/projects/auradesk-detail.png",
    metrics: [
      { label: "Platform", value: "Cross-Platform Electron" },
      { label: "Discovery", value: "Unsplash + Pexels" },
      { label: "Security", value: "Context Bridge / Strict IPC" },
      { label: "Engine", value: "Context-Aware Automation" },
    ],
    challenges:
      "Executing native system wallpaper commands reliably without blocking the renderer process or opening Electron IPC security vulnerabilities.",
    solutions:
      "Structured strict Zod-validated IPC channels, a hardened context bridge, and an asynchronous native execution queue running in background worker services.",
  },
];

export const skillCategories = [
  {
    number: "01",
    category: "Languages",
    description: "Core languages used for system architecture, algorithmic problem solving, and application engineering.",
    skills: ["C++", "JavaScript", "TypeScript", "Java", "Python", "HTML", "CSS"],
  },
  {
    number: "02",
    category: "Frontend & Applications",
    description: "Building responsive, editorial, and desktop user interfaces with component-driven systems.",
    skills: ["React", "Next.js", "Vite", "Electron", "Tailwind CSS"],
  },
  {
    number: "03",
    category: "Backend & APIs",
    description: "Designing RESTful services, real-time message brokers, and role-based access controllers.",
    skills: ["Node.js", "Express.js", "FastAPI", "REST APIs", "Socket.IO", "Authentication"],
  },
  {
    number: "04",
    category: "Databases & Caching",
    description: "Relational modeling, document storage, caching layers, and ORM migrations.",
    skills: ["PostgreSQL", "MongoDB", "Redis", "SQLite", "Firebase", "Prisma"],
  },
  {
    number: "05",
    category: "Tools & Deployment",
    description: "Developer tooling, containerization, API testing, and continuous cloud deployment.",
    skills: ["Git", "GitHub", "Docker", "Postman", "Vercel", "Render"],
  },
  {
    number: "06",
    category: "Core Computer Science",
    description: "Algorithmic foundation and software engineering paradigms.",
    skills: ["Data Structures & Algorithms", "Object-Oriented Programming (OOP)", "System Design"],
  },
];

export const experienceData = [
  {
    role: "Web Developer",
    organization: "Entrepreneurship Cell (E-Cell), MNNIT Allahabad",
    period: "2025 – Present",
    type: "Leadership & Development",
    responsibilities: [
      "Developing and maintaining web platforms and digital initiatives for the Entrepreneurship Cell.",
      "Developed and deployed the official website for Renaissance 2026, the flagship annual entrepreneurship summit organized by E-Cell.",
      "Ensured mobile responsiveness, fast asset delivery, and reliable registration flows for attendees.",
    ],
  },
];

export const educationData = [
  {
    institution: "Motilal Nehru National Institute of Technology Allahabad",
    degree: "B.Tech. in Computer Science and Engineering",
    period: "2025 – 2029",
    score: "CGPA: 8.82 / 10.0",
    location: "Prayagraj, Uttar Pradesh",
    details: "Core coursework in Data Structures, Algorithms, Computer Architecture, and Object-Oriented Design.",
  },
  {
    institution: "Jawahar Navodaya Vidyalaya, Rajgir, Bihar",
    degree: "Senior Secondary (Class XII), CBSE",
    period: "2025",
    score: "93.0%",
    location: "Rajgir, Bihar",
    details: "Specialized in Physics, Chemistry, Mathematics, and Computer Science.",
  },
  {
    institution: "Jawahar Navodaya Vidyalaya, Rohtas, Bihar",
    degree: "Secondary School (Class X), CBSE",
    period: "2023",
    score: "96.4%",
    location: "Rohtas, Bihar",
    details: "Comprehensive academic foundation with distinction across STEM subjects.",
  },
];

export const achievements = [
  {
    metric: "600+",
    label: "LeetCode Solved",
    detail: "Extensive problem-solving across algorithms, graphs, dynamic programming, and data structures.",
    highlight: "Biweekly Contest 186: Rank 2573 / 39,050",
    link: "https://leetcode.com/upadhyayom1/",
    tag: "Competitive Programming",
  },
  {
    metric: "2★",
    label: "CodeChef Rating",
    detail: "Active participant in rated Starters and algorithmic competitions.",
    highlight: "Consistent problem solver in Division 2/3",
    link: "https://www.codechef.com",
    tag: "Algorithmic Rating",
  },
  {
    metric: "1100+",
    label: "Codeforces Rating",
    detail: "Regular participant in global Div. 2 and Div. 3 contests.",
    highlight: "Strong algorithmic speed and mathematical problem solving",
    link: "https://codeforces.com/profile/upadhyayom1",
    tag: "Global Contests",
  },
  {
    metric: "2nd",
    label: "Rank — Error_404",
    detail: "Avishkar 2025, MNNIT Allahabad (CyberQuest). Flagship software engineering & hackathon competition.",
    highlight: "Institute-wide team achievement",
    tag: "Avishkar 2025",
  },
  {
    metric: "1st Yr",
    label: "Best First-Year Team",
    detail: "Game of Codes (Mechathon), Avishkar 2025, MNNIT Allahabad. Recognized for outstanding first-year code craft.",
    highlight: "First-Year Honor",
    tag: "Hackathon Award",
  },
  {
    metric: "3rd",
    label: "Individual Rank — CodeSparks",
    detail: "PowerSurge, Avishkar 2025, MNNIT Allahabad. Speed algorithmic coding contest among top participants.",
    highlight: "Individual Ranking",
    tag: "Speed Programming",
  },
  {
    metric: "2026",
    label: "GSSoC Contributor",
    detail: "GirlScript Summer of Code 2026. Actively contributing to open-source software repositories and PR reviews.",
    highlight: "Open Source Contributor",
    tag: "Open Source",
  },
];

