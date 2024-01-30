export default function Blog(props) {
  return (
    <div className="m-auto w-[392px] h-[476px] border rounded-xl p-4 gap-4 ">
      <div className="w-[360px] h-[240px] rounded-md">
        <img src={props.url} className="w-full h-full" alt="" />
      </div>
      <div className="w-[360px] h-[200px] flex flex-col gap-4 p-2">
        <p className="bg-indigo-500/5 text-indigo-500 w-[97px] h-[28px] text-sm px-[10px] py-[4px] rounded-md">
          Technology
        </p>
        <p className="w-[230px] h-[76px] text-black text-lg font-semibold font-['Work Sans'] leading-7">
          {props.title}
        </p>
        <div className="flex gap-6">
          <p className="text-[#97989F] text-base font-extralight">
            {props.name}
          </p>
          <p>{props.profile}</p>
          <p className="text-[#97989F] text-base font-extralight">
            {props.date}
          </p>
        </div>
      </div>
    </div>
  );
}
