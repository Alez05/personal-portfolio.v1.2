// hero.type.ts
export type TSocialPlatform =
  | "github"
  | "linkedin"
  | "email"
  | "stackoverflow"
  | "codewars";

export type TSocial = {
  platform: TSocialPlatform;
  url: string;
  icon: string;
};

export type THero = {
  name?: string;
  role?: string;
  text?: string;
  location?: string;
  email?: string;
  phone?: string;
  profile?: string;
  projectsLink?: string;
  contactLink?: string;
  downloadLink?: string;

  socials?: TSocial[];
};
