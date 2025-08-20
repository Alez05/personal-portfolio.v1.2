import { DownloadButton } from '@components/shared'
import './about-hero.css'

const AboutHero = () => {
  return (
    <div className='ah-container'>
      <h1 className='ah-title'>About Me</h1>
      <p className='ah-description'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis commodi cum repellendus voluptate in quibusdam tenetur labore atque perspiciatis id eligendi ipsam ipsum, doloremque suscipit at adipisci! Dolorum, facere molestiae.</p>
      <a href="#about-me" className='ah-button'>Read more <i className="fa-solid fa-arrow-down"></i></a>
    </div>
  )
}

export { AboutHero }
