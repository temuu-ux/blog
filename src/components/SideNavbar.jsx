import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { Disclosure } from "@headlessui/react";
import { ImCross } from "react-icons/im";
import Link from "next/link";
function SideNavbar() {
  return (
    <div>
      <Disclosure as="nav">
        <Disclosure.Button className="absolute top-4 right-4 inline-flex items-center peer justify-center rounded-md p-2 text-gray-800  focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white ">
          <GiHamburgerMenu className=" " aria-hidden="true" />
        </Disclosure.Button>
        <div className=" p-6 w-full h-screen bg-white z-20 fixed top-0 -right-96 sm:right-0 sm:w-60  peer-focus:right-0 peer:transition ease-in-out delay-150 duration-200">
          <div className="flex justify-between">
            <div className="flex flex-col  justify-start  ">
              <Link href={"/"}>
                {" "}
                <h1 className="text-base p-1 cursor-pointer font-bold text-gray-600  flex gap-1 w-full">
                  Home
                </h1>
              </Link>
              <Link href={"/blog/all"}>
                {" "}
                <h3 className=" text-gray-600 text-base p-1 cursor-pointer font-bold   flex gap-2 w-full">
                  Blog
                </h3>
              </Link>

              <Link href={"/link/Contact"}>
                {" "}
                <h3 className="text-gray-600  text-base p-1 cursor-pointer font-bold flex gap-2  w-full">
                  Contact
                </h3>
              </Link>

              <h3 className="text-gray-600 text-base  p-1 cursor-pointer font-bold flex gap-2 w-full ">
                Search
              </h3>
            </div>

            <div className="flex justify-center text-center items-start mt-2 text-gray-600">
              <button className="block">
                <ImCross />
              </button>
            </div>
          </div>
        </div>
      </Disclosure>
    </div>
  );
}

export default SideNavbar;
