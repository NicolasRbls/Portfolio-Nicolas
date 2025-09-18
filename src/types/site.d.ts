export interface Project {
  title: string
  description: string
  image: string
  stack: string[]
  demo: string
  repo: string
}

export interface Skill {
  name: string
  level: number
  category: "frontend" | "backend" | "tools" | "design" | "algorithmique" | "cloud"
}

export interface SiteData {
  name: string
  role: string
  location: string
  tagline: string
  bio: string // Added missing bio property
  cvUrl: string
  email: string
  phone: string
  about : string
  pdp : string
  projects: Project[]
  skills: Skill[]
}
