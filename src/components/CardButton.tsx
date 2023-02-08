import { useRef, useState } from "react";
import { toast } from "react-toastify";
import { useAuth } from "../context/AuthContext";
import { uploadFile } from "../firebase/utils";
import Loader from "./Loader";
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
  const [uploading, setUploading] = useState(false);
  const { userInfo } = useAuth();

  function handleUploadState(state: boolean) {
    setUploading(state);
  }

  function toastHandler(state: boolean) {
    if (state) {
      toast.success("Upload successful");
    } else {
      toast.error("Upload failed...Please try again later");
    }
  }

  function handleSubmit(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];

    if (file) {
      const fileName = `${userInfo?.name}-${file.name}`;
      uploadFile(file, fileName, handleUploadState, toastHandler);
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
            {!uploading ? (
              <h2 className={`font-bold uppercase ${textStyle}`}>{title}</h2>
            ) : (
              <Loader />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardButton;
