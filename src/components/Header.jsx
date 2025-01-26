// Import React Functionalities
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../App";

// Import Components
import Search from "./Search";
import SimpleButton from "./buttons/SimpleButton";

const Header = () => {
  const { signedIn } = useContext(Context);

  const [menu, setMenu] = useState(false);
  return (
    <header className="  max-w-[1600px] w-full mx-auto p-10 border-b border-gray-300">
      <nav className="flex justify-between items-center">
        <div>
          <Link className=" font-bold" to="/">
            Readify
          </Link>
        </div>
        <div>
          <Search />
        </div>
        <div>
          {signedIn ? (
            <div className="flex gap-3 items-center cursor-pointer">
              <div>
                <img
                  src=""
                  alt=""
                  className=" w-[30px] h-[30px] bg-red-300 rounded-full"
                />
              </div>
              <div>
                <p className=" text-sm font-bold">Johan Herrera</p>
              </div>
            </div>
          ) : (
            <Link to="/auth">
              <SimpleButton>Sign in</SimpleButton>
            </Link>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
