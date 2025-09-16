import { NextResponse } from "next/server";
import { blogsHeroData } from "./hero-bl";

export const GET = () => {
  return NextResponse.json(blogsHeroData);
};
