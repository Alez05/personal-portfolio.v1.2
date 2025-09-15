import { Button, ContactCTA, Hero } from "@components/shared"

const Projects = () => {
  return (
    <div className="p-10 text-center text-2xl">
      <Hero title="Projects" description="Example projects such as e-commerce, business websites, real-time administration apps, etc. Web design, web development, logo design.">
        <Button>View Projects</Button>
      </Hero>
      <ContactCTA />
    </div>
  )
}

export { Projects }
