import Image from "next/image";
import Card from "@/components/Card";
import Highligh from "@/components/Highligh";
import Header from "@/components/Header";

export default function Home(props) {
  const { posts } = props;
  console.log(posts);
  return (
    <>
      <Header />
      <div className="flex flex-col gap-5">
        {posts.map((e) => (
          <Highligh url={e.social_image} />
        ))}
        <div className="flex  gap-6 m-auto justify-center items-center">
          {posts.map((e) => (
            <Card title={e.title} url={e.social_image} />
          ))}
        </div>
      </div>
    </>
  );
}

export const getStaticProps = async () => {
  const res = await fetch("https://dev.to/api/articles?top-2&per_page=4");
  const posts = await res.json();

  return {
    props: {
      posts,
    },
  };
};
