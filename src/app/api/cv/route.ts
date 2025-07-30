import { NextResponse } from "next/server"
import { getCVData } from "./cvdata"


export const GET = () => {
  return NextResponse.json(getCVData)
}
