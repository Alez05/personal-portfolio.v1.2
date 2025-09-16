import "./blog-section.css";
import { getBlogSectionAction } from "./action";
import { TBlogSection } from "./blog-section.type";

const BlogSection = async ({ children }:TBlogSection) => {
  const data = await getBlogSectionAction();

  if (!data) {
    return (
      <section className="bls-container">
        <p className="bls-error">Failed to load blog section</p>
      </section>
    );
  }

  return (
    <section className="bls-container">
      <div className="bls-header">
        {data.title && <h2 className="bls-title">{data.title}</h2>}
        {data.description && (
          <p className="bls-description">{data.description}</p>
        )}
      </div>

      <div className="bls-content">{children}</div>
    </section>
  );
};

export { BlogSection };
