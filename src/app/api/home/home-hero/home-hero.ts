import { THero } from "@components/home";

export const heroData: THero = {
  name: "Alexandru Cercel",
  role: "Fullstack Developer",
  text: "Building clean, modern, and scalable web applications.",
  location: "Amsterdam, Netherlands",
  email: "alex@example.com",
  phone: "+31 6 12345678",
  profile: "./image/profile.png",
  projectsLink: "/projects",
  contactLink: "/contact",
  downloadLink: "/cv.pdf",
  socials: [
    {
      platform: "github",
      url: "https://github.com/alexp",
      icon: "fa-brands fa-github",
    },
    {
      platform: "linkedin",
      url: "https://linkedin.com/in/alexp",
      icon: "fa-brands fa-linkedin",
    },
    {
      platform: "email",
      url: "mailto:alex@example.com",
      icon: "fa-solid fa-envelope",
    },
    {
      platform: "stackoverflow",
      url: "https://stackoverflow.com/users/12345/alex",
      icon: "fa-brands fa-stack-overflow",
    },
    {
      platform: "codewars",
      url: "https://www.codewars.com/users/alexp",
      icon: "fa-solid fa-code",
    }, // codewars doesn't have an official FA icon
  ],
};
