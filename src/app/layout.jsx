// layout.js
"use client";

import { Poppins } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import { GoogleTagManager } from "@next/third-parties/google";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { metadata } from "@/metadata"; // Asegúrate de que esta ruta sea correcta
import Head from "next/head"; // Importa el componente Head

const poppins = Poppins({
  style: ["normal"],
  weight: ["300", "900"],
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <html lang="en">
      <Head>
        {/* Utiliza la metadata importada */}
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <link rel="icon" href={metadata.icons.icon} />
      </Head>
      <GoogleTagManager gtmId="G-EBYLZNFLTS" />
      <body className={poppins.className}>
        <main className="flex flex-col justify-center items-center text-color_100">
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
