export type TProjectVideo = {
  video?: string;
  name?: string;
  field?: string;
  year?: string;
  tag?: string;
};

export type TProjectHl = {
  title?: string;
  description?: string;
  label?: string;
  counter?: string;
  cta?: {
    href?: string;
    label?: string;
  }[];
  video?: TProjectVideo;
};
