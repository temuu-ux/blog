import Link from "next/link";
import { useRouter } from "next/router";
import Searchinput from "./Searchinput";
import React from "react";
import { FiSearch } from "react-icons/fi";
import SideNavbar from "../components/SideNavbar";

export default function Header() {
  const router = useRouter();
  return (
    <div className="px-3 sm:flex sm:w-[1216px]  sm:h-[100px] sm:gap-[420px]  sm:py-9 ">
      <div className="flex items-center justify-between w-[320px]  sm:flex  ">
        <Link href={"/"}>
          <button className="flex  gap-2.5 items-center pt-4 ">
            <img className="w-9 h-9 " src="/Logo.svg" alt="" />
            <img src="/MetaBlog.svg" alt="" />{" "}
          </button>
        </Link>
        <div className="flex  items-end sm:hidden">
          <SideNavbar />
        </div>
      </div>

      <div className="  hidden  sm:gap-10 sm:justify-center sm:text-base sm:items-center  sm:flex sm:flex-row">
        <button
          className="text-base font-normal text-[#3B3C4A]  hover:scale-y-110 ease-in-out duration-500 hover:text-[#D4A373]"
          onClick={() => router.push("/")}
        >
          Home
        </button>
        <Link href={"/blog/all"}>
          <button className="text-base font-normal text-[#3B3C4A]  hover:scale-y-110 ease-in-out duration-500 hover:text-[#D4A373]">
            Blog
          </button>
        </Link>
        <Link href={"/link/Contact"}>
          <button className="text-base font-normal text-[#3B3C4A]  hover:scale-y-110 ease-in-out duration-500 hover:text-[#D4A373]">
            Contact
          </button>
        </Link>
        <div className="flex bg-zinc-100  rounded-md items-center">
          <input
            placeholder="Search"
            type="text"
            className="bg-zinc-100 py-2 px-1 "
          />
          <FiSearch />
        </div>

        <Searchinput />
      </div>
    </div>
  );
}
