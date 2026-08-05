"use client";

import { useState } from "react";
import Image from "next/image";

const folders = [
  { value: "film-stills", label: "Фильм кадрлары" },
  { value: "behind-scenes", label: "Түсірілім алаңы" },
];


export default function AdminPage() {

  const [folder, setFolder] = useState("film-stills");
  const [files, setFiles] = useState<File[]>([]);
  const [uploading, setUploading] = useState(false);
  const [status, setStatus] = useState("");


  function addFiles(e: React.ChangeEvent<HTMLInputElement>) {

    if (!e.target.files) return;

    setFiles([
      ...files,
      ...Array.from(e.target.files),
    ]);
  }


  function removeFile(index: number) {

    setFiles(
      files.filter((_, i) => i !== index)
    );
  }


  async function upload() {

    if (!files.length) return;

    setUploading(true);
    setStatus("Жүктелуде...");


    for (const file of files) {

      const data = new FormData();

      data.append("file", file);
      data.append("folder", folder);


      await fetch("/api/upload", {
        method: "POST",
        body: data,
      });

    }


    setFiles([]);
    setUploading(false);
    setStatus("Сәтті жүктелді!");
  }


  return (
    <main className="min-h-screen bg-stone-100 p-8 text-stone-900">

      <div className="mx-auto max-w-5xl space-y-8">


        <div>
          <h1 className="text-4xl font-bold">
            Медиа жүктеу
          </h1>

          <p className="mt-2 text-stone-600">
            Фильм материалдарын басқару
          </p>
        </div>



        <section className="rounded-2xl bg-white p-6 shadow-sm space-y-5">


          <div>
            <label className="mb-2 block font-semibold">
              Бөлім
            </label>

            <select
              value={folder}
              onChange={(e)=>setFolder(e.target.value)}
              className="w-full rounded-lg border p-3"
            >

              {folders.map((item)=>(
                <option
                  key={item.value}
                  value={item.value}
                >
                  {item.label}
                </option>
              ))}

            </select>

          </div>



          <label
            className="
            flex h-48 cursor-pointer
            items-center justify-center
            rounded-xl border-2 border-dashed
            border-stone-300
            hover:bg-stone-50
            "
          >

            <div className="text-center">

              <p className="font-semibold">
                Файлдарды таңдаңыз
              </p>

              <p className="text-sm text-stone-500">
                Бірнеше суретті таңдауға болады
              </p>

            </div>


            <input
              hidden
              type="file"
              multiple
              accept="image/*"
              onChange={addFiles}
            />

          </label>




          {files.length > 0 && (

            <div className="grid gap-4 sm:grid-cols-3">


              {files.map((file,index)=>(

                <div
                  key={index}
                  className="relative overflow-hidden rounded-xl border"
                >

                  <Image
                    src={URL.createObjectURL(file)}
                    alt=""
                    width={400}
                    height={250}
                    className="aspect-video object-cover"
                  />


                  <button
                    onClick={()=>removeFile(index)}
                    className="
                    absolute right-2 top-2
                    rounded-full bg-red-500
                    px-3 py-1 text-white
                    "
                  >
                    ×
                  </button>

                </div>

              ))}


            </div>

          )}




          <button
            disabled={uploading}
            onClick={upload}
            className="
            rounded-lg bg-amber-500
            px-6 py-3 font-semibold
            hover:bg-amber-400
            disabled:opacity-50
            "
          >

            {uploading
              ? "Жүктелуде..."
              : "Жүктеу"
            }

          </button>



          {status && (
            <p className="text-sm text-stone-600">
              {status}
            </p>
          )}


        </section>


      </div>

    </main>
  );
}