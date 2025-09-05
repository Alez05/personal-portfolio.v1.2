// hobbies.type.ts
export type THobbies = {
  category?: string;
  categoryIcon?: string;
  description?: string;

  books?: {
    status?: string;
    booktitle?: string;
    bookAuthor?: string;
    bookImage?: string; // new field for cover image URL
  }[];
};
