export type ExperienceItem = {
  company: string;
  type: string;
  image?: string;
  role: string;
  periodShort: string;
  periodLong: string;
  locationShort: string;
  locationLong: string;
  working?: boolean;
  details?: string[];
  tech?: string[];
};

export const experience: ExperienceItem[] = [
  {
    "company": "Freelance",
    "role": "Full Stack Developer",
    "type": "Self-employed",
    "periodShort": "Feb 23 – Present",
    "periodLong": "February 2023 – Present",
    "locationShort": "Remote",
    "locationLong": "Remote, India",
    "working": true,
    "image": "/assets/work/freelance.jpg",
    "details": [
      "Delivered 10+ client-facing web applications, owning requirements, development, deployment, and maintenance.",
      "Built solutions for AwasthiDigital.com, makaanmalikkh.com, MagicProctor.com, and SolarDesignExpert.com.",
      "Help clients turn ideas into reliable products with third-party integrations, performance improvements, and clear, usable interfaces."
    ],
    "tech": [
      "React",
      "Node.js",
      "PostgreSQL",
      "REST APIs"
    ]
  },
  {
    "company": "Kripanidhi Legal Services",
    "role": "Software Engineer",
    "type": "Full-time",
    "periodShort": "Jan 26 – Present",
    "periodLong": "January 2026 – Present",
    "locationShort": "Bhopal, IN",
    "locationLong": "Bhopal, India",
    "working": true,
    "image": "/assets/work/kripanidhi.png",
    "details": [
      "Built and deployed a Digital Property Registry Platform serving 500+ users, with multilingual documents, secure authentication, role-based access, and automated PDF/DOCX generation.",
      "Owned REST APIs, database design, payments, OTP registration, and Redis/BullMQ notification workflows, with Docker and AWS deployment.",
      "Developed the corporate website and supported stakeholder coordination and cross-border partnership discussions."
    ],
    "tech": [
      "React",
      "Node.js",
      "React Native",
      "PostgreSQL",
      "Docker",
      "AWS"
    ]
  },
  {
    "company": "Easecase",
    "role": "Software Developer Intern",
    "type": "Internship",
    "periodShort": "Sep 23 – Dec 23",
    "periodLong": "September 2023 – December 2023",
    "locationShort": "Remote",
    "locationLong": "Remote, India",
    "image": "/assets/work/easecase.svg",
    "details": [
      "Built an interactive React front end for legal professionals, reaching 10,000+ impressions in two weeks.",
      "Integrated Elasticsearch into the backend to improve document retrieval by 40%."
    ],
    "tech": [
      "React",
      "JavaScript",
      "Elasticsearch"
    ]
  }
];
