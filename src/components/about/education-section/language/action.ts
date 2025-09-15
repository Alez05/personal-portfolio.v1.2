// languages.action.ts
import { TLanguage } from "./language.type";

export const getLanguagesAction = async (): Promise<TLanguage[] | null> => {
  try {
    const res = await fetch("http://localhost:3000/api/about/language");
    if (!res.ok) throw new Error("Failed to load languages data");

    const data: TLanguage[] = await res.json();
    return data;
  } catch (err) {
    console.error("Failed to load languages data", err);
    return null;
  }
};
