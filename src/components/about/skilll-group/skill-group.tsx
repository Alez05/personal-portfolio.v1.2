import { SkillGroupData } from "@app/api/skills/skillsdata"
import "./skill-group.css"

const SkillGroup = () => {
  return (
    <section className="skill-container">
      <div className="skills-section">
        {SkillGroupData.section.map((group, idx) => (
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
      </div>
    </section>
  )
}

export { SkillGroup }
