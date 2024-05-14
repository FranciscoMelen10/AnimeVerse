import Link from "next/link";
import Search from "./Search";
import Image from "next/image";

function Header({searchValue = ""}) {
  return (
    <header className="p-4 flex justify-center items-start w-full border-b-2 border-b-[#333]">
      <nav className="flex justify-between items-center w-full px-5 gap-4 max-w-[1300px] max-[450px]:flex-col">
        <Link className="bg-gradient-to-r from-fuchsia-500 to-cyan-500 text-transparent bg-clip-text font-bold text-2xl hover:cursor-pointer" href="/">
          <Image alt="Logo" src="/Logo.svg" width={110} height={100}/>
        </Link>
        <Search placeholder={"Search..."} searchValue={searchValue} />
      </nav>
      
    </header>
  );
}

export default Header;
