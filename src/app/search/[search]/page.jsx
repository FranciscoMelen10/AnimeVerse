import AnimeItem from "@/components/AnimeItem";
import { GetSearchAnime } from "@/api/anime";
import Pagination from "@/components/Pagination";
import NotFoundComponent from "@/components/NotFound";
import Header from "@/components/Header";

export default async function SearchPage({ params }) {
  const { data, pagination } = await GetSearchAnime(params.search, params.id);
  return (
    <>
        <Header searchValue={params.search}/>

      <div className="my-5 flex flex-wrap items-center justify-center gap-6 max-w-[1400px] px-5 min-h-screen">
        {
          // Validation If the data isn't correct
          typeof data == "object" ? (
            // Validation If the data has information to filter
            data.length !== 0 ? (
              data.map((info) => {
                return (
                  <AnimeItem
                    key={info.mal_id}
                    title={info.title}
                    img={info.images.jpg.image_url}
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
          )
        }
      </div>
      {
        // Validation If the API has an error with the query
        typeof pagination == "object" ? (
          <Pagination pagination={pagination} url={`./${params.search}`} />
        ) : (
          ""
        )
      }
    </>
  );
}
