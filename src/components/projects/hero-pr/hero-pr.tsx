import { getHeroPrAction } from "./action";
import "./hero-pr.css";

const HeroPr = async () => {
  const data = await getHeroPrAction();

  if (!data) {
    return (
      <section className="prh-container">
        <p className="prh-error">Failed to load hero data</p>
      </section>
    );
  }

  return (
    <section className="prh-container">
      {/* {data.image && <img src={data.image} alt={data.title} className="prh-image" />} */}
      <div className="prh-content">
        {data.title && <h1 className="prh-title">{data.title}</h1>}
        {data.description && <p className="prh-description">{data.description}</p>}
        {data.cta?.label && data.cta?.link && (
          <a href={data.cta.link} className="prh-button">
            {data.cta.label}
          </a>
        )}
      </div>
    </section>
  );
};

export { HeroPr };
