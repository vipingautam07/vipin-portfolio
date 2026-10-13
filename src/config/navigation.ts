export const headerNav = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
] as const;

export const moreNav = [
  { label: "Work", href: "/work" },
  { label: "Client Work", href: "/client-work" },
  { label: "Blog", href: "/blog" },
  { label: "Resume", href: "/resume" },
  { label: "Achievements", href: "/achievements" },
] as const;

export const footerNav = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Work", href: "/work" },
  { label: "Client Work", href: "/client-work" },
  { label: "Blog", href: "/blog" },
  { label: "Resume", href: "/resume" },
  { label: "Achievements", href: "/achievements" },
] as const;

export const commandItems = [
  ...footerNav.map((item) => ({ label: item.label, href: item.href })),
  { label: "GitHub", href: "https://github.com/vipingautam07", external: true },
  { label: "LeetCode", href: "https://leetcode.com/u/vipingautam07/", external: true },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/vipingautam07/", external: true },
  { label: "Discuss a project", href: "mailto:gautamvipin2002@gmail.com", external: true },
];
