import Image from "next/image";
import Link from "next/link";

function CharacterItem({ img, name, id, favorites, url, kanji }) {
    return (
        <Link
            className="flex justify-start items-start flex-col min-h-[550px] w-[300px] gap-2 hover:scale-95 transition-all"
            href={`/${url}/description/${id}`}
        >
            <div data-aos="fade-up" data-aos-easing="ease-in">
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
                <section className="flex justify-between items-center " data-aos="fade" data-aos-easing="ease-in-out">
                    <h2 className="text-color_100  text-[15px] bg-transparent text-ellipsis  whitespace-nowrap overflow-hidden">{kanji}</h2>
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
