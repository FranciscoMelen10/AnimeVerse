import Image from "next/image";
import Link from "next/link";

function AnimeItem({ img, title, id }) {
  return (
    <div className="relative rounded-2xl w-[300px] h-[400px] my-2 overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src={`${img}`}
          alt={`Imagen de ${title}`}
          loading="lazy"
          className="rounded-2xl object-cover h-[400px]"
          width={300}
          height={400}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#ffffff00] to-[#0c0c0c59] opacity-30 "></div>
      </div>
      <Link className="absolute bottom-0 left-0 text-white font-bold text-[20px] p-4 bg-transparent" href={`/anime/${id}`}>
        {title}
      </Link>
    </div>
  );
}

export default AnimeItem;
