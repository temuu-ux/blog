import Blog from "@/components/Blog";
import AllLink from "../link";
import React, { useState } from "react";

function Page() {
  const [data, setData] = useState(fashionData);
  const [pageNumber, setPageNunvber] = useState(2);

  async function loadMoreHandler() {
    const res = await fetch(
      `https://dev.to/api/articles?tag=design&per_page=12&page=${pageNumber}`
    );
    const loadMore = res.json();

    setData([...data, ...loadMore]);
    setPageNunvber([pageNumber + 1]);
  }

  return (
    <div className="flex flex-col gap-24">
      <div className="flex m-auto gap-5 w-[1216px] flex-wrap">
        <p className="text-2xl text-[#181A2A] font-bold">Design</p>
        <AllLink />
        {data.map((el) => {
          return <Blog aData={el} tag="fashion" />;
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

export default async function getServerSideProps() {
  const res = await fetch(
    "https://dev.to/api/articles?tag=fashion&per_page=12"
  );
  const fashionData = await fashion.json();
  return {
    props: { fashionData },
  };
}
