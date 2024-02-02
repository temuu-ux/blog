const Page = () => {
  return (
    <div className="w-[643px] m-auto">
      <div className="w-[643px] h-[389px] m-auto pt-[14px] flex flex-col items-start gap-5 font-semibold ">
        <div className="flex flex-col gap-5">
          <h2 className="text-3xl">Contact Us</h2>
          <p className="font-normal text-[#696A75]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam. Lorem ipsum dolor sit amet, consectetur adipiscing
            elit, sed do eiusmod tempor incididunt ut labore et dolore magna
            aliqua. Ut enim ad minim veniam
          </p>
        </div>
        <div className="w-[643px] flex py-2.5 justify-between">
          <div className="w-[300px] p-4 flex flex-col items-start gap-2.5 border border-[#E8E8EA] rounded-xl">
            <h2 className="text-2xl">Address</h2>
            <p className="font-normal text-[#696A75]">
              1328 Oak Ridge Drive, Saint Louis, Missouri
            </p>
          </div>
          <div className="w-[300px] p-4 flex flex-col items-start gap-2.5 border border-[#E8E8EA] rounded-xl">
            <h2 className="text-2xl">Contact</h2>
            <p className="font-normal text-[#696A75]">
              313-332-8662 info@email.com
            </p>
          </div>
        </div>
      </div>
      <div className="w-[643px] h-[440px] m-auto pt-[29px] pr-[130xp] pb-[26px] pl-[35px] flex flex-col gap-6 bg-[#F6F6F7] rounded-xl">
        <div className=" font-semib text-xl">Leave a Message</div>
        <div className="flex flex-col gap-5">
          <div className="flex w-[478px] justify-between">
            <input
              className="py-[14px] px-5 rounded-md"
              type="text"
              placeholder="Your Name"
            />
            <input
              className="py-[14px] px-5 rounded-md"
              type="text"
              placeholder="Your Email"
            />
          </div>
          <div>
            <input
              className="py-[14px] px-5 rounded-md w-[478px]"
              type="text"
              placeholder="Subject"
            />
          </div>
          <div>
            <input
              className=" py-[14px] px-5 w-[478px] h-[130px] rounded-md"
              type="text"
              placeholder="Write a message"
            />
          </div>
          <div>
            <button className="mb-4 p-2.5 flex justify-center items-center rounded-md text-white bg-[#4B6BFB] font-medium text-sm ">
              Send Message
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Page;
