import { NextResponse } from "next/server";
import { footerData } from "./footer";

export const GET = () => {
  return NextResponse.json(footerData);
};
