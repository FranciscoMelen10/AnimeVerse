"use client";
import Link from "next/link";

function Pagination({ pagination, url = "" }) {
  const { last_visible_page, current_page } = pagination;

  let pages = [];
  const distancePagination = current_page + 10;

  for (let index = current_page; index < distancePagination; index++) {
    index < last_visible_page ? pages.push(index) : "";
  }

  return (
    <div className="flex justify-center items-center flex-wrap gap-2 px-2" data-aos="fade"
      data-aos-easing="ease-in-out"
    >
      {pages.map((info) => {
        return (
          <Link
            href={`${url}/${info}`}
            key={info}
            className="relative h-10 max-h-[40px] w-10 max-w-[40px] select-none rounded-lg bg-gray-900 text-center align-middle font-sans text-xs font-medium uppercase text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none hover:scale-90 transition-all"
            type="button"

          >
            <span className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 bg-transparent">
              {info}
            </span>
          </Link>
        );
      })}
    </div>
  );
}

export default Pagination;
