import Link from "next/link";
import { useRouter } from "next/router";

export default function AllLink() {
  const router = useRouter();
  return (
    <div className="flex items-center m-auto gap-2 sm:m-auto   sm:flex sm:items-center  sm:justify-between sm:w-[1216px]">
      <div className="flex gap-1 sm:flex sm:gap-5">
        <Link href={"/blog/all"}>
          <button className="text-xs text-[#495057] hover:text-[#D4A373] hover:scale-125 ease-in-out duration-300 font-bold	">
            All
          </button>
        </Link>
        <Link href={"/blog/design"}>
          <button className="text-xs text-[#495057] hover:text-[#D4A373] hover:scale-125 ease-in-out duration-300 font-bold	">
            Design
          </button>
        </Link>
        <Link href={"/blog/travel"}>
          <button className="text-xs text-[#495057] hover:text-[#D4A373] hover:scale-125 ease-in-out duration-300 font-bold	">
            Travel
          </button>
        </Link>
        <Link href={"/blog/fashion"}>
          <button className="text-xs text-[#495057] hover:text-[#D4A373] hover:scale-125 ease-in-out duration-300 font-bold	">
            Fashion
          </button>
        </Link>
        <Link href={"/blog/technology"}>
          <button className="text-xs text-[#495057] hover:text-[#D4A373] hover:scale-125 ease-in-out duration-300 font-bold	">
            Technology
          </button>
        </Link>
        <Link href={"/blog/branding"}>
          <button className="text-xs text-[#495057] hover:text-[#D4A373] hover:scale-125 ease-in-out duration-300 font-bold	">
            Branding
          </button>
        </Link>
      </div>
      <button
        className="text-xs text-[#495057] font-bold hover:text-[#D4A373] hover:scale-125 ease-in-out duration-300 flex items-center "
        onClick={() => router.push("/blog/all")}
      >
        View all
      </button>
    </div>
  );
}
