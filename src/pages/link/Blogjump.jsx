import Blog from "@/components/Blog";
import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import AllLink from "@/pages/link/index.js";

const Blogjump = ({ posts3 }) => {
  return (
    <div className="flex flex-col w-[1930px] m-auto gap-[100px]">
      <div className="flex flex-col gap-[100px]">
        <div className="flex m-auto gap-5 w-[1216px] flex-wrap justify-between py-5">
          <p className="text-2xl text-[#181A2A] font-bold">All post</p>
          <AllLink />
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
    </div>
  );
};

export async function getServerSideProps() {
  const Blog = await fetch("https://dev.to/api/articles?per_page=15&top=5");
  const posts3 = await Blog.json();

  return {
    props: {
      posts3,
    },
  };
}

export default Blogjump;
