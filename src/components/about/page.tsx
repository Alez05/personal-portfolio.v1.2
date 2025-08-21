import { Button, ContactCTA, Hero } from "@components/shared"
import { Skills } from "./skills"
import { DownloadSection } from "./dwd-section"
import { AboutHero } from "./about-hero"
import { ExpertiseSection } from "./expertise-section"

const About = () => {
  return (
    <div>
      <AboutHero />
      <ExpertiseSection />
      <DownloadSection />
      <Skills />
      <ContactCTA />
    </div>
  )
}

export { About }
