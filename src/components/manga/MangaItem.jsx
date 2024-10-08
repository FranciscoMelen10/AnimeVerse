import Image from "next/image";
import { Link } from 'next-view-transitions'

function MangaItem({ img, title, id, score, favorites, url, time }) {
    return (
        <Link
            className="flex justify-start items-start flex-col min-h-[500px] w-[300px] gap-2 hover:scale-105 transition-all bg-transparent"
            href={`/${url}/description/${id}`}
        >
            <div>
                <Image
                    src={`${img}`}
                    alt={`Imagen de ${title}`}
                    loading="lazy"
                    className="rounded-2xl h-[400px]"
                    width={300}
                    height={400}
                />
                <h1 className=" text-color_100 font-semibold text-[20px] bg-transparent text-ellipsis w-[300px] whitespace-nowrap overflow-hidden">
                    {title}
                </h1>
                <section className="flex justify-between w-full">
                    {/* Validation score */}
                    {typeof score == "number" ? (
                        <div className="flex justify-center items-center gap-1" data-aos="fade" data-aos-delay={time * 1} data-aos-easing="ease-in-out" data-aos-anchor-placement="top-bottom">
                            <Image
                                src="/start.svg"
                                alt="Estrella"
                                width={30}
                                height={30}
                            />
                            <p className="">{score}</p>
                        </div>
                    ) : (
                        ""
                    )}

                    {/* Validation source */}
                    {typeof favorites == "number" ? (
                        <div className="flex justify-center items-center gap-1" data-aos="fade" data-aos-delay={time * 3} data-aos-easing="ease-in-out" data-aos-anchor-placement="top-bottom">
                            <Image src="/heart.svg" alt="Heart" width={30} height={30} />
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

export default MangaItem;
