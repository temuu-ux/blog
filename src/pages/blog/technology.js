import AllLink from "../link";
import Blog from "@/components/Blog";
import { useState } from "react";

export default function Page({ techData }) {
  const [articles, setArticles] = useState(techData);
  const [pageNumber, setPageNumber] = useState(2);
  // console.log("tech", techData);
  // console.log("article", articles);

  async function loadMoreHandler() {
    const response = await fetch(
      `https://dev.to/api/articles?tag=technolog&per_page=12&page=${pageNumber}`
    );
    const load = await response.json();
    setArticles([...articles, ...load]);
    setPageNumber([pageNumber + 1]);
  }
  return (
    <div className="flex flex-col gap-24">
      <div className="flex  gap-5 sm:flex sm:m-auto sm:gap-5 sm:w-[1216px] sm:flex-wrap">
        <p className="text-2xl text-[#181A2A] font-bold">Technology</p>
        <AllLink />
        {articles.map((e) => {
          return <Blog aData={e} tag="technology" />;
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
  const res = await fetch(
    "https://dev.to/api/articles?tag=technology&per_page=12"
  );
  const techData = await res.json();
  return {
    props: { techData },
  };
};
