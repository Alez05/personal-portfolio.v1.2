import { NextResponse } from "next/server"
import { blogSectionData } from "./blog-section"

export const GET = () => {
  return NextResponse.json(blogSectionData)
}
