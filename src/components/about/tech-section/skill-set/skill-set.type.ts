export type TSkillSet = {
  category: string;          // group title
  description?: string;      // optional subtitle/description
  skills: {
    name: string;
    icon: string;
  }[];
};
