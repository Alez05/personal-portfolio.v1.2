export type TOngCourses = {
  id?: string,
  name?: string,
  nameIcon?: string,
  provider?: string
  date?:string
  status?: "Completed" | "Ongoing" | "Planned";

  icons?: {
    date?: string,
  }
}
