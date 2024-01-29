export default function Header() {
  return (
    <div className="flex p-4 m-auto justify-around py-9 px-[350px]">
      <p>
        <img src="/Logo.svg" alt="" />
      </p>

      <div className="flex gap-10 justify-center text-base items-center">
        <p className="text-base font-normal text-[#3B3C4A]">Home</p>
        <p className="text-base font-normal text-[#3B3C4A]">Blog</p>
        <p className="text-base font-normal text-[#3B3C4A]">Contact</p>
      </div>

      <div className="w-[166px] h-[36px] bg-[#F4F4F5]"></div>
    </div>
  );
}
