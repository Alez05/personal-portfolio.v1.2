import { NextResponse } from "next/server";
import { contactBodyData } from "./contact.body";

export const GET = () => {
  return NextResponse.json(contactBodyData);
};
