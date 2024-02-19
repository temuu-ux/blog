import Header from "./Header";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <div className="py-5 gap-[50px] flex flex-col  m-aut0 sm:w-[100%] sm:flex sm:flex-col sm:justify-center  sm:items-center sm:gap-[100px] ">
      <div>
        <Header />
      </div>
      <main>{children}</main>

      <Footer />
    </div>
  );
}
