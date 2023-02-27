import { useNavigate } from "react-router-dom";
import { ILink } from "../types";

interface LinkSectionProps {
  heading: string;
  links: ILink[];
}

const LinkSection = ({ heading, links }: LinkSectionProps) => {
  const navigate = useNavigate();
  return (
    <div className="w-full mb-6 shadow-lg rounded bg-white p-6">
      <div className="mb-8">
        <h1 className="mb-2 text-xl font-semibold text-zinc-600">{heading}</h1>
        <hr className="h-px my-2 bg-gray-200 border-0 dark:bg-gray-700"></hr>
      </div>
      <div className="grid grid-cols-1 gap-1 md:grid-cols-4 md:gap-4">
        {links.map((link, index) => {
          return (
            <button
              onClick={() => {
                navigate(link.path);
              }}
              key={index}
              type="button"
              className="text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 min-width-48 text-center mr-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800"
            >
              {link.text}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default LinkSection;
