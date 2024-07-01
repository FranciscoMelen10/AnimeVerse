"use client"
import AnimeItem from "../../components/AnimeItem.jsx";
import Pagination from "../../components/Pagination.jsx";
import { GetPageAnime } from "../../api/anime.js";
import NotFoundComponent from "../../components/NotFound.jsx";
import Header from "../../components/Header.jsx";
import { useEffect, useState } from "react";
import { obtenerUsuario } from "../../local/index.js";
import LoadingPage from "../loading.jsx";
import Link from "next/link.js";
import LayoutUser from "../../Layout/LayoutUser.jsx";
import Button from "../../components/Button.jsx";

export default function Home() {
  const [data, setData] = useState([]);
  const [pagination, setPagination] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchAnimeData = async () => {
      try {
        setIsLoading(true);
        const { data, pagination } = await GetPageAnime(1);
        setData(data);
        setPagination(pagination);
      } catch (error) {
        console.error("Error fetching anime data:", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchAnimeData();
  }, []);

  if (isLoading) {
    return <LoadingPage />;
  }

  return (
    <LayoutUser>
      <Header />
      <div className="my-5 flex flex-wrap items-center justify-center gap-6 max-w-[1400px] px-5 min-h-screen">
        {
          // Validation If the data isn't correct
          Array.isArray(data) ? (
            // Validation If the data has information to filter
            data.length !== 0 ? (
              data.map((info) => (
                <AnimeItem
                  key={info.mal_id}
                  title={info.title}
                  img={info.images.jpg.image_url}
                  id={info.mal_id}
                  date={info.aired.string}
                />
              ))
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
        typeof pagination === "object" && (
          <Pagination pagination={pagination} />
        )
      }
      <div className="fixed bottom-0 right-0 p-6">
        <Button/>
      </div>
    </LayoutUser>
  );

}
