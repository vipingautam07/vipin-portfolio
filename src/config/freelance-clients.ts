export type FreelanceClient = {
  title: string;
  website?: string;
  preview?: string;
  /** Fraction of the supplied screenshot occupied by browser chrome. */
  previewInset?: number;
};

export const freelanceClients: FreelanceClient[] = [
  {
    "title": "Kripanidhi Legal Services",
    "website": "https://kripanidhilegalservices.com/",
    "preview": "/assets/clients/kripanidhi-legal-services.png",
    "previewInset": 0.162
  },
  {
    "title": "AwasthiDigital",
    "website": "https://awasthidigital.com/",
    "preview": "/assets/clients/awasthi-digital.png",
    "previewInset": 0.162
  },
  {
    "title": "Makaan Malikkh",
    "website": "https://makaanmalikkh.com/about-us/",
    "preview": "/assets/clients/makaan-malikkh.png",
    "previewInset": 0.162
  },
  {
    "title": "MagicProctor",
    "website": "https://magicproctor.com/",
    "preview": "/assets/clients/magic-proctor.png",
    "previewInset": 0.162
  },
  {
    "title": "Solar Design Expert",
    "website": "https://solardesignexpert.com/",
    "preview": "/assets/clients/solar-design-expert.png",
    "previewInset": 0.162
  },
  {
    "title": "Sircles AI",
    "website": "https://sircles-waitlist.vercel.app/",
    "preview": "/assets/clients/sircles-ai.png",
    "previewInset": 0.162
  }
];
