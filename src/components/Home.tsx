import { useContext } from "react";
import { FirestoreContext } from "../context/FirestoreContext";
import { cardStyles, iconStyles, textStyles } from "../styles/tailwindClasses";
import { ITableConfig } from "../types";
import CardButton from "./CardButton";
import MetricCard from "./MetricCard";
import Table from "./Table";

interface HomeProps {
  daysToDSE: number;
  points: number;
}

const Home = ({ daysToDSE, points }: HomeProps) => {
  const { studentData } = useContext(FirestoreContext);

  const showTask = studentData.taskData ? true : false;

  const defaultConfig: ITableConfig = {
    title: "Task",
    head: ["#", "Title", "Status"],
    data: [],
    subheading: "",
  };

  let tableConfig = defaultConfig;

  if (showTask) {
    const { taskData } = studentData;
    const { tasks, subheading } = taskData;
    const head = ["#", "Title", "Status"];
    tableConfig = {
      title: "Task",
      head: head,
      data: tasks,
      subheading: subheading,
    };
  }

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
            title="Days to DSE"
            data={`${daysToDSE} days`}
            cardStyle={cardStyles.blue}
            textStyle={textStyles.dark}
            iconStyle={iconStyles.blue}
            icon="clock"
          />

          <MetricCard
            title="Points"
            data={points.toString()}
            cardStyle={cardStyles.purple}
            textStyle={textStyles.dark}
            iconStyle={iconStyles.purple}
            icon="star"
          />
          <CardButton
            title="上傳作業"
            cardStyle={cardStyles.green}
            textStyle={textStyles.zinc}
            iconStyle={iconStyles.green}
            icon="upload"
          />
        </div>
        <div className="w-full px-4 mx-auto mt-12">
          {showTask && <Table config={tableConfig} />}
        </div>
      </div>
    </section>
  );
};

export default Home;
