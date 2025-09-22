import { TContactHr } from "./contact-hero.type";

export const getContactHrAction = async (): Promise<TContactHr | null> => {
  try {
    const res = await fetch("http://localhost:3000/api/contact/contact-hero"); // adjust API endpoint if needed
    if (!res.ok) throw new Error("Failed to fetch BlogCard data");

    const data: TContactHr = await res.json();
    return data;
  } catch (err) {
    console.error("Failed to load the ContactHero data.", err);
    return null;
  }
};
