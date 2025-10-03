// types/contact-body.ts
export type TContactBody = {
  intro?: string;
  mid?: string;
  sections?: {
    title?: string;
    content?: string;
  }[];
  outro?: string;
  links?: {
    form?: {
      label: string;
      href: string;
    };
    email?: {
      label: string;
      address: string;
    };
  };
};
