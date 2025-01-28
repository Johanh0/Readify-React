// Import React Functionalities
import { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../App";
// Import Components
import Header from "../components/Header";
import Main from "../components/Main";
import ProductCard from "../components/ProductCard";
import Footer from "../components/Footer";

const Catalog = () => {
  const { searchResult, setSearchResult } = useContext(Context);

  return (
    <>
      <Header />
      <Main>
        <section className="grid grid-cols-4 gap-x-25 gap-y-20 min-h-[400px] h-fit">
          {searchResult?.map((ebook) => (
            <Link key={ebook.ebook_id} to={`/product/${ebook.ebook_id}`}>
              <ProductCard
                imgPath={ebook.cover_image_url}
                key={ebook.ebook_id}
                title={ebook.title}
                author={ebook.author}
              />
            </Link>
          ))}
        </section>
      </Main>
      <Footer />
    </>
  );
};

export default Catalog;
