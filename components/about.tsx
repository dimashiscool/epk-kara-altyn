"use client";

import { useState } from "react";
import { SectionTitle } from "@/components/section-title";
import about from "@/content/kz/about.json"
import ruabout from "@/content/ru/about.json"
import ReactMarkdown from "react-markdown";

export function About( {kz}: {kz: boolean} ) {
  const [expanded, setExpanded] = useState(false);
  
  return (
    <section id="about" className="rounded-2xl border border-stone-200 bg-white p-6 shadow-sm md:p-8">
      <SectionTitle title={kz ? "Фильм туралы": "О фильме"} />
      <div
        className={`relative mt-4 overflow-hidden transition-all duration-300 ${
          expanded ? "max-h-[3000px]" : "max-h-56"
        }`} >

        {kz ? about.about.map((paragraph, i) => ( <ReactMarkdown components={{ p: ({ children }) => ( <p className="mb-6 leading-8">{children}</p> ), }} key={i}>{paragraph}</ReactMarkdown> )) : ruabout.about.map((paragraph, i) => ( <ReactMarkdown components={{ p: ({ children }) => ( <p className="mb-6 leading-8">{children}</p> ), }} key={i}>{paragraph}</ReactMarkdown> ))}

        {!expanded && (
          <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-white to-transparent" />
        )}
      </div>

      <button
        onClick={() => setExpanded(!expanded)}
        className="mt-4 font-medium text-amber-700 hover:text-amber-900"
      >
        {expanded ? kz ? "Жабу": "Закрыть" : kz ? "Ары қарай оқу": "Читать дальше"}
      </button>
    </section>
  );
}
