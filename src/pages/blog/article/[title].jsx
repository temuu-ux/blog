// import { Navigationbar, BlogCard } from "@/components";
// import { useState } from "react";
// import Link from "next/link";
// import { useRouter } from "next/router";

// const title = ["All", "design", "travel", "fashion", "technology", "branding"];
// const Page = ({ data }) => {
//   const [articles, setArticles] = useState(data);
//   const [pageNumber, setPageNumber] = useState(1);
//   const router = useRouter();
//   const id = router.query;

//   async function loadMoreHandler() {
//     const response = await fetch(
//       `https://dev.to/api/articles?tag=${id}&per_page=6&page=${pageNumber}`
//     );
//     const datas = await response.json();
//     setArticles([...articles, ...datas]);
//     setPageNumber(pageNumber + 1);
//   }

//   return (
//     <div className="w-[1220px] m-auto flex flex-col gap-8">
//       <h2 className="font-bold text-2xl text-[#181A2A]">All Blog Post</h2>
//       <div className="flex flex-col gap-8 font-bold text-[#495057]">
//         <div className="flex gap-5">
//           {title.map((title) => (
//             <Link href={`/blog/${title}`}>{title}</Link>
//           ))}
//         </div>
//       </div>
//       <div className="flex flex-wrap  gap-5">
//         {articles.map((blog) => (
//           <BlogCard blog={blog} id={blog.id} />
//         ))}
//       </div>
//       <div className="m-auto">
//         <button
//           className="border border-[#696A75] rounded-lg py-2.5 px-2.5 text-[#696A75]"
//           onClick={loadMoreHandler}
//         >
//           Load More
//         </button>
//       </div>
//     </div>
//   );
// };
// export default Page;

// export async function getServerSideProps(context) {
//   const { title } = context.query;

//   const response = await fetch(
//     `https://dev.to/api/articles?tag=${title}&per_page=15`
//   );
//   const data = await response.json();
//   console.log(data);
//   return {
//     props: {
//       data,
//     },
//   };
// }
