import { projectSectionData } from "@api/projects/project-section/project-section";
import type { TProjectSection } from "./projects.type";

export async function getProjectSectionAction(): Promise<TProjectSection | null> {
  try {
    // Replace with API call / CMS fetch if needed
    return projectSectionData;
  } catch (error) {
    console.error("Failed to fetch project section data:", error);
    return null;
  }
}
