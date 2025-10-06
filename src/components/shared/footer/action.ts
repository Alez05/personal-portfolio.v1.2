import { TFooter } from "./footer.type";

export const getFooterAction = async (): Promise<TFooter | null> => {
  try {
    const res = await fetch("http://localhost:3000/api/shared/footer");
    if (!res.ok) throw new Error("Failed to fetch Footer data");

    const data: TFooter = await res.json();
    return data;
  } catch (err) {
    console.error("Failed to load footer data.", err);
    return null;
  }
};
