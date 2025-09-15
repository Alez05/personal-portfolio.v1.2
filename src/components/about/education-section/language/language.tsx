// Languages.tsx
import "./language.css";
import { getLanguagesAction } from "./action";

const Languages = async () => {
  const languages = await getLanguagesAction();

  if (!languages)
    return <p className="lang-warning">Failed to load languages...</p>;

  return (
    <section className="lang-section">
      <h1 className="lang-title">Languages</h1>
      <div className="lang-grid">
        {languages.map((lang) => (
          <div key={lang.id} className="lang-card">
            <span className="lang-icon">{lang.icon}</span>
            <h2 className="lang-name">{lang.name}</h2>
            <p className={`lang-level lang-${lang.level.toLowerCase()}`}>
              {lang.level}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export { Languages };
