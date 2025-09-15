import { TProjectHl } from "./project-hl.type";

export const getProjectHlAction =
  async (): Promise<TProjectHl | null> => {
    try {
      const res = await fetch("http://localhost:3000/api/home/project-hl");
      if (!res.ok)
        throw new Error("Failed to load the project highlights data.");

      const data: TProjectHl = await res.json();
      return data;
    } catch (err) {
      console.error("Failed to load project highlights data.", err);
      return null;
    }
  };
