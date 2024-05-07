import Image from "next/image";
import Link from "next/link";

function Footer() {
  return (
    <footer className="flex justify-between w-full max-w-[1000px] gap-4 p-6 font-medium text-color_100 mt-5 text-[20px] max-md:flex-col-reverse max-md:items-center max-md:text-center ">
      <h1 className="text-color_100 text-[16px]">
      © Francisco De Jesús Meléndez Simplina 2024, All Rights Reserved
      </h1>
      <picture className="flex gap-4">
        <Link href="https://www.facebook.com/chicoyfrancisco.melendez/">
          <Image alt="Logo de facebook" src="/facebook.svg" width={25} height={25} />
        </Link>
        <Link href="https://www.instagram.com/coooooooooooyyyyyyy/">
          <Image alt="Logo de instagram" src="/instagram.svg" width={25} height={25} />
        </Link>
        <Link href="https://github.com/FranciscoMelen10">
          <Image alt="Logo de github" src="/github.svg" width={25} height={25} />
        </Link>
      </picture>
    </footer>
  );
}

export default Footer;
