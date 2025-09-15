import { NextResponse } from "next/server"
import { CareerJourneyData } from "./career"

export const GET = () => {
  return NextResponse.json(CareerJourneyData)
};
