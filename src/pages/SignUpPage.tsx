import { useState } from "react";
import { FaArrowLeft, FaGoogle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import auth from "../assets/auth.svg";
import { useAuth } from "../context/AuthContext";

const SignUpPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const { signUp, signInWithGoogle } = useAuth();
  const navigate = useNavigate();

  return (
    <section className="h-screen mb-4">
      <div className="container px-6 py-12 h-full">
        <div className="flex justify-center items-center flex-wrap h-full g-6 text-gray-800">
          <div className="md:w-10/12 lg:w-6/12 mb-12 md:mb-0">
            <img src={auth} className="h-96 w-2/3" />
          </div>
          <div className="md:w-8/12 lg:w-5/12 lg:ml-20">
            <h1 className="text-3xl text-white text-center font-semibold mb-8">
              Sign Up
            </h1>
            <form>
              <div className="mb-6">
                <input
                  type="email"
                  name="email"
                  className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  placeholder="User Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="mb-6">
                <input
                  type="email"
                  name="email"
                  className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  placeholder="Email Address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="mb-6">
                <input
                  type="password"
                  className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              <button
                type="submit"
                className="inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out w-full"
                data-mdb-ripple="true"
                data-mdb-ripple-color="light"
                onClick={(e) => {
                  e.preventDefault();
                  signUp(email, password, name);
                }}
              >
                Sign Up
              </button>
              <div className="flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5">
                <p className="text-center text-white font-semibold mx-4 mb-0">
                  OR
                </p>
              </div>

              <button
                className="px-7 py-3 text-white bg-red-600 font-medium text-sm leading-snug uppercase rounded shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full flex justify-center items-center mb-3"
                data-mdb-ripple="true"
                data-mdb-ripple-color="light"
                onClick={(e) => {
                  e.preventDefault();
                  signInWithGoogle();
                }}
              >
                <FaGoogle className="mr-5" />
                Continue with Google
              </button>
              <button
                type="submit"
                className="px-7 py-3 text-white bg-gray-600 font-medium text-sm leading-snug uppercase rounded shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full flex justify-center items-center mb-3"
                data-mdb-ripple="true"
                data-mdb-ripple-color="light"
                onClick={(e) => {
                  e.preventDefault();
                  navigate("/login");
                }}
              >
                <FaArrowLeft className="mr-8" />
                Go back to Log in
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignUpPage;
