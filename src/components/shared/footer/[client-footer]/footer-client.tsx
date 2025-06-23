'use client'
import { useState } from 'react'
import '../footer.css'

const FooterClient = () => {
  const [openSection, setOpenSection] = useState<string | null>(null)

  const toggle = (section: string) => {
    setOpenSection(prev => (prev === section ? null : section))
  }

  return (
    <div className="footer-sections">
      <div className='footer-group'>
        <button className='footer-toggle' onClick={() => toggle('resources')}>
          Resources <span>{openSection === 'resources' ? <i className="fa-solid fa-chevron-up"></i> : <i className="fa-solid fa-chevron-down"></i>}</span>
        </button>
        { openSection === 'resources' && (
            <ul className='footer-links'>
              <li><a href="/about"><i className="fa-solid fa-id-badge"></i> About</a></li>
              <li><a href="/projects"><i className="fa-solid fa-book-open text-lg"></i> Projects</a></li>
              <li><a href="/contact"><i className="fa-solid fa-comment"></i> Contact</a></li>
              <li><a href="/blog"><i className="fa-solid fa-pen-fancy"></i> Blog</a></li>
            </ul>
          )}
      </div>
        <div className="footer-group">
        <button className="footer-toggle" onClick={() => toggle('socials')}>
          Socials <span>{openSection === 'socials' ? <i className="fa-solid fa-chevron-up"></i> : <i className="fa-solid fa-chevron-down"></i>}</span>
        </button>
        {openSection === 'socials' && (
          <ul className="footer-links">
            <li><i className="fab fa-github"></i> <a href="https://github.com">GitHub</a></li>
            <li><i className="fab fa-linkedin"></i> <a href="https://linkedin.com">LinkedIn</a></li>
            <li><i className="fab fa-twitter"></i> <a href="https://twitter.com">Twitter</a></li>
          </ul>
        )}
      </div>

      <div className="footer-group">
        <button className="footer-toggle" onClick={() => toggle('blogs')}>
          Latest Blogs <span>{openSection === 'blogs' ? <i className="fa-solid fa-chevron-up"></i> : <i className="fa-solid fa-chevron-down"></i>}</span>
        </button>
        {openSection === 'blogs' && (
          <ul className="footer-links">
            <li><a href="/blog/why-i-build-from-scratch">Why I Build From Scratch</a></li>
            <li><a href="/blog/mobile-first">Mobile-First Isn’t Optional</a></li>
          </ul>
        )}
      </div>
    </div>
  )
}

export {FooterClient}
