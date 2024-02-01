import Link from "next/link";

export default function AllLink() {
  return (
    <div className="flex items-cemter justify-between w-[1216px]">
      <div className="flex gap-5">
        <Link href={"/link/Blogjump"}>
          <button className="text-xs text-[#D4A373] font-bold	">All</button>
        </Link>
        <Link href={"/blog/design"}>
          <button className="text-xs text-[#495057] font-bold	">Design</button>
        </Link>
        <Link href={"/travel"}>
          <button className="text-xs text-[#495057] font-bold	">Travel</button>
        </Link>
        <Link href={"/fashion"}>
          <button className="text-xs text-[#495057] font-bold	">Fashion</button>
        </Link>
        <Link href={"/technology"}>
          <button className="text-xs text-[#495057] font-bold	">
            Technology
          </button>
        </Link>
        <Link href={"/branding"}>
          <button className="text-xs text-[#495057] font-bold	">Branding</button>
        </Link>
      </div>
      <button
        className="text-xs text-[#495057] font-bold	"
        onClick={() => router.push("/Blogjump")}
      >
        View all
      </button>
    </div>
  );
}
