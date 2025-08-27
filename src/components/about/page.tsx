import { Button, ContactCTA, Hero } from "@components/shared"
import { Skills } from "./skills"
import { DownloadSection } from "./dwd-section"
import { AboutHero } from "./about-hero"
import { ExpertiseSection } from "./expertise-section"
import { CareerJourney } from "./carrer-journey"

const About = () => {
  return (
    <div>
      <AboutHero />
      <ExpertiseSection />
      <CareerJourney />
      <DownloadSection />
      <Skills />
      <ContactCTA />
    </div>
  )
}

export { About }
