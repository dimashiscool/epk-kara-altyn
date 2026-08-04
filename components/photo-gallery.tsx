"use client";

import Image from "next/image";
import { useState } from "react";
import type { MediaItem } from "@/lib/types";
import { SectionTitle } from "@/components/section-title";

type PhotoGalleryProps = {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  items: MediaItem[];
  autoImages?: string[];
};

export function PhotoGallery({
  id,
  eyebrow,
  title,
  description,
  items,
  autoImages = [],
}: PhotoGalleryProps) {
  const [selectedSrc, setSelectedSrc] = useState<string | null>(null);
  const [selectedLabel, setSelectedLabel] = useState("");

  const openPreview = (src: string, label: string) => {
    setSelectedSrc(src);
    setSelectedLabel(label);
  };

  return (
    <section id={id} className="rounded-2xl border border-stone-200 bg-white p-6 shadow-sm md:p-8">
      <SectionTitle eyebrow={eyebrow} title={title} description={description} />

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {items.map((item) => (
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

        {autoImages.map((src) => (
          <article key={src} className="overflow-hidden rounded-xl border border-stone-200 bg-stone-50">
            <button
              type="button"
              onClick={() => openPreview(src, "Сурет")}
              className="relative block aspect-video w-full overflow-hidden bg-white"
              aria-label="Суретті алдын ала қарау"
            >
              <Image src={src} alt="" fill className="object-cover" sizes="(max-width: 768px) 100vw, 33vw" />
            </button>
            <div className="flex gap-2 p-3">
              <button
                type="button"
                onClick={() => openPreview(src, "Сурет")}
                className="rounded-md border border-stone-300 bg-white px-3 py-2 text-sm text-stone-800 hover:bg-stone-100"
              >
                Алдын ала қарау
              </button>
              <a
                href={src}
                download
                className="rounded-md bg-amber-500 px-3 py-2 text-sm font-semibold text-stone-950 hover:bg-amber-400"
              >
                Жүктеу
              </a>
            </div>
          </article>
        ))}
      </div>

      {items.length === 0 && autoImages.length === 0 ? (
        <p className="text-sm text-stone-500">Әзірге суреттер қосылмаған.</p>
      ) : null}

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
