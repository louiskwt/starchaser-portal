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
