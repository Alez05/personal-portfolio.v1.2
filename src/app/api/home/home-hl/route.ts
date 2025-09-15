import { NextResponse } from "next/server";
import { heroData } from "./home-hl";

export const GET = () => {
  return NextResponse.json(heroData);
};
