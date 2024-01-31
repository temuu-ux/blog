import Link from "next/link";
import { useRouter } from "next/router";
import { FiSearch } from "react-icons/fi";
import React from "react";

export default function Header() {
  const router = useRouter();
  return (
    <div className="flex h-[100px] justify-between items-center  py-9 px-[350px]">
      <div className="flex gap-2.5">
        <img className="w-9 h-9" src="/Logo.svg" alt="" />
        <img src="/MetaBlog.svg" alt="" />
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
        <div className="h-[36px] bg-[#F4F4F5]  rounded-md px-[16px] py-[8px] gap-[12px] items-center flex">
          <input type="Search" className="bg-zinc-100" />
          <FiSearch />
        </div>
      </div>
    </div>
  );
}
