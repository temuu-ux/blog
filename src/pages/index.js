import Image from "next/image";
import Card from "@/components/Card";
import Highligh from "@/components/Highligh";

import Blog from "@/components/Blog";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import React from "react";

export default function Home(props) {
  // const [articles, setArticles] = useState();
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

  // console.log(posts1, "posts1");
  // console.log(posts2);
  // console.log(posts3, "hi");

  return (
    <div className="  sm:flex sm:flex-col sm:m-auto sm:gap-[100px] sm:w-[1231px]">
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
      <div className="felx">
        <p className="sm:flex  sm:text-2xl sm:text-[#181A2A] sm:font-bold">
          Trending
        </p>
        <div className="sm:flex  sm:justify-between">
          {posts2.map((card) => (
            <Card
              title={card.title}
              url={card.social_image}
              tag={card.tag_list[0]}
            />
          ))}
        </div>
      </div>
      <div className="sm:flex sm:flex-col ">
        <div className="sm:flex sm:flex-col  sm:gap-5  sm;flex-wrap  ">
          <div className="sm:flex sm:justify-between sm:py-5">
            <p className="sm:text-2xl sm:text-[#181A2A] sm:font-bold">
              All blog post
            </p>

            <button
              className="sm:text-xs sm:text-[#495057] sm:font-bold	 sm:flex sm:justify-center sm:items-end hover:text-[#D4A373]"
              onClick={() => router.push("/blog/all")}
            >
              View all
            </button>
          </div>

          <div className="sm:flex  sm:gap-5  sm:flex-wrap">
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
    </div>
  );
}

export async function getStaticProps() {
  const Highligh = await fetch("https://dev.to/api/articles?per_page=1&top=1");
  const posts1 = await Highligh.json();

  const Card = await fetch("https://dev.to/api/articles?per_page=4&top=4");
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
