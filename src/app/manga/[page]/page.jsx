import Pagination from "@/components/Pagination";
import { GetPageManga } from "@/api/manga";
import NotFoundComponent from "@/components/NotFound";
import Header from "@/components/Header";
import MangaItem from "@/components/manga/MangaItem";
import Search from "@/components/Search";

export default async function AnimePages({ params }) {
  const { data, pagination } = await GetPageManga({ page: params.page });

  return (
    <>
      <Header />
      <div className="max-w-[1400px] px-5 min-h-screen pt-[70px] max-md:pt-[110px]">
        <Search placeholder="Search manga" type="manga" />
        <div className="my-5 flex flex-wrap items-center justify-center gap-6 ">
          {
            // Validation If the data isn't correct
            typeof data == "object" ? (
              // Validation If the data has information to filter
              data.length !== 0 ? (
                data.map((info, item) => {
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
                      time={item}
                    />
                  );
                })
              ) : (
                <NotFoundComponent found="No more Mangas" />
              )
            ) : (
              <NotFoundComponent found="Not found Manga" />
            )
          }
        </div>
      </div>
      {
        // Validation If the API has an error with the query
        typeof pagination == "object" ? (
          <Pagination pagination={pagination} url="." />
        ) : (
          ""
        )
      }
    </>
  );
}
