import fs from "fs";
import path from "path";
import { castContent, crewContent, mediaContent } from "@/lib/content";

const IMAGE_EXTENSIONS = new Set([".jpg", ".jpeg", ".png", ".webp", ".gif", ".avif"]);

function collectReferencedPaths(): Set<string> {
  const referenced = new Set<string>();

  for (const item of mediaContent) {
    referenced.add(decodeURIComponent(item.preview));
    referenced.add(decodeURIComponent(item.downloadUrl));
  }

  for (const person of castContent) {
    referenced.add(decodeURIComponent(person.image));
  }

  for (const person of crewContent) {
    referenced.add(decodeURIComponent(person.image));
  }

  return referenced;
}

function encodeImagePath(webPath: string): string {
  return webPath
    .split("/")
    .map((segment, index) => (index === 0 ? segment : encodeURIComponent(segment)))
    .join("/");
}

function listImagesInDir(absoluteDir: string, webBase: string, recursive = false): string[] {
  if (!fs.existsSync(absoluteDir)) {
    return [];
  }

  const entries = fs.readdirSync(absoluteDir, { withFileTypes: true });
  const images: string[] = [];

  for (const entry of entries) {
    if (entry.name.startsWith(".")) {
      continue;
    }

    const absolutePath = path.join(absoluteDir, entry.name);
    const webPath = `${webBase}/${entry.name}`.replace(/\\/g, "/");

    if (entry.isDirectory()) {
      if (!recursive) {
        continue;
      }
      images.push(...listImagesInDir(absolutePath, webPath, true));
      continue;
    }

    const extension = path.extname(entry.name).toLowerCase();
    if (!IMAGE_EXTENSIONS.has(extension)) {
      continue;
    }

    if (entry.name.startsWith("placeholder-")) {
      continue;
    }

    images.push(encodeImagePath(webPath));
  }

  return images.sort((a, b) => a.localeCompare(b, undefined, { sensitivity: "base" }));
}

function unlinkFilter(paths: string[], referenced: Set<string>): string[] {
  return paths.filter((imagePath) => {
    const decoded = decodeURIComponent(imagePath);
    return !referenced.has(decoded) && !referenced.has(imagePath);
  });
}

export type DiscoveredImages = {
  setPhotos: string[];
  filmStills: string[];
};

/**
 * Unlinked images from public/images appear automatically (no title/description).
 *
 * Placement:
 * - public/images/set-photos/  → Түсірілім алаңынан суреттер
 * - public/images/film-stills/ → Фильм кадрлары
 * - public/images/* (root)    → Түсірілім алаңынан суреттер
 */
export function discoverUnlinkedImages(): DiscoveredImages {
  const referenced = collectReferencedPaths();
  const imagesRoot = path.join(process.cwd(), "public", "images");

  const rootImages = unlinkFilter(listImagesInDir(imagesRoot, "/images", false), referenced);
  const setFolder = unlinkFilter(
    listImagesInDir(path.join(imagesRoot, "set-photos"), "/images/set-photos", true),
    referenced,
  );
  const stillsFolder = unlinkFilter(
    listImagesInDir(path.join(imagesRoot, "film-stills"), "/images/film-stills", true),
    referenced,
  );

  return {
    setPhotos: [...setFolder, ...rootImages],
    filmStills: stillsFolder,
  };
}
