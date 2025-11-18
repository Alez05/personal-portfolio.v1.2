import { NextResponse } from "next/server";
import { projectHlData } from "./project-hl";

export const GET = () => {
  return NextResponse.json(projectHlData);
};
