import Header from "../components/Header";
import Main from "../components/Main";
import ProductCard from "../components/ProductCard";
import Footer from "../components/Footer";

const Catalog = () => {
  const emptyData = ["", "", "", "", "", "", "", "", "", "", "", ""];

  return (
    <>
      <Header />
      <Main>
        <section className="grid grid-cols-4 gap-x-25 gap-y-20">
          {emptyData.map((ebook, index) => (
            <ProductCard
              key={index}
              title="The Psychology of Money"
              author="Morgan Housel "
            />
          ))}
        </section>
      </Main>
      <Footer />
    </>
  );
};

export default Catalog;
