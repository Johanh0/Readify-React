// Import React Functionalities
import { Link } from "react-router-dom";
import SimpleButton from "./buttons/SimpleButton";
const ProductCard = ({ imgPath, title, author }) => {
  return (
    <article className=" cursor-pointer">
      <div>
        <img
          src={`http://localhost:3000/ebook-covers/${imgPath}`}
          alt={`${title} cover ebook imagen`}
          loading="lazy"
        />
      </div>
      <div className="text-center">
        <h6 className=" text-xl font-bold max-w-xs truncate">{title}</h6>
        <p className=" text-gray-400">{author}</p>
      </div>
    </article>
  );
};

export default ProductCard;
