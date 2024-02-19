import Header from "./Header";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <div className=" gap-[50px] flex flex-col  m-auto  sm:flex sm:flex-col sm:justify-center  sm:items-center sm:gap-[100px] ">
      <div>
        <Header />
      </div>
      <main>{children}</main>

      <Footer />
    </div>
  );
}
