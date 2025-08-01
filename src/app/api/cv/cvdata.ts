// api/cv/cvdata.ts
import { TCVData } from '@components/about'

export const getCVData: TCVData = {
  personal_info: {
    name: "Alexandru Cercel",
    title: "Front-end Developer",
    email: "cercel.alexandru436@gmail.com",
    phone: "+44 7770282405",
    location: "London, UK",
    linkedin: "https://www.linkedin.com/in/alexandru-cercel/",
    github: "https://github.com/Alez05",
  },

  summary: {
    title: "Summary",
    content: "I’m a Front-end developer with a strong background in hospitality. I spent several years in leadership roles, where I gained valuable experience in team coordination, problem-solving, and delivering outstanding customer service. Now, I apply those strengths to build user-friendly, intuitive web applications. I’m excited to contribute to fast-paced, team-orientated projects and help create seamless digital experiences."
  },

  techskills: {
    title: "Technical Skills",
    content: {
      "Languages": {
        name: "Languages",
        content: ["JavaScript", "TypeScript", "HTML", "CSS", "Ruby", "SQL"]
      },
      "Framework & Libraries": {
        name: "Framework & Libraries",
        content: ["React", "Vue", "Next ", "Remix", "Stimulus", "Bootstrap", "Tailwind", "Ruby on Rails"]
      },
      "Tools & Technologies": {
        name: "Tools & Technologies",
        content: ["Git", "GitHub", "Docker", "PostgreSQL", "MySQL", "Firebase", "Heroku", "Vercel", "Netlify", "Figma", "SEO"]
      },
      "Soft Skills": {
        name: "Soft skills",
        content: ["Time management", "Adaptability", "Problem Solving", "Team collaboration", "Attention to detail", "Leadership"]
      }
    }
  },

  projects: {
    title: "Projects",
    content: [
      {
        name: "Plan&Go [Ongoing Development] – AI-Powered Travel Planner",
        date: "June 2025 – Present",
        description: "Team project for Le Wagon bootcamp – Full-stack web application.",
        highlights: [
          "Implemented a dynamic, Mapbox-powered interactive map that allows users to search for locations and friends, with trip markers updating in real-time to visualize travel plans effortlessly.",
          "Collaborated on UX/UI design to create a clean, intuitive interface that keeps users engaged and makes complex trip planning feel simple and enjoyable.",
          "Contributed as a team to develop an AI-driven itinerary generator using OpenAI API, which takes user preferences collected during onboarding and produces personalized, day-by-day travel plans with suggested attractions and optimized timing."
        ],
        github: "https://github.com/Alez05/plan-go"
      },
      {
        name: "PowerUp Marketplace – Team-build MVP",
        date: "May 2025",
        description: "Team project for Le Wagon bootcamp – Full-stack web application.",
        highlights: [
          "Built a marketplace MVP for fictional PowerUps with full CRUD features.",
          "Contributed across the stack on features, styling and data models.",
          "Designed UI components and wireframes collaboratively in Figma.",
          "Learned to communicate and code as a team in a fast-paced environment."
        ],
        github: "https://github.com/Alez05/power_ups"
      }
    ]
  },

  education: {
    title: "Education",
    content: [
      {
        name: "Le Wagon",
        location: "London",
        date: "03/2025 – 06/2025",
        details: [
          "Built with confidence with Ruby on Rails and understood how the MVC pattern works on real projects.",
          "Worked with relational databases to build data-driven apps.",
          "Built clean, responsive user interfaces using HTML, CSS, SASS and modern JavaScript.",
          "Developed UX and UI skills by prototyping, gathering feedback, and iterating quickly.",
          "Covered the full product cycle from back-end logic to front-end polish and deployment."
        ]
      },
      {
        name: "Axiopolis Technological High School",
        location: "Romania",
        date: "09/2015 – 06/2019",
        details: ["High School Diploma – IT Technician"]
      }
    ]
  },

  experience: {
    title: "Experience",
    content: [
      {
        name: "Front-end Web Developer",
        location: "WoW DoP – Freelance, London",
        date: "09/2022 – 01/2024",
        details: [
          "Contributed to performance improvements in large React applications by helping reduce UI load times and resolving issues that previously caused crashes with complex visuals and large datasets.",
          "Assisted in migrating JavaScript codebases to TypeScript, cleaning up older code and implementing more consistent, scalable components using styled-components.",
          "Helped redesign key UI elements by applying clean, accessible layouts that followed design guidelines and improved usability across devices.",
          "Supported cross-browser testing and accessibility efforts, helping increase compatibility and push accessibility scores from under 30% to well above 90%.",
          "Worked closely with senior developers, taking ownership of assigned tasks and contributing during high-volume periods, while continuously learning through feedback and collaboration.",
          "Stack & Tools: React, TypeScript, JavaScript (ES6+), styled-components, HTML, CSS, Jest, Git, Figma, UI/UX, accessibility, performance tuning"
        ]
      },
      {
        name: "Assistant Manager",
        location: "Bounce, London",
        date: "09/2023 – Present",
        details: [
          "Improved daily team operations by identifying weak points and fixing them, leading to smoother shifts.",
          "Supported and trained new staff, helping reduce onboarding time and raise overall team performance.",
          "Built strong leadership, communication, and problem-solving skills directly useful in team-based tech work."
        ]
      },
      {
        name: "Floor Supervisor",
        location: "Bounce, London",
        date: "06/2021 – 09/2023",
        details: [
          "Led and motivated a team of staff to deliver consistently excellent service, creating a positive work environment.",
          "Monitored key performance metrics to ensure high service standards and quickly addressed any issues.",
          "Supported the team during busy period, stepping up when needed and keeping the flow smooth under pressure."
        ]
      },
      {
        name: "Waiter",
        location: "Bounce, London",
        date: "02/2020 – 06/2021",
        details: [
          "Communicated effectively with team members and kitchen staff to guarantee smooth service and timely order delivery.",
          "Provided attentive and efficient table service, consistently ensuring a positive dining experience for guests.",
          "Maintained professionalism and composure in a fast-paced, high-pressure environment."
        ]
      }
    ]
  },

  certification: {
    title: "Certifications",
    content: [
      {
        name: "Web Development Bootcamp",
        issuer: "BCS, The Chartered Institute for IT",
        date: "June 2025"
      },
      {
        name: "Web Development Bootcamp",
        issuer: "Le Wagon London",
        date: "June 2025"
      },
      {
        name: "SEO (Search Engine Optimization) Fundamentals",
        issuer: "HubSpot Academy",
        date: "Aug 2023"
      },
      {
        name: "ECDL (European Computer Driving License) Fundamentals",
        issuer: "ECDL Romania",
        date: "May 2019"
      }
    ]
  },

  languages: {
    title: "Languages",
    content: [
      {
        language: "English",
        level: "Advanced"
      },
      {
        language: "Romanian",
        level: "Native"
      },
      {
        language: "Dutch",
        level: "Beginer"
      }
    ]
  }
}
