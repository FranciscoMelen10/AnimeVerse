import { Link } from 'next-view-transitions'
import Header from "@/components/Header";
import Image from "next/image";
import AnimeItem from '@/components/anime/AnimeItem';
import MangaItem from '@/components/manga/MangaItem';

export default function Home() {
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
  ];

  const animes = [{
    id: 1535,
    name: "Death Note",
    img: "https://cdn.myanimelist.net/images/anime/1079/138100.webp",
    score: 8.62,
    favorites: 175378
  }, {
    id: 21,
    name: "One piece",
    img: "https://cdn.myanimelist.net/images/anime/1244/138851.webp",
    score: 8.72,
    favorites: 226819
  },
  {
    id: 11061,
    name: "Hunter x Hunter",
    img: "https://cdn.myanimelist.net/images/anime/1337/99013.webp",
    score: 9.03,
    favorites: 213143
  }, , {
    id: 40748,
    name: "Jujutsu Kaisen",
    img: "https://cdn.myanimelist.net/images/anime/1171/109222.webp",
    score: 8.58,
    favorites: 92331
  }, {
    id: 5114,
    name: "Fullmetal Alchemist: Brotherhood",
    img: "https://cdn.myanimelist.net/images/anime/1208/94745.webp",
    score: 9.09,
    favorites: 228127
  },
  {
    id: 38000,
    name: "Kimetsu no Yaiba",
    img: "https://cdn.myanimelist.net/images/anime/1286/99889.webp",
    score: 8.45,
    favorites: 91609
  },
  {
    id: 20,
    name: "Naruto",
    img: "https://cdn.myanimelist.net/images/anime/1141/142503.webp",
    score: 8,
    favorites: 80711
  }, {
    id: 49596,
    name: "Blue Lock",
    img: "https://cdn.myanimelist.net/images/anime/1258/126929.webp",
    score: 8.24,
    favorites: 12950
  }
  ]

  const manga = [{
    id: 116778,
    name: "Chainsaw Man",
    img: "https://cdn.myanimelist.net/images/manga/3/216464.webp",
    score: 8.71,
    favorites: 83310
  }, {
    id: 2,
    name: "Berserk",
    img: "https://cdn.myanimelist.net/images/manga/1/157897.webp",
    score: 9.47,
    favorites: 129123
  },
  {
    id: 113138,
    name: "Jujutsu Kaisen",
    img: "https://cdn.myanimelist.net/images/manga/3/210341.webp",
    score: 8.45,
    favorites: 33788
  },
  {
    id: 114745,
    name: "Blue Lock",
    img: "https://cdn.myanimelist.net/images/manga/5/213340.webp",
    score: 8.49,
    favorites: 13294
  }
  ]

  return (
    <>
      <Header />
      <div className="bg-background transit text-foreground flex flex-col overflow-hidden">
        <main className="flex items-center flex-col overflow-hidden">
          <div className="relative w-screen bg-center bg-cover h-screen flex justify-center items-center flex-col bg-[url('../../public/Backgrounds/Onepiece.webp')] " data-aos="fade-up" data-aos-easing="ease-in">
            <div className="absolute inset-0 bg-black opacity-80"></div>
            <section className="relative flex flex-col items-center justify-center space-y-4 text-center text-white bg-transparent" data-aos="fade-up" data-aos-easing="ease-in">
              <Image alt="Logo" src="/Logo.svg" width={300} height={100} className="bg-transparent" />
              <p className="max-w-[700px] bg-transparent">
                Explore the world of anime and manga with our comprehensive infographics. Discover the latest trends,
                characters, and more.
              </p>
            </section>
          </div>
          <div className="container grid gap-8 px-4 md:px-6 lg:grid-cols-2 max xl:grid-cols-3 overflow-hidden">
            {sections.map(({ title, description, label, linkText, url }) => (
              <section key={title} className="w-full py-12 md:py-24 lg:py-32" data-aos="fade-up" data-aos-easing="ease-in">
                <div className="space-y-4">
                  <h1 className="text-3xl font-bold sm:text-4xl md:text-3xl">{title}</h1>
                  <span className="inline-block rounded-lg bg-muted px-3 py-1 text-sm bg-violet-950">{label}</span>
                  <p>
                    {description}
                  </p>
                  <Link
                    href={url}
                    className=" inline-flex rounded-md bg-primary px-4 py-2 text-sm border-[1px] hover:bg-white hover:text-color_950 transition-colors"
                  >
                    {linkText}
                  </Link>
                </div>
              </section>
            ))}
          </div>
          <div className="container mx-auto py-12 flex items-center justify-center flex-col" data-aos="fade-up" data-aos-easing="ease-in">
            <section className='flex gap-2'>
              <svg className='max-md:size-[30px]' xmlns="http://www.w3.org/2000/svg" fill='white' class="ionicon" viewBox="0 0 512 512" width="40" height="40"><path d="M258.9 48C141.92 46.42 46.42 141.92 48 258.9c1.56 112.19 92.91 203.54 205.1 205.1 117 1.6 212.48-93.9 210.88-210.88C462.44 140.91 371.09 49.56 258.9 48zm126.42 327.25a4 4 0 01-6.14-.32 124.27 124.27 0 00-32.35-29.59C321.37 329 289.11 320 256 320s-65.37 9-90.83 25.34a124.24 124.24 0 00-32.35 29.58 4 4 0 01-6.14.32A175.32 175.32 0 0180 259c-1.63-97.31 78.22-178.76 175.57-179S432 158.81 432 256a175.32 175.32 0 01-46.68 119.25z" /><path d="M256 144c-19.72 0-37.55 7.39-50.22 20.82s-19 32-17.57 51.93C191.11 256 221.52 288 256 288s64.83-32 67.79-71.24c1.48-19.74-4.8-38.14-17.68-51.82C293.39 151.44 275.59 144 256 144z" /></svg>
              <h1 className="text-4xl font-bold mb-8 max-md:text-xl ">My Personal Top Animes</h1>
            </section>
            <p className="text-lg mb-8 max-md:text-sm max-md:p-3">Here you can find my personal top animes and mangas. I hope you like them</p>
            <picture className="flex flex-wrap items-center justify-center gap-4">
              {animes.map(({ id, name, img, score, favorites }) => (
                <AnimeItem
                  key={id}
                  id={id}
                  title={name}
                  img={img}
                  score={score}
                  favorites={favorites}
                  url="anime"
                />
              ))}
            </picture>
          </div>
          <div className="container mx-auto py-12 flex items-center justify-center flex-col" data-aos="fade-up" data-aos-easing="ease-in">
            <section className='flex gap-2'>
              <svg className='max-md:size-[30px]' xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512" width="40" height="40"><path d="M352 48H160a48 48 0 00-48 48v368l144-128 144 128V96a48 48 0 00-48-48z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" strokeWidth="32" /></svg>
              <h1 className="text-4xl max-md:text-2xl font-bold mb-8 ">Top Mangas</h1>
            </section>
            <picture className="flex flex-wrap items-center justify-center gap-4">
              {manga.map(({ id, name, img, score, favorites }) => (
                <MangaItem
                  key={id}
                  id={id}
                  title={name}
                  img={img}
                  score={score}
                  favorites={favorites}
                  url="manga"
                />
              ))}
            </picture>
          </div>
        </main>
      </div>
    </>
  );
}