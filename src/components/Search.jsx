"use client"
import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

function Search({ placeholder, searchValue = "", type = "" }) {
  const navigation = useRouter()
  const [inputValue, setInputValue] = useState(searchValue.replace(/%20/g, " "));

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevenir el comportamiento predeterminado del formulario
    navigation.push(`/${type}/search/${inputValue}`)
  };

  return (
    <form
      className="flex  items-center py-2 px-2 mt-5 mx-10 border-black text-color_100 bg-[#17191A] rounded-md gap-2 "
      onSubmit={handleSubmit}
    >
      <button className="size-auto" type="submit">
        <Image
          src="/search.svg"
          alt="Search"
          width={20}
          height={20}
          loading="lazy"
          className="bg-[#17191A]"
        />
      </button>
      <input
        placeholder={placeholder}
        className="text-sm focus:outline-none bg-[#17191A] w-full"
        name="search"
        value={inputValue}
        onChange={handleInputChange}
      />
    </form>
  );
}

export default Search;
