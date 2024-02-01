export default function Footer() {
  return (
    <div className="bg-[#E8E8EA] ">
      <div className="  w-[1917px] m-auto py-16 px-80">
        <div className="flex flex-col gap-6 w-[1216px] m-auto ">
          <div className="flex justify-between">
            <div className="flex flex-col gap-6">
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
            <div className="w-[521px] h-[88px] flex flex-col gap-1 text-center">
              <p>Home</p>
              <p>Blog</p>
              <p>Contact</p>
            </div>
            <div className="flex gap-8 justify-start items-start">
              <img src="/F.svg" alt="" />
              <img src="/T.svg" alt="" />
              <img src="/insta.svg" alt="" />
              <img src="/in.svg" alt="" />
            </div>
          </div>
          <div className="flex justify-between border-gray-300   border-t-2">
            <div className="flex gap-1">
              <img src="/Logo.svg" alt="" />
              <img src="/Text.svg" alt="" />
            </div>
            <div className="flex gap-4 py-8 items-center">
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
