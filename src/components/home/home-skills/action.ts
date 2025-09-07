import { THomeSkills } from "./home-skills.type";

export const getHomeSkillsAction = async (): Promise<THomeSkills | null> => {
  try {
    const res = await fetch("http://localhost:3000/api/home/home-skill");
    if (!res.ok) throw new Error("Failed toload the home-skills data");

    const data: THomeSkills = await res.json();
    return data;
  } catch (err) {
    console.error("Failed to load the home-skills data", err);
    return null;
  }
};
