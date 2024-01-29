import Image from "next/image";

export default function Home(props) {
  console.log(props.posts);
  return (
    <div>
      <p>hello</p>
      <p>{props.posts[1].title}</p>
      <p>{props.posts[1].cover_image}</p>
      {/* <Image src="next.svg" width={200} height={200} alt="Pic" /> */}

      {/* <img src={props.posts[3].cover_image}></img> */}
    </div>
  );
}

export const getStaticProps = async () => {
  const res = await fetch("https://dev.to/api/articles?collection_id=99");
  const posts = await res.json();

  const someData = "someData";

  return {
    props: {
      posts,
    },
  };
};
