import { Navbar } from "@/components/navbar/navbar";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.scss";
import style from "./page.module.scss";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Jiajun's Website",
  description: "This is jiajun website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/* <Navbar /> */}
      <body>
        <Navbar />
        <main className={style.main}>{children}</main>
      </body>
    </html>
  );
}
