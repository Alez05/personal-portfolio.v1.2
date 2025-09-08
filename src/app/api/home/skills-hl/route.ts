import { NextResponse } from "next/server";
import { skillsHighlightsData } from "./skills-hl";

export const GET = () => {
  return NextResponse.json(skillsHighlightsData);
};
