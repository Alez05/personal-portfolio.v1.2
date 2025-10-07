import { NextResponse } from "next/server"
import { careerData } from "./career"

export const GET = () => {
  return NextResponse.json(careerData)
};
