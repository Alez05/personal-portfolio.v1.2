import { NextResponse } from "next/server"
import { abouthlData } from "./about-hl"

export const GET = () => {
  return NextResponse.json(abouthlData)
}
