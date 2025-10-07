import { NextResponse } from "next/server";
import { skillhlData } from "./skills-hl";

export const GET = () => {
  return NextResponse.json(skillhlData);
};
