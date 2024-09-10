import AnimeItem from "@/components/anime/AnimeItem";
import { GetSearchAnime } from "@/api/anime";
import Pagination from "@/components/Pagination";
import NotFoundComponent from "@/components/NotFound";
import Header from "@/components/Header";
import Search from "@/components/Search";

export default async function SearchPage({ params }) {
  const { data, pagination } = await GetSearchAnime(params.search, params.id);
  return (
    <>
      <Header />
      <div className="max-w-[1400px] px-5 min-h-screen pt-[70px] max-md:pt-[110px]">
        <Search placeholder="Search anime" type="anime" searchValue={params.search}/>
        <div className="my-5 flex flex-wrap items-center justify-center gap-6 px-5 min-h-screen">
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
                      date={info.title_japanese}
                      url={"anime"}
                      favorites={info.favorites}
                      score={info.score}
                      source={info.source}
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
