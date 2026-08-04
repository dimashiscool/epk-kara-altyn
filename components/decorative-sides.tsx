import fs from "fs";
import path from "path";
import Image from "next/image"

function getImages(folder: string) {
  const directory = path.join(process.cwd(), "public", "images", folder);

  return fs
    .readdirSync(directory)
    .filter((file) =>
      [".png", ".jpg", ".jpeg", ".JPG", ".webp"].includes(
        path.extname(file).toLowerCase()
      )
    )
    .map((file) => `/images/${folder}/${file}`);
}

export function DecorativeSides() {
  const leftImages = getImages("left-side");
  const rightImages = getImages("right-side");

  return (
    <>
      {/* Left decorations */}
      <aside
        className="
          pointer-events-none
          absolute
          -left-10
          top-18
          z-0
          gap-2
          hidden
          h-[calc(100vh-7rem)]
          w-44
          flex-col
          justify-between
          py-8
          opacity-70
          xl:flex
        "
      >
        {leftImages.map((src, i) => (
          <div key={src} className="relative">
            <Image
              src={src}
              alt=""
              height={1000}
              width={1000}
              className={`
                object-contain
              `}
    />
  </div>
        ))}
      </aside>

      {/* Right decorations */}
      <aside
        className="
          pointer-events-none
          absolute
          -right-10
          top-18
          z-0
          hidden
          h-[calc(100vh-7rem)]
          w-44
          flex-col
          justify-between
          py-8
          opacity-70
          xl:flex
        "
      >
        {rightImages.map((src, i) => (
          <div key={src} className="relative">
            <Image
              src={src}
              alt=""
              height={1000}
              width={1000}
              className={`
                object-contain
              `}
    />
  </div>
        ))}
      </aside>
    </>
  );
}