import { SectionTitle } from "@/components/section-title";

export function Trailer( {kz}: {kz: boolean} ) {
  
  return (
    <section id="trailer" className="rounded-2xl border border-stone-200 bg-white p-6 shadow-sm md:p-8">
      <SectionTitle eyebrow="Тизер" title={kz ? "Фильм тизері" : "Тизер фильма"} />

      <video controls className="ßh-full w-full" >
          <source src="/videos/trailer.mp4" type="video/mp4" />
        </video>
        <a href={"/videos/trailer.mp4"} download className="mt-6 inline-block rounded-md bg-amber-500 px-3 py-2 text-sm font-semibold text-stone-950 hover:bg-amber-400">{kz ? "Жүктеу" : "Скачать" }</a>
    </section>
  );
}
