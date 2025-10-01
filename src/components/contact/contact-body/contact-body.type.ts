export type TContactBody = {
  intro?: string;
  mid?: string;
  sections?: {
    title?: string;
    content?: string;
  }[];
  outro?: string;
  email?: string;
};
