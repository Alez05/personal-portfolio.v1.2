import { TProjectHl } from "./project-hl.type";
import { getProjectHlAction } from "./action";
import { ProjectHlClient } from "./projecthl-client";
import "./project-hl.css";

const ProjectHl = async () => {
  const data: TProjectHl | null = await getProjectHlAction();

  if (!data) {
    return (
      <section className="ph-section">
        <div className="ph-container">
          <p className="ph-error">Failed to load projects</p>
        </div>
      </section>
    );
  }

  const { title, description, videos, cta } = data;

  return (
    <section className="ph-section">
        <div className="ph-left">
          {title && <h2 className="ph-title">{title}</h2>}
        </div>
      <div className="ph-layout">
        {/* LEFT COLUMN */}

        {/* RIGHT COLUMN */}
        <div className="ph-right">
          <div className="ph-text-description">
            {description && <p className="ph-description">{description}</p>}

            {cta &&
              cta.map((item, idx) => (
                <div key={idx} className="ph-cta">
                  <a href={item.href} className="ph-cta-button">
                    {item.label}
                  </a>
                </div>
              ))}
          </div>

          <div className="ph-client-column">
            <ProjectHlClient videos={videos} />
          </div>
        </div>
      </div>
    </section>
  );
};

export { ProjectHl };
