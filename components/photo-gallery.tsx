"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import type { MediaItem } from "@/lib/types";
import { SectionTitle } from "@/components/section-title";

type PhotoGalleryProps = {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  items: MediaItem[];
  folder?: string;
  autoImages?: string[];
};

export function PhotoGallery({
  id,
  eyebrow,
  title,
  description,
  items,
  folder,
}: PhotoGalleryProps) {
  const [selectedSrc, setSelectedSrc] = useState<string | null>(null);
  const [selectedLabel, setSelectedLabel] = useState("");
  const [blobItems, setBlobItems] = useState<MediaItem[]>([]);
  const [loading, setLoading] = useState(true);

  const openPreview = (src: string, label: string) => {
    setSelectedSrc(src);
    setSelectedLabel(label);
  };
  useEffect(() => {
  if (!folder) return;

  async function loadImages() {
    try {
      const response = await fetch(
        `/api/images?folder=${folder}`,
        {
          cache: "no-store",
        }
      );

      const blobs = await response.json();

      const formatted = blobs.map(
        (blob: { url: string; pathname: string }, index: number) => ({
          id: blob.pathname,
          category: folder,
          title: `Сурет ${index + 1}`,
          description: "",
          preview: blob.url,
          downloadUrl: blob.url + "?download=1",
        })
      );

      setBlobItems(formatted);

    } finally {
      setLoading(false);
    }
  }

  loadImages();

}, [folder]);
  const allItems = [
  ...(items ?? []),
  ...blobItems,
];
  console.log("ALL:", allItems);
  console.log("items:", items);
  return (
    <section id={id} className="rounded-2xl border border-stone-200 bg-white p-6 shadow-sm md:p-8">
      <SectionTitle eyebrow={eyebrow} title={title} description={description} />

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {allItems.map((item) => (
          <article key={item.id} className="rounded-xl border border-stone-200 bg-stone-50 p-4">
            <div className="relative mb-3 aspect-video overflow-hidden rounded-lg border border-stone-200 bg-white">
              <Image src={item.preview} alt={item.title} fill className="object-cover" />
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              <button
                type="button"
                onClick={() => openPreview(item.preview, item.title)}
                className="rounded-md border border-stone-300 bg-white px-3 py-2 text-sm text-stone-800 hover:bg-stone-100"
              >
                Алдын ала қарау
              </button>
              <a
                href={item.downloadUrl}
                download
                className="rounded-md bg-amber-500 px-3 py-2 text-sm font-semibold text-stone-950 hover:bg-amber-400"
              >
                Жүктеу
              </a>
            </div>
          </article>
        ))}

      </div>

      {loading && (
        <div className="grid gap-4 md:grid-cols-3">
          {[1,2,3].map(i => (
            <div
              key={i}
              className="aspect-video animate-pulse rounded-xl bg-stone-200"
            />
          ))}
        </div>
      )}

      {selectedSrc ? (
        <div
          className="fixed inset-0 z-[70] flex items-center justify-center bg-stone-950/80 p-4"
          role="dialog"
          aria-modal="true"
          aria-label="Толық экран көрінісі"
        >
          <div className="w-full max-w-5xl">
            <div className="mb-3 flex items-center justify-between">
              <h3 className="text-xl font-semibold text-white">{selectedLabel}</h3>
              <button
                type="button"
                onClick={() => setSelectedSrc(null)}
                className="rounded-md border border-stone-500 bg-stone-800 px-3 py-2 text-stone-100 hover:bg-stone-700"
              >
                Жабу
              </button>
            </div>
            <div className="relative aspect-video overflow-hidden rounded-xl border border-stone-600 bg-stone-900">
              <Image src={selectedSrc} alt={selectedLabel} fill className="object-contain" />
            </div>
          </div>
        </div>
      ) : null}
    </section>
  );
}
