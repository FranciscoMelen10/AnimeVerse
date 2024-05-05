import AnimeItem from "@/components/Cards";
import Pagination from "@/components/Pagination";
import { GetPageAnime } from "@/api/anime";

export default async function Home() {
  const {data , pagination} = await GetPageAnime(1)
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
