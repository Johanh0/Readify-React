import ebookCover from "../assets/psy-money.png";
const ProductCard = ({ title, author }) => {
  return (
    <article className=" cursor-pointer">
      <div>
        <img src={ebookCover} alt="" loading="lazy" />
      </div>
      <div className="text-center">
        <h6 className=" text-xl font-bold">{title}</h6>
        <p className=" text-gray-400">{author}</p>
      </div>
    </article>
  );
};

export default ProductCard;
