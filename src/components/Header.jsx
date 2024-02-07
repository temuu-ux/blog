import Link from "next/link";
import { useRouter } from "next/router";
import { FiSearch } from "react-icons/fi";
import React from "react";

export default function Header() {
  const router = useRouter();
  return (
    <div className="sm:flex  sm:h-[100px] sm:justify-between sm:items-center  sm:py-9 sm:px-[350px]">
      <div className="sm:flex ">
        <Link href={"/"}>
          <button className="flex  gap-2.5 items-center ">
            <img className="w-9 h-9" src="/Logo.svg" alt="" />
            <img src="/MetaBlog.svg" alt="" />{" "}
          </button>
        </Link>
      </div>

      <div className="flex gap-10 justify-center text-base items-center">
        <button
          className="text-base font-normal text-[#3B3C4A]"
          onClick={() => router.push("/")}
        >
          Home
        </button>
        <Link href={"/link/Blogjump"}>
          <button className="text-base font-normal text-[#3B3C4A] ">
            Blog
          </button>
        </Link>

        <Link href={"/link/Contact"}>
          <button className="text-base font-normal text-[#3B3C4A]">
            Contact
          </button>
        </Link>
        <div className="h-[36px] bg-[#F4F4F5]  rounded-md px-[16px] py-[8px] gap-[12px] items-center flex">
          <input placeholder="Search" type="Search" className="bg-zinc-100" />
          <FiSearch />
        </div>
      </div>
    </div>
  );
}
