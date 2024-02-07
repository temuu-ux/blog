import Link from "next/link";
import { useRouter } from "next/router";

export default function AllLink() {
  const router = useRouter();
  return (
    <div className="flex items-cemter justify-between w-[1216px]">
      <div className="flex gap-5">
        <Link href={"/link/Blogjump"}>
          <button className="text-xs text-[#495057] hover:text-[#D4A373] font-bold	">
            All
          </button>
        </Link>
        <Link href={"/blog/design"}>
          <button className="text-xs text-[#495057] hover:text-[#D4A373] font-bold	">
            Design
          </button>
        </Link>
        <Link href={"/blog/travel"}>
          <button className="text-xs text-[#495057] hover:text-[#D4A373] font-bold	">
            Travel
          </button>
        </Link>
        <Link href={"/blog/fashion"}>
          <button className="text-xs text-[#495057] hover:text-[#D4A373] font-bold	">
            Fashion
          </button>
        </Link>
        <Link href={"/blog/technology"}>
          <button className="text-xs text-[#495057] hover:text-[#D4A373] font-bold	">
            Technology
          </button>
        </Link>
        <Link href={"/blog/branding"}>
          <button className="text-xs text-[#495057] hover:text-[#D4A373] font-bold	">
            Branding
          </button>
        </Link>
      </div>
      <button
        className="text-xs text-[#495057] font-bold hover:text-[#D4A373] 	"
        onClick={() => router.push("/link/Blogjump")}
      >
        View all
      </button>
    </div>
  );
}
