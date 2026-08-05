import { list } from "@vercel/blob";
import type { MediaItem } from "@/lib/types";

export async function getBlobImages(folder: string): Promise<MediaItem[]> {
  const { blobs } = await list({
    prefix: `${folder}/`,
  });

  return blobs.map((blob, index) => ({
    id: blob.pathname,
    category:
      folder === "film-stills"
        ? "filmFrames"
        : "behindScenes",
    title: `Сурет ${index + 1}`,
    description: "",
    preview: blob.url,
    downloadUrl: blob.url,
  }));
}