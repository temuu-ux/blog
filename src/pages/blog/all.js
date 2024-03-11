import AllLink from "../link";
import Blog from "@/components/Blog";
import React, { useState } from "react";

export default function Page({ allData }) {
  const [tag, setTag] = useState(allData);
  const [pageNumber, setPageNumber] = useState(2);

  async function loadMoreHandler() {
    const res = await fetch(
      `https://dev.to/api/articles?per_page=12&page=${pageNumber}`
    );
    const load = await res.json();
    setTag([...tag, ...load]);
    setPageNumber([pageNumber + 1]);
  }

  return (
    <div className="m-auto flex flex-col gap-24 ">
      <div className=" flex flex-wrap w-[360px] m-auto gap-5 sm:w-[1231px]  sm:flex-wrap">
        <p className="text-2xl cursor-pointer text-[#181A2A]  hover:scale-y-110 ease-in-out duration-500 hover:text-[#D4A373] font-bold">
          All post
        </p>
        <AllLink />
        {tag.map((e) => {
          return <Blog aData={e} />;
        })}
      </div>
      <button
        className="flex m-auto border justify-center items-center w-[123px] h-12 px-3 py-5 hover:scale-125 ease-in-out duration-500"
        onClick={loadMoreHandler}
      >
        Load More
      </button>
    </div>
  );
}

export const getServerSideProps = async () => {
  const res = await fetch(`https://dev.to/api/articles?&per_page=12`);
  const allData = await res.json();
  return {
    props: { allData },
  };
};
