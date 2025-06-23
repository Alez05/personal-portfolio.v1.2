import { Button, Hero } from "@components/shared"

const About = () => {
  return (
    <>
      <Hero title="About me" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.">
        <Button variant="solid">Read more</Button>
        <Button variant="outline">Download CV</Button>
      </Hero>
    </>
  )
}

export { About }
