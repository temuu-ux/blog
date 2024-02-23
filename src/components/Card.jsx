import React from "react";
import Link from "next/link";

export default function Card({ aData }) {
  return (
    <Link href={`/blog/article/${aData.id}`}>
      <div className=" w-[289px] h-[320px]  rounded-xl flex-col pt-8 inline-flex relative shadow-lg hover:scale-110 ease-in-out duration-1000  hover:shadow-2xl">
        <div className=" w-[289px] h-[320px]   ">
          <img
            src={aData.social_image}
            alt=""
            className="w-full h-full rounded-xl"
          />
          <div className="self-stretch w-[230px] h-[73px] p-2 flex-col   gap-5  absolute flex right-10 top-40 ">
            <div className="self-stretch flex-col   gap-4  flex">
              <p className="bg-[#4B6BFB] w-[86px] h-[28px] overflow-hidden  text-xs text-white font-medium rounded-md text-center items-center flex justify-center px-2.5 py-1 leading-tight">
                {aData.tag_list[0]}
              </p>

              <div className="self-stretch w-[230px] overflow-hidden text-lg font-semibold  leading-7 text-gray-50">
                {aData.title}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
