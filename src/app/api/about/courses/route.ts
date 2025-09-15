import { NextResponse } from 'next/server';
import { coursesData } from './courses';

export const GET = () => {
  return NextResponse.json(coursesData)
}
