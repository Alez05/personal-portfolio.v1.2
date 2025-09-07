import { TExpertise } from "@components/about";

export type TAboutSection = {
  title?: string;
  description?: string;
  ctaLink?: string; // link to About page
  domainExpertise?: TExpertise[]; // optional, imported from your data
};
