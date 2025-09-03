import { DomainExpertise } from './expertise-section'
import { SkillGroup } from './skilll-group'
import './tech-section.css'

const TechSection = () => {
  return (
    <section className='th-container'>
      <div className='th-wrapper'>
        <h1 className='th-title'>Technical <span className='th-color'>Expertise</span></h1>
        <p className='th-description'>A comprehensive skill set spanning programming languages, frameworks, and specialized domains in autonomous systems and computer vision.</p>
      </div>
      <DomainExpertise />
      <SkillGroup />
    </section>
  )
}

export { TechSection }
