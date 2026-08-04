import { CastSection, CrewSection } from "@/components/people-sections-ru";
import { PressCoverage } from "@/components/press-coverage-ru";
import { SiteHeader } from "@/components/site-header-ru";
import { About } from "@/components/about";
import {
  rucastContent,
  rucrewContent,
  rufilmContent,
  rupressContent,
} from "@/lib/content";
import { discoverUnlinkedImages } from "@/lib/discover-images";
import { DecorativeSides } from "@/components/decorative-sides";

export default function HomePage() {
  const autoImages = discoverUnlinkedImages();

  return (
    <div className="relative min-h-screen text-stone-900">
    <DecorativeSides />
      <div className="min-h-screen text-stone-900">
        <SiteHeader />
        <main className="container-wrap space-y-10 py-8 md:py-10">
          <section id="home" className="rounded-2xl border border-stone-200 bg-white p-6 shadow-sm md:p-10">
            <p className="mb-3 text-sm uppercase tracking-[0.2em] text-amber-800">{rufilmContent.tagline}</p>
            <h1 className="text-4xl font-semibold tracking-tight text-stone-950 md:text-6xl">{rufilmContent.title}</h1>
            <p className="mt-2 text-lg text-stone-600">{rufilmContent.productionCompany}</p>
            <p className="mt-6 max-w-3xl text-base leading-7 text-stone-700">{rufilmContent.shortDescription}</p>
            <div className="mt-6 flex flex-wrap gap-3">
              {rufilmContent.heroActions.map((action) => (
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

          <About kz={false}/>
          <CastSection cast={rucastContent} />
          <CrewSection crew={rucrewContent} />
          <PressCoverage items={rupressContent} />
        </main>
        <footer className="border-t border-stone-200 bg-white/70 py-6 text-center text-sm text-stone-500">
          © {new Date().getFullYear()} MurAi Productions. Барлық құқықтар қорғалған.
        </footer>
      </div>
    </div>
  );
}
