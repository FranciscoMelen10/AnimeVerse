import Link from "next/link";
import Search from "./Search";

function Header() {
  return (
    <header className="p-4 flex justify-center items-start w-full border-b-2 border-b-[#333]">
      <nav className="flex justify-between items-center w-full gap-12 max-w-[1000px]">
        <Link className="bg-gradient-to-r from-fuchsia-500 to-cyan-500 text-transparent bg-clip-text font-bold text-2xl" href="/">
          AnimeVerse
        </Link>
        <Search placeholder={"Search..."} />
      </nav>
      
    </header>
  );
}

export default Header;
