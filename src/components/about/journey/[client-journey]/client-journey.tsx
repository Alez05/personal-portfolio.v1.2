// Journey.tsx
import { getJourneyAction } from '../action'
import type { TJourney } from '../journey.type'
import '../journey.css'

const JourneyClient = async () => {
  const journey: TJourney | null = await getJourneyAction()

  if (!journey) return <p className="journey-error">Failed to load the journey data.</p>

  return (
    <main className="journey-container">
      <h2 className="journey-title">My Journey</h2>

      {/* Icon Navigation */}
      <div className="journey-icon-nav">
        {journey.map((step, index) => (
          <div
            key={index}
            className="journey-icon"
            title={step.title}
          >
            <i className={step.icon}></i>
          </div>
        ))}
      </div>

      {/* Journey Steps */}
      <div className="journey-steps">
        {journey.map((step, index) => (
          <article key={index} className="journey-step">
            <div className="journey-step-header">
              <div className="journey-step-icon">
                <i className={`${step.icon} journey-step-icon-inner`}></i>
              </div>
              <h3 className="journey-step-title">{step.title}</h3>
            </div>
            <p className="journey-step-subtitle">{step.subtitle}</p>
            <p className="journey-step-content">{step.content}</p>
          </article>
        ))}
      </div>
    </main>
  )
}

export { JourneyClient }
