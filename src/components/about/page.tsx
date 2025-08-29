import { ContactCTA } from "@components/shared"
import { SkillGroup } from "./skilll-group"
import { DownloadSection } from "./dwd-section"
import { AboutHero } from "./about-hero"
import { DomainExpertise } from "./expertise-section"
import { CareerJourney } from "./carrer-journey"

const About = () => {
  return (
    <div>
      <AboutHero />
      {/* <DownloadSection /> */}
      <CareerJourney />
      <SkillGroup />
      <DomainExpertise />
      <ContactCTA />
    </div>
  )
}

export { About }
