import { TProjectCard } from "./project-card-type";

export const getProjectCardAction = async (): Promise<TProjectCard[] | null> => {
  try {
    const res = await fetch("http://localhost:3000/api/projects/project-card"); // adjust API endpoint if needed
    if (!res.ok) throw new Error("Failed to fetch ProjectCard data");

    const data: TProjectCard[] = await res.json();
    return data;
  } catch (err) {
    console.error("Failed to load ProjectCard data.", err);
    return null;
  }
};
