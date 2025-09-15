import { TBlogHl } from "./blog-hl.type";

export const getBlogHlAction = async (): Promise<TBlogHl | null> => {
  try {
    const res = await fetch("http://localhost:3000/api/home/blog-hl");
    if (!res.ok) throw new Error("Failed to load the BlogHl data.");

    const data: TBlogHl = await res.json();
    return data;
  } catch (err) {
    console.error("Failed to load BlogsHl data.", err);
    return null;
  }
};
