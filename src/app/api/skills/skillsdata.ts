// data/skillsData.ts
import type { TSkillGroup } from "@components/about"

export const skillsData: TSkillGroup = {
  section: [
    {
      title: "Frontend Development",
      subtitle: "Building sleek, responsive interfaces with modern frameworks and design systems.",
      skills: [
        { name: "JavaScript", icon: "/icon/js.svg" },
        { name: "TypeScript", icon: "/icon/typescript.svg" },
        { name: "React", icon: "/icon/react.svg" },
        { name: "Vue", icon: "/icon/vue.svg" },
        { name: "Next.js", icon: "/icon/nextdotjs.svg" },
        { name: "Remix", icon: "/icon/remix.svg" },
        { name: "Stimulus", icon: "/icon/stimulus.svg" },
        { name: "Tailwind", icon: "/icon/tailwindcss.svg" },
        { name: "Bootstrap", icon: "/icon/bootstrap.svg" }
      ]
    },
    {
      title: "Backend & Infrastructure",
      subtitle: "Managing databases, APIs, authentication, and deployment pipelines.",
      skills: [
        { name: "Ruby", icon: "/icon/ruby.svg" },
        { name: "Rails", icon: "/icon/rubyonrails.svg" },
        { name: "SQL", icon: "/icon/sql-server.svg" },
        { name: "PostgreSQL", icon: "/icon/postgre.svg" },
        { name: "MySQL", icon: "/icon/mysql.svg" },
        { name: "Firebase", icon: "/icon/firebase.svg" },
        { name: "Docker", icon: "/icon/docker.svg" },
        { name: "Heroku", icon: "/icon/heroku.svg" },
        { name: "Netlify", icon: "/icon/netlify.svg" },
        { name: "Pug", icon: "/icon/pug.svg" }
      ]
    },
    {
      title: "Development Tools & Web Practices",
      subtitle: "Supporting tools and modern web practices that enhance development and user experience.",
      skills: [
        { name: "Vite", icon: "/icon/vite.svg" },
        { name: "Astro", icon: "/icon/astro.svg" },
        { name: "Git", icon: "/icon/git.svg" },
        { name: "GitHub", icon: "/icon/github.svg" },
        { name: "Figma", icon: "/icon/figma.svg" }
      ]
    },
    {
      title: "Currently Learning",
      subtitle: "Languages and frameworks I'm exploring to expand my backend and fullstack knowledge.",
      skills: [
        { name: "Python", icon: "/icon/python.svg" },
        { name: "PHP", icon: "/icon/php.svg" },
        { name: "Laravel", icon: "/icon/laravel.svg" },
        { name: "Django", icon: "/icon/django.svg" },
        { name: "Node.js", icon: "/icon/node-js.svg" },
        { name: "MongoDB", icon: "/icon/mongodb.svg" }
      ]
    }
  ]
}
