export type NavigationItem = {
  id: string;
  label: string;
  href?: string;
};

export type KeyFilmInfo = {
  label: string;
  value: string;
};

export type FilmContent = {
  title: string;
  productionCompany: string;
  tagline: string;
  shortDescription: string;
  fullSynopsis: string;
  info: KeyFilmInfo[];
  socialLinks: { label: string; url: string }[];
  heroActions: NavigationItem[];
};

export type MediaCategory = "filmFrames" | "behindScenes";

export type MediaItem = {
  id: string;
  category: MediaCategory;
  title: string;
  description: string;
  preview: string;
  sceneInfo?: string;
  resolution?: string;
  date?: string;
  location?: string;
  downloadUrl: string;
};

export type PressItem = {
  id: string;
  outlet: string;
  title: string;
  date: string;
  summary: string;
  url: string;
};

export type Person = {
  id: string;
  name: string;
  role: string;
  image: string;
  biography: string;
  previousWork: string[];
};

export type CrewPerson = {
  id: string;
  name: string;
  position: string;
  image: string;
  biography: string;
  filmography: string[];
};

export type DownloadItem = {
  id: string;
  title: string;
  fileType: string;
  fileSize: string;
  description: string;
  url: string;
};

export type ContactContent = {
  company: string;
  pressContact: string;
  email: string;
  website: string;
  socialLinks: { label: string; url: string }[];
};
