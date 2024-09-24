import {Link, useRouteError} from "react-router-dom";

export const ErrorPage = () => {
  const error = useRouteError();
  console.error(error);

  return (
    <div className="h-screen w-screen flex justify-center items-center">
      <div className="card bg-neutral text-neutral-content w-96">
        <div className="card-body items-center text-center">
          <h2 className="card-title text-xl">Oops!</h2>
          <p>Sorry, an unexpected error has occurred.</p>

          <Link to="/">
            <button className="btn btn-primary ">Go Back </button>
          </Link>
        </div>
      </div>
    </div>
  );
};
