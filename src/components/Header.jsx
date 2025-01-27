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
                  src={`http://localhost:3000/profile-img/${user?.profile_image_url}`}
                  alt={`${user?.first_name} ${user?.last_name} profile picture`}
                  className=" w-[30px] h-[30px] rounded-full"
                />
              </div>
              <div>
                <Link to="/profile" className=" text-sm">
                  {user?.first_name} {user?.last_name}
                </Link>
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
