import Blog from "@/components/Blog";
import AllLink from "@/pages/link/index.js";
import React, { useState } from "react";

export default function Page({ designData }) {
  const [articles, setArticles] = useState(designData);
  const [pageNumber, setPageNunvber] = useState(2);

  async function loadMoreHandler() {
    const response = await fetch(
      `https://dev.to/api/articles?tag=design&per_page=12&page=${pageNumber}`
    );
    const loadMore = await response.json();

    setArticles([...articles, ...loadMore]);
    setPageNunvber([pageNumber + 1]);
  }

  return (
    <div className="flex flex-col m-auto gap-24">
      <div className="flex flex-wrap gap-5 w-[360px] m-auto sm:flex sm:m-auto  sm:w-[1216px] sm:flex-wrap">
        <p className="  text-2xl text-[#181A2A]  hover:scale-y-110 ease-in-out duration-500 hover:text-[#D4A373] font-bold ">Design</p>
        <AllLink />
        {articles.map((el) => {
          return <Blog aData={el} tag="design" />;
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
  const res = await fetch("https://dev.to/api/articles?tag=design&per_page=12");
  const designData = await res.json();

  return {
    props: { designData },
  };
};
