import { getProjectHlAction } from "./action";
import "./project-hl.css";

const ProjectHl = async () => {
  const data = await getProjectHlAction();

  if (!data) {
    return (
      <section className="ph-section">
        <div className="ph-container">
          <p className="ph-error">Failed to load projects</p>
        </div>
      </section>
    );
  }

  const { title, description, projects, cta } = data;

  return (
    <section className="ph-section">
      <div className="ph-container">
        {title && <h2 className="ph-title">{title}</h2>}
        {description && <p className="ph-description">{description}</p>}

        <div className="ph-carousel">
          {projects?.map((project, idx) => (
            <a key={idx} href={project.link} className="ph-project-card">
              <img
                src={project.image}
                alt={`Project ${idx + 1}`}
                className="ph-project-image"
              />
            </a>
          ))}
        </div>

        {cta && (
          <div className="ph-cta">
            <a href={cta.link} className="ph-cta-button">
              {cta.label}
            </a>
          </div>
        )}
      </div>
    </section>
  );
};

export { ProjectHl };
