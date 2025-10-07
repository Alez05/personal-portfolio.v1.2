import { NextResponse } from "next/server"
import { ongCoursesData } from "./ongcourses";

export const GET = () => {
  return NextResponse.json(ongCoursesData);
}
