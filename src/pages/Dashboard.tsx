import Loader from "../components/Loader";
import MetricCard from "../components/MetricCard";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { useAuth } from "../context/AuthContext";
import { cardStyles, iconStyles, textStyles } from "../styles/tailwindClasses";

const Dashboard = () => {
  const { logOut, user } = useAuth();
  return (
    <>
      <Navbar />
      <main>
        <div className="flex flex-col md:flex-row">
          {!user ? (
            <div className="flex flex-col mt-80 mx-auto">
              <Loader />
            </div>
          ) : (
            <>
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
                    <MetricCard
                      title="Next Lesson"
                      data="01-08-23"
                      cardStyle={cardStyles.green}
                      textStyle={textStyles.dark}
                      iconStyle={iconStyles.green}
                      icon="calendar"
                    />
                    <MetricCard
                      title="Days to DSE"
                      data="106 days"
                      cardStyle={cardStyles.blue}
                      textStyle={textStyles.dark}
                      iconStyle={iconStyles.blue}
                      icon="clock"
                    />
                    <MetricCard
                      title="Weekly Progress"
                      data="30%"
                      cardStyle={cardStyles.red}
                      textStyle={textStyles.dark}
                      iconStyle={iconStyles.red}
                      icon="tasks"
                    />
                    <MetricCard
                      title="Points"
                      data="100"
                      cardStyle={cardStyles.purple}
                      textStyle={textStyles.dark}
                      iconStyle={iconStyles.purple}
                      icon="star"
                    />
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
            </>
          )}
        </div>
      </main>
    </>
  );
};

export default Dashboard;
