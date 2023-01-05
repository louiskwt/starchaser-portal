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
            <section className="w-full">
              <div
                id="main"
                className="main-content w-full h-screen flex-1 bg-gray-100 mt-12 md:mt-2 pb-24 md:pb-5"
              >
                <div className="bg-gray-800 pt-3">
                  <div className="rounded-tl-3xl bg-gradient-to-r from-blue-900 to-gray-800 p-4 shadow text-2xl text-white">
                    <h1 className="font-bold pl-2">Analytics</h1>
                  </div>
                </div>
                <div className="flex flex-wrap">
                  <div className="w-full md:w-1/2 xl:w-1/3 p-6">
                    <div className="bg-gradient-to-b from-green-200 to-green-100 border-b-4 border-green-600 rounded-lg shadow-xl p-5">
                      <div className="flex flex-row items-center">
                        <div className="flex-shrink pr-4">
                          <div className="rounded-full p-5 bg-green-600">
                            <i className="fa fa-wallet fa-2x fa-inverse"></i>
                          </div>
                        </div>
                        <div className="flex-1 text-right md:text-center">
                          <h2 className="font-bold uppercase text-gray-600">
                            Total Revenue
                          </h2>
                          <p className="font-bold text-3xl">
                            $3249{" "}
                            <span className="text-green-500">
                              <i className="fas fa-caret-up"></i>
                            </span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
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
            </section>
          </div>
        </main>
      )}
    </>
  );
};

export default Dashboard;
