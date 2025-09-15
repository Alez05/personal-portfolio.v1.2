export type TCareerJourney = {
  jobTitle: string
  company: string
  location: string
  date: string
  role?: string
  description?: string
  responsibilitiesTitle: string
  responsibilities: string[]
  technologiesTitle: string
  technologies: string[]
  icons: {
    jobTitle: string
    company: string
    location: string
    date: string
  }
}
