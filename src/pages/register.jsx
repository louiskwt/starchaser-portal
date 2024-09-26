import {useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import {useAuth} from "../hooks";

export const RegisterPage = () => {
  const {registerWithEmail, setUser} = useAuth();
  const navigate = useNavigate();
  const [registerForm, setRegisterForm] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [errorMessage, setErrorMessage] = useState(null);

  const handleInutChange = (fieldName, value) => {
    const updatedForm = registerForm;
    updatedForm[fieldName] = value;
    setRegisterForm(updatedForm);
  };

  const handleRegister = async () => {
    try {
      if (registerForm.password.length < 8) throw Error("Password has to be 8 characters long");

      if (registerForm.password === registerForm.confirmPassword) {
        const {email, password} = registerForm;
        const user = await registerWithEmail(email, password);
        setUser(user);
        navigate("/course");
      } else {
        throw Error("Please ensure that both passwords match exactly.");
      }
    } catch (error) {
      setErrorMessage(error.message.replace("Firebase: ", "Oops! "));
    }
  };

  return (
    <>
      <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight ">Register an account</h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm text-secondary text-center">{errorMessage}</div>
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <div className="space-y-6">
            <label className="block form-control w-full ">
              <div className="label">
                <span className="label-text">Email</span>
              </div>
              <input type="text" placeholder="Type here" name="email" className="input input-bordered w-full" onChange={(e) => handleInutChange(e.target.name, e.target.value)} />
            </label>
            <label className="block form-control w-full ">
              <div className="label">
                <span className="label-text">Password</span>
              </div>
              <input type="password" placeholder="Type here" name="password" className="input input-bordered w-full" onChange={(e) => handleInutChange(e.target.name, e.target.value)} />
            </label>
            <label className="block form-control w-full ">
              <div className="label">
                <span className="label-text">Confirm Password</span>
              </div>
              <input type="password" placeholder="Type here" name="confirmPassword" className="input input-bordered w-full" onChange={(e) => handleInutChange(e.target.name, e.target.value)} />
            </label>

            <div>
              <button onClick={() => handleRegister()} className="btn flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-lg font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                Register
              </button>
            </div>

            <p className="mt-10 text-center text-xl text-white">
              Have an account or want to login with Google? Login{" "}
              <Link to="/login" className="text-primary">
                here
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
