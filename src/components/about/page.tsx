import { ContactCTA } from "@components/shared"
import { AboutHero } from "./about-hero"
import { CareerJourney } from "./carrer-journey"
import { TechSection } from "./tech-section"
import { EducationSection } from "./education-section"

const About = () => {
  return (
    <div>
      <AboutHero />
      {/* <DownloadSection /> */}
      <CareerJourney />
      <TechSection />
      <EducationSection />
      <ContactCTA />
    </div>
  )
}

export { About }
