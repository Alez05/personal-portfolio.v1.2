// components/home/AboutSection.tsx
import "./about.css";
import { DomainExpertise } from "@components/about";
import { getAboutSectionAction } from "./action";

const AboutSection = async () => {
  const about = await getAboutSectionAction();

  if (!about) return <section className="ha-about-section">No about data</section>;

  return (
    <section className="ha-about-section">
      <div className="ha-about-content">
        <h2 className="ha-about-title">{about.title}</h2>
        {about.description && <p className="ha-about-description">{about.description}</p>}

        <div className="ha-about-carousel">
          <DomainExpertise />
        </div>

        {about.ctaLink && (
          <a href={about.ctaLink} className="ha-about-cta">
            Learn More
          </a>
        )}
      </div>
    </section>
  );
};

export { AboutSection };
