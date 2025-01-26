// Import Components
import ProductCard from "./ProductCard";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-creative";
// import required modules
import { EffectCreative } from "swiper/modules";
const ProductSlider = () => {
  // Empty data to simulate products from the database
  const emptyData = ["", "", "", "", "", "", "", "", "", "", "", ""];
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
      {emptyData.map((ebook, index) => (
        <SwiperSlide key={index}>
          <ProductCard
            title="The Psychology of Money"
            author="Morgan Housel "
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ProductSlider;
