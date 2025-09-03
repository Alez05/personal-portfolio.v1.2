import { getExpertiseAction } from './action'
import { TExpertise } from './domain-expertise.type'
import './domain-expertise.css'

const DomainExpertise = async () => {
  const expertiseList: TExpertise[] | null = await getExpertiseAction()
  if (!expertiseList) return <p className='ex-error'>Failed to load the expertise data</p>

  return (
    <section className='ex-container'>
      <h1 className='ex-title'>Domain Expertise</h1>
      <div className='ex-wrapper'>
        {expertiseList.map((expertise, i) => (
          <div className='ex-card' key={i}>
            <div className='ex-card-header'>
              <i className={expertise.icon}></i>
              <h2 className='ex-card-title'>{expertise.title}</h2>
            </div>
            <p className='ex-card-subtitle'>{expertise.subtitle}</p>
            <div className='ex-card-content'>
              {expertise.content.map((item, index) => (
                <p key={index}>{item}</p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export { DomainExpertise }
