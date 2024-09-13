"use client"
import AOS from "aos";
import Link from "next/link";
import Header from "@/components/Header";
import Image from "next/image";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function Home() {

  useEffect(() => {
    AOS.init();
  }, []);
  const sections = [
    {
      title: "Explore the Anime Universe",
      description:
        "Dive into the captivating world of anime with our infographics. From popular series to hidden gems",
      label: "Anime",
      linkText: "Explore Anime",
      url: "/anime"
    },
    {
      title: "Dive into the World of Manga",
      description:
        "Explore the rich and diverse world of manga with our infographics. From classic series to the latest releases, we've got it all.",
      label: "Manga",
      linkText: "Explore Manga",
      url: "/manga"
    },
    {
      title: "Discover Iconic Anime Characters",
      description:
        "Explore the rich and diverse characters that make the anime and manga worlds so captivating.",
      label: "Characters",
      linkText: "Explore Characters",
      url: "/character"
    }
  ]

  return (
    <>
      <Header />
      <div className="bg-background transit text-foreground flex flex-col ">
        <main className="flex items-center flex-col">
          <div className="w-screen bg-cover h-screen flex justify-center items-center bg-[url('../../public/Backgrounds/hunterxhunter.jpg')] " data-aos="fade-up" data-aos-easing="ease-in">
            <div className="absolute inset-0 bg-black opacity-80"></div>

            <section className="relative flex flex-col items-center justify-center space-y-4 text-center text-white bg-transparent" data-aos="fade-up" data-aos-easing="ease-in">
              <Image alt="Logo" src="/Logo.svg" width={300} height={100} className="bg-transparent" />
              <p className="max-w-[700px] bg-transparent">
                Explore the world of anime and manga with our comprehensive infographics. Discover the latest trends,
                characters, and more.
              </p>
            </section>
          </div>

          <div className="container grid gap-8 px-4 md:px-6 lg:grid-cols-2 max xl:grid-cols-3">

            {/* Sections */}
            {sections.map(({ title, description, label, linkText, url }) => (
              <section key={title} className="w-full py-12 md:py-24 lg:py-32" data-aos="fade-up" data-aos-easing="ease-in">
                <div className="space-y-4">
                  <h1 className="text-3xl font-bold sm:text-4xl md:text-5xl">{title}</h1>
                  <span className="inline-block rounded-lg bg-muted px-3 py-1 text-sm bg-color_900">{label}</span>
                  <p>
                    {description}
                  </p>
                  <Link
                    href={url}
                    className="bg-color_950 inline-flex rounded-md bg-primary px-4 py-2 text-sm border-[1px] hover:bg-white hover:text-color_950 transition-colors"
                  >
                    {linkText}
                  </Link>
                </div>

              </section>
            ))}
          </div>

        </main>
      </div>
    </>
  );
}
