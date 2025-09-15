// app/api/about/about.action.ts
import { TAboutHl} from "./about-hl.type";

export const getAboutHlAction = async ():Promise<TAboutHl | null> =>  {
  try {
    const res = await fetch('http://localhost:3000/api/home/about-hl');
    if (!res.ok) throw new Error('Failed to load the data');

    const data: TAboutHl = await res.json();
    return data
  } catch (err) {
    console.error('Failed toload the data', err)
    return null
  }
}
