import { blogSectionData } from "../../../app/api";
import type { TBlogSection } from "./blog-section.type";

export async function getBlogSectionAction(): Promise<TBlogSection | null> {
  try {
    // In real-world, replace with fetch() to API or CMS
    return blogSectionData;
  } catch (error) {
    console.error("Failed to fetch blog section data:", error);
    return null;
  }
}
