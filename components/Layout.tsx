import Header from "./Header";
import Footer from "./Footer";

export default function RightCorner({ children }) {
  return (
    <>
      <Header />
      <main className="pt-20">{children}</main>
      <Footer />
    </>
  );
}
