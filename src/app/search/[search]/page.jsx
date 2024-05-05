import AnimeItem from "@/components/Cards";
import { GetSearchAnime } from "@/api/anime";
import Pagination from "@/components/Pagination";

export default async function SearchPage({params}) {
  const {data, pagination} = await GetSearchAnime(params.search)
  return (
    <>
    <div className="my-5 flex flex-wrap items-center justify-center gap-6">
      {
        data.map((info) => { 
          return(
            <AnimeItem key={info.mal_id} title={info.title} img={info.images.jpg.image_url} id={info.mal_id}/>
          )
          
        })
      }
    </div>
    <Pagination pagination={pagination}/>
    </>
  );
}
