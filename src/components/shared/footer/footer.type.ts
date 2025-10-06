export type TFooterSocial = {
  icon?: string;
  label?: string;
  href?: string;
};

export type TFooterLink = {
  icon?: string;
  label?: string;
  href?: string;
};

export type TFooterContact = {
  email?: string;
  location?: string;
};

export type TFooter = {
  name?: string;
  tagline?: string;
  socials?: TFooterSocial[];
  links?: TFooterLink[];
  contact?: TFooterContact;
  rights?: string;
};
