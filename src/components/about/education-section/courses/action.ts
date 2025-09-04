import { TCourses } from "./courses.type"

export const getCoursesAction = async ():Promise<TCourses[] | null>  => {
  try {
    const res  = await fetch('http://localhost:3000/api/courses')
    if(!res.ok) throw new Error('Failed to load the courses data.')

    const data: TCourses[] = await res.json()
    return data
  } catch(err) {
    console.error('Error fetching the courses data', err)
    return null
  }
}
