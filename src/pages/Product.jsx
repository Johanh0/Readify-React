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
        <section className="flex flex-col-reverse md:flex-row items-center justify-between gap-10 md:gap-20">
          <div>
            <img
              src={`/ebook-covers/${product?.cover_image_url}`}
              alt={`${product?.title} cover ebook imagen`}
              loading="lazy"
              className=" w-100"
            />
          </div>
          <div className="flex flex-1 flex-col gap-7 text-center md:text-start md:gap-10  ">
            <h1 className=" text-6xl font-bold max-w-[750px]">
              {product?.title}
            </h1>
            <p className=" text-2xl">
              <span className="italic">By</span>{" "}
              <span className=" font-bold">{product?.author}</span>
            </p>
            <p className="max-w-[750px] text-lg">{product?.description}</p>
            <div className=" flex items-center justify-center md:justify-start gap-20">
              <p>
                <span className=" font-bold">Format:</span> {product?.format}
              </p>
              <p>
                <span className=" font-bold">Category:</span>{" "}
                {product?.category}
              </p>
              <p>
                <span className=" font-bold">Language:</span>{" "}
                {product?.language}
              </p>
            </div>
            <div className="flex justify-center md:justify-start">
              <SimpleButton cursorType={"cursor-pointer"}>
                Buy eBook
              </SimpleButton>
            </div>
          </div>
        </section>
      </Main>
      <Footer />
    </>
  );
};

export default Product;
