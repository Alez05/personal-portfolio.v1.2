export type TProjectCard = {
  name?: string;
  image?: string;
  domain?: string;
  description?: string;
  cta?: {
    label?: string;
    icon?: string;
    link?: string;
  };
  tools?: {
    label?: string;
    icon?: string;
  }[];
};
