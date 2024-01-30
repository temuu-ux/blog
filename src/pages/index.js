import Image from "next/image";
import Card from "@/components/Card";
import Highligh from "@/components/Highligh";
import Header from "@/components/Header";
import Blog from "@/components/Blog";
import Footer from "@/components/Footer";

export default function Home(props) {
  const { posts1, posts2, posts3 } = props;
  console.log(posts1, "posts1");
  console.log(posts2);
  console.log(posts3, "hi");
  return (
    <div className="flex flex-col gap-[100px]">
      <div className="m-auto w-[1917px] flex ">
        <Header />
      </div>
      <div className="flex flex-col m-auto ">
        {posts1.map((highligh) => (
          <Highligh
            description={highligh.description}
            url={highligh.social_image}
            date={new Date(highligh.created_at).toLocaleDateString()}
          />
        ))}
      </div>
      <div className="flex  gap-6 m-auto justify-center items-center">
        {posts2.map((card) => (
          <Card title={card.title} url={card.cover_image} />
        ))}
      </div>
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
}

export const getStaticProps = async () => {
  const Highligh = await fetch("https://dev.to/api/articles?per_page=1&top=1");
  const posts1 = await Highligh.json();

  const Card = await fetch("https://dev.to/api/articles?per_page=4&top=1");
  const posts2 = await Card.json();

  const Blog = await fetch("https://dev.to/api/articles?per_page=15&top=1");
  const posts3 = await Blog.json();

  return {
    props: {
      posts1,
      posts2,
      posts3,
    },
  };
};
