import { getSkillsAction } from "./action";
import "./skill-set.css";

const SkillSet = async () => {
  const skillsData = await getSkillsAction();

  if (!skillsData || skillsData.length === 0) {
    return (
      <section className="as-container">
        <p className="as-error">Failed to load skills</p>
      </section>
    );
  }

  return (
    <section className="as-container">
      <div className="as-wrapper">
        {skillsData.map((set, idx) => (
          <div key={idx} className="as-group">
            <h2 className="as-title">{set.category}</h2>
            {set.description && <p className="as-subtitle">{set.description}</p>}

            <div className="as-grid">
              {set.skills.map((skill, i) => (
                <div key={i} className="as-card">
                  <img src={skill.icon} alt={skill.name} className="as-icon" />
                  <span className="as-name">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export { SkillSet };
