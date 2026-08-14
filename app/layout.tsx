import type { Metadata } from "next";
import { gotham } from "@/styles/fonts";
import "@/styles/globals.css";

export const metadata: Metadata = {
  title: "Қара Алтын | Ресми EPK",
  description: "Қара Алтын фильміне арналған ресми баспасөзге арналған электрондық пресс-жинақ.",
  keywords: [
    "Қара Алтын",
    "EPK",
    "баспасөз материалдары",
    "қазақстандық кино",
    "MurAi Productions",
  ],
  openGraph: {
    title: "Қара Алтын | Ресми EPK",
    description: "Журналистер мен медиа ұйымдарға арналған ресми баспасөз порталы.",
    type: "website",
    locale: "kk_KZ",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="kk" className={gotham.variable}>
      <body>{children}</body>
    </html>
  );
}
