// actions/getHeroAction.ts
import { THero } from "./home-hero.type";

export const getHeroAction = async (): Promise<THero | null> => {
  try {
    const res = await fetch("http://localhost:3000/api/home/home-hero");
    if (!res.ok) throw new Error("Failed to load hero data");

    const data: THero = await res.json();
    return data;
  } catch (err) {
    console.error("Failed to load hero data", err);
    return null;
  }
};
