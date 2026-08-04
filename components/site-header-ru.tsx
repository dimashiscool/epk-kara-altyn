import Link from "next/link";
import { runavigationItems } from "@/lib/content";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-stone-200 bg-white/90 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl flex-wrap items-center justify-between gap-4 px-4 py-4 md:px-6">
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-stone-500">MurAi Productions</p>
          <p className="text-lg font-semibold text-stone-900">Қара Алтын</p>
        </div>
        <nav aria-label="Негізгі навигация">
          <ul className="flex flex-wrap items-center gap-2 text-sm md:gap-3">
            {runavigationItems.map((item) => (
              <li key={item.id}>
                <Link
                  href={item.href}
                  className="rounded-md px-3 py-2 text-stone-700 transition hover:bg-stone-100 hover:text-stone-950 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-700"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
