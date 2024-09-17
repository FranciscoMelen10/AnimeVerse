import { Link } from 'next-view-transitions'
import Image from "next/image";

function Header() {
  return (
    <header className="p-4 flex justify-center items-start w-full border-b-2 border-b-[#333] fixed top-0 z-10 bg-color_950">
      <nav className="flex justify-between items-center w-full px-5 gap-4  max-[650px]:flex-col max-w-[1500px]">
        <Link className="text-transparent bg-clip-text font-bold text-2xl hover:cursor-pointer" href="/">
          <Image alt="Logo" src="/Logo.svg" width={110} height={100} />
        </Link>
        <section className="flex gap-4">
          <Link href="/anime" className="text-lg hover:cursor-pointer hover:underline">Anime</Link>
          <Link href="/manga" className="text-lg hover:cursor-pointer hover:underline">Manga</Link>
          <Link href="/character" className="text-lg hover:cursor-pointer hover:underline">Characters</Link>
        </section>
      </nav>
    </header>
  );
}

export default Header;
