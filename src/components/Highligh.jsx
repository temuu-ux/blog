export default function Highligh(props) {
  return (
    <div className=" rounded-xl sm:flex sm:justify-center sm:items-center sm:m-auto  sm:relative sm:w-[1216px] sm:h-[600px] ">
      <div class="carousel w-full">
        <div id="slide1" class="carousel-item relative w-full">
          <img
            src={props.url}
            className="rounded-xl sm:w-[1206px] sm:h-[590px] carousel-item"
          />
        </div>
      </div>
      <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2"></div>
      <div className=" sm:flex sm:flex-col   sm:absolute sm:w-[598px] sm:h-[252px] sm:bg-white sm:border sm:top-[328px] sm:left-4  rounded-xl">
        <div className="sm:w-[518px] sm:h-[80px] sm:gap-3 sm:flex sm:flex-col sm:px-10 sm:py-10">
          <p className="sm:bg-[#4B6BFB] sm:w-[86px] sm:h-[30px] sm:text-white   sm:text-xs sm:font-medium sm:rounded-md sm:text-center sm:items-center sm:flex sm:justify-center sm:px-2.5 sm:py-1 sm:leading-tight">
            {props.tag}
          </p>
          <p className="sm:w-[518px] sm:overflow-text sm:h-[50px]   sm:text-[#181A2A] sm:text-3xl sm:not-italic sm:font-semibold">
            {props.description}
          </p>
        </div>

        <div>
          <p className="sm:text-[#97989F] sm:text-base sm:font-normal sm:w-[126px] sm:h-[24px] sm:text-center sm:flex sm:top-40 sm:absolute  sm:px-10 sm:py-10   sm:not-italic">
            {props.date}
          </p>
        </div>
      </div>
    </div>
  );
}
