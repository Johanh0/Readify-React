// Import React Functionalities
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
// Import Components
import Main from "../components/Main";
const Auth = () => {
  const [signIn, setSignIn] = useState(true);
  return (
    <Main>
      <section className="flex w-full h-screen absolute top-0 left-0 justify-center items-center">
        <form action="" className=" max-w-[320px] w-full flex flex-col gap-5">
          <div>
            <Link to="/" className=" text-5xl font-bold">
              Readify.
            </Link>
          </div>

          {signIn ? (
            <div className="flex flex-col gap-5">
              <div className="flex flex-col gap-2 w-full">
                <label
                  className=" cursor-pointer text-sm text-gray-600 font-medium"
                  htmlFor="login-email"
                >
                  Login
                </label>
                <input
                  id="login-email"
                  type="text"
                  placeholder="Enter email"
                  className=" w-full py-2 px-2 bg-gray-100 rounded-sm border border-gray-300 outline-none"
                />
              </div>
              <div className="flex flex-col gap-2 w-full">
                <label
                  className=" cursor-pointer text-sm text-gray-600 font-medium"
                  htmlFor="login-password"
                >
                  Password
                </label>
                <input
                  id="login-password"
                  type="text"
                  placeholder="Enter password"
                  className=" w-full py-2 px-2 bg-gray-100 rounded-sm border border-gray-300 outline-none"
                />
              </div>
            </div>
          ) : (
            <div className="flex flex-col gap-5">
              <div className="flex gap-3">
                <div className="flex flex-col gap-2">
                  <label
                    className=" cursor-pointer text-sm text-gray-600 font-medium"
                    htmlFor="signup-firstName"
                  >
                    First Name
                  </label>
                  <input
                    id="signup-firstName"
                    type="text"
                    placeholder="First Name"
                    className=" w-full py-2 px-2 bg-gray-100 rounded-sm border border-gray-300 outline-none"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label
                    className=" cursor-pointer text-sm text-gray-600 font-medium"
                    htmlFor="signup-lastName"
                  >
                    Last Name
                  </label>
                  <input
                    id="signup-lastName"
                    type="text"
                    placeholder="Last Name"
                    className=" w-full py-2 px-2 bg-gray-100 rounded-sm border border-gray-300 outline-none"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-2 w-full">
                <label
                  className=" cursor-pointer text-sm text-gray-600 font-medium"
                  htmlFor="signup-email"
                >
                  Email
                </label>
                <input
                  id="signup-email"
                  type="text"
                  placeholder="Enter email"
                  className=" w-full py-2 px-2 bg-gray-100 rounded-sm border border-gray-300 outline-none"
                />
              </div>
              <div className="flex flex-col gap-2 w-full">
                <label
                  className=" cursor-pointer text-sm text-gray-600 font-medium"
                  htmlFor="signup-password"
                >
                  Password
                </label>
                <input
                  id="signup-password"
                  type="text"
                  placeholder="Enter password"
                  className=" w-full py-2 px-2 bg-gray-100 rounded-sm border border-gray-300 outline-none"
                />
              </div>
            </div>
          )}

          <div className="flex flex-col gap-3">
            <div>
              <p
                onClick={() => setSignIn(!signIn)}
                className=" text-gray-600 font-bold cursor-pointer"
              >
                {signIn ? "Create an account" : "Already have an account?"}
              </p>
            </div>
            <div>
              <button className=" w-full bg-black p-3 text-white font-bold rounded-sm cursor-pointer">
                {signIn ? "Sign In" : "Create account"}
              </button>
            </div>
          </div>
        </form>
      </section>
    </Main>
  );
};

export default Auth;
