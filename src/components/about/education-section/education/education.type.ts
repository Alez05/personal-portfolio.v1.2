export type TEducation = {
  id?: string;
  degree?: string; // e.g. "Fullstack Bootcamp" or "High School Diploma"
  degreeIcon?: string;
  lewagonIcon?: string;
  specialization?: string;
  school?: string; // e.g. "Ironhack", "XYZ High School"
  emblem?: string; // path or url to logo/emblem

  startDate?: string;
  endDate?: string;

  description?: string;
  keyContentTitle?: string; // e.g. "Highlights", "Focus Areas"
  keyContent?: string[];

  icons?: {
    school?: string;
    startDate?: string;
  };
};
