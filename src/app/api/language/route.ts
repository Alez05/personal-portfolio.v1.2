import { NextResponse } from "next/server";
import { languagesData } from "./language";

export const GET = () => {
  return NextResponse.json(languagesData);
};
