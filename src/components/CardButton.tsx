import { useRef } from "react";
import { uploadFile } from "../firebase/utils";
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
  const fileRef = useRef<HTMLInputElement>(null);

  function handleSubmit(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (file) {
      console.log(file);
      uploadFile(file, file.name);
    }
  }

  return (
    <div
      className="w-full md:w-1/2 p-6 cursor-pointer"
      onClick={() => {
        fileRef.current?.click();
      }}
    >
      <div className={`${cardStyle} rounded-lg shadow-xl p-5`}>
        <input
          type="file"
          ref={fileRef}
          accept="doc,.docx,image/*"
          onChange={(e) => {
            handleSubmit(e);
          }}
          hidden
        />
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
