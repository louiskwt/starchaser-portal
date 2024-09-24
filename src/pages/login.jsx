export const LoginPage = () => {
  return (
    <>
      <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight ">Sign in to your account</h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" action="#" method="POST">
            <label className="block form-control w-full ">
              <div className="label">
                <span className="label-text">Email</span>
              </div>
              <input type="text" placeholder="Type here" className="input input-bordered w-full" />
            </label>
            <label className="block form-control w-full ">
              <div className="label">
                <span className="label-text">Password</span>
              </div>
              <input type="password" placeholder="Type here" className="input input-bordered w-full" />
            </label>

            <div>
              <button type="submit" className="btn flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-lg font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                Sign in
              </button>
            </div>
            <div>
              <button type="submit" className="btn flex w-full justify-center rounded-md bg-orange-600 px-3 py-1.5 text-lg font-semibold leading-6 text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                <i className="fa fa-google" aria-hidden="true"></i>
                Sign in With Google
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-xl text-white">Not a member?</p>
        </div>
      </div>
    </>
  );
};
