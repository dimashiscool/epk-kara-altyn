import cast from "@/content/kz/cast.json";
import crew from "@/content/kz/crew.json";
import film from "@/content/kz/film.json";
import media from "@/content/kz/media.json";
import press from "@/content/kz/press.json";
import rucrew from "@/content/ru/crew.json";
import rufilm from "@/content/ru/film.json";
import rumedia from "@/content/ru/media.json";

import type { CrewPerson, FilmContent, MediaItem, Person, PressItem } from "@/lib/types";

export const filmContent = film as FilmContent;
export const castContent = cast as Person[];
export const crewContent = crew as CrewPerson[];
export const mediaContent = media as MediaItem[];
export const pressContent = press as PressItem[];

export const rufilmContent = rufilm as FilmContent;
export const rucrewContent = rucrew as CrewPerson[];
export const rumediaContent = rumedia as MediaItem[];

export const setPhotos = mediaContent.filter((item) => item.category === "behindScenes");
export const filmStills = mediaContent.filter((item) => item.category === "filmFrames");

export const navigationItems = [
  { id: "set-photos", label: "Түсірілім алаңынан суреттер", href: "/kz/set-photos" },
  { id: "film-stills", label: "Фильм кадрлары", href: "/kz/film-stills" },
  { id: "cast", label: "Актерлік құрам", href: "/#cast" },
  { id: "crew", label: "Түсірілім тобы", href: "/#crew" },
  { id: "press", label: "БАҚ біз туралы", href: "/#press" },
  { id: "lang", label: "ҚАЗ/РУС", href: "/ru" },
];

export const runavigationItems = [
  { id: "set-photos", label: "Фотографии со съем. площадки", href: "/ru/set-photos" },
  { id: "film-stills", label: "Кадры из фильма", href: "/ru/film-stills" },
  { id: "cast", label: "Актерский состав", href: "/ru#cast" },
  { id: "crew", label: "Съемочная группа ", href: "/ru#crew" },
  { id: "press", label: "СМИ о нас", href: "/ru#press" },
  { id: "lang", label: "ҚАЗ/РУС", href: "/kz" },
];