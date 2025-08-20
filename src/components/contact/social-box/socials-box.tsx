import './socials-box.css'

const SocialBox = () => {
  return (
    <div className="socials-box">
      <h2 className="socials-title">Find me on</h2>
      <ul className="socials-list">
        <li className="social-item">
          <i className="fab fa-github social-icon"></i>
          <div className='social-wrapper'>
            <p className="social-name">GitHub</p>
            <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
              @yourusername
            </a>
          </div>
        </li>

        <li className="social-item">
          <i className="fab fa-linkedin social-icon"></i>
          <div className='social-wrapper'>
            <p className="social-name">LinkedIn</p>
            <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
              yourusername
            </a>
          </div>
        </li>

        <li className="social-item">
          <i className="fab fa-twitter social-icon"></i>
          <div className='social-wrapper'>
            <p className="social-name">Twitter</p>
            <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer">
              @yourusername
            </a>
          </div>
        </li>

        <li className="social-item">
          <i className="fab fa-instagram social-icon"></i>
          <div className='social-wrapper'>
            <p className="social-name">Instagram</p>
            <a href="https://instagram.com/yourusername" target="_blank" rel="noopener noreferrer">
              @yourusername
            </a>
          </div>
        </li>
      </ul>
    </div>
  )
}


export { SocialBox }
