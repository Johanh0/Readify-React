// Import React Functionalities
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../App";

// Import Components
import Search from "./Search";
import SimpleButton from "./buttons/SimpleButton";

const Header = () => {
  const { signedIn, user } = useContext(Context);

  const [menu, setMenu] = useState(false);
  return (
    <header className="  max-w-[1600px] w-full mx-auto p-10 border-b border-gray-300">
      <nav className="flex justify-between items-center flex-col gap-10 md:gap-10 md:flex-row">
        <div>
          <Link className=" text-4xl font-bold" to="/">
            Readify
          </Link>
        </div>
        <div className="w-full md:max-w-[500px]">
          <Search />
        </div>
        <div>
          {signedIn ? (
            <div className="flex gap-3 items-center cursor-pointer">
              <div>
                <Link to="/profile">
                  <img
                    src={`/profile-img/${user?.profile_image_url}`}
                    alt={`${user?.first_name} ${user?.last_name} profile picture`}
                    className=" w-[80px] md:w-[50px] rounded-full"
                  />
                </Link>
              </div>
              <div>
                <Link to="/profile" className="hidden md:block text-sm">
                  {user?.first_name} {user?.last_name}
                </Link>
              </div>
            </div>
          ) : (
            <Link to="/auth">
              <SimpleButton cursorType={"cursor-pointer"}>Sign in</SimpleButton>
            </Link>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
