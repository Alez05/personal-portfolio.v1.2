import { getProjectHighlightsAction } from "./action";
import "./project-hl.css";

const ProjectHighlight = async () => {
  const data = await getProjectHighlightsAction();
  if (!data)
    return <section className="ph-section">Failed to load projects</section>;

  return (
    <section className="ph-section">
      <h2 className="ph-title">{data.title}</h2>
      <p className="ph-description">{data.description}</p>

      <div className="ph-slider">
        {data.projects?.map((project, idx) => (
          <div key={idx} className="ph-slide">
            <img src={project.image} alt={project.name} className="ph-image" />
          </div>
        ))}
      </div>

      {data.cta && (
        <a href={data.cta.link} className="ph-cta">
          {data.cta.label}
        </a>
      )}
    </section>
  );
};

export { ProjectHighlight };
