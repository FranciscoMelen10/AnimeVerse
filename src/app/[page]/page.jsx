import AnimeItem from "@/components/Cards";
import Pagination from "@/components/Pagination";
import { GetPageAnime } from "@/api/anime";

export default async function AnimePages({params}) {
  const {data , pagination} = await GetPageAnime(params.page) 
  return (
    <>
    <div className="my-5 flex flex-wrap items-center justify-center gap-6 max-w-[1800px] px-5">
      {
        data.map((info) => { 
          return(
            <AnimeItem key={info.mal_id} title={info.title} img={info.images.jpg.image_url} id={info.mal_id} date={info.aired.string}/>
          )
          
        })
      }
    </div>
    <Pagination pagination={pagination}/>
    </>
  );
}
