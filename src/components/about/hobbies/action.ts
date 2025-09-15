import { THobbies } from "./hobbies.type";

export const getHobbiesAction = async (): Promise<THobbies[] | null> => {
  try {
    const res = await fetch("http://localhost:3000/api/about/hobbies");
    if (!res.ok) throw new Error("Failed to load hobbies data");

    const data: THobbies[] = await res.json();
    return data;
  } catch (err) {
    console.error("Failed to load hobbies data", err);
    return null;
  }
};
