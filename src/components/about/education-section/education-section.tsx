import { Courses, OngoingCourses } from "./courses";
import "./education-section.css";
import { Education } from "./education/education";
import { Languages } from "./language/language";

const EducationSection = () => {
  return (
    <div className="edu-container">
      <h1 className="edu-title">Professional Development</h1>
      <p className="edu-description">
        Building a strong foundation in electrical and electronics engineering,
        with a focus on autonomous systems, computer vision, and AI-driven
        technologies.
      </p>
      <Education />
      <Courses />
      <OngoingCourses />
      <Languages />
    </div>
  );
};

export { EducationSection };
