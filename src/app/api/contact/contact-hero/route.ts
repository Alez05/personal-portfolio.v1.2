import { NextResponse } from "next/server";
import { contactHeroData } from "./contact-hero";

export const GET = () => {
  return NextResponse.json(contactHeroData);
};
