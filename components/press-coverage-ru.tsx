import type { PressItem } from "@/lib/types";
import { SectionTitle } from "@/components/section-title";

type PressCoverageProps = {
  items: PressItem[];
};

export function PressCoverage({ items }: PressCoverageProps) {
  return (
    <section id="press" className="rounded-2xl border border-stone-200 bg-white p-6 shadow-sm md:p-8">
      <SectionTitle
        eyebrow="Публикация"
        title="СМИ о нас"
        description="Опубликованные материалы и ссылки на СМИ, посвященные фильму и его созданию."
      />
      <div className="grid gap-4">
        {items.map((item) => (
          <article key={item.id} className="rounded-xl border border-stone-200 bg-stone-50 p-5">
            <div className="flex flex-wrap items-center gap-3 text-sm text-stone-500">
              <span className="font-medium text-amber-800">{item.outlet}</span>
              <span aria-hidden="true">·</span>
              <time dateTime={item.date}>{item.date}</time>
            </div>
            <h3 className="mt-2 text-xl font-semibold text-stone-900">{item.title}</h3>
            <p className="mt-2 text-sm leading-6 text-stone-600">{item.summary}</p>
            <a
              href={item.url}
              className="mt-4 inline-flex rounded-md bg-amber-500 px-3 py-2 text-sm font-semibold text-stone-950 hover:bg-amber-400"
            >
              Читать
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}
