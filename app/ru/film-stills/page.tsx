import { PhotoGallery } from "@/components/photo-gallery-ru";
import { filmStills } from "@/lib/content";
import { discoverUnlinkedImages } from "@/lib/discover-images";
import { SiteHeader } from "@/components/site-header-ru";

export default function HomePage() {
  const autoImages = discoverUnlinkedImages();

  return (
    <div className="min-h-screen text-stone-900">
      <main className="container-wrap space-y-10 py-8 md:py-10">
        <SiteHeader />

        <PhotoGallery
          id="film-stills"
          eyebrow="Кадры"
          title="Кадры из фильма"
          description="Высококачественные кадры из фильма для использования в прессе."
          items={filmStills}
          autoImages={autoImages.filmStills}
        />
      </main>
      <footer className="border-t border-stone-200 bg-white/70 py-6 text-center text-sm text-stone-500">
        © {new Date().getFullYear()} MurAi Productions. Барлық құқықтар қорғалған.
      </footer>
    </div>
  );
}
