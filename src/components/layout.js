import Header from "./Header";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <div className="w-[320px] felx-col justify-between sm:flex sm:flex-col  m-auto smgap-[100px]">
      <div>
        <Header />
      </div>
      <main>{children}</main>

      <Footer />
    </div>
  );
}
