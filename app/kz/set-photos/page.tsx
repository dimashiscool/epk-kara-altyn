import { PhotoGallery } from "@/components/photo-gallery";
import { setPhotos } from "@/lib/content";
import { SiteHeader } from "@/components/site-header";

export default function HomePage() {

  return (
    <div className="min-h-screen text-stone-900">
      <main className="container-wrap space-y-10 py-8 md:py-10">
        <SiteHeader />

        <PhotoGallery
          id="set-photos"
          eyebrow="Түсірілім"
          title="Түсірілім алаңынан суреттер"
          description="Түсірілім үдерісі, локациялар және команда жұмысынан ресми суреттер."
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
