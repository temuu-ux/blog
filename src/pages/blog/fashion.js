import Blog from "@/components/Blog";
import AllLink from "../link";
import React, { useState } from "react";

// export default function Page(props) {
// const { fashion } = props;

export default function Page({ fashionData }) {
  const [articles, setArticles] = useState(fashionData);
  const [pageNumber, setPageNunvber] = useState(2);

  async function loadMoreHandler() {
    const res = await fetch(
      `https://dev.to/api/articles?tag=fashion&per_page=12&page=${pageNumber}`
    );
    const loadMore = await res.json();

    setArticles([...articles, ...loadMore]);
    setPageNunvber([pageNumber + 1]);
  }
  return (
    <div className="flex flex-col m-auto gap-24">
      <div className="flex flex-wrap w-[360px] gap-5 m-auto sm:flex sm:m-auto sm:gap-5 sm:w-[1216px] sm:flex-wrap">
        <p className="text-2xl text-[#181A2A] font-bold">Fashion</p>
        <AllLink />
        {articles.map((e) => {
          return <Blog aData={e} tag="fashion" />;
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

export async function getServerSideProps() {
  const res = await fetch(
    "https://dev.to/api/articles?tag=fashion&per_page=12"
  );
  const fashionData = await res.json();

  return {
    props: { fashionData },
  };
}
