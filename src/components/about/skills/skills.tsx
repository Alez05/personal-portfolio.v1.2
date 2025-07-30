import { skillsData } from "@app/api/skills/skillsdata"
import "./skills.css"

const Skills = () => {
  return (
    <section className="skills-section">
      {skillsData.section.map((group, idx) => (
        <div key={idx} className="skill-group">
          <h2 className="skill-title">{group.title}</h2>
          <p className="skill-subtitle">{group.subtitle}</p>
          <div className="skill-grid">
            {group.skills.map((skill, i) => (
              <div key={i} className="skill-card">
                <img src={skill.icon} alt={skill.name} className="skill-icon" />
                <span className="skill-name">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  )
}

export { Skills }
