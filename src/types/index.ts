export interface Project {
  id: string;
  titleKey: string;
  descriptionKey: string;
  image: string;
  tech: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
}

export interface Experience {
  id: string;
  companyKey: string;
  roleKey: string;
  descriptionKey: string;
  startDate: string;
  endDate: string | null;
  tech: string[];
}

export interface SkillCategory {
  categoryKey: string;
  skills: Skill[];
}

export interface Skill {
  name: string;
  icon?: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}

export interface NavItem {
  labelKey: string;
  href: string;
}

export interface BlogPost {
  id: string;
  slug: string;
  titleKey: string;
  excerptKey: string;
  date: string;
  readingTime: string;
  tags: string[];
}
