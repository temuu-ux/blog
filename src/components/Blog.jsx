import Link from "next/link";
import React from "react";

export default function Blog({ aData, tag }) {
  // console.log("adata: ", aData);
  // const handlerSearch = (event) => {
  //   const filteredArticles = aData.filter((aData) =>
  //     tag.toLowerCase().includes(event.target.value.toLowerCase())
  //   );
  //   setFilteredArray(filteredArticles);

  return (
    <Link href={`/blog/article/${aData.id}`}>
      <div className="w-[350px] m-auto flex flex-col items-center  sm:m-auto sm:w-[392px] sm:h-[476px] border-2 rounded-xl p-4 shadow-lg hover:scale-110 ease-in-out duration-1000  hover:shadow-2xl ">
        <div className="w-[100%] h-[200px]  sm:w-[360px] sm:h-[240px] rounded-md">
          <img src={aData.social_image} className="w-full h-full" alt="" />
        </div>
        <div className="w-[360px] h-[200px] justify-between text-sm flex flex-col gap-4 p-2">
          <p className="bg-indigo-500/5 text-center text-indigo-500 w-[120px] h-[28px] text-sm px-[10px] py-[4px] rounded-md">
            {tag}
          </p>
          <p className=" w-[278px] overflow-hidden text-center justify-start sm:w-[334px] sm:h-[84px] sm:overflow-hidden  albaar  text-black text-lg font-semibold ">
            {aData.title}
          </p>
          <div className="flex items-center w-[280px] sm:flex gap-6 sm:items-center">
            <img
              className="w-10 h-10 rounded-3xl "
              src={aData.user.profile_image}
              alt=""
            />
            <p className="  text-[#97989F] text-base text-center  font-extralight">
              {aData.user.name}
            </p>
            <p className="text-[#97989F] text-base font-extralight">
              {new Date(aData.published_at).toLocaleDateString()}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
}
