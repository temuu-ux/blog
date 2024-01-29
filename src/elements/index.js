import Highligh from "@/components/Highligh";

export default function Home(props) {
  const { posts } = props;
  return (
    <div className="flex m-auto justify-center items-center">
      
      {posts.map((e) => (
        <Highligh url={e.cover_image} />
      ))}
    </div>
  );
}

export const getStaticProps = async () => {
  const res = await fetch("https://dev.to/api/articles?top2&per_page=1");
  console.log("hi", res);
  const posts = res.json();
  return {
    props: {
      posts,
    },
  };
};
