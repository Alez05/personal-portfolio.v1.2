import { NextResponse } from "next/server"
import { SkillGroupData } from "./skillsdata"


export const GET = () => {
  return NextResponse.json(SkillGroupData)
}
