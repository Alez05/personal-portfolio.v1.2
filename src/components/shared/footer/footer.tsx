import './footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="ft-content">
        {/* Column 1 */}
        <div className="ft-col">
          <h2 className="ft-title"><span className="ft-color">Alexandru</span> Cercel</h2>
          <p className="ft-description">
            Full stack web developer with proven knack in industry, focused on front end development,
            deep learning and system research.
          </p>
          <div className="ft-socials">
            <a href="/linkedin"><i className="fa-brands fa-linkedin"></i></a>
            <a href="/github"><i className="fa-brands fa-github"></i></a>
            <a href="/email"><i className="fa-solid fa-envelope"></i></a>
            <a href="/codewars"><i className="fa-solid fa-code"></i></a>
            <a href="/stackoverflow"><i className="fa-brands fa-stack-overflow"></i></a>
          </div>
        </div>

        {/* Column 2 */}
        <div className="ft-col">
          <h2>Quick links</h2>
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/projects">Projects</a>
          <a href="/blog">Blog</a>
          <a href="/contact">Contact</a>
        </div>

        {/* Column 3 */}
        <div className="ft-col">
          <h2>Get in touch</h2>
          <p><i className="fa-solid fa-envelope"></i> cercel.alexandru436@gmail.com</p>
          <p><i className="fa-solid fa-location-dot"></i> London, UK</p>
        </div>
      </div>

      {/* Bottom rights row */}
      <div className="ft-rights">
        <p>© 2025 Alexandru Cercel. All rights reserved.</p>
      </div>
    </footer>
  )
}

export { Footer }
