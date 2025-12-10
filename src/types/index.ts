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
  techStack?: string[];      // e.g. Python, Vue
  concepts?: string[];      // e.g. REST API, Multi-threading
  infrastructure?: string[]; // e.g. Docker, Nginx
}

export interface BulletItem {
  label: string; // The bold title (e.g., "AI Development")
  text: string;  // The detailed content
}

export interface InfoBlock {
  title: string;       // e.g. "Workflow Automation (n8n)"
  description: string; // HTML supported
  url?: string;
  linkText?: string;
}

export interface VersionTechStack {
  label: string;      // e.g. "Tech Stack" or "Backend (FastAPI)"
  tags: string[];     // e.g. ["Python", "Django"]
}

// For the Version itself (Monolith vs Decoupled)
export interface ProjectVersion {
  title: string;       // e.g. "1. The Monolithic Full-Stack App"
  description: string;
  githubUrl?: string;
  liveUrl?: string;
  techStack: VersionTechStack[]; // A version can have multiple stack groups
}

export interface Project {
  title: string;
  description: string;
  layout: Layout;

  versions?: ProjectVersion[];

  // Content
  responsibilities?: BulletItem[];
  features?: BulletItem[];

  infoBlock?: InfoBlock;
  
  // Organized Tags
  tags: ProjectTags;
  
  // External links
  githubUrl?: string;
  liveUrl?: string;

  // Screenshot
  isGrid?: boolean; // use to switch screenshot layout to 2-column
  images?: string[];
}