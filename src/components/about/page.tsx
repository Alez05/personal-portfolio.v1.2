import { Button, Hero } from "@components/shared"
import { JourneySection } from "./journey"
import { CurriculumVitae } from "./curriculum/cv"

const About = () => {
  return (
    <>
      <Hero title="About me" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.">
        <Button variant="solid">Read more</Button>
        <Button variant="outline">Download CV</Button>
      </Hero>
      <Hero title="Elif" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." />
      <JourneySection/>
      <CurriculumVitae />
    </>
  )
}

export { About }
