import "./projects.css";
import { getProjectSectionAction } from "./action";
import { TProjectSection } from "./projects.type";

const ProjectSection = async ({ children }:TProjectSection) => {
  const data = await getProjectSectionAction();

  if (!data) {
    return (
      <section className="prs-container">
        <p className="prs-error">Failed to load project section</p>
      </section>
    );
  }

  return (
    <section className="prs-container">
      <div className="prs-header">
        {data.title && <h2 className="prs-title">{data.title}</h2>}
        {data.description && (
          <p className="prs-description">{data.description}</p>
        )}
      </div>

      <div className="prs-content">{children}</div>
    </section>
  );
};

export { ProjectSection };
