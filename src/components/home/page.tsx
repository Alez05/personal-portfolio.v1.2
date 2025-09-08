import { ContactCTA } from "@components/shared"
import { HomeHero } from "./home-hero"
import { AboutSection } from "./about-hl"
import { SkillsHighlights } from "./skills-hl"
import { ProjectHighlight } from "./project-hl"

const Home = () => {
  return (
    <div>
      <HomeHero />
      <AboutSection />
      <SkillsHighlights />
      <ProjectHighlight />
      <ContactCTA />
    </div>
  )
}


export { Home }
