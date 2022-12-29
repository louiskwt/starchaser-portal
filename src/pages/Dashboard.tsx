import { useAuth } from "../context/AuthContext";

const Dashboard = () => {
  const { logOut } = useAuth();
  return (
    <div className="container w-100 mx-auto text-center p-8">
      <h1 className="text-3xl font-bold ">Hello world!</h1>
      <button
        type="button"
        className="mt-4 text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        onClick={() => {
          logOut();
        }}
      >
        Logout
      </button>
    </div>
  );
};

export default Dashboard;
