import { NextResponse } from "next/server"
import { educationData } from "./education"

export const GET = () => {
  return NextResponse.json(educationData)
}
