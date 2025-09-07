import { getHomeSkillsAction } from "./action";
import "./home-skills.css";

const HomeSkills = async () => {
  const data = await getHomeSkillsAction();

  if (!data)
    return <section className="hs-section">Failed to load skills</section>;

  return (
    <section className="hs-section">
      <h2 className="hs-title">{data.title}</h2>
      <p className="hs-description">{data.description}</p>

      <div className="hs-skills-grid">
        {data.skills?.map((skill, index) => (
          <div key={index} className="hs-skill-box">
            {skill.icon && (
              <img
                src={skill.icon}
                alt={skill.name}
                className="hs-skill-icon"
              />
            )}
            <span className="hs-skill-name">{skill.name}</span>
          </div>
        ))}
      </div>

      {data.skillLink && (
        <a href={data.skillLink} className="hs-skill-link">
          See all skills
        </a>
      )}
    </section>
  );
};

export { HomeSkills };
