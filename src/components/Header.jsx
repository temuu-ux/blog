import Link from "next/link";
import { useRouter } from "next/router";
import { FiSearch } from "react-icons/fi";
import React from "react";

export default function Header() {
  const router = useRouter();
  return (
    <div className="flex  gap-28 h-[100px] justify-center m-auto text-center items-center  py-9 px-[350px]">
      <div>
        <p>
          <img src="/Logo.svg" alt="" />
        </p>
      </div>

      <div className="flex gap-10 justify-center text-base items-center">
        <button
          className="text-base font-normal text-[#3B3C4A]"
          onClick={() => router.push("/")}
        >
          Home
        </button>
        <Link href={"/Blogjump"}>
          <button className="text-base font-normal text-[#3B3C4A] ">
            Blog
          </button>
        </Link>

        <button
          className="text-base font-normal text-[#3B3C4A]"
          // onClick={() => router.push("/contact")}
        >
          Contact
        </button>
        <div className="h-[36px] bg-[#F4F4F5] bg-zinc-100 rounded-md px-[16px] py-[8px] gap-[12px] items-center flex">
          <input type="Search" className="bg-zinc-100" />
          <FiSearch />
        </div>
      </div>
    </div>
  );
}
