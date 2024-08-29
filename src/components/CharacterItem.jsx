import Image from "next/image";
import Link from "next/link";

function CharacterItem({ img, name, favorites, url, time }) {
  return (
    <div className="flex justify-start items-start flex-col w-[300px] gap-2" data-aos="fade" data-aos-delay={time * 300} data-aos-easing="ease-in-out">
      <Image
        src={`${img}`}
        alt={`Imagen de ${name}`}
        loading="lazy"
        className="rounded-2xl object-cover h-[400px]"
        width={300}
        height={400}
      />
      <section className="flex justify-between w-full">
        <Link
          className="hover:underline text-color_100 font-semibold text-[20px] bg-transparent"
          href={url}
          target="_blank"
        >
          {name}
        </Link>
        {/* Validation source */}
        {typeof favorites == "number" ? (
          <div className="flex justify-center items-center gap-1">
            <Image src="/heart.svg" alt="Heart" width={22} height={22} />
            <p className="">{favorites}</p>
          </div>
        ) : (
          ""
        )}
      </section>
    </div>
  );
}

export default CharacterItem;
