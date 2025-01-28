// Import React Functionalities
import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Context } from "../App";
// Import Components
import Header from "../components/Header";
import Main from "../components/Main";
import SimpleButton from "../components/buttons/SimpleButton";
import ProductCard from "../components/ProductCard";
import Footer from "../components/Footer";
// Import Utils
import { removeLocalStorage } from "../utils/localStorage";

const Profile = () => {
  const navigate = useNavigate();
  const { signedIn, setSignedIn, user, setUser } = useContext(Context);

  useEffect(() => {
    if (!signedIn) {
      navigate("/auth");
    }
  }, []);

  const handleLogout = async () => {
    try {
      const response = await fetch("http://localhost:3000/api/v1/user/logout", {
        method: "POST",
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Error trying to logout");
      }

      setSignedIn(false);
      removeLocalStorage("signedIn");

      setUser(null);
      removeLocalStorage("user");
      navigate("/");
    } catch (error) {}
  };
  return (
    <>
      <Header />
      <Main>
        <section className="flex justify-center items-center flex-col gap-10 w-full h-100">
          <div>
            <img
              src={`http://localhost:3000/profile-img/${user?.profile_image_url}`}
              alt={`${user?.first_name} ${user?.last_name} profile picture`}
              className="w-50 h-50 rounded-full"
            />
          </div>
          <div className="flex flex-col justify-center items-center gap-3 text-center">
            <h2 className=" text-5xl font-bold">
              {user?.first_name} {user?.last_name}
            </h2>

            <p className="text-xl mb-5">{user?.email}</p>
            <div className=" max-w-46">
              <SimpleButton
                cursorType={"cursor-pointer"}
                onClick={handleLogout}
              >
                Log Out
              </SimpleButton>
            </div>
          </div>
        </section>
      </Main>
      <Footer />
    </>
  );
};

export default Profile;
