import { NextResponse } from "next/server"
import { DomainExpertiseData } from "./expertise"


export const GET = () => {
  return NextResponse.json(DomainExpertiseData)
}
