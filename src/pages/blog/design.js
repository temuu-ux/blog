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
    <div className="flex flex-col gap-24">
      <div className="flex m-auto gap-5 w-[1216px] flex-wrap">
        <p className="text-2xl text-[#181A2A] font-bold">Design</p>
        <AllLink />
        {articles.map((designData) => {
          return <Blog aData={designData} tag="design" />;
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
  const res = await fetch("https://dev.to/api/articles?tag=design&per_page=12");
  const designData = await res.json();

  return {
    props: { designData },
  };
};
