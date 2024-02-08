import React from "react";
import parse from "html-react-parser";

export default function Page({ data }) {
  console.log("data:", data.body_html);

  return (
    <div className="w-[800px] gap-[32px] m-auto flex flex-col">
      <div className="flex flex-col gap-5">
        <h1 className="text-4xl font-semibold text-[#181A2A]"> {data.title}</h1>
        <div className="flex gap-6 text-[#696A75] ">
          <div className="flex gap-2 align-center text-center justify-center">
            <img
              className="w-7 h-7 rounded-3xl"
              src={data.user.profile_image_90}
              alt=""
            />
            <p>{data.user.name}</p>
          </div>
          <p>{new Date(data.published_at).toLocaleDateString()}</p>
        </div>
      </div>
      <div className="h-[462px]">
        <img src={data.social_image} alt="" />
      </div>
      <div className="flex flex-col gap-4 text-xl font-normal text-[#3B3C4A] h-[1000px] overflow-hidden">
        {parse(data.body_html)}
      </div>
    </div>
  );
}

export const getServerSideProps = async (context) => {
  const { query } = context;
  const { id } = query;
  const res = await fetch(`https://dev.to/api/articles/${id}`);
  const data = await res.json();
  console.log("ssideDate:", data);
  return {
    props: {
      data,
    },
  };
};

// my branch check
