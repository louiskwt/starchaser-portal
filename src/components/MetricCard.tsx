interface MetricCardProps {
  title: string;
  color: string;
  icon: string;
  data: string;
}

const MetricCard = ({ title, color, icon, data }: MetricCardProps) => {
  return (
    <div className="w-full md:w-1/2 xl:w-1/3 p-6">
      <div
        className={`bg-gradient-to-b from-${color}-200 to-${color}-100 border-b-4 border-${color}-600 rounded-lg shadow-xl p-5`}
      >
        <div className="flex flex-row items-center">
          <div className="flex-shrink pr-4">
            <div className={`rounded-full p-5 bg-${color}-600`}>
              <i className={`fa fa-${icon} fa-2x fa-inverse`}></i>
            </div>
          </div>
          <div className="flex-1 text-right md:text-center">
            <h2 className="font-bold uppercase text-gray-600">{title}</h2>
            <p className="font-bold text-3xl">
              {data}
              <span className={`text-${color}-500`}></span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MetricCard;
