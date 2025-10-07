import { NextResponse } from "next/server";
import { languageData } from "./language";

export const GET = () => {
  return NextResponse.json(languageData);
};
