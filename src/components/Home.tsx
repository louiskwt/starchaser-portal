import { useContext, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { toast } from "react-toastify";
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

  useEffect(() => {
    if (daysToDSE <= 7)
      toast("提提你，記得幫我完成問卷 （Menu 入面第二個選項)", {
        type: "info",
        closeOnClick: true,
      });
  });

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

  const { t } = useTranslation("home");

  return (
    <section className="w-full">
      <div
        id="main"
        className="main-content w-full h-full flex-1 bg-gray-100 mt-12 md:mt-2 pb-24 md:pb-5"
      >
        <div className="bg-gray-800 pt-3">
          <div className="rounded-tl-3xl bg-gradient-to-r from-blue-900 to-gray-800 p-4 shadow text-2xl text-white">
            <h1 className="font-bold pl-2">{t("title")}</h1>
          </div>
        </div>
        <div className="flex flex-wrap">
          <MetricCard
            title={t("countdown")}
            data={`${daysToDSE} days`}
            cardStyle={cardStyles.blue}
            textStyle={textStyles.dark}
            iconStyle={iconStyles.blue}
            icon="clock"
          />

          {daysToDSE <= 7 && (
            <MetricCard
              title={t("survey")}
              data={t("surveyLink")}
              cardStyle={cardStyles.red}
              textStyle={textStyles.dark}
              iconStyle={iconStyles.red}
              icon="clipboard-list"
              isClickable={true}
              onClickAction={() => {
                window.open("https://forms.gle/M2DKzFH6p1U7yn4m9", "_blank");
              }}
            />
          )}

          <MetricCard
            title={t("points")}
            data={points.toString()}
            cardStyle={cardStyles.purple}
            textStyle={textStyles.dark}
            iconStyle={iconStyles.purple}
            icon="star"
          />
          <CardButton
            title={t("upload")}
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
