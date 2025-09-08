import { TExpertise } from "@components/about";

export type TAboutHl = {
  title?: string;
  description?: string;
  ctaLink?: string; // link to About page
  domainExpertise?: TExpertise[]; // optional, imported from your data
};
