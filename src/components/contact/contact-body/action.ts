import { TContactBody } from "./contact-body.type";

export const getContactBdAction = async (): Promise<TContactBody | null> => {
  try {
    const res = await fetch("http://localhost:3000/api/contact/contact-body");
    if (!res.ok) throw new Error("Failed to fetch ContactBody data");

    const data: TContactBody = await res.json();
    return data;
  } catch (err) {
    console.error("Failed to load the Content body data.", err);
    return null;
  }
};
