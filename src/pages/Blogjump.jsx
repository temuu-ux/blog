import Blog from "@/components/Blog";
import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

const Blogjump = ({ posts3 }) => {
  return (
    <div className="flex flex-col w-[1930px] m-auto gap-[100px]">
      <div className="">
        <Header />
      </div>

      <div className="flex flex-col gap-[100px]">
        <div className="flex m-auto gap-5 w-[1216px] flex-wrap justify-between py-5">
          <p className="text-2xl text-[#181A2A] font-bold">All post</p>
          <div className="flex items-cemter justify-between w-[1216px]">
            <div className="flex gap-5">
              <Link href={"/Blogjump"}>
                <button className="text-xs text-[#D4A373] font-bold	">
                  All
                </button>
              </Link>
              <Link href={"/blog/design"}>
                <button className="text-xs text-[#495057] font-bold	">
                  Design
                </button>
              </Link>
              <Link href={"/travel"}>
                <button className="text-xs text-[#495057] font-bold	">
                  Travel
                </button>
              </Link>
              <Link href={"/fashion"}>
                <button className="text-xs text-[#495057] font-bold	">
                  Fashion
                </button>
              </Link>
              <Link href={"/technology"}>
                <button className="text-xs text-[#495057] font-bold	">
                  Technology
                </button>
              </Link>
              <Link href={"/branding"}>
                <button className="text-xs text-[#495057] font-bold	">
                  Branding
                </button>
              </Link>
            </div>
            <button
              className="text-xs text-[#495057] font-bold	"
              onClick={() => router.push("/Blogjump")}
            >
              View all
            </button>
          </div>
          <div className="flex m-auto gap-5 w-[1216px] flex-wrap">
            {posts3.map((blog) => (
              <Blog
                aData={blog}
                tag={blog.tag_list[0]}
                // title={blog.title}
                // url={blog.cover_image}
                // date={new Date(blog.published_at).toLocaleDateString()}
                // name={blog.user.name}
                // tag={blog.tag_list[0]}
                // profile={blog.user.profile_image_90}
              />
            ))}
          </div>
        </div>
        <button className="flex m-auto border justify-center items-center w-[123px] h-12 px-3 py-5">
          Load More
        </button>
      </div>
      <div className="m-auto w-[1216px] h-[236px] ">
        <Footer className="" />
      </div>
    </div>
  );
};

export async function getServerSideProps(context) {
  const Blog = await fetch("https://dev.to/api/articles?per_page=15&top=1");
  const posts3 = await Blog.json();

  return {
    props: {
      posts3,
    },
  };
}

export default Blogjump;
