import { NextResponse } from "next/server";
import { homeSkillsData } from "./home-skill";

export const GET = () => {
  return NextResponse.json(homeSkillsData);
};
