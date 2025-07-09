export interface Project {
  id: string;
  name: string;
  description: string;
  liveLink: string;
  githubLink?: string;
  technologies?: string[];
  image?: string;
}

export interface Skill {
  name: string;
  icon?: string;
  level?: number;
}

export interface SkillCategory {
  category: string;
  skills: Skill[];
}

export interface PersonalInfo {
  name: string;
  title: string;
  introduction: string;
  profilePhoto: string;
  availabilityStatus: {
    available: boolean;
    message: string;
  };
}

export interface ContactInfo {
  facebook?: string;
  zalo?: string;
  phone?: string;
  email?: string;
  github?: string;
  linkedin?: string;
}

export interface PortfolioConfig {
  personal: PersonalInfo;
  projects: Project[];
  skills: {
    [key: string]: Skill[];
  };
  contact: ContactInfo;
}
