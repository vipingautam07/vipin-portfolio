export type Achievement = {
  slug: string;
  title: string;
  organization: string;
  year: string;
  periodShort: string;
  periodLong: string;
  details?: string[];
  /** Cover image for cards and detail header */
  image?: string;
  /** Pinterest-style photo gallery on the detail page */
  gallery?: string[];
  featured?: boolean;
};

export const achievements: Achievement[] = [
  {
    "slug": "mp-police-hackathon",
    "title": "Runner-up",
    "organization": "MP Police Hackathon",
    "year": "2022",
    "periodShort": "2022",
    "periodLong": "2022",
    "details": [
      "Runner-up at MP Police Hackathon 2022."
    ],
    "featured": true
  },
  {
    "slug": "nasscom-hackathon",
    "title": "Finalist",
    "organization": "Nasscom Hackathon",
    "year": "",
    "periodShort": "Hackathon",
    "periodLong": "Hackathon finalist",
    "details": [
      "Selected as a finalist at Nasscom Hackathon."
    ]
  },
  {
    "slug": "gdsc-leadership",
    "title": "Technical Co-lead",
    "organization": "Google Developer Students Club",
    "year": "",
    "periodShort": "Community",
    "periodLong": "Community leadership",
    "details": [
      "Served as Technical Co-lead at Google Developer Students Club.",
      "Volunteered at TEDxRGPV."
    ]
  },
  {
    "slug": "mern-certification",
    "title": "Course completion",
    "organization": "Udemy & KodNest",
    "year": "",
    "periodShort": "Certification",
    "periodLong": "MERN stack web development",
    "details": [
      "Completed a MERN stack web development course from Udemy and KodNest."
    ]
  }
];

export function getAchievement(slug: string) {
  return achievements.find((item) => item.slug === slug);
}
