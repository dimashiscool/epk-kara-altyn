import { PhotoGallery } from "@/components/photo-gallery-ru";
import { setPhotos } from "@/lib/content";
import { SiteHeader } from "@/components/site-header-ru";

export default function HomePage() {

  return (
    <div className="min-h-screen text-stone-900">
      <main className="container-wrap space-y-10 py-8 md:py-10">
        <SiteHeader />

        <PhotoGallery
          id="set-photos"
          eyebrow="Съемка"
          title="Фотографии со съемочной площадки"
          description="Официальные фотографии со съемок, с мест съемок и о работе съемочной группы."
          items={setPhotos}
          folder="behind-scenes"
        />
      </main>
      <footer className="border-t border-stone-200 bg-white/70 py-6 text-center text-sm text-stone-500">
        © {new Date().getFullYear()} MurAi Productions. Барлық құқықтар қорғалған.
      </footer>
    </div>
  );
}
