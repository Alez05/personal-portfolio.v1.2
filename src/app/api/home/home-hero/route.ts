import { NextResponse } from "next/server";
import { heroData } from "./home-hero";

export const GET = () => {
  return NextResponse.json(heroData);
};
