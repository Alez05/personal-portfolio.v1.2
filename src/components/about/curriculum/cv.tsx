import './cv.css';
import { getCvAction } from './action';
import type { TCVData } from '@components/about';

export default async function CurriculumVitae() {
  const data: TCVData | null = await getCvAction();
  if (!data) return <p>Failed to load CV data.</p>;

  return (
    <main className="cv-container">
      <div className="cv-wrapper">
        <header className="cv-header">
          <h1 className="cv-title">{data.personal_info.name}</h1>
          <h2 className="cv-subtitle">{data.personal_info.title}</h2>
          <p>{data.personal_info.email} | {data.personal_info.phone} | {data.personal_info.location}</p>
          <p><a href={data.personal_info.linkedin}>LinkedIn</a> | <a href={data.personal_info.github}>GitHub</a></p>
        </header>

        <section className="cv-section">
          <h2 className="cv-section-title">{data.summary.title}</h2>
          <p className="cv-text">{data.summary.content}</p>
        </section>

        <section className="cv-section">
          <h2 className="cv-section-title">{data.techskills.title}</h2>
          {Object.values(data.techskills.content).map(skill => (
            <div key={skill.name} className="cv-list-item">
              <h3>{skill.name}</h3>
              <ul>
                {skill.content.map((item, idx) => <li key={idx}>{item}</li>)}
              </ul>
            </div>
          ))}
        </section>

        <section className="cv-section">
          <h2 className="cv-section-title">{data.projects.title}</h2>
          {data.projects.content.map(project => (
            <div key={project.name} className="cv-project">
              <h3 className="cv-project-title">{project.name}</h3>
              <p>{project.date}</p>
              <p>{project.description}</p>
              <ul>
                {project.highlights.map((point, idx) => <li key={idx}>{point}</li>)}
              </ul>
              <p><a href={project.github}>GitHub</a></p>
            </div>
          ))}
        </section>

        <section className="cv-section">
          <h2 className="cv-section-title">{data.education.title}</h2>
          {data.education.content.map(edu => (
            <div key={edu.name} className="cv-education">
              <h3>{edu.name}</h3>
              <p>{edu.location} — {edu.date}</p>
              <ul>
                {edu.details.map((point, idx) => <li key={idx}>{point}</li>)}
              </ul>
            </div>
          ))}
        </section>

        <section className="cv-section">
          <h2 className="cv-section-title">{data.experience.title}</h2>
          {data.experience.content.map(exp => (
            <div key={exp.name + exp.location} className="cv-experience">
              <h3>{exp.name}</h3>
              <p>{exp.location} — {exp.date}</p>
              <ul>
                {exp.details.map((point, idx) => <li key={idx}>{point}</li>)}
              </ul>
            </div>
          ))}
        </section>

        <section className="cv-section">
          <h2 className="cv-section-title">{data.certification.title}</h2>
          <ul>
            {data.certification.content.map(cert => (
              <li key={cert.name}>{cert.name} — {cert.issuer} ({cert.date})</li>
            ))}
          </ul>
        </section>

        <section className="cv-section">
          <h2 className="cv-section-title">{data.languages.title}</h2>
          <ul>
            {data.languages.content.map(lang => (
              <li key={lang.language}>{lang.language} — {lang.level}</li>
            ))}
          </ul>
        </section>
      </div>
    </main>
  );
}
