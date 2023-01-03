import Loader from "../components/Loader";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { useAuth } from "../context/AuthContext";

const Dashboard = () => {
  const { logOut, user } = useAuth();
  return (
    <>
      <Navbar />

      {!user ? (
        <Loader />
      ) : (
        <main>
          <div className="flex flex-col md:flex-row">
            <Sidebar />
            <section className="">
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
            </section>
          </div>
        </main>
      )}
    </>
  );
};

export default Dashboard;
