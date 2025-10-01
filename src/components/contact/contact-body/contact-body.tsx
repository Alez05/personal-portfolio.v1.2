// components/contact-body.tsx
import "./contact-body.css";
import { getContactBdAction } from "./action";

const ContactBody = async () => {
  const data = await getContactBdAction();

  if (!data) {
    return (
      <section className="cb-container">
        <p className="cb-error">Failed to load content.</p>
      </section>
    );
  }

  const { intro, mid, sections, outro, email } = data;

  return (
    <section className="cb-container">
      {intro && <p className="cb-intro">{intro}</p>}

      {mid && <p className="cb-mid">{mid}</p>}

      {sections && sections.length > 0 && (
        <div className="cb-sections">
          {sections.map((s, i) => (
            <div key={i} className="cb-section">
              {s.title && <h2 className="cb-section-title">{s.title}</h2>}
              {s.content && <p className="cb-section-content">{s.content}</p>}
            </div>
          ))}
        </div>
      )}

      {outro && (
        <p className="cb-outro">
          {outro.replace("fill out the form below", "")}
          <a href="#contact-form" className="cb-link">
            fill out the form below
          </a>
          {" or send me an "}
          {email ? (
            <a href={`mailto:${email}`} className="cb-email-link">
              email
            </a>
          ) : (
            "email"
          )}
          {" directly."}
        </p>
      )}
    </section>
  );
};

export { ContactBody };
