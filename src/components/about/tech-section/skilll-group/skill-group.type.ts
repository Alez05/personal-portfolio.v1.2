// types/skills.ts
export type TSkill = {
  name: string;
  icon: string;
};

export type TSkillSection = {
  title: string;
  subtitle: string;
  skills: TSkill[];
};

export type TSkillGroup = {
  section: TSkillSection[];
};
