import { useContext } from "react";
import { useTranslation } from "react-i18next";
import { FirestoreContext } from "../context/FirestoreContext";
import { ITask } from "../types";
import Table from "./Table";

interface ITableConfig {
  title: string;
  head: string[];
  data: ITask[] | [];
  subheading: string;
}

const Task = () => {
  const { studentData } = useContext(FirestoreContext);

  const hasTasks = studentData.taskData ? true : false;

  const defaultConfig: ITableConfig = {
    title: "Task",
    head: ["#", "Title", "Status"],
    data: [],
    subheading: "",
  };

  let tableConfig = defaultConfig;

  if (hasTasks) {
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

  const { t } = useTranslation("task");

  return (
    <section className="w-full h-screen">
      <div
        id="main"
        className="main-content w-full h-full flex-1 bg-gray-100 mt-12 md:mt-2 pb-24 md:pb-5"
      >
        <div className="bg-gray-800 pt-3">
          <div className="rounded-tl-3xl bg-gradient-to-r from-blue-900 to-gray-800 p-4 shadow text-2xl text-white">
            <h1 className="font-bold pl-2">{t("title")}</h1>
          </div>
        </div>
        <div></div>
        <div className="w-full px-4 mx-auto mt-24">
          <Table config={tableConfig} />
        </div>
      </div>
    </section>
  );
};

export default Task;
