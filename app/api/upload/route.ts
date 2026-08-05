import { put } from "@vercel/blob";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const formData = await request.formData();

    const file = formData.get("file") as File;
    const folder = formData.get("folder") as string;

    if (!file || !folder) {
      return NextResponse.json(
        { error: "Missing file or folder" },
        { status: 400 }
      );
    }

    const blob = await put(
      `${folder}/${file.name}`,
      file,
      {
        access: "public",
      }
    );

    return NextResponse.json(blob);

  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { error: "Upload failed" },
      { status: 500 }
    );
  }
}