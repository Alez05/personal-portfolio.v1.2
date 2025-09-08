import { NextResponse } from "next/server";
import { projectsHighlightData } from "./project-hl";

export const GET = () => {
  return NextResponse.json(projectsHighlightData);
};
