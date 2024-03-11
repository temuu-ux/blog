import Image from "next/image";
import Card from "@/components/Card";
import Highligh from "@/components/Highligh";

import Blog from "@/components/Blog";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import React from "react";

export default function Home(props) {
  const router = useRouter();
  const { posts1, posts2, posts3 } = props;

  // console.log(posts1, "posts1");
  // console.log(posts2);
  // console.log(posts3, "hi");

  return (
    <div className="flex flex-col gap-[50px]   sm:flex sm:flex-col sm:m-auto sm:gap-[100px] sm:w-[1231px]">
      <div className=" hidden sm:inline-flex ">
        {posts1.map((highligh) => (
          <Highligh
            description={highligh.description}
            url={highligh.social_image}
            date={new Date(highligh.created_at).toLocaleDateString()}
            tag={highligh.tag_list[0]}
          />
        ))}
      </div>
      <div className=" m-auto sm:m-0">
        <p className="text-[#1A1A1A] cursor-pointer hover:scale-y-110 ease-in-out duration-500 hover:text-[#D4A373] not-italic  font-semibold flex text-center justify-start m-auto sm:flex  text-2xl sm:text-[#181A2A] sm:font-bold">
          Trending
        </p>
        <div className="flex justify-around items-center flex-col sm:flex sm:flex-row  sm:justify-between sm:w-[100%]">
          {posts2.map((card) => (
            <Card aData={card} />
          ))}
        </div>
      </div>

      <div className="m-auto sm:flex sm:flex-col  sm:gap-5  sm:flex-wrap  ">
        <div className=" justify-start flex sm:flex sm:flex-col sm:justify-between text-center  sm:py-5">
          <p className="flex justify-start cursor-pointer text-[#1A1A1A] not-italic   hover:scale-y-110 ease-in-out duration-500 hover:text-[#D4A373]   font-semibold   sm:flex  text-2xl sm:text-[#181A2A] sm:font-bold">
            All blog post
          </p>

          <p
            className="hidden cursor-pointer sm:text-xs sm:text-[#495057] sm:font-bold	 sm:flex sm:justify-end sm:items-center ease-in-out duration-500 hover:text-[#D4A373]"
            onClick={() => router.push("/blog/all")}
          >
            View all
          </p>
        </div>

        <div className="py-8 flex flex-wrap gap-5 justify-center sm:flex  sm:gap-[27px]  sm:flex-wrap">
          {posts3.map((blog) => {
            return (
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
            );
          })}
        </div>
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const Highligh = await fetch("https://dev.to/api/articles?per_page=1&top=1");
  const posts1 = await Highligh.json();

  const Card = await fetch("https://dev.to/api/articles?per_page=4&top=2");
  const posts2 = await Card.json();

  const Blog = await fetch("https://dev.to/api/articles?per_page=15&top=5");
  const posts3 = await Blog.json();

  return {
    props: {
      posts1,
      posts2,
      posts3,
    },
  };
}
