import AllLink from "../link";
import React, { useState } from "react";
import Blog from "@/components/Blog";

export default function Page({ brandData }) {
  const [title, setTitle] = useState(brandData);
  const [pageNumber, setPageNunvber] = useState(2);

  async function loadMoreHandler() {
    const response = await fetch(
      `https://dev.to/api/articles?tag=branding&per_page=12&${pageNumber}`
    );
    const loadMore = await response.json();

    setTitle([...title, ...loadMore]);
    setPageNunvber([pageNumber + 1]);
  }
  return (
    <div className="flex flex-col gap-24">
      <div className="flex m-auto gap-5 w-[1216px] flex-wrap">
        <p className="text-2xl text-[#181A2A] font-bold">Barnding</p>
        <AllLink />
        {title.map((e) => {
          return <Blog aData={e} tag="branding" />;
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
    `https://dev.to/api/articles?tag=branding&per_page=12`
  );
  const brandData = await res.json();
  return {
    props: { brandData },
  };
};
