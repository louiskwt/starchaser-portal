import {useState} from "react";
import {Link} from "react-router-dom";
import {useAuth, useToast} from "../hooks";

export const ForgotPasswordPage = () => {
  const {resetPassword} = useAuth();
  const [email, setEmail] = useState(null);

  const {showToast} = useToast();

  const handleInutChange = (email) => {
    setEmail(email);
  };
  const handlePasswordReset = async () => {
    try {
      resetPassword(email);
      showToast({
        message: "Reset password email sent!",
        type: "success",
      });
    } catch (error) {
      showToast({
        message: error.message,
        type: "error",
      });
    }
  };

  return (
    <>
      <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight ">Reset your password</h2>
        </div>
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <div className="space-y-6">
            <label className="block form-control w-full ">
              <div className="label">
                <span className="label-text">Email</span>
              </div>
              <input name="email" type="text" placeholder="Type here" onChange={(e) => handleInutChange(e.target.value)} className="input input-bordered w-full" />
            </label>
            <div>
              <button onClick={() => handlePasswordReset()} className="btn flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-lg font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                Send Reset Password Request
              </button>
            </div>
          </div>

          <p className="mt-10 text-center text-xl text-white">
            <Link to="/login" className="text-primary">
              {" "}
              Go Back
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};
