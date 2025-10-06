// education.data.ts
import { TEducation } from "../../../../components";

export const educationData: TEducation[] = [
  {
    id: "le-wagon",
    degree: "Full-Stack Web Development (Certificate)",
    lewagonIcon: "fa-solid fa-book-open",
    specialization: "Fullstack web development",
    school: "Le Wagon",
    emblem: "/image/lewagon.svg",

    startDate: "Mar 2025",
    endDate: "Jun 2025",

    description:
      "Le Wagon – Full-Stack Web Development Bootcamp (12 Weeks). A hands-on, intense program where I learned by building real projects.",
    keyContentTitle: "Highlights",
    keyContent: [
      "Gained confidence with Ruby and Rails, understanding MVC in real projects",
      "Worked with relational databases to build data-driven apps",
      "Built out UIs using HTML, CSS, SASS, and modern JavaScript (ES6)",
      "Picked up solid UX/UI design skills and learned prototyping/iteration",
      "End-to-end product development: back-end logic to front-end polish",
    ],
    icons: {
      school: "fa-solid fa-location-dot",
      startDate: "fa-solid fa-calendar",
    },
  },
  {
    id: "axiopolis-hs",
    degree: "IT Technician (High School Diploma & Bacalaureat)",
    degreeIcon: "fa-solid fa-graduation-cap",
    specialization: "IT Technician",
    school: "Liceul Tehnologic Axiopolis",
    emblem: "/image/school.jpeg",

      startDate: "Sep 2015",
    endDate: "Jul 2019",

      description:
      "Completed a 4-year IT-focused high school program, graduating with the Bacalaureat diploma. The curriculum combined technical IT skills with general academic education.",
    keyContentTitle: "Focus Areas",
    keyContent: [
      "Foundations of computer systems and networks",
      "Introductory programming concepts",
      "Basic electronics and troubleshooting",
      "Database fundamentals",
      "AutoCAD (technical design reference)",
    ],
    icons: {
      school: "fa-solid fa-location-dot",
      startDate: "fa-solid fa-calendar",
    },
  },
];
