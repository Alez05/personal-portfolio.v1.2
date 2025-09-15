import { getCareerJourneyAction } from './action'
import './career-journey.css'
import { TCareerJourney } from './career-journey.type'

const CareerJourney = async () => {
  const careerList: TCareerJourney[] | null = await getCareerJourneyAction()
  if (!careerList) return <p className="cr-error">Failed to load the career data</p>

  return (
    <section className="cr-container">
      <h1 className="cr-title">
        Career <span className="cr--title-color">Journey</span>
      </h1>
      <p className="cr-description">
        Building expertise through hands-on experience in autonomous systems, computer vision, and software development across diverse industries.
      </p>

      <div className="cr-cards">
        {careerList.map((career, idx) => (
          <div key={idx} className="cr-card">

            {/* Top row: Job title + company logo on left, date + role on right */}
            <div className="cr-card-header">
              <div className="cr-left-header">
                <h2 className="cr-card-title">
                  <i className={career.icons.jobTitle}></i> {career.jobTitle}
                </h2>
              </div>
              <div className="cr-right-header">
                <span className="cr-card-date">
                  <i className={career.icons.date}></i> {career.date}
                </span>
                <span className="cr-card-role">{career.role}</span>
              </div>
            </div>

            {/* Company + Location inline */}
            <div className="cr-card-meta">
              <span className="cr-card-company">
                <i className={career.icons.company}></i> {career.company}
              </span>
              <span className="cr-card-location">
                <i className={career.icons.location}></i> {career.location}
              </span>
            </div>

            {/* Description */}
            {career.description && (
              <p className="cr-card-description">{career.description}</p>
            )}

            {/* Responsibilities */}
            <div className="cr-card-responsibilities">
              <h3 className="cr-subtitle">{career.responsibilitiesTitle}</h3>
              <ul>
                {career.responsibilities.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>

            {/* Technologies */}
            <div className="cr-card-technologies">
              <h3 className="cr-subtitle">{career.technologiesTitle}</h3>
              <ul>
                {career.technologies.map((tech, i) => (
                  <li key={i} className="cr-tech">{tech}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export { CareerJourney }
