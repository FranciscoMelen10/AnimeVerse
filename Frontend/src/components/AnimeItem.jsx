import Image from "next/image";
import Link from "next/link";

function AnimeItem({ img, title, id, date }) {
  return (
    <Link
      className="flex justify-start items-start flex-col min-h-[550px] w-[300px] gap-2 hover:scale-95 transition-all"
      href={`/anime/${id}`}
    >
      <Image
        src={`${img}`}
        alt={`Imagen de ${title}`}
        loading="lazy"
        className="rounded-2xl object-cover h-[400px]"
        width={300}
        height={400}
      />
      <h1 className="hover:underline text-color_100 font-semibold text-[20px] bg-transparent">
        {title}
      </h1>
      <h3 className="text-color_400">{date}</h3>
    </Link>
  );
}

export default AnimeItem;
