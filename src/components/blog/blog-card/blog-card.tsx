import "./blog-card.css";
import { getBlogCardAction } from "./action";

const BlogCard = async () => {
  const data = await getBlogCardAction(); // TBlogCard[] | null

  if (!data || data.length === 0) {
    return (
      <section className="bcs-container">
        <p className="bcs-error">No blogs found</p>
      </section>
    );
  }

  return (
    <section className="bcs-container">
      {data.map((blog, index) => (
        <article className="bcs-card" key={index}>
          {blog.image && (
            <img
              src={blog.image}
              alt={blog.name ?? "Blog image"}
              className="bcs-image"
            />
          )}

          <div className="bcs-content">
            {blog.name && <h3 className="bcs-title">{blog.name}</h3>}
            {blog.description && (
              <p className="bcs-desc">{blog.description}</p>
            )}
            {blog.cta?.label && blog.cta?.link && (
              <a href={blog.cta.link} className="bcs-cta">
                {blog.cta.label} <span className="bcs-cta-arrow">→</span>
              </a>
            )}
          </div>
        </article>
      ))}
    </section>
  );
};

export { BlogCard };
