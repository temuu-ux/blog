import React from "react";

export default function Card(props) {
  return (
    <div className="w-[293px] h-[330px]  rounded-xl  flex-col pt-8 inline-flex relative borde">
      <div
        className="w-[280px] h-[320px] rounded-xl "
        style={{
          backgroundImage: `url(${props.url})`,
          backgroundSize: "auto",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="self-stretch w-[230px] h-[73px] p-2 flex-col   gap-5  absolute flex right-10 top-40 ">
          <div className="self-stretch flex-col   gap-4  flex">
            <p className="bg-[#4B6BFB] w-[86px] h-[28px]  text-xs text-white font-medium rounded-md text-center items-center flex justify-center px-2.5 py-1 leading-tight">
              {props.tag}
            </p>

            <div className="self-stretch  text-lg font-semibold  leading-7 text-[white]">
              {props.title}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
