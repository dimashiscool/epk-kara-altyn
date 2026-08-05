import { PhotoGallery } from "@/components/photo-gallery";
import { SiteHeader } from "@/components/site-header";
import { filmStills } from "@/lib/content";


export default function HomePage() {

  return (
    <div className="min-h-screen text-stone-900">
      <main className="container-wrap space-y-10 py-8 md:py-10">
        <SiteHeader />
 
        <PhotoGallery
          id="film-stills"
          eyebrow="Кадрлар"
          title="Фильм кадрлары"
          description="Баспасөзде пайдалануға арналған жоғары сапалы фильм кадрлары."
          items={filmStills}
          folder="film-stills"
        />
      </main>
      <footer className="border-t border-stone-200 bg-white/70 py-6 text-center text-sm text-stone-500">
        © {new Date().getFullYear()} MurAi Productions. Барлық құқықтар қорғалған.
      </footer>
    </div>
  );
}
