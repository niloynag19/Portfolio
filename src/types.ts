export interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  githubUrl: string;
  liveUrl: string;
}

export interface Skill {
  name: string;
  percentage: number;
  icon: string;
}

export interface ProfessionalSkill {
  name: string;
  percentage: number;
}

export interface Service {
  title: string;
  description: string;
  icon: string;
}

export interface EducationItem {
  year: string;
  degree: string;
  institution: string;
  details: string;
  gpa: string;
  color: 'primary' | 'secondary';
}
