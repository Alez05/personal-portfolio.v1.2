import { ContactCTA } from "@components/shared"
import { AboutHero } from "./about-hero"
import { CareerJourney } from "./carrer-journey"
import { TechSection } from "./tech-section"
import { EducationSection } from "./education-section"
import { Hobbies } from "./hobbies"

const About = () => {
  return (
    <div>
      <AboutHero />
      {/* <DownloadSection /> */}
      <CareerJourney />
      <TechSection />
      <EducationSection />
      <Hobbies />
      <ContactCTA />
    </div>
  )
}

export { About }
