import { NextResponse } from "next/server";
import { heroprojectsData } from "./hero-pr";

export const GET = () => {
  return NextResponse.json(heroprojectsData);
};
