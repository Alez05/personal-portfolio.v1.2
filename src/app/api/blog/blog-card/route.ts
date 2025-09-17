import { NextResponse } from "next/server";
import { blogCardData } from "./blog-card";

export const GET = () => {
  return NextResponse.json(blogCardData);
};
