import Image from "next/image";
import Link from "next/link";

function AnimeItem({ img, title, id, date }) {
  return (
    <div className="flex justify-start items-start flex-col min-h-[550px] w-[300px] gap-2">
        <Image
          src={`${img}`}
          alt={`Imagen de ${title}`}
          loading="lazy"
          className="object-cover h-[400px]"
          width={300}
          height={400}
        />
      <Link className=" text-color_100 font-semibold text-[20px] bg-transparent" href={`/anime/${id}`}>
        {title}
      </Link>
      <h3 className="text-color_400">{date}</h3>
    </div>
  );
}

export default AnimeItem;
