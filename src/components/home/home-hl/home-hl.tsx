// components/home/Hero.tsx
import "./home-hl.css";
import { getHomeHl } from "./action";

const HomeHl = async () => {
  const hero = await getHomeHl();

  if (!hero) return <section className="hero-container">No hero data</section>;

  return (
    <section className="hero-container">
      {/* Left side */}
      <div className="hero-left">
        <h1 className="hero-name">{hero.name}</h1>
        <h2 className="hero-role">{hero.role}</h2>
        {hero.text && <p className="hero-text">{hero.text}</p>}

        <div className="hero-info">
          {hero.location && <p>📍 {hero.location}</p>}
          {hero.email && <p>✉️ {hero.email}</p>}
          {hero.phone && <p>📞 {hero.phone}</p>}
        </div>

        <div className="hero-buttons">
          {hero.projectsLink && (
            <a href={hero.projectsLink} className="hero-btn">
              Projects
            </a>
          )}
          {hero.contactLink && (
            <a href={hero.contactLink} className="hero-btn">
              Contact
            </a>
          )}
          {hero.downloadLink && (
            <a href={hero.downloadLink} className="hero-btn">
              Download CV
            </a>
          )}
        </div>

        {hero.socials && (
          <div className="hero-socials">
            {hero.socials.map((s, idx) => (
              <a
                key={idx}
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className={s.icon}></i>
              </a>
            ))}
          </div>
        )}
      </div>

      {/* Right side */}
      <div className="hero-right">
        {hero.profile && (
          <img
            src={hero.profile}
            alt={`${hero.name} profile`}
            className="hero-image"
          />
        )}
      </div>
    </section>
  );
};

export { HomeHl };
