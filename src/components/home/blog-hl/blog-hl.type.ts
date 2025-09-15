export type TBlogHl = {
  title?: string;
  description?: string;
  blogs?: {
    image?: string;
    link?: string;
  }[]
  cta?:{
    label?: string;
    link?: string;
  }
}
