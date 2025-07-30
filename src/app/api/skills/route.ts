import { NextResponse } from "next/server"
import { skillsData } from "./skillsdata"


export const GET = () => {
  return NextResponse.json(skillsData)
}
