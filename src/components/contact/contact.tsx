import './contact.css'
import { ContactForm } from "./contact-form"
import { SocialBox } from "./social-box"
import { Opportunities } from "./opportunities"
import { ContactHero } from "./contact-hero"
import { ContactBody } from './contact-body'

const Contact = () => {
  return (
    <div>
      <ContactHero />
      <ContactBody />
      <div className="p-10 text-center text-2xl">
        <div className="contact-container">
          {/* Socials */}
          <div className="contact-left">
            <SocialBox />
            <Opportunities />
          </div>
          {/* Contact Form */}
          <div className="contact-right">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  )
}

export { Contact }
