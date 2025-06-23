import { Button } from "@components/shared"
import { Hero } from "@components/shared/hero"

const Home = () => {
  return (
    <div>
      <Hero title="Alexandru Cercel" subtitle="Front-end Developer" location="London, UK" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.">
        <Button>Resume</Button>
        <Button variant="outline">Resume</Button>
      </Hero>
      <br />
      <Hero title="Alexandru Cercel" subtitle="Front-end Developer" location="London, UK" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.">
        <Button>Resume</Button>
        <Button variant="outline">Resume</Button>
      </Hero>
      <Hero title="Alexandru Cercel" subtitle="Front-end Developer" location="London, UK" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.">
        <Button>Resume</Button>
        <Button variant="outline">Resume</Button>
      </Hero>
    </div>
  )
}


export { Home }
