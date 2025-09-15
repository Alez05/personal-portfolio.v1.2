import { TProjectHl } from "@components/home/project-hl/project-hl.type";

export const projectsHighlightData: TProjectHl = {
  title: "Projects",
  description:
    "Get inspired by completed projects: from sleek business websites to advanced web applications.",
  projects: [
    { image: "/projects/eyefine.png", link: "/projects/eyefine" },
    { image: "/projects/portfolio.png", link: "/projects/portfolio" },
    { image: "/projects/shopapp.png", link: "/projects/shopapp" },
  ],
  cta: {
    label: "View Projects",
    link: "/projects",
  },
};
