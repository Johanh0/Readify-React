// Import React Functionalities
import { Link } from "react-router-dom";
const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="flex flex-col justify-center items-center gap-20 text-center w-full mx-auto px-10 py-20 text-white bg-black">
      <section className="flex flex-col gap-5 max-w-[1600px]">
        <p className=" text-gray-300 text-2xl">
          Book your next great experience.
        </p>
        <h3 className=" text-9xl font-bold">Get in Touch!</h3>
        {/* <Link>
            <Button>Contact Us</Button>
          </Link> */}
        <p className=" text-gray-300">&copy; {`${currentYear} Readify`}</p>
      </section>
      <section className="flex justify-between py-10 w-full border-t border-gray-800 text-xl max-w-[1600px]">
        <div>
          <p>Readify</p>
        </div>
        <div>
          <ul className="flex items-center gap-10">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/">eBook</Link>
            </li>
            <li>
              <Link to="/">Contac Us</Link>
            </li>
          </ul>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
