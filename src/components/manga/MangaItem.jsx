import Image from "next/image";
import Link from "next/link";

function MangaItem({ img, title, id, score, favorites, url, time }) {
    return (
        <Link
            className="flex justify-start items-start flex-col min-h-[550px] w-[300px] gap-2 hover:scale-95 transition-all"
            href={`/${url}/description/${id}`}
        >
            <div data-aos="fade-up" data-aos-easing="ease-in">
                <Image
                    src={`${img}`}
                    alt={`Imagen de ${title}`}
                    loading="lazy"
                    className="rounded-2xl object-cover h-[400px]"
                    width={300}
                    height={400}
                />
                <h1 className=" text-color_100 font-semibold text-[20px] bg-transparent text-ellipsis w-[300px] whitespace-nowrap overflow-hidden">
                    {title}
                </h1>
                <section className="flex justify-between w-full">
                    {/* Validation score */}
                    {typeof score == "number" ? (
                        <div className="flex justify-center items-center gap-1" data-aos="fade" data-aos-delay={time * 1} data-aos-easing="ease-in-out">
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
                        <div className="flex justify-center items-center gap-1" data-aos="fade" data-aos-delay={time * 3} data-aos-easing="ease-in-out">
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
