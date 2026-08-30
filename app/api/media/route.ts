import {
  fetchMediaCollection,
  isMediaCollectionId,
  type MediaCollectionId,
} from "@/lib/youtube";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const collectionParam = searchParams.get("collection") ?? "classes";

  if (!isMediaCollectionId(collectionParam)) {
    return NextResponse.json(
      {
        error: "Invalid collection. Use classes, sunday, or prayer.",
        videos: [],
      },
      { status: 400 },
    );
  }

  const collection: MediaCollectionId = collectionParam;
  const videos = await fetchMediaCollection(collection);
  return NextResponse.json({ collection, videos });
}
