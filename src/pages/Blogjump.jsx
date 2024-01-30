import Blog from "@/components/Blog";
import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Blogjump = ({ posts3 }) => {
  return (
    <div className="flex flex-col gap-[100px]">
      <div className="m-auto w-[1917px] flex ">
        <Header />
      </div>
      <p className="m-auto flex  w-[1216px]">
        All blog post
      </p>
      <div className="flex m-auto gap-5 w-[1216px] flex-wrap">
        {posts3.map((blog) => (
          <Blog
            title={blog.title}
            url={blog.cover_image}
            date={new Date(blog.published_at).toLocaleDateString()}
            name={blog.user.name}
            // profile={blog.user.profile_image_90}
          />
        ))}
      </div>
      <div className="m-auto w-[1216px] h-[236px] ">
        <Footer className="" />
      </div>
    </div>
  );
};

export const getStaticProps = async () => {
  const Blog = await fetch("https://dev.to/api/articles?per_page=15&top=1");
  const posts3 = await Blog.json();

  return {
    props: {
      posts3,
    },
  };
};

export default Blogjump;
