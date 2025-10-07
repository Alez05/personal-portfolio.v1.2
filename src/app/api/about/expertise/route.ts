import { NextResponse } from "next/server"
import { expertiseData } from "./expertise"


export const GET = () => {
  return NextResponse.json(expertiseData)
}
