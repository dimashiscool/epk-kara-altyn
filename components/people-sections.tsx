"use client";

import { useState } from "react";
import Image from "next/image";
import type { CrewPerson, Person } from "@/lib/types";
import { SectionTitle } from "@/components/section-title";

type CastSectionProps = {
  cast: Person[];
};

export function CastSection({ cast }: CastSectionProps) {
  const [expanded, setExpanded] = useState(false);
  return (
    
    <section id="cast" className="rounded-2xl border border-stone-200 bg-white p-6 shadow-sm md:p-8">
      <SectionTitle
        eyebrow="Актерлер"
        title="Актерлік құрам"
      />
      <div
        className={`relative mt-4 overflow-hidden transition-all duration-300 ${
          expanded ? "max-h-[3000px]" : "max-h-100"
        }`} >
        <div className="grid gap-4 grid-cols-2 md:grid-cols-2 xl:grid-cols-4">
        {cast.map((person) => (
          <article key={person.id} className="rounded-xl border border-stone-200 bg-stone-50 p-4">
            <div className="relative mb-3 aspect-square overflow-hidden rounded-lg border border-stone-200 bg-white">
              <Image src={person.image} alt={person.name} fill className="object-cover" />
            </div>
            <h3 className="text-lg font-semibold text-stone-900">{person.name}</h3>
            <p className="text-sm text-amber-800">{person.role}</p>
            <p className="mt-3 text-sm text-stone-500"><b>Фильмография:</b> {person.previousWork.join(", ")}</p>
          </article>
        ))}
      </div>
        {!expanded && (
          <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-white to-transparent" />
        )}
      </div>

      <button
        onClick={() => setExpanded(!expanded)}
        className="relative z-50 mt-4 font-medium text-amber-700 hover:text-amber-900"
      >
        {expanded ? "Жабу" : "Бәрін көру"}
      </button>
    </section>
  );
}

type CrewSectionProps = {
  crew: CrewPerson[];
};

export function CrewSection({ crew }: CrewSectionProps) {
  return (
    <section id="crew" className="rounded-2xl border border-stone-200 bg-white p-6 shadow-sm md:p-8">
      <SectionTitle
        eyebrow="Топ"
        title="Түсірілім тобы"
      />
      <div className="grid gap-4 md:grid-cols-2">
        {crew.map((person) => (
          <article key={person.id} className="rounded-xl border border-stone-200 bg-stone-50 p-4">
            <div className="flex gap-4">
              <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-lg border border-stone-200 bg-white">
                <Image src={person.image} alt={person.name} fill className="object-cover" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-stone-900">{person.name}</h3>
                <p className="text-sm text-amber-800">{person.position}</p>
              </div>
            </div>
            <p className="mt-3 text-sm text-stone-500"><b>Фильмография:</b> {person.filmography.join(", ")}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
