// Import React Functionalities
import { useState, useContext, useEffect } from "react";
import { Context } from "../App";

// Import Components
import Header from "../components/Header";
import Main from "../components/Main";
import Footer from "../components/Footer";
import SimpleButton from "../components/buttons/SimpleButton";
const Contact = () => {
  const { signedIn, user } = useContext(Context);

  const [firstName, setFirstName] = useState(signedIn ? user.first_name : "");
  const [lastName, setLastName] = useState(signedIn ? user.last_name : "");
  const [email, setEmail] = useState(signedIn ? user.email : "");
  const [message, setMessage] = useState("");
  const [isValid, setIsValid] = useState(false);

  const handleCheckInput = (value, setState) => {
    setState(value);

    if (
      firstName.length < 1 ||
      lastName.length < 1 ||
      email.length < 8 ||
      message.length < 10
    ) {
      setIsValid(false);
      return;
    }

    setIsValid(true);
  };
  return (
    <>
      <Header />
      <Main>
        <section className="flex justify-center items-center flex-col gap-10">
          <div>
            <h1 className=" text-9xl font-bold">Get in touch</h1>
          </div>
          <div className="flex flex-col gap-10">
            <div className=" text-center">
              <h6 className=" text-4xl font-medium">Send a Message</h6>
            </div>

            <form
              action=""
              className="max-w-[320px] w-full flex flex-col gap-5"
            >
              <div className="flex flex-col gap-5">
                <div className="flex gap-3">
                  <div className="flex flex-col gap-2">
                    <label
                      className=" cursor-pointer text-sm text-gray-600 font-medium"
                      htmlFor="contact-firstName"
                    >
                      First Name
                    </label>
                    <input
                      id="contact-firstName"
                      type="text"
                      className=" w-full py-2 px-2 bg-gray-100 rounded-sm border border-gray-300 outline-none"
                      // onChange={(e) => handleFirstName(e.target.value)}
                      value={firstName}
                      onChange={(e) =>
                        handleCheckInput(e.target.value, setFirstName)
                      }
                      required
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label
                      className=" cursor-pointer text-sm text-gray-600 font-medium"
                      htmlFor="contact-lastName"
                    >
                      Last Name
                    </label>
                    <input
                      id="contact-lastName"
                      type="text"
                      className=" w-full py-2 px-2 bg-gray-100 rounded-sm border border-gray-300 outline-none"
                      // onChange={(e) => handleLastName(e.target.value)}
                      value={lastName}
                      onChange={(e) =>
                        handleCheckInput(e.target.value, setLastName)
                      }
                      required
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-2 w-full">
                  <label
                    className=" cursor-pointer text-sm text-gray-600 font-medium"
                    htmlFor="contact-email"
                  >
                    Email
                  </label>
                  <input
                    id="contact-email"
                    type="text"
                    className=" w-full py-2 px-2 bg-gray-100 rounded-sm border border-gray-300 outline-none"
                    value={email}
                    onChange={(e) => handleCheckInput(e.target.value, setEmail)}
                    required
                  />
                </div>
                <div className="flex flex-col gap-2 w-full">
                  <label
                    className=" cursor-pointer text-sm text-gray-600 font-medium"
                    htmlFor="contact-message"
                  >
                    Message
                  </label>

                  <textarea
                    required
                    value={message}
                    id="contact-message"
                    onChange={(e) =>
                      handleCheckInput(e.target.value, setMessage)
                    }
                    className=" w-full py-2 px-2 bg-gray-100 rounded-sm border border-gray-300 outline-none min-h-[150px] max-h-[150px]"
                  ></textarea>

                  <div className="flex justify-center mt-5 ">
                    <SimpleButton
                      cursorType={
                        isValid ? "cursor-pointer" : "cursor-not-allowed"
                      }
                    >
                      Send Message
                    </SimpleButton>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </section>
      </Main>
      <Footer />
    </>
  );
};

export default Contact;
