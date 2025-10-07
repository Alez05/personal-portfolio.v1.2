import { TFooter } from "../../../../components";

export const footerData: TFooter = {
  name: "Alexandru Cercel",
  tagline:
    "Full stack web developer focused on front end development, deep learning, and system research.",
  socials: [
    { platform: "facebook", icon: "fa-brands fa-facebook-f", label: "Facebook", url: "https://facebook.com/alexandru" },
    { platform: "github", icon: "fa-brands fa-github", label: "GitHub", url: "https://github.com/alexp" },
    { platform: "instagram", icon: "fa-brands fa-instagram", label: "Instagram", url: "https://instagram.com/alexandru" },
    { platform: "linkedin", icon: "fa-brands fa-linkedin-in", label: "LinkedIn", url: "https://linkedin.com/in/alexp" },
  ],
  links: [
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
