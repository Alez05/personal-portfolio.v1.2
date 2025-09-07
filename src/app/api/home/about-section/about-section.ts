// aboutSection.ts
import type { TAboutSection } from "@components/home";
import { DomainExpertiseData } from "../../domain-expertise/expertise";

export const AboutSectionData: TAboutSection = {
  title: "About Me",
  description:
    "I’m a fullstack developer passionate about building performant, scalable, and user-friendly applications. My expertise spans across front-end, back-end, and system architecture — enabling me to deliver complete solutions from idea to deployment.",
  ctaLink: "/about",
  domainExpertise: DomainExpertiseData,
};
