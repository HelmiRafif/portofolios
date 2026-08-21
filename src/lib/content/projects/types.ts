export type Project = {
  id: string;
  title: {
    en: string;
    id: string;
  };
  description: {
    en: string;
    id: string;
  };
  role: string;
  techStack: string[];
  highlights: {
    en: string[];
    id: string[];
  };
  impact?: string;
  links?: {
    website?: string;
    repo?: string;
  };
  featured: boolean;
  updatedAt: string;
};
