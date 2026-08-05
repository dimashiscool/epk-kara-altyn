import { CastSection, CrewSection } from "@/components/people-sections";
import { PressCoverage } from "@/components/press-coverage";
import { SiteHeader } from "@/components/site-header";
import { About } from "@/components/about";
import {
  castContent,
  crewContent,
  filmContent,
  pressContent,
} from "@/lib/content";
import { discoverUnlinkedImages } from "@/lib/discover-images";
import { DecorativeSides } from "@/components/decorative-sides";
import { Trailer } from "@/components/trailer";

export default function HomePage() {
  const autoImages = discoverUnlinkedImages();

  return (
    <div className="relative min-h-screen text-stone-900">
    <DecorativeSides />
      <div className="min-h-screen text-stone-900">
        <SiteHeader />
        <main className="container-wrap space-y-10 py-8 md:py-10">
          <section id="home" className="rounded-2xl border border-stone-200 bg-white p-6 shadow-sm md:p-10">
            <p className="mb-3 text-sm uppercase tracking-[0.2em] text-amber-800">{filmContent.tagline}</p>
            <h1 className="text-4xl font-semibold tracking-tight text-stone-950 md:text-6xl">{filmContent.title.toUpperCase()}</h1>
            <p className="mt-2 text-lg text-stone-600">Арманыңды сатпа!</p>
            <p className="mt-6 max-w-3xl text-base leading-7 text-stone-700">{filmContent.shortDescription}</p>
            <p className="mt-6 max-w-3xl text-base leading-7 text-stone-700">Күздің басты мотивациялық бизнес драмасы “Қара алтын” – 10 қыркүйектен бастап барлық кинотеатрларда!</p>
            <div className="mt-6 flex flex-wrap gap-3">
              {filmContent.heroActions.map((action) => (
                <a
                  key={action.id}
                  href={action.href}
                  className="rounded-md bg-amber-500 px-4 py-3 text-sm font-semibold text-stone-950 hover:bg-amber-400"
                >
                  {action.label}
                </a>
              ))}
            </div>
          </section>
          
          <Trailer kz={true} />
          <About kz={true} />
          <CastSection cast={castContent} />
          <CrewSection crew={crewContent} />
          <PressCoverage items={pressContent} />
        </main>
        <footer className="border-t border-stone-200 bg-white/70 py-6 text-center text-sm text-stone-500">
          © {new Date().getFullYear()} MurAi Productions. Барлық құқықтар қорғалған.
        </footer>
      </div>
    </div>
  );
}
