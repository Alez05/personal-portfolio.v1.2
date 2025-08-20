import './contact-form.css'
import { ContactFormType } from './contact-form.type'

const ContactForm = ({ children }:ContactFormType) => {
  return (
    <section id="contact-form" className='ctf-section'>
      <form className="contact-form">
        <h3 className='ctf-mini'>Keep in Touch</h3>
        <h1 className='ctf-subtitle'>Send a Message</h1>
        {/* Row: Full Name + Email */}
        <div className="ctf-row">
          <label>
            Full Name
            <input type="text" name="fullName" placeholder="Full Name" required />
          </label>
          <label>
            Email
            <input type="email" name="email" placeholder="Email" required />
          </label>
        </div>

        {/* Subject */}
        <label>
          Subject
          <input type="text" name="subject" placeholder="Subject" required />
        </label>

        {/* Message */}
        <label>
          Message
          <textarea name="message" placeholder="Message" rows={6} required></textarea>
        </label>

        {/* Submit */}
        <button type="submit">Send Message</button>
      </form>
    </section>
  )
}

export { ContactForm }
