import React from "react";

export default function Card(props) {
  return (
    <div className="w-[293px] h-[330px]  p-4 bg-white rounded-xl border border-gray-200  flex-col gap-4 inline-flex ">
      <img src={props.url} className="w-[289px] h-[320px] rounded-xl" />
      <div className="self-stretch w-[230px] h-[120px] p-2 flex-col justify-start items-start gap-5 flex">
        <div className="self-stretch h-32 flex-col justify-start items-start gap-4 flex">
          <div className="px-2.5 py-1 bg-indigo-500 bg-opacity-5 rounded-md justify-center items-center gap-1 inline-flex">
            <div className="text-indigo-500 text-xs font-medium  leading-tight">
              Technology
            </div>
          </div>
          <div className="self-stretch  text-lg font-semibold  leading-7">
            {props.title}
          </div>
        </div>
      </div>
    </div>
  );
}
