import { GetCharacter } from "@/api/characters";
import Image from "next/image";
import CharacterItem from "@/components/CharacterItem";
import Header from "@/components/Header";
import VoicesAutorsItem from "@/components/character/VoicesAutorsItem";
import AnimeItem from "@/components/anime/AnimeItem";

export default async function CharacterSection({ params }) {
  const infoPage = await GetCharacter({ id: params.id });


  const {
    images,
    name,
    name_kanji,
    about,
    favorites,
    anime,
    manga,
    voices
  } = infoPage;

  return (
    <>
      <Header />
      <div className="max-w-[1300px] my-5 p-4 min-w-[1300px] max-xl:min-w-full pt-[70px] max-md:pt-[110px]">
        <div className="max-md:flex max-md:flex-col max-md:justify-center max-md:items-center max-md:gap-2" data-aos="fade-up" data-aos-easing="ease-in-out">
          <Image
            src={images.jpg.image_url}
            alt={`Imagen de ${name}`}
            className="rounded-2xl object-cover float-right ml-4 mb-2 h-[500px] w-[350px] max-md:w-auto max-md:float-none max-md:ml-0"
            width={400}
            height={500}
          />
          <h1 className="font-semibold text-5xl pb-6 max-md:pb-2 max-md:text-center">{name}</h1>
          <section className="flex justify-between pb-4 max-md:pb-2 max-md:w-full">
            {/* Validation kanji */}
            {typeof name_kanji == "string" ? (
              <p className="">{name_kanji}</p>
            ) : (
              ""
            )}
            <article className="flex items-center flex-wrap gap-4 text-[18px] max-md:justify-center">

              {/* Validation source */}
              {typeof favorites == "number" ? (
                <div className="flex justify-center items-center gap-1" data-aos="fade" data-aos-easing="ease-in-out">
                  <Image src="/heart.svg" alt="Heart" width={22} height={22} />
                  <p className="">{favorites}</p>
                </div>
              ) : (
                ""
              )}

            </article>
          </section>
          <section className="min-h-[400px] max-md:min-h-full">
            {typeof about == "string" ? (
              <>
                <p className="text-color_300 text-[18px] leading-relaxed tracking-tight md:tracking-wide lg:tracking-widest">
                  {about}
                </p>
              </>
            ) : (
              <h1>Description not available</h1>
            )}
          </section>
        </div>
        {voices.length !== 0 ? (
          <div className="my-14" data-aos="fade" data-aos-easing="ease-in-out">
            <h1 className="font-semibold text-4xl pt-20 text-color_100 text-center">Voices Actors of {name}</h1>
            <div className="flex items-center justify-center flex-wrap mt-10 gap-4 gap-y-6">
              {voices.map((info) => {
                return (
                  <VoicesAutorsItem
                    key={info.mal_id}
                    name={info.person.name}
                    img={info.person.images.jpg.image_url}
                    language={info.language}
                  />
                );
              })}
            </div>
          </div>
        ) : (
          ""
        )}


        {anime.length !== 0 ? (
          <div className="my-14" data-aos="fade" data-aos-easing="ease-in-out">
            <h1 className="font-semibold text-4xl pt-20 text-color_100 text-center">{name} appearances in anime</h1>
            <div className="flex items-center justify-center flex-wrap mt-10 gap-4 gap-y-6">
              {anime.map((info) => {
                return (
                  <AnimeItem
                    key={info.anime.mal_id}
                    title={info.anime.title}
                    img={info.anime.images.jpg.image_url}
                    id={info.anime.mal_id}
                    url={"anime"}
                  />
                );
              })}
            </div>
          </div>
        ) : (
          ""
        )}

      </div>
    </>
  );
}
