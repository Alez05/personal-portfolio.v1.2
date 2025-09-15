import { getEducationAction } from "./action";
import "./education.css";
import { TEducation } from "./education.type";

const Education = async () => {
  const educationList: TEducation[] | null = await getEducationAction();
  if (!educationList) return <p>Failed to load the Education data.</p>;

  return (
    <section className="ed-container">
      <div className="ed-title-wrapper">
        <h1 className="ed-title-edu">Education</h1>
      </div>
      <div className="ed-list">
        {educationList.map((edu, idx) => (
          <div key={idx} className="ed-item">
            {/* Header with icons and degree block */}
            <div className="ed-header">
              {/* Icons wrapper */}
              <div className="ed-icons-wrapper">
                {edu.degreeIcon && (
                  <i className={`ed-main-icon ${edu.degreeIcon}`}></i>
                )}
                {edu.lewagonIcon && (
                  <i className={`ed-main-icon ${edu.lewagonIcon}`}></i>
                )}
              </div>

              {/* Degree + specialization + school + dates */}
              <div className="ed-degree-block">
                <h2 className="ed-degree">{edu.degree}</h2>
                {edu.specialization && (
                  <p className="ed-specialization">{edu.specialization}</p>
                )}

                <div className="ed-school-row">
                  {edu.degreeIcon && (
                    <i className={`ed-school-icon ${edu.degreeIcon}`}></i>
                  )}
                  <span className="ed-school">{edu.school}</span>
                  <span className="ed-dates">
                    {edu.icons?.startDate && (
                      <i className={edu.icons.startDate}></i>
                    )}{" "}
                    {edu.startDate} – {edu.endDate || "Present"}
                  </span>
                </div>
              </div>

              {/* Optional emblem */}
              {edu.emblem && (
                <img
                  src={edu.emblem}
                  alt={`${edu.school} emblem`}
                  className="ed-emblem"
                />
              )}
            </div>

            {/* Description */}
            {edu.description && (
              <p className="ed-description">{edu.description}</p>
            )}

            {/* Key content */}
            {edu.keyContent && edu.keyContent.length > 0 && (
              <>
                {edu.keyContentTitle && (
                  <h3 className="ed-keycontent-title">{edu.keyContentTitle}</h3>
                )}
                <ul className="ed-keycontent">
                  {edu.keyContent.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export { Education };
