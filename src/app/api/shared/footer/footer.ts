import { TFooter } from "../../../../components";

export const footerData: TFooter = {
  name: "Alexandru Cercel",
  tagline:
    "Full stack web developer focused on front end development, deep learning, and system research.",
  socials: [
    { icon: "fa-brands fa-linkedin", label: "LinkedIn", href: "https://linkedin.com/in/yourprofile" },
    { icon: "fa-brands fa-github", label: "GitHub", href: "https://github.com/yourprofile" },
    { icon: "fa-solid fa-envelope", label: "Email", href: "mailto:cercel.alexandru436@gmail.com" },
    { icon: "fa-solid fa-code", label: "Codewars", href: "https://www.codewars.com/users/yourprofile" },
    { icon: "fa-brands fa-stack-overflow", label: "Stack Overflow", href: "https://stackoverflow.com/users/yourprofile" },
  ],
  links: [
    { icon: "fa-solid fa-house", label: "Home", href: "/" },
    { icon: "fa-solid fa-user", label: "About", href: "/about" },
    { icon: "fa-solid fa-folder-open", label: "Projects", href: "/projects" },
    { icon: "fa-solid fa-pen-nib", label: "Blog", href: "/blog" },
    { icon: "fa-solid fa-handshake", label: "Hire Me", href: "/contact" },
  ],
  contact: {
    email: "cercel.alexandru436@gmail.com",
    location: "London, UK",
  },
  rights: "© 2025 Alexandru Cercel. All rights reserved.",
};
