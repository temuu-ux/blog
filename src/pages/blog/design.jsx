import Blog from "@/components/Blog";

export const getServerSideProps = async () => {
  const res = await fetch(
    "https://dev.to/api/articles?per_page=15&top=1&tag=design"
  );
  const data = await res.json();

  return {
    props: { data },
  };
};

export default function page({ data }) {
  console.log("logging data from design page", data[0].url);
  return (
    <div>
      {data.map((aData) => {
        return <Blog aData={aData} tag="Design" />;
      })}
    </div>
  );
}
