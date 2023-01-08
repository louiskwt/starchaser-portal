import { cardStyles, iconStyles, textStyles } from "../styles/tailwindClasses";
import MetricCard from "./MetricCard";

const Home = () => {
  return (
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
      </div>
    </section>
  );
};

export default Home;
