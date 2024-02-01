import Header from "./Header";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <div className=" flex flex-col w-[1930px] m-auto gap-[100px]">
      <div>
        <Header />
      </div>
      <main>{children}</main>
      <Footer />
    </div>
  );
}
