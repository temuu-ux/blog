import React from "react";

export default function Highligh(porps) {
  return (
    <div className=" rounded-xl flex justify-center items-center m-auto">
      <img src={porps.url} alt="" className="rounded-xl w-[1216px] h-[600px]" />
    </div>
  );
}
