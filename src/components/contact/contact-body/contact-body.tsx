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

  const { intro, mid, sections, outro, links } = data;

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

      {(outro || links) && (
        <p className="cb-outro">
          {outro}
          {links?.form && (
            <>
              <a href={links.form.href} className="cb-link">
                {links.form.label}
              </a>
              {" or "}
            </>
          )}
          {links?.email && (
            <a href={`mailto:${links.email.address}`} className="cb-email-link">
              {links.email.label}
            </a>
          )}
          {links?.email && " directly."}
        </p>
      )}
    </section>
  );
};

export { ContactBody };
