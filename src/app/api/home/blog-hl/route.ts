import { NextResponse } from "next/server";
import { blogHldata } from "./blog-hl";

export const GET = () => {
  return NextResponse.json(blogHldata);
};
