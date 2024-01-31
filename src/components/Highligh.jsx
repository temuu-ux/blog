import React from "react";

export default function Highligh(props) {
  return (
    <div className=" rounded-xl flex justify-center items-center m-auto  relative w-[1216px] h-[600px]">
      <div className="w-[1216px] h-[600px]">
        <img src={props.url} alt="" className="rounded-xl w-full h-full" />
      </div>
      <div className="flex flex-col   absolute w-[598px] h-[252px] bg-white border top-[328px] left-4  rounded-xl">
        <div className="w-[518px] h-[80px] px-10 py-10">
          <p className="bg-[#4B6BFB] w-[86px] h-[28px] text-white  text-xs font-medium rounded-md text-center items-center flex justify-center px-2.5 py-1 leading-tight">
            {props.tag}
          </p>
          <p className="w-[518px] h-[80px]  text-[#181A2A] text-3xl not-italic font-semibold">
            {props.description}
          </p>
        </div>

        <div>
          <p className="text-[#97989F] text-base font-normal w-[126px] h-[24px] text-center flex top-40 absolute  px-10 py-10   not-italic">
            {props.date}
          </p>
        </div>
      </div>
    </div>
  );
}
