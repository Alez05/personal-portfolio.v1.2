import { TCourses } from "./courses.type";
import { getCoursesAction } from "./action";
import "./courses.css";

const Courses = async () => {
  const coursesList: TCourses[] | null = await getCoursesAction();
  if (!coursesList)
    return <p className="co-warning">Failed to load the Courses data.</p>;

  return (
    <section className="co-section">
      <div className="co-title-wrapper">
        <h1 className="co-title"><i className="fa-solid fa-check co-title-icon"></i> Completed Courses</h1>
      </div>
      <div className="co-container">
        {coursesList.map((course) => (
          <div key={course.id} className="co-card">
            {/* Header */}
            <div className="co-card-header">
              {course.nameIcon && (
                <div className="co-name-icon-wrapper">
                  <i className={`co-name-icon ${course.nameIcon}`} />
                </div>
              )}
              <div className="co-card-title">
                <h3 className="co-name">{course.name}</h3>
                <p className="co-provider">{course.provider}</p>
                <div className="co-date-status">
                  {course.date && (
                    <span className="co-date">
                      {course.icons?.date && (
                        <i className={course.icons.date} />
                      )}{" "}
                      {course.date}
                    </span>
                  )}
                  {course.status && (
                    <span className={`co-status co-status-${course.status}`}>
                      {course.status}
                    </span>
                  )}
                </div>

                {course.description && (
                  <p className="co-description">{course.description}</p>
                )}
              </div>
            </div>

            {/* Body */}
            {course.contentTitle && (
              <h4 className="co-content-title">{course.contentTitle}</h4>
            )}
            {course.content && (
              <ul className="co-content-list">
                {course.content.map((item, idx) => (
                  <li key={idx} className="co-content-item">
                    {item}
                  </li>
                ))}
              </ul>
            )}

            {/* Footer */}
            <div className="co-card-footer">
              {course.courseId && (
                <span className="co-course-id">{course.courseId}</span>
              )}
              {course.courseLink && (
                <a
                  href={course.courseLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="co-link-btn"
                >
                  View Certificate
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export { Courses };
