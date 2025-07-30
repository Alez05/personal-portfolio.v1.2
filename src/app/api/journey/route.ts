import { NextResponse } from "next/server"
import { JourneyData } from "./journeydata"


export const GET = () => {
  return NextResponse.json(JourneyData)
}
