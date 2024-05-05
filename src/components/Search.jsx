"use client"
import { useState } from "react";
import Image from "next/image";

function Search({ placeholder }) {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event) => {
    setInputValue(event.target.value); 
  };

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevenir el comportamiento predeterminado del formulario
    window.location.href = `/search/${inputValue}`
  };

  return (
    <form
      className="flex justify-center items-center py-1 px-2 border-black text-color_100 bg-[#17191A] rounded-md gap-2"
      onSubmit={handleSubmit}
    >
      <input
        placeholder={placeholder}
        className="text-sm focus:outline-none bg-[#17191A]"
        name="search"
        value={inputValue} 
        onChange={handleInputChange} 
      />
      <button className="size-auto" type="submit">
        <Image
          src="/search.svg"
          alt="Search"
          width={15}
          height={15}
          loading="lazy"
          className="bg-[#17191A]"
        />
      </button>
    </form>
  );
}

export default Search;
