interface CardButtonProps {
  title: string;
  cardStyle: string;
  textStyle: string;
  iconStyle: string;
  icon: string;
}

const CardButton = ({
  title,
  cardStyle,
  icon,
  textStyle,
  iconStyle,
}: CardButtonProps) => {
  return (
    <div className="w-full md:w-1/2 p-6 cursor-pointer">
      <div className={`${cardStyle} rounded-lg shadow-xl p-5`}>
        <div className="flex flex-row items-center">
          <div className="flex-shrink pr-4">
            <div className={iconStyle}>
              <i className={`fa fa-${icon} fa-2x fa-inverse`}></i>
            </div>
          </div>
          <div className="flex-1 text-right md:text-center">
            <h2 className={`font-bold uppercase ${textStyle}`}>{title}</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardButton;
