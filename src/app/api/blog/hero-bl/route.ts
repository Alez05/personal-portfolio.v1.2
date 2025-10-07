import { NextResponse } from "next/server";
import { blogHeroData } from "./hero-bl";

export const GET = () => {
  return NextResponse.json(blogHeroData);
};
