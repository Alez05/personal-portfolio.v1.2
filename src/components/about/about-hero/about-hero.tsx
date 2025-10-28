import { DownloadButton } from '../../shared'
import './about-hero.css'

const AboutHero = () => {
  return (
    <div className='ah-container'>
      <h1 className='ah-title'>About Me</h1>
      <p className='ah-description'>I’m a fullstack developer passionate about building elegant, performant web apps. I enjoy turning ideas into interactive experiences and working with tools and teams that help me grow.</p>
      <div className='ah-wrapper'>
        <DownloadButton path='cv/cv.pdf' />
        <a href="#about-me" className='ah-button'>Read more</a>
      </div>
    </div>
  )
}

export { AboutHero }
