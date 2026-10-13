import { heroConfig } from "@/config/hero";
export const aboutConfig = {
  headline: ["Your idea.", "A product people can use."],
  intro: "I'm Vipin Gautam, a **software engineer** and **freelance full stack developer** based in Bhopal. I help businesses build web applications, SaaS products, and automation — with hands-on ownership from **requirements to deployment**.",
  quote: "Good software should make your business easier to run and your customers' lives easier.",
  traits: ["Curious", "Builder", "Focused", "Persistent"] as const,
  traitStyles: {
    Curious:
      "border-sky-200 bg-sky-50 text-sky-700 dark:border-sky-800/80 dark:bg-sky-950/40 dark:text-sky-300",
    Builder:
      "border-emerald-200 bg-emerald-50 text-emerald-700 dark:border-emerald-800/80 dark:bg-emerald-950/40 dark:text-emerald-300",
    Focused:
      "border-amber-200 bg-amber-50 text-amber-700 dark:border-amber-800/80 dark:bg-amber-950/40 dark:text-amber-300",
    Persistent:
      "border-violet-200 bg-violet-50 text-violet-700 dark:border-violet-800/80 dark:bg-violet-950/40 dark:text-violet-300",
  },
  meta: [
    { label: "Location", value: heroConfig.location },
    { label: "Availability", value: "Open to freelance projects" },
    { label: "Focus", value: "Web apps · SaaS · Automation" },
  ],
  story: {
    title: "Experience that carries into your project",
    paragraphs: [
      "I graduated in **Computer Science from RGPV, Bhopal**, and have been working with freelance clients since **February 2023**. Across **10+ web applications**, I've taken projects from client requirements through development, deployment, and maintenance.",
      "My freelance work includes **AwasthiDigital.com, makaanmalikkh.com, MagicProctor.com, and SolarDesignExpert.com**. That work taught me to connect technical decisions to what a business actually needs: useful features, smooth integrations, and an interface customers can navigate.",
      "At **Kripanidhi Legal Services**, I built and deployed a **Digital Property Registry Platform serving 500+ users**. The work spans multilingual document generation, secure access, payments, notifications, and cloud deployment.",
      "Earlier, at **Easecase**, I built a React interface for legal professionals and integrated Elasticsearch to improve document retrieval. Today, I bring that combination of product thinking and backend experience to every project.",
    ],
  },
  principles: {
    title: "What I can help you build",
    items: [
      { title: "Web apps & business websites", description: "Responsive React interfaces and full stack applications built around your customers and workflows." },
      { title: "SaaS & e-commerce", description: "Authentication, membership plans, recurring payments, and commerce experiences that work together." },
      { title: "APIs & automation", description: "REST APIs, third-party integrations, document processing, and n8n workflows that reduce repetitive work." },
      { title: "Launch & ongoing support", description: "Database design, Docker and AWS deployment, performance improvements, and maintenance after launch." },
    ],
  },
  beyond: {
    title: "Community & continuous learning",
    paragraphs: [
      "I've served as **Technical Co-lead at Google Developer Students Club** and volunteered at **TEDxRGPV**. I was a **runner-up at MP Police Hackathon 2022** and a **Nasscom Hackathon finalist**.",
      "Alongside client work, I build projects with **GenAI, RAG, and automation**. My KinnectAI SaaS platform combines AI content creation and image editing with subscription payments.",
    ],
  },
  connectLinks: [
    { name: "Email", href: `mailto:${heroConfig.email}`, icon: "mail" as const },
    { name: "GitHub", href: "https://github.com/vipingautam07", icon: "github" as const },
    { name: "LinkedIn", href: "https://www.linkedin.com/in/vipingautam07/", icon: "linkedin" as const },
  ],
};
