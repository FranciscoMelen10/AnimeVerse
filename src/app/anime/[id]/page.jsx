import { GetAnime, GetGalleryAnime, GetMainCharactersAnime } from "@/api/anime";
import Image from "next/image";
import Video from "@/components/Video";
import CharacterItem from "@/components/CharacterItem";
import Header from "@/components/Header";

export default async function AnimeSection({ params }) {
  const infoPage = await GetAnime(params.id);
  const infoGallery = await GetGalleryAnime(params.id);
  const infoCharacters = await GetMainCharactersAnime(params.id);

  const {
    images,
    trailer,
    title,
    source,
    score,
    synopsis,
    aired,
    background,
    genres,
    favorites,
  } = infoPage;

  //   console.log(images)
  //   console.log(trailer)
  // console.log(source)
  // console.log(title)
  // console.log(score)
  //   console.log(synopsis)
  //   console.log(year)
  //   console.log(genres)

  return (
    <>
    <Header/>
      <div className="max-w-[1300px] my-5 p-4 min-w-[1300px] max-xl:min-w-full">
        <div className="max-md:flex max-md:flex-col max-md:justify-center max-md:items-center max-md:text-center max-md:gap-2">
          <Image
            src={images.jpg.image_url}
            alt={`Imagen de ${title}`}
            className="rounded-2xl object-cover float-right ml-4 mb-2 h-[500px] w-[350px] max-md:float-none max-md:ml-0"
            width={400}
            height={500}
          />
          <h1 className="font-semibold text-5xl pb-6 max-md:pb-2">{title}</h1>
          <section className="flex justify-between pb-4 max-md:pb-2">
            <article className="flex items-center flex-wrap gap-4 text-[18px] max-md:justify-center">
              {/* Validation score */}
              {typeof score == "number" ? (
                <div className="flex justify-center items-center gap-1">
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
                <div className="flex justify-center items-center gap-1">
                  <Image src="/book.svg" alt="Book" width={22} height={22} />
                  <p className="">{source}</p>
                </div>
              ) : (
                ""
              )}

              {/* Validation source */}
              {typeof favorites == "number" ? (
                <div className="flex justify-center items-center gap-1">
                  <Image src="/heart.svg" alt="Heart" width={22} height={22} />
                  <p className="">{favorites}</p>
                </div>
              ) : (
                ""
              )}

              {/* Validation source */}
              {typeof aired.string == "string" ? (
                <div className="flex justify-center items-center gap-1">
                  <Image
                    src="/calendar.svg"
                    alt="Book"
                    width={22}
                    height={22}
                  />
                  <h4 className="font-normal text-right text-[18px]">
                    {aired.string}
                  </h4>
                </div>
              ) : (
                ""
              )}
            </article>
          </section>
          <section className="flex flex-wrap max-md:justify-center gap-2 mb-5 max-md:mb-2">
            {genres.map((info) => {
              return (
                <p
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

        {/* Trailer */}
        {
          /* Validation */
          typeof trailer.embed_url == "string" ? (
            <div className="my-6 flex items-center justify-center flex-col w-full p-4">
              <h1 className="font-semibold text-4xl pb-6 text-color_100 text-center underline">{`${title}'s trailer`}</h1>
              <Video video={trailer.embed_url} />
            </div>
          ) : (
            ""
          )
        }

        {infoCharacters.length !== 0 ? (
          <>
            <h1 className="font-semibold text-4xl pt-20 text-color_100 text-center underline">{`Main characters of ${title}`}</h1>
            <div className="flex items-center justify-center flex-wrap mt-10 gap-4 gap-y-6">
              {infoCharacters.map((info) => {
                return (
                  <CharacterItem
                    key={info.mal_id}
                    name={info.character.name}
                    img={info.character.images.jpg.image_url}
                    favorites={info.favorites}
                    url={info.character.url}
                  />
                );
              })}
            </div>
          </>
        ) : (
          ""
        )}

        {infoGallery.length !== 0 ? (
          <>
            <h1 className="font-semibold text-4xl pt-20 text-color_100 text-center underline">{`${title}'s Galery`}</h1>
            <picture className="flex items-center justify-center flex-wrap mt-10 gap-y-2">
              {infoGallery.map((info, index) => {
                return (
                  <Image
                    src={info.jpg.image_url}
                    key={index}
                    alt={`Imagen de ${title}`}
                    className="rounded-2xl object-cover float-right ml-4 mb-2 h-[400px] w-[300px]"
                    width={300}
                    height={400}
                  />
                );
              })}
            </picture>
          </>
        ) : (
          ""
        )}
      </div>
    </>
  );
}
