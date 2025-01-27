// Import
import { Link } from "react-router-dom";
// Import Components
import ProductCard from "./ProductCard";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-creative";
// import required modules
import { EffectCreative } from "swiper/modules";
const ProductSlider = ({ data }) => {
  // Empty data to simulate products from the database
  return (
    <Swiper
      grabCursor={true}
      effect={"creative"}
      creativeEffect={{
        prev: {
          shadow: false,
          translate: ["-120%", 0, -500],
        },
        next: {
          shadow: false,
          translate: ["120%", 0, -500],
        },
      }}
      modules={[EffectCreative]}
      className=" w-70 h-fit"
    >
      {data.map((ebook) => (
        <SwiperSlide key={ebook.ebook_id}>
          <Link to={`/product/${ebook.ebook_id}`}>
            <ProductCard
              imgPath={ebook.cover_image_url}
              key={ebook.ebook_id}
              title={ebook.title}
              author={ebook.author}
            />
          </Link>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ProductSlider;
