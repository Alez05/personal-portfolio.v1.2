// app/api/about/about.action.ts
import { AboutSectionData } from "@app/api/home/about-section/about-section";
import { TAboutSection } from "./about.type";

export const getAboutSectionAction = async ():Promise<TAboutSection | null> =>  {
  try {
    const res = await fetch('http://localhost:3000/api/home/about-section');
    if (!res.ok) throw new Error('Failed to load the data');

    const data: TAboutSection = await res.json();
    return data
  } catch (err) {
    console.error('Failed toload the data', err)
    return null
  }
}
