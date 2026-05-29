import { NextResponse } from "next/server";
import { fetchClaseVideosFromYoutube } from "@/lib/youtube";

export async function GET() {
  const clases = await fetchClaseVideosFromYoutube();
  return NextResponse.json({ clases });
}
