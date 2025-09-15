import { getProjectCardAction } from "./action";
import type { TProjectCard } from "./project-card-type";
import "./project-card.css";

const ProjectCard = async () => {
  const data = await getProjectCardAction();

  if (!data) {
    return (
      <section className="prj-container">
        <p className="prj-error">Failed to load projects</p>
      </section>
    );
  }

  return (
    <section className="prj-container">
      <div className="prj-grid">
        {data.map((project: TProjectCard, i: number) => (
          <article key={i} className="prj-card">
            {/* Image */}
            {project.image && (
              <img
                src={project.image}
                alt={project.name ?? "Project image"}
                className="prj-image"
              />
            )}

            {/* Header row: name + tools */}
            <div className="prj-header">
              {project.name && <h3 className="prj-name">{project.name}</h3>}
              {project.tools && (
                <div className="prj-tools">
                  {project.tools.map((tool, idx) => (
                    <img
                      key={idx}
                      src={tool.icon}
                      alt={tool.label ?? ""}
                      title={tool.label}
                      className="prj-tool-icon"
                    />
                  ))}
                </div>
              )}
            </div>

            {/* Domain */}
            {project.domain && <p className="prj-domain">{project.domain}</p>}

            {/* Description */}
            {project.description && (
              <p className="prj-description">{project.description}</p>
            )}

            {/* CTA (aligned left) */}
            {project.cta?.label && project.cta?.link && (
              <a
                href={project.cta.link}
                className="prj-cta"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>{project.cta.label}</span>
                {project.cta.icon && (
                  <i
                    className={`prj-cta-icon ${project.cta.icon}`}
                    aria-hidden="true"
                  />
                )}
              </a>
            )}
          </article>
        ))}
      </div>
    </section>
  );
};

export { ProjectCard };
