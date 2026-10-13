export type Project = {
  slug: string;
  title: string;
  date: string;
  description: string;
  tech: string[];
  href?: string;
  website?: string;
  featured?: boolean;
  /** Optional cover image for project cards */
  cover?: string;
  coverFit?: "cover" | "contain";
  /** Hide browser chrome in supplied screenshots without changing the file. */
  coverInset?: number;
  coverBottomInset?: number;
  gradient: string;
};

export const projects: Project[] = [
  {
    "slug": "kinnectai",
    "title": "KinnectAI",
    "date": "10.2025",
    "description": "AI SaaS platform for writing, image generation, image editing, and document reviews, with secure access and subscription plans.",
    "tech": [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "Stripe",
      "Clerk"
    ],
    "href": "https://github.com/vipingautam07/KinnectAI",
    "website": "https://kinnect-ai.vercel.app",
    "featured": true,
    "cover": "/assets/projects/kinnectai.png",
    "coverInset": 0.162,
    "gradient": "from-blue-500/25 via-indigo-500/15 to-violet-500/25"
  },
  {
    "slug": "quizbox",
    "title": "Quizbox",
    "date": "",
    "description": "A real-time multiplayer quiz arena with timed challenges, room-based competition, and live leaderboards.",
    "tech": [
      "React",
      "Node.js",
      "Express",
      "WebSockets"
    ],
    "href": "https://github.com/vipingautam07/quizbox",
    "website": "https://quizbox0.vercel.app",
    "featured": true,
    "cover": "/assets/projects/quizbox.png",
    "coverInset": 0.162,
    "gradient": "from-pink-500/25 via-violet-500/15 to-cyan-500/25"
  },
  {
    "slug": "rag-assistant",
    "title": "RAG Assistant",
    "date": "",
    "description": "A conversational assistant for exploring documents and policies, built with retrieval-augmented generation and vector search.",
    "tech": [
      "React",
      "Node.js",
      "Express",
      "LangChain",
      "Pinecone",
      "RAG"
    ],
    "href": "https://github.com/vipingautam07/RAG-assistant",
    "website": "https://rag-assistant-1.vercel.app",
    "cover": "/assets/projects/rag-assistant.png",
    "coverInset": 0.162,
    "gradient": "from-violet-500/25 via-purple-500/15 to-indigo-500/25"
  },
  {
    "slug": "f1-companion",
    "title": "F1 Companion",
    "date": "",
    "description": "A React Native companion app for Formula 1 fans, with race information, standings, and a mobile-first interface.",
    "tech": [
      "React Native"
    ],
    "cover": "/assets/projects/f1-companion.webp",
    "coverFit": "contain",
    "gradient": "from-red-500/25 via-rose-500/15 to-neutral-500/25"
  },
  {
    "slug": "digital-property-registry",
    "title": "Kripanidhi Registry",
    "date": "2026",
    "description": "Digital property registry platform serving 500+ users, with multilingual documents, secure access, payments, and automated PDF/DOCX generation.",
    "tech": [
      "React",
      "React Native",
      "Node.js",
      "PostgreSQL",
      "Docker",
      "AWS"
    ],
    "website": "https://kripanidhi.in",
    "cover": "/assets/projects/kripanidhi-registry.png",
    "coverInset": 0.162,
    "gradient": "from-amber-500/20 via-orange-500/15 to-yellow-500/20"
  },
  {
    "slug": "subscriptions",
    "title": "Subscription Tracker",
    "date": "",
    "description": "A full stack dashboard for tracking recurring subscriptions, analyzing costs, and managing renewal reminders, with a Docker-based deployment setup.",
    "tech": [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "Docker",
      "Tailwind CSS"
    ],
    "href": "https://github.com/vipingautam07/subscriptions",
    "gradient": "from-emerald-500/25 via-teal-500/15 to-cyan-500/25",
    "cover": "/assets/projects/subscriptions.png",
    "coverInset": 0.1388888888888889,
    "coverBottomInset": 0.05555555555555555
  },
  {
    "slug": "binkeyit",
    "title": "BINKEYIT",
    "date": "06.2024",
    "description": "A MERN grocery e-commerce platform with secure authentication, password recovery, payment integration, and product management.",
    "tech": [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "Redux"
    ],
    "href": "https://github.com/vipingautam07/binkeyit",
    "website": "https://binkeyit-full-stack-ydrn.vercel.app/",
    "cover": "/assets/projects/binkeyit.png",
    "coverInset": 0.162,
    "gradient": "from-emerald-500/25 via-green-500/15 to-lime-500/25"
  },
  {
    "slug": "sircles-ai",
    "title": "Sircles AI",
    "date": "",
    "description": "A platform for founders to assess fundability and connect with relevant investors through an AI-assisted workflow.",
    "tech": [],
    "website": "https://sircles-lime.vercel.app/",
    "cover": "/assets/projects/sircles-ai.png",
    "coverInset": 0.162,
    "gradient": "from-indigo-500/25 via-purple-500/15 to-neutral-500/25"
  }
];
