import { Button, ContactCTA, Hero } from "@components/shared"
import { JourneySection } from "./journey"
import { Skills } from "./skills"
import { DownloadSection } from "./dwd-section"
import { AboutHero } from "./about-hero"

const About = () => {
  return (
    <div>
      <AboutHero />
      {/* <JourneySection/> */}
      <DownloadSection />
      <Skills />
      <ContactCTA />
    </div>
  )
}

export { About }
