import dynamic from "next/dynamic";
import { getProjectHlAction } from "./action";
import "./project-hl.css";
import ProjectHlClient from "./projecthl-client";

// Load client dynamically (no SSR)

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
        {/* LEFT COLUMN */}
        <div className="ph-text-column">
          {title && <h2 className="ph-title">{title}</h2>}
          {description && <p className="ph-description">{description}</p>}
          {cta && (
            <div className="ph-cta">
              <a href={cta.link} className="ph-cta-button">{cta.label}</a>
            </div>
          )}
        </div>

        {/* RIGHT COLUMN: Client Slider */}
        <div className="ph-client-column">
          <ProjectHlClient projects={projects as any} />
        </div>
      </div>
    </section>
  );
};

export { ProjectHl };
