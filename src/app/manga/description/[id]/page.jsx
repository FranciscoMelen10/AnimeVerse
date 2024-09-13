import { GetManga, GetGalleryManga, GetMainCharactersManga } from "@/api/manga";
import Image from "next/image";
import CharacterItem from "@/components/CharacterItem";
import Header from "@/components/Header";

export default async function MangaSection({ params }) {
  const infoPage = await GetManga({ id: params.id });
  const infoGallery = await GetGalleryManga({ id: params.id });
  const infoCharacters = await GetMainCharactersManga({ id: params.id });

  const {
    images,
    title,
    source,
    score,
    synopsis,
    background,
    genres,
    favorites,
  } = infoPage;

  const time = 300;

  return (
    <>
      <Header />
      <div className="max-w-[1300px] my-5 p-4 min-w-[1300px] max-xl:min-w-full pt-[70px] max-md:pt-[110px]">
        <div className="max-md:flex max-md:flex-col max-md:justify-center max-md:items-center max-md:gap-2" data-aos="fade-up" data-aos-easing="ease-in-out">
          <Image
            src={images.jpg.image_url}
            alt={`Imagen de ${title}`}
            className="rounded-2xl object-cover float-right ml-4 mb-2 h-[500px] w-[350px] max-md:float-none max-md:ml-0"
            width={400}
            height={500}
          />
          <h1 className="font-semibold text-5xl pb-6 max-md:pb-2 max-md:text-center">{title}</h1>
          <section className="flex justify-between pb-4 max-md:pb-2">
            <article className="flex items-center flex-wrap gap-4 text-[18px] max-md:justify-center">
              {/* Validation score */}
              {typeof score == "number" ? (
                <div className="flex justify-center items-center gap-1" data-aos="fade" data-aos-delay={time} data-aos-anchor-placement="top-bottom" data-aos-easing="ease-in-out">
                  <Image
                    src="/start.svg"
                    alt="Estrella"
                    width={22}
                    height={22}
                  />
                  <p className="">{score}</p>
                </div>
              ) : (
                ""
              )}

              {/* Validation source */}
              {typeof source == "string" ? (
                <div className="flex justify-center items-center gap-1" data-aos="fade" data-aos-delay={time} data-aos-anchor-placement="top-bottom" data-aos-easing="ease-in-out">
                  <Image src="/book.svg" alt="Book" width={22} height={22} />
                  <p className="">{source}</p>
                </div>
              ) : (
                ""
              )}

              {/* Validation source */}
              {typeof favorites == "number" ? (
                <div className="flex justify-center items-center gap-1" data-aos="fade" data-aos-delay={time} data-aos-anchor-placement="top-bottom" data-aos-easing="ease-in-out">
                  <Image src="/heart.svg" alt="Heart" width={22} height={22} />
                  <p className="">{favorites}</p>
                </div>
              ) : (
                ""
              )}


            </article>
          </section>
          <section className="flex flex-wrap max-md:justify-center gap-2 mb-5 max-md:mb-2" >
            {genres.map((info, index) => {
              return (
                <p
                  data-aos="fade" data-aos-delay={index * 200} data-aos-easing="ease-in-out"
                  className=" border px-2 rounded-full text-[15px] text-color_200 font-light"
                  key={info.mal_id}
                >
                  {info.name}
                </p>
              );
            })}
          </section>
          <section className="min-h-[400px] max-md:min-h-full">
            {typeof synopsis == "string" && typeof synopsis == "string" ? (
              <>
                <p className="text-color_300 text-[18px] pb-6 leading-relaxed tracking-tight md:tracking-wide lg:tracking-widest">
                  {synopsis}
                </p>
                <p className="text-color_300 text-[18px] leading-relaxed tracking-tight md:tracking-wide lg:tracking-widest">
                  {background}
                </p>
              </>
            ) : (
              <h1>Description not available</h1>
            )}
          </section>
        </div>
        {infoCharacters.length !== 0 ? (
          <div className="my-14" data-aos="fade" data-aos-easing="ease-in-out">
            <h1 className="font-semibold text-4xl pt-20 text-color_100 text-center">{`Main characters of ${title}`}</h1>
            <div className="flex items-center justify-center flex-wrap mt-10 gap-4 gap-y-6">
              {infoCharacters.map((info) => {
                return (
                  <CharacterItem
                    key={info.character.mal_id}
                    id={info.character.mal_id}
                    name={info.character.name}
                    img={info.character.images.jpg.image_url}
                    favorites={info.favorites}
                    url="character"
                  />
                );
              })}
            </div>
          </div>
        ) : (
          ""
        )}

        {infoGallery.length !== 0 ? (
          <div data-aos="fade" data-aos-easing="ease-in-out">
            <h1 className="font-semibold text-4xl pt-20 text-color_100 text-center">{`${title}'s Galery`}</h1>
            <div className="flex items-center justify-center flex-wrap mt-10 gap-y-2">
              {infoGallery.map((info, index) => {
                return (
                  <picture key={index} data-aos="fade" data-aos-easing="ease-in-out">
                    <Image
                      src={info.jpg.image_url}
                      alt={`Imagen de ${title}`}
                      className="rounded-2xl object-cover float-right ml-4 mb-2 h-[400px] w-[300px]"
                      width={300}
                      height={400}
                    />
                  </picture>
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
