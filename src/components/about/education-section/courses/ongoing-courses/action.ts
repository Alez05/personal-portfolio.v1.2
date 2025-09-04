import { TOngCourses } from './ongoing-courses.type';

export const getOngoingCAction = async (): Promise<TOngCourses[] | null> => {
  try {
    const res = await fetch('http://localhost:3000/api/ongcourses');
    if (!res.ok) throw new Error('Failed to load the data');

    const data: TOngCourses[] = await res.json();
    return data;
  } catch (err) {
    console.error('Failed to load the Ongoing courses data.', err);
    return null;
  }
};
