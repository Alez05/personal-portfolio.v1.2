import { NextResponse } from "next/server";
import { projectsCardData } from "./project-card";

export const GET = () => {
  return NextResponse.json(projectsCardData);
};
