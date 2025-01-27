// Import React Functionalities
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
// Import Components
import Header from "../components/Header";
import Main from "../components/Main";
import Footer from "../components/Footer";
import SimpleButton from "../components/buttons/SimpleButton";
// Import Utils
import { searchQuery } from "../utils/searchQuery";

const Product = () => {
  // Get the id from the URL
  const { id } = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    async function fetchProduct() {
      const ebook = await searchQuery(id);
      console.log(ebook);
      setProduct(ebook[0]);
    }
    fetchProduct();
  }, [id]);
  return (
    <>
      <Header />
      <Main>
        <section className="flex items-center justify-between gap-20">
          <div>
            <img
              src={`http://localhost:3000/ebook-covers/${product.cover_image_url}`}
              alt={`${product.title} cover ebook imagen`}
              loading="lazy"
              className=" w-100"
            />
          </div>
          <div className="flex flex-1 flex-col gap-10  ">
            <h1 className=" text-6xl font-bold max-w-[750px]">
              {product.title}
            </h1>
            <p className=" text-2xl">
              <span className="italic">By</span>{" "}
              <span className=" font-bold">{product.author}</span>
            </p>
            <p className="max-w-[750px] text-lg">{product.description}</p>
            <div className=" flex items-center gap-20">
              <p>
                <span className=" font-bold">Format:</span> {product.format}
              </p>
              <p>
                <span className=" font-bold">Category:</span> {product.category}
              </p>
              <p>
                <span className=" font-bold">Language:</span> {product.language}
              </p>
            </div>
            <div>
              <SimpleButton>Buy eBook</SimpleButton>
            </div>
          </div>
        </section>
      </Main>
      <Footer />
    </>
  );
};

export default Product;
