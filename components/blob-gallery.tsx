"use client";

import { useEffect, useState } from "react";
import { PhotoGallery } from "@/components/photo-gallery";
import type { MediaItem } from "@/lib/types";

export function BlobGallery({
  folder,
  id,
  eyebrow,
  title,
  description,
}: {
  folder: string;
  id: string;
  eyebrow: string;
  title: string;
  description: string;
}) {
  const [images, setImages] = useState<MediaItem[]>([]);

  useEffect(() => {
    async function loadImages() {
      const response = await fetch(
        `/api/images?folder=${folder}`,
        {
          cache: "no-store",
        }
      );

      const blobs = await response.json();

      const formatted = blobs.map(
        (
          blob: { url: string; pathname: string },
          index: number
        ) => ({
          id: blob.pathname,
          category:
            folder === "film-stills"
              ? "filmFrames"
              : "behindScenes",
          title: `Сурет ${index + 1}`,
          description: "",
          preview: blob.url,
          downloadUrl: blob.url,
        })
      );

      setImages(formatted);
    }

    loadImages();
  }, [folder]);


  return (
    <PhotoGallery
      id={id}
      eyebrow={eyebrow}
      title={title}
      description={description}
      items={images}
    />
  );
}