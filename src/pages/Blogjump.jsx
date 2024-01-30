import Blog from "@/components/Blog";
import React from "react";

const Blogjump = ({ posts3 }) => {
  return (
    <div className="flex flex-wrap">
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
