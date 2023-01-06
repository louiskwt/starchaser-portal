interface MetricCardProps {
  title: string;
  cardStyle: string;
  textStyle: string;
  iconStyle: string;
  icon: string;
  data: string;
}

const MetricCard = ({
  title,
  cardStyle,
  icon,
  data,
  textStyle,
  iconStyle,
}: MetricCardProps) => {
  return (
    <div className="w-full md:w-1/2 xl:w-1/3 p-6">
      <div className={`${cardStyle} rounded-lg shadow-xl p-5`}>
        <div className="flex flex-row items-center">
          <div className="flex-shrink pr-4">
            <div className={iconStyle}>
              <i className={`fa fa-${icon} fa-2x fa-inverse`}></i>
            </div>
          </div>
          <div className="flex-1 text-right md:text-center">
            <h2 className={`font-bold uppercase ${textStyle}`}>{title}</h2>
            <p className="font-bold text-3xl">
              {data}
              <span className={textStyle}></span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MetricCard;

// red: "bg-red-500 bg-gradient-to-b from-red-200 to-red-100",
// blue: "bg-blue-500 bg-gradient-to-b from-blue-200 to-blue-100",
// yellow: "bg-yellow-500 bg-gradient-to-b from-yellow-200 to-yellow-100",
// pink: "bg-pink-500 bg-pink-to-b from-pink-200 to-pink-100",
