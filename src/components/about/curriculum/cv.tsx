import { fetchCVData } from "@app/api/api";
import './cv.css';

export default async function CurriculumVitae() {
  const data = await fetchCVData();

  if (!data) return <p>Failed to load CV data.</p>;

  return (
    <main className="cv-container">
      <div className="cv-wrapper">

        {/* Header */}
        <header className="cv-header">
          <h1 className="cv-name">{data.personal_info.name.toUpperCase()}</h1>
          <p className="cv-title">{data.personal_info.title}</p>
          <div className="cv-contact">
            <p className="cv-contact-detail">{data.personal_info.email}</p>
            <p className="cv-contact-detail">{data.personal_info.phone}</p>
            <p className="cv-contact-detail">
              <a href={data.personal_info.linkedin} className="cv-link" target="_blank" rel="noopener noreferrer">LinkedIn</a> |{" "}
              <a href={data.personal_info.github} className="cv-link" target="_blank" rel="noopener noreferrer">GitHub</a> |{" "}
              {data.personal_info.location}
            </p>
          </div>
        </header>

        {/* Summary */}
        <section className="cv-section summary">
          <h2 className="cv-section-title">{data.summary.title}</h2>
          <p className="cv-paragraph">{data.summary.content}</p>
        </section>

        {/* Skills */}
        <section className="cv-section skills">
          <h2 className="cv-section-title">{data.techskills.title}</h2>
          <ul className="cv-list">
            {Object.values(data.techskills.content).map((skill: any) => (
              <li className="cv-list-item" key={skill.name}>
                <strong>{skill.name}:</strong> {skill.content.join(', ')}
              </li>
            ))}
          </ul>
        </section>

        {/* Projects */}
        <section className="cv-section projects">
          <h2 className="cv-section-title">{data.projects.title}</h2>

          {data.projects.content.map((project: any, idx: number) => (
            <div className="cv-project" key={idx}>
              <h3 className="cv-project-title">
                {project.name} <span className="cv-date">{project.date}</span>
              </h3>
              <h4 className="cv-project-subtitle">{project.description}</h4>
              <ul className="cv-list">
                {project.highlights.map((highlight: string, hIdx: number) => (
                  <li className="cv-list-item" key={hIdx}>{highlight}</li>
                ))}
              </ul>
              {project.github && (
                <a href={project.github} className="cv-link" target="_blank" rel="noopener noreferrer">
                  GitHub
                </a>
              )}
            </div>
          ))}
        </section>

        {/* Education */}
        <section className="cv-section education">
          <h2 className="cv-section-title">{data.education.title}</h2>
          {data.education.content.map((edu: any, idx: number) => (
            <div className="cv-edu" key={idx}>
              <h3 className="cv-edu-title">
                {edu.name} <span className="cv-date">{edu.date}, {edu.location}</span>
              </h3>
              {edu.details && (
                <ul className="cv-list">
                  {edu.details.map((detail: string, dIdx: number) => (
                    <li className="cv-list-item" key={dIdx}>{detail}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </section>

        {/* Experience */}
        <section className="cv-section experience">
          <h2 className="cv-section-title">{data.experience.title}</h2>
          {data.experience.content.map((job: any, idx: number) => (
            <div className="cv-job" key={idx}>
              <h3 className="cv-job-title">
                {job.name} – {job.location} <span className="cv-date">{job.date}</span>
              </h3>
              <ul className="cv-list">
                {job.details.map((detail: string, dIdx: number) => (
                  <li className="cv-list-item" key={dIdx}>{detail}</li>
                ))}
              </ul>
            </div>
          ))}
        </section>

        {/* Certifications */}
        <section className="cv-section certifications">
          <h2 className="cv-section-title">{data.certification.title}</h2>
          <ul className="cv-list">
            {data.certification.content.map((cert: any, idx: number) => (
              <li className="cv-list-item" key={idx}>
                {cert.name} – {cert.issuer} ({cert.date})
              </li>
            ))}
          </ul>
        </section>

        {/* Languages */}
        <section className="cv-section languages">
          <h2 className="cv-section-title">{data.languages.title}</h2>
          <p className="cv-paragraph">
            {data.languages.content.map((lang: any, idx: number) => (
              <span key={idx}>
                {lang.language} – {lang.level}{idx < data.languages.content.length - 1 ? ' | ' : ''}
              </span>
            ))}
          </p>
        </section>

      </div>
    </main>
  );
}
