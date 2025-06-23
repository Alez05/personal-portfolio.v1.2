import { Button, Hero } from "@components/shared"

const Contact = () => {
  return (
    <div className="p-10 text-center text-2xl">
      <Hero title="Contact me" description="Questions/comments? Or are you here to request a free quote for a website, logo design, or something else? Feel free to contact me via the form below. You'll get your answer on the same day.">
        <Button>To contact form</Button>
      </Hero>
    </div>
  )
}

export { Contact }
