import { getBlogHlAction } from "./action";
import { TBlogHl } from "./blog-hl.type";
import "./blog-hl.css";

const BlogHl = async () => {
  const data: TBlogHl | null = await getBlogHlAction();

  if (!data) {
    return (
      <section className="bh-section">
        <div className="bh-container">
          <p className="bh-error">Failed to load blog highlights.</p>
        </div>
      </section>
    );
  }

  const { title, description, blogs, cta } = data;

  return (
    <section className="bh-section">
      <div className="bh-container">
        {title && <h2 className="bh-title">{title}</h2>}
        {description && <p className="bh-description">{description}</p>}

        <div className="bh-carousel">
          {blogs?.map((blog, index) => (
            <a key={index} href={blog.link} className="bh-blog-card">
              <img
                src={blog.image}
                alt={`Blog ${index + 1}`}
                className="bh-blog-image"
              />
            </a>
          ))}
        </div>

        {cta && (
          <div className="bh-cta">
            <a href={cta.link} className="bh-cta-button">
              {cta.label}
            </a>
          </div>
        )}
      </div>
    </section>
  );
};

export { BlogHl };
