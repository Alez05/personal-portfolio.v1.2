export type TSocialPlatform = "facebook" | "github" | "instagram" | "linkedin";

export type TSocial = {
  platform: TSocialPlatform;
  url: string;
  icon: string;
  label: string;
};

export type TLink = {
  icon?: string;
  label: string;
  href: string;
};

export type TContact = {
  email?: string;
  location?: string;
  phone?: string;
};

export type TFooter = {
  name?: string;
  tagline?: string;
  socials?: TSocial[];
  links?: TLink[];
  contact?: TContact;
  rights?: string;
};
