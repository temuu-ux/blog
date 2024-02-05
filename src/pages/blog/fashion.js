import Blog from "@/components/Blog";
import AllLink from "../link";
import React, { useState } from "react";

function Page() {
  const [data, setData] = useState(fashionData);
  co
}

export default async function getServerSideProps() {
  const res = await fetch(
    "https://dev.to/api/articles?tag=fashion&per_page=12"
  );
  const fashionData = await fashion.json();
  return {
    props: { fashionData },
  };
}
