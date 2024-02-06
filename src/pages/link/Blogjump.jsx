import Blog from "@/components/Blog";
import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import AllLink from "@/pages/link/index.js";
import { useEffect, useState } from "react";

const Blogjump = ({ posts3 }) => {
  // const [articles, setArticles] = useState([]);
  // useEffect(() => {
  //   async function getArticle() {
  //     const res = await fetch("http://localhost:4000/api/blogjump");
  //     const jump = await res.json();
  //     console.log("isuhosuvgb", setArticles);
  //     setArticles(jump);
  //   }
  //   getArticle();
  // }, []);

  return (
    <Link href={`/blog/article/id`}>
      {" "}
      <div className="flex flex-col w-[1930px] m-auto gap-[100px]">
        <div className="flex flex-col gap-[100px]">
          <div className="flex m-auto gap-5 w-[1216px] flex-wrap justify-between py-5">
            <p className="text-2xl text-[#181A2A] font-bold">All post</p>
            <AllLink />
            <div className="flex m-auto gap-5 w-[1216px] flex-wrap">
              {/* <p>{articles.title}</p>  */}
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
    </Link>
  );
};

export async function getServerSideProps() {
  const Blog = await fetch("http://localhost:4000/api/blogjump");
  const posts3 = await Blog.json();

  return {
    props: {
      posts3,
    },
  };
}

export default Blogjump;
