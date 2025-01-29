// Import React Functionalities
import { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Context } from "../App";
import { setLocalStorage } from "../utils/localStorage";
// Import Components
import Main from "../components/Main";

const Auth = () => {
  const navigate = useNavigate();
  const { signedIn, setSignedIn, user, setUser } = useContext(Context);

  useEffect(() => {
    if (signedIn) {
      navigate("/profile");
    }
  }, []);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [signIn, setSignIn] = useState(true);

  const handleFirstName = (value) => {
    setFirstName(value);
  };

  const handleLastName = (value) => {
    setLastName(value);
  };

  const handleEmail = (value) => {
    setEmail(value);
  };

  const handlePassword = (value) => {
    setPassword(value);
  };

  const handleChangeOfView = () => {
    setFirstName("");
    setLastName("");
    setEmail("");
    setPassword("");
    setSignIn(!signIn);
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/v1/user/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
        mode: "cors",
        credentials: "include",
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Error trying to login");
      }

      const data = await response.json();
      console.log(data);
      setSignedIn(true);
      setLocalStorage("signedIn", true);

      setUser(data);
      setLocalStorage("user", data);
      navigate("/profile");
    } catch {}
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    const first_name = firstName;
    const last_name = lastName;
    try {
      const response = await fetch("/api/v1/user/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ first_name, last_name, email, password }),
        mode: "cors",
        credentials: "include",
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Error trying to create account");
      }

      const data = await response.json();
      setSignedIn(true);
      setLocalStorage("signedIn", true);

      setUser(data);
      setLocalStorage("user", data);
      navigate("/profile");
    } catch {}
  };

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
                  onChange={(e) => handleEmail(e.target.value)}
                  value={email}
                  required
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
                  type="password"
                  placeholder="Enter password"
                  className=" w-full py-2 px-2 bg-gray-100 rounded-sm border border-gray-300 outline-none"
                  onChange={(e) => handlePassword(e.target.value)}
                  value={password}
                  required
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
                    onChange={(e) => handleFirstName(e.target.value)}
                    value={firstName}
                    required
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
                    onChange={(e) => handleLastName(e.target.value)}
                    value={lastName}
                    required
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
                  onChange={(e) => handleEmail(e.target.value)}
                  value={email}
                  required
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
                  type="password"
                  placeholder="Enter password"
                  className=" w-full py-2 px-2 bg-gray-100 rounded-sm border border-gray-300 outline-none"
                  onChange={(e) => handlePassword(e.target.value)}
                  value={password}
                  required
                />
              </div>
            </div>
          )}

          <div className="flex flex-col gap-3">
            <div>
              <p
                onClick={() => handleChangeOfView()}
                className=" text-gray-600 font-bold cursor-pointer"
              >
                {signIn ? "Create an account" : "Already have an account?"}
              </p>
            </div>
            <div>
              <button
                className=" w-full bg-black p-3 text-white font-bold rounded-sm cursor-pointer"
                onClick={
                  signIn ? (e) => handleLogin(e) : (e) => handleSignup(e)
                }
              >
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
