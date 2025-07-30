// api/cv/cv.types.ts

export type TPersonalInfo = {
  name: string
  title: string
  email: string
  phone: string
  location: string
  linkedin: string
  github: string
}

export type TSummary = {
  title: string
  content: string
}

export type TSkillCategory = {
  name: string
  content: string[]
}

export type TTechSkills = {
  title: string
  content: Record<string, TSkillCategory>
}

export type TProject = {
  name: string
  date: string
  description: string
  highlights: string[]
  github?: string
}

export type TProjects = {
  title: string
  content: TProject[]
}

export type TEducationItem = {
  name: string
  location: string
  date: string
  details: string[]
}

export type TEducation = {
  title: string
  content: TEducationItem[]
}

export type TExperienceItem = {
  name: string
  location: string
  date: string
  details: string[]
}

export type TExperience = {
  title: string
  content: TExperienceItem[]
}

export type TCertification = {
  name: string
  issuer: string
  date: string
}

export type TCertifications = {
  title: string
  content: TCertification[]
}

export type TLanguage = {
  language: string
  level: string
}

export type TLanguages = {
  title: string
  content: TLanguage[]
}

export type TCVData = {
  personal_info: TPersonalInfo
  summary: TSummary
  techskills: TTechSkills
  projects: TProjects
  education: TEducation
  experience: TExperience
  certification: TCertifications
  languages: TLanguages
}
