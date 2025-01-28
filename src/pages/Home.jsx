// Import React Functionalities
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// Import Components
import Header from "../components/Header";
import Main from "../components/Main";
import ProductSlider from "../components/ProductSlider";
import ProductCard from "../components/ProductCard";
import Footer from "../components/Footer";
// Import Utils
import { searchQuery } from "../utils/searchQuery";

const Home = () => {
  const [allEbooks, setAllEbooks] = useState([]);
  const [trendingEbooks, setTrendingEbooks] = useState([]);

  useEffect(() => {
    async function fetchTrendingEbooks() {
      const allEbooks = await searchQuery("trending");
      setTrendingEbooks(allEbooks);
    }
    async function fetchAllEbooks() {
      const allEbooks = await searchQuery("all");
      setAllEbooks(allEbooks);
    }
    fetchTrendingEbooks();
    fetchAllEbooks();
  }, []);

  return (
    <>
      <Header />
      <Main>
        <section className="flex flex-col md:flex-row text-center md:text-start justify-between items-center gap-20 md:gap-5 w-full h-fit">
          <div className=" flex-1">
            <h1 className=" text-8xl font-bold">
              Immerse yourself in a world of words.
            </h1>
            <p className=" text-4xl text-gray-400">Read anytime, anywhere.</p>
          </div>
          <div className="flex-1 flex justify-center">
            <ProductSlider data={trendingEbooks} />
          </div>
        </section>
        <section>
          <div className="flex flex-col gap-20">
            <div>
              <h2 className="text-center text-4xl">Best Seller Books</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-25">
              {allEbooks.map((ebook) => (
                <Link key={ebook.ebook_id} to={`/product/${ebook.ebook_id}`}>
                  <ProductCard
                    imgPath={ebook.cover_image_url}
                    key={ebook.ebook_id}
                    title={ebook.title}
                    author={ebook.author}
                  />
                </Link>
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
