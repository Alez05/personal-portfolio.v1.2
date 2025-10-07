// components/home/AboutSection.tsx
import "./about-hl.css";
import { Expertise } from "../../about";
import { getAboutHlAction } from "./action";

const AboutHl = async () => {
  const about = await getAboutHlAction();

  if (!about) {
    return (
      <section className="ah-section">
        <div className="ah-container">
          <p className="ah-error">Failed to load about section</p>
        </div>
      </section>
    );
  }

  return (
    <section className="ah-section">
      <div className="ah-content">
        <h2 className="ah-title">{about.title}</h2>
        {about.description && (
          <p className="ah-description">{about.description}</p>
        )}

        <div className="ah-carousel">
          <Expertise />
        </div>

        {about.ctaLink && (
          <a href={about.ctaLink} className="ah-cta">
            Learn More
          </a>
        )}
      </div>
    </section>
  );
};

export { AboutHl };
