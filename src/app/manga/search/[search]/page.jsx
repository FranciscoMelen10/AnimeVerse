import { GetSearchManga } from "@/api/manga";
import Pagination from "@/components/Pagination";
import NotFoundComponent from "@/components/NotFound";
import Header from "@/components/Header";
import Search from "@/components/Search";
import MangaItem from "@/components/manga/MangaItem";

export default async function SearchPage({ params }) {
  const { data, pagination } = await GetSearchManga({query: params.search, page: params.id});
  return (
    <>
      <Header />
      <div className="max-w-[1400px] px-5 min-h-screen pt-[70px] max-md:pt-[110px]">
        <Search placeholder="Search manga" type="manga" searchValue={params.search}/>
        <div className="my-5 flex flex-wrap items-center justify-center gap-6 px-5 min-h-screen">
          {
            // Validation If the data isn't correct
            typeof data == "object" ? (
              // Validation If the data has information to filter
              data.length !== 0 ? (
                data.map((info) => {
                  if (info.images.jpg.image_url !== "https://cdn.myanimelist.net/img/sp/icon/apple-touch-icon-256.png") {
                    return (
                      <MangaItem
                      key={info.mal_id}
                      title={info.title}
                      img={info.images.jpg.image_url}
                      id={info.mal_id}
                      date={info.title_japanese}
                      url={"manga"}
                      favorites={info.favorites}
                      score={info.score}
                      source={info.source}
                    />
                    );
                  }
                })
              ) : (
                <NotFoundComponent found="No more characters" />
              )
            ) : (
              <NotFoundComponent found="Not found characters" />
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
