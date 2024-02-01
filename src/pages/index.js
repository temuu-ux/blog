import Image from "next/image";
import Card from "@/components/Card";
import Highligh from "@/components/Highligh";
import Header from "@/components/Header";
import Blog from "@/components/Blog";
import Footer from "@/components/Footer";
import { useRouter } from "next/router";
import React from "react";

export default function Home(props) {
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
            onClick={() => router.push("/Blogjump")}
          >
            View all
          </button>

          <div className="flex m-auto gap-5 w-[1216px] flex-wrap">
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
  const Highligh = await fetch("https://dev.to/api/articles?per_page=1&top=1");
  const posts1 = await Highligh.json();

  const Card = await fetch("https://dev.to/api/articles?per_page=4&top=3");
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
