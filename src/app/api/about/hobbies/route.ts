import { NextResponse } from "next/server";
import { hobbiesData } from "./hobbies";

export const GET = () => {
  return NextResponse.json(hobbiesData);
};
