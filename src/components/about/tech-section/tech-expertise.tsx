import { DomainExpertise } from '../expertise-section'
import { SkillGroup } from '../skilll-group'
import './tech-section.css'

const TechSection = () => {
  return (
    <section className='thc-container'>
      <h1 className='thc-title'>Technical <span className='thc-color'>Expertise</span></h1>
      <p className='thc-description'>A comprehensive skill set spanning programming languages, frameworks, and specialized domains in autonomous systems and computer vision.</p>
      <DomainExpertise />
      <SkillGroup />
    </section>
  )
}

export { TechSection }
