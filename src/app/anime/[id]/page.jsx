import AnimeItem from "@/components/Cards";
import { GetAnime } from "@/api/anime";
import Image from "next/image";
import Video from "@/components/Video";

export default async function AnimeSection({ params }) {
  const infoPage = await GetAnime(params.id);
  const { images, trailer, title, source, score, synopsis, aired, background } =
    infoPage;

  //   console.log(images)
  //   console.log(trailer)
  //   console.log(source)
  //   console.log(title)
  //   console.log(score)
  //   console.log(synopsis)
  //   console.log(year)

  return (
    <>
      <div className="max-w-[1000px] my-5 px-5">
        <div>
          <Image
            src={images.webp.large_image_url}
            alt={`Imagen de ${title}`}
            className="rounded-2xl object-cover float-right ml-6 h-[400px] w-[300px]"
            width={300}
            height={400}
          />
          <h1 className="font-semibold text-5xl pb-6">{title}</h1>
          <section className="flex justify-between pb-4">
            <article className="flex items-center gap-4">
              <div className="flex justify-center items-center gap-1">
                <Image src="/start.svg" alt="Estrella" width={22} height={22} />
                <p className="text-[18px]">{score}</p>
              </div>
              <p className="flex items-center justify-center border px-2 rounded-full text-[15px] text-color_200 font-light">
                {source}
              </p>
            </article>
            <h4 className="font-normal text-right">{aired.string}</h4>
          </section>
          <p className="text-color_300 text-[18px] pb-6">{synopsis}</p>
          <p className="text-color_300 text-[18px]">{background}</p>
        </div>
        
        {/* Trailer */}
        <div className="my-6 flex items-center justify-center">
          <Video video={trailer.embed_url} />
        </div>
      </div>
    </>
  );
}
