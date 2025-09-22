// components/contact-hero.tsx
import "./contact-hero.css";
import Image from "next/image";
import { getContactHrAction } from "./action";

const ContactHero = async () => {
  const data = await getContactHrAction();

  if (!data) {
    return (
      <section className="hmh-container">
        <div className="hmh-content">
          <p className="hmh-subtitle">Failed to load hero content.</p>
        </div>
      </section>
    );
  }

  const { name, description, cta, image } = data;

  // Optional: split name for highlighting if it contains "Build Something Together"
  const highlightText = "Build Something Together";
  const nameParts = name?.split(highlightText) || [name || ""];

  return (
    <section className="hmh-container">
      <div className="hmh-content">
        {name && (
          <h1 className="hmh-title">
            {nameParts[0]}
            <span className="hmh-color">{highlightText}</span>
            {nameParts[1]}
          </h1>
        )}
        {description && <p className="hmh-subtitle">{description}</p>}
        {cta && (
          <a href={cta.link} className="hmh-button">
            {cta.label}
          </a>
        )}
      </div>
      {image && (
        <div className="hmh-image">
          <Image
            src={image}
            alt="Profile Illustration"
            width={400}
            height={400}
            priority
          />
        </div>
      )}
    </section>
  );
};

export { ContactHero };
