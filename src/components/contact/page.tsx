import { Button, Hero } from "@components/shared"
import { ContactForm } from "./contact-form"
import { SocialBox } from "./social-box"
import './contact.css'

const Contact = () => {
  return (
    <div className="p-10 text-center text-2xl">
      <Hero title="Contact me" description="Questions/comments? Or are you here to request a free quote for a website, logo design, or something else? Feel free to contact me via the form below. You'll get your answer on the same day.">
        <Button>To contact form</Button>
      </Hero>
      <div className="contact-container">
        {/* Socials */}
        <div className="contact-left">
          <SocialBox />
        </div>

        {/* Contact Form */}
        <div className="contact-right">
          <ContactForm />
        </div>
      </div>
    </div>
  )
}

export { Contact }
