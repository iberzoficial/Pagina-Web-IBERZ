import { fetchMediaCollection } from "@/lib/youtube";
import { NextResponse } from "next/server";

export async function GET() {
  const clases = await fetchMediaCollection("classes");
  return NextResponse.json({ clases, videos: clases });
}
