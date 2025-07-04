import "./cv.css";

const CurriculumVitae = () => {
  return (
    <main className="cv-container">
      <div className="cv-wrapper">

        {/* Header */}
        <header className="cv-header">
          <h1 className="cv-name">ALEXANDRU CERCEL</h1>
          <p className="cv-title">Front-end Developer</p>
          <div className="cv-contact">
            <p className="cv-contact-detail">cercel.alexandru436@gmail.com</p>
            <p className="cv-contact-detail">+44 7770282405</p>
            <p className="cv-contact-detail">
              <a href="#" className="cv-link">LinkedIn</a> | <a href="https://github.com/Alez05" className="cv-link">GitHub</a> | London, UK
            </p>
          </div>
        </header>

        {/* Summary */}
        <section className="cv-section summary">
          <h2 className="cv-section-title">Summary</h2>
          <p className="cv-paragraph">
            I’m a Front-end developer with a strong background in hospitality. I spent several years in leadership roles,
            where I gained valuable experience in team coordination, problem-solving, and delivering outstanding customer service.
            Now, I apply those strengths to build user-friendly, intuitive web applications.
            I’m excited to contribute to fast-paced, team-orientated projects and help create seamless digital experiences.
          </p>
        </section>

        {/* Skills */}
        <section className="cv-section skills">
          <h2 className="cv-section-title">Technical Skills</h2>
          <ul className="cv-list">
            <li className="cv-list-item"><strong>Languages:</strong> JavaScript, TypeScript, HTML, CSS, Ruby, SQL</li>
            <li className="cv-list-item"><strong>Frameworks & Libraries:</strong> React, Vue, Next, Remix, Stimulus, Bootstrap, Tailwind, Ruby on Rails</li>
            <li className="cv-list-item"><strong>Tools & Tech:</strong> Git, GitHub, Docker, PostgreSQL, MySQL, Firebase, Heroku, Vercel, Netlify, Figma, SEO</li>
          </ul>
        </section>

        {/* Projects */}
        <section className="cv-section projects">
          <h2 className="cv-section-title">Projects</h2>

          <div className="cv-project">
            <h3 className="cv-project-title">Plan&Go [Ongoing] – AI-Powered Travel Planner <span className="cv-date">June 2025</span></h3>
            <ul className="cv-list">
              <li className="cv-list-item">Interactive Mapbox map with real-time trip markers and location/friend search</li>
              <li className="cv-list-item">Clean UI/UX design for intuitive trip planning</li>
              <li className="cv-list-item">AI-generated itineraries using OpenAI API</li>
            </ul>
            <a href="https://github.com/Alez05/plan-go" className="cv-link">GitHub</a>
          </div>

          <div className="cv-project">
            <h3 className="cv-project-title">PowerUp Marketplace – Team-build MVP <span className="cv-date">May 2025</span></h3>
            <ul className="cv-list">
              <li className="cv-list-item">Built CRUD MVP for fictional PowerUps</li>
              <li className="cv-list-item">Worked across stack on features and data models</li>
              <li className="cv-list-item">Designed components and wireframes in Figma</li>
              <li className="cv-list-item">Collaborative team-based dev workflow</li>
            </ul>
            <a href="https://github.com/Alez05/power_ups" className="cv-link">GitHub</a>
          </div>
        </section>

        {/* Education */}
        <section className="cv-section education">
          <h2 className="cv-section-title">Education</h2>

          <div className="cv-edu">
            <h3 className="cv-edu-title">Le Wagon - Full-stack Web Dev Bootcamp <span className="cv-date">03/2025 – 06/2025, London</span></h3>
            <ul className="cv-list">
              <li className="cv-list-item">Built full apps using Ruby on Rails with MVC pattern</li>
              <li className="cv-list-item">Worked with relational databases and APIs</li>
              <li className="cv-list-item">Responsive UIs with HTML, CSS, SASS, JS</li>
              <li className="cv-list-item">Prototyped and iterated on UX/UI quickly</li>
              <li className="cv-list-item">Full-cycle dev from backend to deployment</li>
            </ul>
          </div>

          <div className="cv-edu">
            <h3 className="cv-edu-title">Axiopolis Tech HS – Automation Electronics <span className="cv-date">2015 – 2019, Romania</span></h3>
          </div>
        </section>

        {/* Experience */}
        <section className="cv-section experience">
          <h2 className="cv-section-title">Experience</h2>

          <div className="cv-job">
            <h3 className="cv-job-title">Front-end Web Developer – WoW DoP <span className="cv-date">09/2022 – 01/2024, London</span></h3>
            <ul className="cv-list">
              <li className="cv-list-item">Improved React app performance and resolved large-data UI crashes</li>
              <li className="cv-list-item">Migrated JS to TS and implemented scalable components</li>
              <li className="cv-list-item">Redesigned UI with accessible, mobile-first layouts</li>
              <li className="cv-list-item">Raised accessibility scores from 30% to 90%</li>
              <li className="cv-list-item">Stack: React, TS, styled-components, Jest, Figma</li>
            </ul>
          </div>

          <div className="cv-job">
            <h3 className="cv-job-title">Assistant Manager – Bounce <span className="cv-date">09/2023 – Present, London</span></h3>
            <ul className="cv-list">
              <li className="cv-list-item">Streamlined operations and training for faster onboarding</li>
              <li className="cv-list-item">Improved team performance and workflow</li>
            </ul>
          </div>

          <div className="cv-job">
            <h3 className="cv-job-title">Supervisor – Bounce <span className="cv-date">06/2021 – 09/2023, London</span></h3>
            <ul className="cv-list">
              <li className="cv-list-item">Led high-performing team during busy shifts</li>
              <li className="cv-list-item">Tracked metrics and addressed service issues efficiently</li>
            </ul>
          </div>
        </section>

        {/* Certifications */}
        <section className="cv-section certifications">
          <h2 className="cv-section-title">Certifications</h2>
          <ul className="cv-list">
            <li className="cv-list-item">SEO Fundamentals – HubSpot Academy (2023 – 2026)</li>
            <li className="cv-list-item">ECDL Fundamentals – ECDL Romania (2018 – 2019)</li>
          </ul>
        </section>

        {/* Languages */}
        <section className="cv-section languages">
          <h2 className="cv-section-title">Languages</h2>
          <p className="cv-paragraph">English – Advanced | Romanian – Native</p>
        </section>

      </div>
    </main>
  );
};

export { CurriculumVitae };
