import Link from "next/link";
export default function Page() {
  return (
    <div className="w-[600px] flex m-auto gap-[40px]">
      <p className=" text-7xl">404</p>
      <div className="border-r-2"></div>
      <div className="flex flex-col gap-10">
        <p className="font-semibold text-2xl">Page Not Found</p>
        <p>
          We're sorry, This page is unknown or does not exist the page you are
          looking for.
        </p>
        <Link href={"/"}>
          <div className="w-[135px] p-2.5 rounded-md bg-[#4B6BFB] text-white">
            Back To Home
          </div>
        </Link>
      </div>
    </div>
  );
}
