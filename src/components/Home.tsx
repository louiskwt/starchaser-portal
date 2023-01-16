import { cardStyles, iconStyles, textStyles } from "../styles/tailwindClasses";
import MetricCard from "./MetricCard";

interface HomeProps {
  daysToDSE: number;
}

const Home = ({ daysToDSE }: HomeProps) => {
  console.log("daysToDSE", daysToDSE);
  return (
    <section className="w-full">
      <div
        id="main"
        className="main-content w-full h-full flex-1 bg-gray-100 mt-12 md:mt-2 pb-24 md:pb-5"
      >
        <div className="bg-gray-800 pt-3">
          <div className="rounded-tl-3xl bg-gradient-to-r from-blue-900 to-gray-800 p-4 shadow text-2xl text-white">
            <h1 className="font-bold pl-2">Home</h1>
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
            data={`${daysToDSE} days`}
            cardStyle={cardStyles.blue}
            textStyle={textStyles.dark}
            iconStyle={iconStyles.blue}
            icon="clock"
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
        <div className="w-full px-4 mx-auto mt-12">
          <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded bg-white ">
            <div className="rounded-t mb-0 px-4 py-3 border-0">
              <div className="flex flex-wrap items-center">
                <div className="relative w-full px-4 max-w-full flex-grow flex-1">
                  <h3 className="font-semibold text-base text-gray-700">
                    Tasks
                  </h3>
                </div>
                <div className="relative w-full px-4 max-w-full flex-grow flex-1 text-right">
                  <h5 className="font-semibold text-base text-gray-700">
                    Date: 1/8 - 1/15
                  </h5>
                </div>
              </div>
            </div>
            <div className="w-full overflow-x-auto">
              <table className="items-center w-full border-collapse text-blueGray-700 ">
                <thead className="thead-light ">
                  <tr>
                    <th className="px-6 w-4 bg-gray-50 text-gray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                      #
                    </th>
                    <th className="px-6 w-4 bg-gray-50 text-gray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                      Task
                    </th>
                    <th className="px-6 w-6 bg-gray-50 text-gray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                      Due Date
                    </th>
                    <th className="px-6 w-6 bg-gray-50 text-gray-700 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left min-w-140-px">
                      Status
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">
                      1
                    </th>
                    <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">
                      Paper 2
                    </th>
                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                      1 / 12 / 2023
                    </td>
                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                      <div className="flex items-center">
                        <div
                          style={{
                            paddingTop: "0.1em",
                            paddingBottom: "0.1rem",
                          }}
                          className="text-sm px-3 bg-red-200 text-red-800 rounded-full"
                        >
                          Not Yet Submitted
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">
                      2
                    </th>
                    <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">
                      Paper 2
                    </th>
                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                      1 / 12 / 2023
                    </td>
                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                      <div className="flex items-center">
                        <div
                          style={{
                            paddingTop: "0.1em",
                            paddingBottom: "0.1rem",
                          }}
                          className="text-sm px-3 bg-red-200 text-red-800 rounded-full"
                        >
                          Not Yet Submitted
                        </div>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
