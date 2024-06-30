"use client"
import { useEffect, useState } from "react";
import Header from "../../components/Header.jsx";
import LoadingPage from "../loading.jsx";
import AnimeItem from "../../components/AnimeItem.jsx";
import { buscarFavoritos } from "../../controllers/index.controller.js";
import { eliminarUsuario, obtenerUsuario } from "../../local/index.js";
import { useRouter } from "next/navigation.js";
import Link from "next/link.js";

export default function Perfil({ params }) {
    const [isLoading, setIsLoading] = useState(true);
    const [favoritos, setFavoritos] = useState([]);
    const [favoritosData, setFavoritosData] = useState([]);
    const [user, setUser] = useState(null);
    const router = useRouter()

    useEffect(() => {
        const fetchAnimeData = async () => {
            try {
                const user = obtenerUsuario();
                setUser(user);
                const favoritos = await buscarFavoritos(user.id_usuario);
                setFavoritos(favoritos);
            } catch (error) {
                console.error("Error fetching favorite animes:", error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchAnimeData();
    }, []);

    useEffect(() => {
        const fetchAnimeDetails = async () => {
            try {
                const promises = favoritos.map(async (info) => {
                    const response = await fetch(`https://api.jikan.moe/v4/anime/${info.id_anime}/full`);
                    const data = await response.json();
                    return data.data;
                });
                const animeDetails = await Promise.all(promises);
                setFavoritosData(animeDetails);
            } catch (error) {
                console.error("Error fetching anime details:", error);
            }
        };

        if (favoritos.length > 0) {
            fetchAnimeDetails();
        }
    }, [favoritos]);

    if (isLoading) {
        return <LoadingPage />;
    }

    if (user) {
        return (
            <>
                <Header />
                <div className="bg-sky-700 rounded-2xl shadow-sm shadow-sky-500 outline outline-slate-400 -outline-offset-8 mt-10">
                    <div className="group overflow-hidden relative after:duration-500 before:duration-500  duration-500 hover:after:duration-500 hover:after:translate-x-24 hover:before:translate-y-12 hover:before:-translate-x-32 hover:duration-500 after:absolute after:w-24 after:h-24 after:bg-sky-700 after:rounded-full  after:blur-xl after:bottom-32 after:right-16 after:w-12 after:h-12  before:absolute before:w-20 before:h-20 before:bg-sky-400 before:rounded-full  before:blur-xl before:top-20 before:right-16 before:w-12 before:h-12  flex justify-center items-center h-56 w-80  bg-neutral-900 rounded-2xl outline outline-slate-400 -outline-offset-8">
                        <div className="z-10 flex flex-col items-center gap-2 bg-transparent">
                            <span className="text-slate-300 text-lg font-bold bg-transparent first-letter:uppercase text-wrap w-full">{user.correo}</span>
                            <p className="text-gray-50 bg-transparent first-letter:uppercase">{user.nombre}</p>
                            <button
                                onClick={() => {
                                    if (window.confirm("Estas seguro de cerrar la sesión?")) {
                                        alert("Gracias por usar AnimeVerse")
                                        eliminarUsuario()
                                        router.push("/")
                                    }
                                }}
                                className="flex justify-center items-center gap-2 w-fit-content px-5 h-10 cursor-pointer rounded-md shadow-2xl text-white font-semibold bg-gradient-to-r from-[#fb7185] via-[#e11d48] to-[#be123c] hover:shadow-xl hover:shadow-red-500 hover:scale-105 duration-300 hover:from-[#be123c] hover:to-[#fb7185]"
                            >
                                Cerrar sesión
                            </button>
                        </div>
                    </div>
                </div>

                <div className="my-12 max-w-[1400px] px-5 ">
                    <h1 class="text-slate-300 text-3xl my-5 text-start font-bold bg-transparent first-letter:uppercase text-wrap w-full">Favoritos:</h1>
                    <div className=" flex flex-wrap items-center justify-center gap-6">
                        {favoritosData.length > 0 ? (
                            favoritosData.map((info) => (
                                <AnimeItem
                                    key={info.mal_id}
                                    title={info.title}
                                    img={info.images.jpg.image_url}
                                    id={info.mal_id}
                                    date={info.aired.string}
                                />
                            ))
                        ) : (
                            <p className="">No tienes animes favoritos en este momento.</p>
                        )}
                    </div>
                </div>
            </>
        );
    } else {
        return (
            <div className="flex items-center justify-center flex-col min-h-screen gap-5">
                <h1 className="text-xl font-bold">Error al entrar al menú, por favor inicie sesión.</h1>
                <Link href="/" className="text-slate-300 w-fit hover:underline">Inicio de sesión</Link>
            </div>
        );
    }

}
