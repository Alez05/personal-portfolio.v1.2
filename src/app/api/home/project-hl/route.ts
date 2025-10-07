import { NextResponse } from "next/server";
import { projecthlData } from "./project-hl";

export const GET = () => {
  return NextResponse.json(projecthlData);
};
