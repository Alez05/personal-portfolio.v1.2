import { NextResponse } from "next/server";
import { projectSectionData } from "./project-section";

export const GET = () => {
  return NextResponse.json(projectSectionData);
};
