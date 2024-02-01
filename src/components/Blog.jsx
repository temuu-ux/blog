import React from "react";

export default function Blog({ aData, tag, date, profile }) {
  console.log("adata: ", aData);
  
  
  console.log("on sar", date);
  return (
    <div className="m-auto w-[392px] h-[476px] border rounded-xl p-4 gap-4 ">
      <div className="w-[360px] h-[240px] rounded-md">
        <img src={aData.social_image} className="w-full h-full" alt="" />
      </div>
      <div className="w-[360px] h-[200px] justify-between text-sm flex flex-col gap-4 p-2">
        <p className="bg-indigo-500/5 text-center text-indigo-500 w-[120px] h-[28px] text-sm px-[10px] py-[4px] rounded-md">
          {tag}
        </p>
        <p className="w-[230px]  albaar  text-black text-lg font-semibold font-['Work Sans'] leading-7">
          {aData.title}
        </p>
        <div className="flex gap-6 items-center">
          <img className="w-10 h-10 rounded-3xl " src={profile} alt="" />
          <p className="text-[#97989F] text-base text-center  font-extralight">
            {aData.user.name}
          </p>
          <p className="text-[#97989F] text-base font-extralight">{date}</p>
        </div>
      </div>
    </div>
  );
}
