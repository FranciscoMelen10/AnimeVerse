import Image from "next/image";
import { Link } from 'next-view-transitions'

function CharacterItem({ img, name, id, favorites, url, kanji }) {
    return (
        <Link
            className="flex justify-start items-start flex-col min-h-[500px] w-[300px] gap-2 hover:scale-105 transition-all bg-transparent"
            href={`/${url}/description/${id}`}
        >
            <div>
                <Image
                    src={`${img}`}
                    alt={`Imagen de ${name}`}
                    loading="lazy"
                    className="rounded-2xl object-cover h-[400px]"
                    width={300}
                    height={400}
                />
                <h1 className=" text-color_100 font-semibold text-[20px] bg-transparent text-ellipsis w-[300px] whitespace-nowrap overflow-hidden">
                    {name}
                </h1>
                <section className="flex justify-between items-center " data-aos="fade" data-aos-easing="ease-in-out" data-aos-anchor-placement="top-bottom">
                    <h2 className="text-color_100  text-[15px] bg-transparent text-ellipsis  whitespace-nowrap overflow-hidden  w-[200px]">{kanji}</h2>
                    {/* Validation favorites */}
                    {typeof favorites == "number" ? (
                        <div className="flex justify-center items-center gap-1" >
                            <Image
                                src="/heart.svg"
                                alt="Heart"
                                width={25}
                                height={25}
                            />
                            <p className="">{favorites}</p>
                        </div>
                    ) : (
                        ""
                    )}
                </section>
            </div>
        </Link>
    );
}

export default CharacterItem;
