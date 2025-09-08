import { NextResponse } from "next/server"
import { AboutSectionData } from "./about-hl"

export const GET = () => {
  return NextResponse.json(AboutSectionData)
}
