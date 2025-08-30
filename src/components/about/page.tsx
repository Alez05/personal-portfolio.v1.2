import { ContactCTA } from "@components/shared"
import { AboutHero } from "./about-hero"
import { CareerJourney } from "./carrer-journey"
import { TechSection } from "./tech-section"

const About = () => {
  return (
    <div>
      <AboutHero />
      {/* <DownloadSection /> */}
      <CareerJourney />
      <TechSection />
      <ContactCTA />
    </div>
  )
}

export { About }
