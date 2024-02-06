import Image from "next/image";
import Card from "@/components/Card";
import Highligh from "@/components/Highligh";

import Blog from "@/components/Blog";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import React from "react";

export default function Home(props) {
  const [articles, setArticles] = useState();
  // const [articles2, setArticles2] = useState([]);
  // const [articles3, setArticles3] = useState([]);
  // useEffect(() => {
  //   async function getArticle() {
  //     const res = await fetch("http://localhost:4000/api/highlight");
  //     const data = await res.json();
  //     console.log("res", res);

  //     // const res2 = await fetch("http://localhost:4000/api/card");
  //     // const article2 = await res2.json();

  //     // const res3 = await fetch("http:/localhost:4000/api/blog");
  //     // const article3 = await res3.json();

  //     console.log("logging data:", data);
  //     setArticles(data);
  //     console.log("odsvoso", articles);
  //     // setArticles2(article2);
  //     // setArticles3(article3);
  //   }
  //   getArticle();
  // }, []);

  const router = useRouter();
  const { posts1, posts2, posts3 } = props;
  console.log(posts1, "posts1");
  console.log(posts2);
  console.log(posts3, "hi");

  return (
    <div className="flex flex-col m-auto gap-[100px] ">
      <div className="flex flex-col m-auto ">
        {posts1.map((highligh) => (
          <Highligh
            description={highligh.description}
            url={highligh.social_image}
            date={new Date(highligh.created_at).toLocaleDateString()}
            tag={highligh.tag_list[0]}
          />
        ))}
      </div>
      <div>
        <p className="flex w-[1231px] m-auto text-2xl text-[#181A2A] font-bold">
          Trending
        </p>
        <div className="flex  w-[1231px] gap-6 m-auto justify-center items-center">
          {posts2.map((card) => (
            <Card
              title={card.title}
              url={card.social_image}
              tag={card.tag_list[0]}
            />
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-[100px]">
        <div className="flex m-auto gap-5 w-[1216px] flex-wrap justify-between py-5">
          <p className="text-2xl text-[#181A2A] font-bold">All post</p>

          <button
            className="text-xs text-[#495057] font-bold	"
            onClick={() => router.push("/link/Blogjump")}
          >
            View all
          </button>

          <div className="flex m-auto gap-5 w-[1216px] flex-wrap text-start">
            {posts3.map((blog) => {
              console.log(
                "blog.user.profile_image_90",
                blog.user.profile_image_90
              );
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
        <button className="flex m-auto border justify-center items-center w-[123px] h-12 px-3 py-5">
          Load More
        </button>
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const Highligh = await fetch("http://localhost:4000/api/highlight");
  const posts1 = await Highligh.json();

  const Card = await fetch("http://localhost:4000/api/card");
  const posts2 = await Card.json();

  const Blog = await fetch("http://localhost:4000/api/blog");
  const posts3 = await Blog.json();

  return {
    props: {
      posts1,
      posts2,
      posts3,
    },
  };
}
