import {useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import {useAuth} from "../hooks";

export const LoginPage = () => {
  const {loginWithGoogle, loginWithEmail, setUser, checkProfile, setInitialUserProfile, getUserProfile} = useAuth();
  const navigate = useNavigate();
  const [loginForm, setLoginForm] = useState({
    email: "",
    password: "",
  });
  const [errorMessage, setErrorMessage] = useState(null);

  const handleInutChange = (fieldName, value) => {
    const updatedForm = loginForm;
    updatedForm[fieldName] = value;
    setLoginForm(updatedForm);
  };
  const handleGoogleLogin = async () => {
    try {
      const user = await loginWithGoogle();
      const hasUserProfile = await checkProfile(user);
      if (!hasUserProfile) {
        await setInitialUserProfile(user);
      }
      await getUserProfile(user);
      setUser(user);

      navigate("/profile");
    } catch (error) {
      setErrorMessage(error.message.replace("Firebase: ", "Oops! "));
    }
  };

  const handleEmailLogin = async () => {
    try {
      const {email, password} = loginForm;
      const user = await loginWithEmail(email, password);
      const hasUserProfile = await checkProfile(user);
      if (!hasUserProfile) {
        await setInitialUserProfile(user);
      }
      await getUserProfile(user);
      setUser(user);
      navigate("/profile");
    } catch (error) {
      setErrorMessage(error.message.replace("Firebase: ", "Oops! "));
    }
  };
  return (
    <>
      <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight ">Sign in to your account</h2>
        </div>
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm text-secondary text-center">{errorMessage}</div>
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <div className="space-y-6">
            <label className="block form-control w-full ">
              <div className="label">
                <span className="label-text">Email</span>
              </div>
              <input name="email" type="text" placeholder="Type here" onChange={(e) => handleInutChange(e.target.name, e.target.value)} className="input input-bordered w-full" />
            </label>
            <label className="block form-control w-full ">
              <div className="label">
                <span className="label-text">Password</span>
                <Link className="label-text-alt text-red-400" to="/forgotpassword">
                  <span>Forgot Password?</span>
                </Link>
              </div>
              <input name="password" type="password" placeholder="Type here" onChange={(e) => handleInutChange(e.target.name, e.target.value)} className="input input-bordered w-full" />
            </label>

            <div>
              <button onClick={() => handleEmailLogin()} className="btn flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-lg font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                Sign in
              </button>
            </div>
            <div>
              <button
                className="btn flex w-full justify-center rounded-md bg-orange-600 px-3 py-1.5 text-lg font-semibold leading-6 text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                onClick={() => {
                  handleGoogleLogin();
                }}>
                <i className="fa-brands fa-google"></i>
                Sign in With Google
              </button>
            </div>
          </div>

          <p className="mt-10 text-center text-xl text-white">
            Not a member? Register{" "}
            <Link to="/register" className="text-primary">
              {" "}
              here
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};
