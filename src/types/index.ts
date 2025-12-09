export interface SkillCard {
  name: string;
  url: string;
  icon: string;
  prior?: boolean;
}

export interface SkillCategory {
  title: string;
  skills: SkillCard[];
}

export type Layout = 'left' | 'right' | 'bottom' | 'none'; 

export interface Project {
  title: string;
  layout: Layout; 
  description: string;
  responsibilities?: string[];
  features?: string[];
  techStack: string[];
  deploy?: string[];
  keyConcepts: string[];
  githubUrl?: string;
  liveUrl?: string;
  images: string[];
}