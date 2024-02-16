import Blog from "@/components/Blog";
import AllLink from "../link";
import React, { useState } from "react";

export default function Page({ travelData }) {
  // console.log("titles", travelData);
  const [titles, setTitles] = useState(travelData);
  const [pageNumber, setPageNunvber] = useState(2);

  async function loadMoreHandler() {
    const res = await fetch(
      `https://dev.to/api/articles?tag=travel&per_page=12&page=${pageNumber}`
    );
    const loadMore = await res.json();

    setTitles([...titles, ...loadMore]);
    setPageNunvber([pageNumber + 1]);
  }

  return (
    <div className="flex flex-col gap-24">
      <div className="flex flex-col gap-5 sm:flex sm:m-auto sm:gap-5 sm:w-[1216px] sm:flex-wrap">
        <p className="text-2xl text-[#181A2A] font-bold">Travel</p>
        <AllLink />
        {titles.map((el) => {
          return <Blog aData={el} tag="travel" />;
        })}
      </div>
      <button
        className="flex m-auto border justify-center items-center w-[123px] h-12 px-3 py-5"
        onClick={loadMoreHandler}
      >
        Load More
      </button>
    </div>
  );
}
export const getServerSideProps = async () => {
  const res = await fetch(`https://dev.to/api/articles?tag=travel&per_page=12`);
  const travelData = await res.json();
  return {
    props: { travelData },
  };
};
