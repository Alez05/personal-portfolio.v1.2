export type TProjectHl = {
  title?: string;
  description?: string;
  projects?: {
    name?: string;
    image?: string;
  }[];
  cta?: {
    label?: string;
    link?: string;
  };
};
