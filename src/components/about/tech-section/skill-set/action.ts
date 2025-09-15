import { TSkillSet } from "./skill-set.type";

export const getSkillsAction = async (): Promise<TSkillSet[] | null> => {
  try {
    const res = await fetch("http://localhost:3000/api/about/skills");
    if (!res.ok) throw new Error("Failed to load the skills data");

    const data: TSkillSet[] = await res.json();
    return data;
  } catch (err) {
    console.error("Error fetching the skils", err);
    return null;
  }
};
