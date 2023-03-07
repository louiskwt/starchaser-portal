import { useState } from "react";
import { useTranslation } from "react-i18next";
import { FaGoogle, FaSignInAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import auth from "../assets/auth.svg";
import { useAuth } from "../context/AuthContext";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const { signInWithEmail, signInWithGoogle, resetPassword } = useAuth();
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();

  return (
    <section className="h-screen mb-4">
      <div className="container px-6 py-12 h-full">
        <div className="flex justify-center items-center flex-wrap h-full g-6 text-gray-800">
          <div className="hidden lg:block md:w-10/12 lg:w-6/12 mb-12 md:mb-0">
            <img src={auth} className="h-96 w-2/3" />
          </div>
          <div className="md:w-8/12 lg:w-5/12 lg:ml-20">
            <h1 className="text-3xl text-white text-center font-semibold mb-8">
              {t("login")}
            </h1>
            <form>
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
                  className="form-control block w-full px-4 py-2 text-xl font-normal text-white bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="flex justify-between items-center mb-6">
                <div className="form-group form-check mr-4">
                  <input
                    id="rememberMe"
                    type="checkbox"
                    value=""
                    className="w-4 h-4 text-white bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                  ></input>

                  <label
                    className="form-check-label inline-block text-white"
                    htmlFor="rememberMe"
                  >
                    Remember me
                  </label>
                </div>
                <a
                  href="#!"
                  onClick={() => {
                    resetPassword(email);
                  }}
                  className="text-white hover:text-blue-300 focus:text-blue-700 active:text-blue-800 duration-200 transition ease-in-out"
                >
                  Forgot password?
                </a>
              </div>

              <button
                type="submit"
                className="inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg disabled:bg-slate-400 transition duration-150 ease-in-out w-full"
                data-mdb-ripple="true"
                data-mdb-ripple-color="light"
                disabled={email === "" || password === "" || submitting}
                onClick={(e) => {
                  e.preventDefault();
                  const res = signInWithEmail(email, password);
                  setSubmitting(true);
                  res
                    .then((success) => {
                      if (!success) {
                        setSubmitting(false);
                      }
                    })
                    .catch((err) => {
                      setSubmitting(false);
                      console.log(err);
                    });
                }}
              >
                Login
              </button>

              <div className="flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5">
                <p className="text-center text-white font-semibold mx-4 mb-0">
                  OR
                </p>
              </div>

              <button
                className="px-7 py-3 text-white bg-red-600 font-medium text-sm leading-snug uppercase rounded shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full flex justify-center items-center mb-3 disabled:bg-slate-400"
                data-mdb-ripple="true"
                data-mdb-ripple-color="light"
                disabled={submitting}
                onClick={(e) => {
                  e.preventDefault();
                  setSubmitting(true);
                  signInWithGoogle();
                  setTimeout(() => {
                    setSubmitting(false);
                  }, 5000);
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
                  navigate("/signup");
                }}
              >
                <FaSignInAlt className="mr-4" />
                Continue to Sign Up
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoginPage;
