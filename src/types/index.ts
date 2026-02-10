export interface Education {
  id: string;
  institutionKey: string;
  qualificationKey: string;
  year: number;
}

export interface Experience {
  id: string;
  companyKey: string;
  roleKey: string;
  descriptionKey: string;
  gradeKey: string;
  startDate: string;
  endDate: string | null;
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

export interface Award {
  id: string;
  titleKey: string;
  year: number;
}

export interface AssessmentMark {
  year: number;
  score: number;
}
