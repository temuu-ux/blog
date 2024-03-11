const Page = () => {
  return (
    <div className=" m-auto flex flex-col justify-between w-[300px] sm:w-[643px] sm:m-auto">
      <div className="w-[320px] sm:w-[643px]  sm:m-auto sm:pt-[14px] sm:flex sm:flex-col  sm:items-start sm:gap-2 font-semibold ">
        <div className="flex flex-col gap-5">
          <h2 className="text-3xl cursor-pointer hover:text-[#D4A373] hover:scale-y-105 ease-in-out duration-500 ">
            Contact Us
          </h2>
          <p className="font-normal text-[#696A75]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam. Lorem ipsum dolor sit amet, consectetur adipiscing
            elit, sed do eiusmod tempor incididunt ut labore et dolore magna
            aliqua. Ut enim ad minim veniam
          </p>
        </div>
        <div className="flex flex-wrap gap-5 w-[360px]  sm:w-[653px] sm:flex  py-12 sm:justify-between">
          <div className="w-[300px] p-4 flex flex-col text-start gap-2.5 border border-[#E8E8EA] rounded-xl shadow-lg hover:scale-105 ease-in-out duration-1000  hover:shadow-2xl">
            <h2 className="text-2xl cursor-pointer hover:text-[#D4A373] hover:scale-y-105 ease-in-out duration-500">
              Address
            </h2>
            <p className="font-normal text-[#696A75]">
              1328 Oak Ridge Drive, Saint Louis, Missouri
            </p>
          </div>
          <div className="w-[300px] p-4 flex flex-col text-start gap-2.5 border border-[#E8E8EA] rounded-xl shadow-lg hover:scale-105 ease-in-out duration-1000  hover:shadow-2xl">
            <h2 className="text-2xl cursor-pointer hover:text-[#D4A373] hover:scale-y-105 ease-in-out duration-500">
              Contact
            </h2>
            <p className="font-normal text-[#696A75]">
              313-332-8662 info@email.com
            </p>
          </div>
        </div>
      </div>
      <div className="w-[320px]  sm:w-[643px] p-7 sm:h-[470px] m-auto sm:pt-[29px] sm:pr-[130xp] sm:pb-[26px] sm:pl-[35px] flex flex-col gap-6 bg-[#F6F6F7] shadow-lg  hover:shadow-2xl  ease-in-out duration-1000  rounded-xl">
        <div className=" font-semib text-xl cursor-pointer hover:text-[#D4A373] hover:scale-y-105 ease-in-out duration-500 ">
          Leave a Message
        </div>
        <div className="flex flex-col gap-5">
          <div className="flex flex-col gap-4 sm:flex sm:flex-row sm:w-[478px] sm:justify-between">
            <input
              className="py-[14px] px-5 rounded-md"
              type="text"
              placeholder="Your Name"
            />
            <input
              className="py-[14px] px-5 rounded-md "
              type="text"
              placeholder="Your Email"
            />
          </div>
          <div>
            <input
              className="py-[14px] px-5 rounded-md w-[264px] sm:w-[478px]"
              type="text"
              placeholder="Subject"
            />
          </div>
          <div>
            <input
              className=" py-[14px] w-[264px] h-[90px] px-5 sm:w-[478px] sm:h-[130px] rounded-md"
              type="text"
              placeholder="Write a message"
            />

            <button className=" mt-5 p-2.5 flex justify-center items-center rounded-md text-white bg-[#4B6BFB] font-medium  text-sm shadow-lg hover:scale-105 ease-in-out duration-1000  hover:shadow-2xl">
              Send Message
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Page;
