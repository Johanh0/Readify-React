// Import Components
import Header from "../components/Header";
import Main from "../components/Main";
import ProductSlider from "../components/ProductSlider";
import ProductCard from "../components/ProductCard";
import Footer from "../components/Footer";
const Home = () => {
  // Empty data to simulate products from the database
  const emptyData = ["", "", "", "", "", "", "", "", "", "", "", ""];
  return (
    <>
      <Header />
      <Main>
        <section className="flex justify-between items-center gap-5 w-full h-[600px]">
          <div className=" flex-1">
            <h1 className=" text-8xl font-bold">
              Immerse yourself in a world of words.
            </h1>
            <p className=" text-4xl text-gray-400">Read anytime, anywhere.</p>
          </div>
          <div className="flex-1 flex justify-center">
            <ProductSlider />
          </div>
        </section>
        <section>
          <div className="flex flex-col gap-20">
            <div>
              <h2 className="text-center text-4xl">Best Seller Books</h2>
            </div>
            <div className="grid grid-cols-4 gap-x-45 gap-y-20">
              {emptyData.map((ebook, index) => (
                <ProductCard
                  key={index}
                  title="The Psychology of Money"
                  author="Morgan Housel "
                />
              ))}
            </div>
          </div>
        </section>
      </Main>
      <Footer />
    </>
  );
};

export default Home;
