// src/components/projects/projects-hero/action.ts
import type { THeroPr } from "./hero-pr.type";

export const getHeroPrAction = async (): Promise<THeroPr | null> => {
  try {
    const res = await fetch("http://localhost:3000/api/projects/hero-pr"); // adjust API endpoint if needed
    if (!res.ok) throw new Error("Failed to fetch hero projects data");

    const data: THeroPr = await res.json();
    return data;
  } catch (err) {
    console.error("Error fetching hero projects data:", err);
    return null;
  }
};
