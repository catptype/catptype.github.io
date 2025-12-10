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

export interface ProjectTags {
  techStack: string[];      // e.g. Python, Vue
  concepts?: string[];      // e.g. REST API, Multi-threading
  infrastructure?: string[]; // e.g. Docker, Nginx
}

export interface Project {
  title: string;
  description: string;
  layout: Layout;

  // Content
  responsibilities?: string[];
  features?: string[];
  
  // Organized Tags
  tags: ProjectTags;
  
  // External links
  githubUrl?: string;
  liveUrl?: string;

  // Screenshot
  isGrid?: boolean; // use to switch screenshot layout to 2-column
  images: string[];
}