import { TEducation } from "./education.type";

export const getEducationAction = async (): Promise<TEducation[] | null> => {
  try {
    const res = await fetch("http://localhost:3000/api/about/education");
    if (!res.ok) throw new Error("Failed to load education data");

    const data: TEducation[] = await res.json();
    return data;
  } catch (err) {
    console.error("Error fetching the education data", err);
    return null;
  }
};
