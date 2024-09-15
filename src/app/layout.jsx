import { Poppins } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import { GoogleTagManager } from "@next/third-parties/google";
import { ViewTransitions } from 'next-view-transitions'
import AOSLayout from "@/components/AOSLayout";

const poppins = Poppins({
  style: ["normal"],
  weight: ["300", "900"],
  subsets: ["latin"],
});

export const metadata = {
  title: "AnimeVerse",
  description:
    "Welcome to the website made by Francisco De Jesús Mélendez Simplina! This Website is dedicated for anime lovers.",
  icons: {
    icon: "/Logo.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <ViewTransitions>
      <html lang="en">
        <GoogleTagManager gtmId="G-EBYLZNFLTS" />
        <body className={poppins.className}>
          <AOSLayout>
            {children}
            <Footer />
          </AOSLayout>
        </body>
      </html>
    </ViewTransitions>
  );
}
