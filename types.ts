export interface Education {
  school: string;
  degree: string;
  duration: string;
  details: string;
}

export interface Experience {
  company: string;
  role: string;
  duration: string;
  points: string[];
}

export interface Project {
  name: string;
  techStack: string;
  description: string[];
  link?: string;
}

export interface Achievement {
  title: string;
}

export interface SkillCategory {
  category: string;
  skills: string[];
}

export interface ResumeData {
  name: string;
  contact: {
    email: string;
    linkedin: string;
    github: string;
  };
  education: Education[];
  experience: Experience[];
  projects: Project[];
  skills: SkillCategory[];
  achievements: Achievement[];
}