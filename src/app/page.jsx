import AnimeItem from "@/components/Cards";
import Pagination from "@/components/Pagination";
import { GetPageAnime } from "@/api/anime";
import NotFoundComponent from "@/components/NotFound";

export default async function Home() {
  const { data, pagination } = await GetPageAnime(1);
  return (
    <>
      <div className="my-5 flex flex-wrap items-center justify-center gap-6 max-w-[1800px] px-5 min-h-screen">
        {typeof data == "object" ? (
          data.length !== 0 ? (
            data.map((info) => {
              return (
                <AnimeItem
                  key={info.mal_id}
                  title={info.title}
                  img={info.images.webp.image_url}
                  id={info.mal_id}
                  date={info.aired.string}
                />
              );
            })
          ) : (
            <NotFoundComponent found="No more animes" />
          )
        ) : (
          <NotFoundComponent found="Not found anime" />
        )}
      </div>
      {typeof pagination === "object" ? <Pagination pagination={pagination} /> : ""}
    </>
  );
}
