import { GetAnime, GetGalleryAnime } from "@/api/anime";
import Image from "next/image";
import Video from "@/components/Video";

export default async function AnimeSection({ params }) {
  const infoPage = await GetAnime(params.id);
  const infoGallery = await GetGalleryAnime(params.id);

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
      <div className="max-w-[1000px] my-5 px-5">
        <div>
          <Image
            src={images.webp.large_image_url}
            alt={`Imagen de ${title}`}
            className="rounded-2xl object-cover float-right ml-4 mb-2 h-[400px] w-[300px]"
            width={300}
            height={400}
          />
          <h1 className="font-semibold text-5xl pb-6">{title}</h1>
          <section className="flex justify-between pb-4">
            <article className="flex items-center gap-4 text-[18px]">
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
                  <Image src="/calendar.svg" alt="Book" width={22} height={22} />
                  <h4 className="font-normal text-right text-[18px]">
                    {aired.string}
                  </h4>
                </div>
              ) : (
                ""
              )}
            </article>
          </section>
          <section className="flex gap-2 mb-5">
            {genres.map((info) => {
              return (
                <p
                  className="flex items-center justify-center border px-2 rounded-full text-[15px] text-color_200 font-light"
                  key={info.mal_id}
                >
                  {info.name}
                </p>
              );
            })}
          </section>
          <p className="text-color_300 text-[18px] pb-6 leading-relaxed tracking-tight md:tracking-wide lg:tracking-widest">
            {synopsis}
          </p>
          <p className="text-color_300 text-[18px] leading-relaxed tracking-tight md:tracking-wide lg:tracking-widest">
            {background}
          </p>
        </div>

        {/* Trailer */}
        <div className="my-6 flex items-center justify-center">
          <Video video={trailer.embed_url} />
        </div>

        <picture className="flex items-center justify-center flex-wrap mt-10 gap-y-2">
          {infoGallery.map((info, index) => {
            return (
              <Image
                src={info.webp.image_url}
                key={index}
                alt={`Imagen de ${title}`}
                className="rounded-2xl object-cover float-right ml-4 mb-2 h-[400px] w-[300px]"
                width={300}
                height={400}
              />
            );
          })}
        </picture>
      </div>
    </>
  );
}
