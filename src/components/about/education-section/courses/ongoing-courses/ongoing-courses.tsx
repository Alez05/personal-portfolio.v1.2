import { getOngoingCAction } from './action';
import type { TOngCourses } from './ongoing-courses.type';
import './ongoing-courses.css';

const OngoingCourses = async () => {
  const coursesList: TOngCourses[] | null = await getOngoingCAction();

  if (!coursesList)
    return <p className="ong-warning">Failed to load the Ongoing Courses data.</p>;

  return (
    <section className="ong-section">
      <div className="ong-title-wrapper">
        <h1 className="ong-title">
          <i className="fa-solid fa-spinner ong-title-icon"></i> Ongoing Courses
        </h1>
      </div>

      <div className="ong-cards-container">
        {coursesList.map(course => (
          <div key={course.id} className="ong-card">
            <div className="ong-card-header">
              {course.nameIcon && (
                <div className="ong-name-icon-wrapper">
                  <i className={`ong-name-icon ${course.nameIcon}`} />
                </div>
              )}
              <div className="ong-card-title">
                <h3 className="ong-name">{course.name}</h3>
                <p className="ong-provider">{course.provider}</p>
                {course.date && (
                  <span className="ong-date">
                    <i className={`fa-solid fa-calendar${course.icons?.date ? ` ${course.icons.date}` : ''}`} /> {course.date}
                  </span>
                )}
                {course.status && <span className={`ong-status ong-status-${course.status.toLowerCase()}`}>{course.status}</span>}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export { OngoingCourses };
