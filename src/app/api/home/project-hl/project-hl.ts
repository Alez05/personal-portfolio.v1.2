import { TProjectHl } from "@components/home/project-hl/project-hl.type";

export const projectsHighlightData: TProjectHl = {
  title: "Projects",
  description:
    "Get inspired by completed projects: from sleek business websites to advanced web applications.",
  projects: [
    { name: "Eyefine", image: "/projects/eyefine.png" },
    { name: "Portfolio", image: "/projects/portfolio.png" },
    { name: "ShopApp", image: "/projects/shopapp.png" },
  ],
  cta: {
    label: "View Projects",
    link: "/projects",
  },
};
