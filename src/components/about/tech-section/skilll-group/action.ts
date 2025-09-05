import { TSkillGroup } from "./skill-group.type";

export const getSkillsAction = async (): Promise<TSkillGroup | null> => {
  try {
    const res = await fetch("http://localhost:3000/api/skills");

    if (!res.ok) throw new Error("Failed to load the skills data");

    const data: TSkillGroup = await res.json();
    return data;
  } catch (err) {
    console.error("Error fetching the skils", err);
    return null;
  }
};
