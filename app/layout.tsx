import type { Metadata } from "next";
import { Noto_Sans } from "next/font/google";
import "@/styles/globals.css";

const notoSans = Noto_Sans({
  subsets: ["cyrillic", "latin"],
  variable: "--font-noto-sans",
  display: "swap",
});

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
    <html lang="kk" className={notoSans.variable}>
      <body>{children}</body>
    </html>
  );
}
