import Link from "next/link";

export default function Footer() {
  return (
    <div className="">
      <div className="py-8 sm:items-start sm:[100%]  sm:flex m-auto sm:py-16 sm:px-80 sm:m-auto sm:bg-[#E8E8EA] ">
        <div className="flex flex-col gap-8 sm:flex sm:flex-col sm:gap-6  sm:m-auto sm:justify-start sm:items-start">
          <div className="flex  flex-col gap-10 sm:flex-row  sm:flex sm:justify-start">
            <div className="hidden  flex-row gap-6 sm:flex sm:flex-col sm:gap-6">
              <div>
                <p className="text-lg font-semibold text-[#181A2A] ">About</p>
                <p className="w-[280px] h-[120px] text-base text-[#696A75] font-normal not-italic">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam
                </p>
              </div>
              <div className="w-[218px] h-[52px] ">
                <p>Email : info@jstemplate.net</p>
                <p>Phone : 880 123 456 789</p>
              </div>
            </div>
            <div className=" flex flex-col  items-center  sm:w-[521px] sm:h-[88px] text-gray-500 sm:flex sm:flex-col gap-1 sm:text-center">
              <Link href={"/"}>
                <button>Home</button>
              </Link>
              <Link href={"/link/Blogjump"}>
                <button>Blog</button>
              </Link>
              <Link href={"/link/Contact"}>
                <button>Contact</button>
              </Link>
            </div>
            <div className="flex justify-center text-center sm:flex gap-8 sm:justify-start sm:items-start">
              <img src="/F.svg" alt="" />
              <img src="/T.svg" alt="" />
              <img src="/insta.svg" alt="" />
              <img src="/in.svg" alt="" />
            </div>
          </div>
          <div className="flex justify-center items-center  sm:flex sm:m-auto border-gray-50 sm:w-[1231px] sm:justify-between  border-t-2">
            <div className="flex gap-2 items-center justify-center text-center sm:flex sm:gap-1">
              <img src="/Logo.svg" alt="" />
              <img src="/Text.svg" alt="" />
            </div>
            <div className="hidden sm:flex sm:gap-4 sm:py-8 sm:items-center">
              <p className="text-base font-normal  text-[#3B3C4A]">
                Terms of Use
              </p>
              <p className="w-[1px] text-[#3B3C4A]">|</p>
              <p className="text-base font-normal n text-[#3B3C4A]">
                Privacy Policy
              </p>
              <p className="w-[1px]  text-[#3B3C4A]">|</p>
              <p className="text-base font-normal text-[#3B3C4A]">
                Cookie Policy
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
