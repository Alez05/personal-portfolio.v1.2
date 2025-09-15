import { TSkillsHl } from "./skills-hl.type";

export const getSkillHlAction = async (): Promise<TSkillsHl | null> => {
  try {
    const res = await fetch("http://localhost:3000/api/home/skills-hl");
    if (!res.ok) throw new Error("Failed toload the home-skills data");

    const data: TSkillsHl = await res.json();
    return data;
  } catch (err) {
    console.error("Failed to load the home-skills data", err);
    return null;
  }
};
