import { ContactCTA } from "@components/shared"
import { HomeHero } from "./home-hero"
import { AboutSection } from "./about"
import { HomeSkills } from "./home-skills"

const Home = () => {
  return (
    <div>
      <HomeHero />
      <AboutSection />
      <HomeSkills />
      <ContactCTA />
    </div>
  )
}


export { Home }
