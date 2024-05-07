import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const poppins = Poppins({
  style: ["normal"],
  weight: ["300", "900"],
  subsets: ["latin"],
});

export const metadata = {
  title: "AnimeVerse",
  description: "Welcome to the website made by Francisco De Jesús Mélendez Simplina! This Website is dedicated for anime lovers.",
  icons: {
    icon: '/Logo.ico'
  }};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <main className="flex flex-col justify-center items-center text-color_100 ">
          <Header />
          {children}
          <Footer/>
        </main>
      </body>
    </html>
  );
}
