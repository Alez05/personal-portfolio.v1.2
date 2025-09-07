import { NextResponse } from "next/server"
import { AboutSectionData } from "./about-section"

export const GET = () => {
  return NextResponse.json(AboutSectionData)
}
