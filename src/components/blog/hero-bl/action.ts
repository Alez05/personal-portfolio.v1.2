import { THeroBl } from "./hero-bl.type";

export const getHeroBlAction = async (): Promise<THeroBl | null> => {
  try {
    const res = await fetch("http://localhost:3000/api/blog/hero-bl"); // adjust API endpoint if needed
    if (!res.ok) throw new Error("Failed to fetch hero projects data");

    const data: THeroBl = await res.json();
    return data;
  } catch (err) {
    console.error("Failed to load HeroBlogs data.", err);
    return null;
  }
};
