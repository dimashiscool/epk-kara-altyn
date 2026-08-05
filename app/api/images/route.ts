import { list } from "@vercel/blob";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);

  const folder = searchParams.get("folder");

  if (!folder) {
    return NextResponse.json(
      { error: "No folder specified" },
      { status: 400 }
    );
  }

  const { blobs } = await list({
    prefix: `${folder}/`,
    limit: 1000,
  });

  return NextResponse.json(blobs);
}