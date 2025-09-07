import { ContactCTA } from "@components/shared"
import { HomeHero } from "./home-hero"
import { AboutSection } from "./about"

const Home = () => {
  return (
    <div>
      <HomeHero />
      <AboutSection />
      <ContactCTA />
    </div>
  )
}


export { Home }
