import { getHeroBlAction } from "./action";
import "./hero-bl.css";

const HeroBl = async () => {
  const data = await getHeroBlAction();

  if (!data) {
    return (
      <section className="blh-container">
        <p className="blh-error">Failed to load hero section</p>
      </section>
    );
  }

  return (
    <section
      className="blh-container"
      style={{ backgroundImage: `url(${data.image ?? ""})` }}
    >
      <div className="blh-content">
        {data.title && <h1 className="blh-title">{data.title}</h1>}
        {data.description && <p className="blh-description">{data.description}</p>}
        {data.cta?.label && data.cta?.link && (
          <a href={data.cta.link} className="blh-button">
            {data.cta.label}
          </a>
        )}
      </div>
    </section>
  );
};

export { HeroBl };
