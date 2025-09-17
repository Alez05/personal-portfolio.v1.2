import type { TBlogCard } from "./blog-card.type";

export async function getBlogCardAction(): Promise<TBlogCard[] | null> {
  try {
    const res = await fetch("http://localhost:3000/api/blog/blog-card"); // adjust API endpoint if needed
    if (!res.ok) throw new Error("Failed to fetch BlogCard data");

    const data: TBlogCard[] = await res.json();
    return data;
  } catch (error) {
    console.error("Error fetching BlogCards data", error);
    return null;
  }
}
