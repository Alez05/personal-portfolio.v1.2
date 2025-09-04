import { NextResponse } from "next/server"
import { ongoingCourses } from "./ongcourses";

export const GET = () => {
  return NextResponse.json(ongoingCourses);
}
