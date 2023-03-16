import { useTranslation } from "react-i18next";
import { useLocation, useNavigate } from "react-router-dom";

const generateSidebarButton = (
  name: string,
  icon: string,
  path: string,
  color: string,
  currentPath: string,
  navigate: (path: string) => void,
  index: number
) => {
  return (
    <li key={index} className="mr-3 flex-1 cursor-pointer">
      <a
        onClick={() => navigate(path)}
        className={
          currentPath === path
            ? `sidebarLink sidebar-${color} sidebarActive-${color}`
            : `sidebarLink sidebar-${color}`
        }
      >
        <i className={`${icon} sidebarIcon`}></i>
        <span className="sidebarText">{name}</span>
      </a>
    </li>
  );
};

const Sidebar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { t } = useTranslation("sidebar");

  const sideBarLinkData = [
    {
      name: t("home"),
      icon: "fas fa-home",
      path: "/",
      color: "green",
    },
    {
      name: t("tasks"),
      icon: "fas fa-tasks",
      path: "/task",
      color: "pink",
    },
    {
      name: t("resources"),
      icon: "fas fa-book",
      path: "/resources",
      color: "yellow",
    },
    {
      name: t("payment"),
      icon: "fas fa-wallet",
      path: "/payment",
      color: "purple",
    },
  ];

  return (
    <nav aria-label="alternative nav">
      <div className="bg-gray-800 shadow-xl h-20 fixed bottom-0 mt-12 md:relative md:h-screen z-10 w-full md:w-48 content-center">
        <div className="md:mt-12 md:w-48 md:fixed md:left-0 md:top-0 content-center md:content-start text-left justify-between">
          <ul className="list-reset flex flex-row md:flex-col pt-3 md:py-3 px-1 md:px-2 text-center md:text-left">
            {sideBarLinkData.map((link, index) => {
              return generateSidebarButton(
                link.name,
                link.icon,
                link.path,
                link.color,
                location.pathname,
                navigate,
                index
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Sidebar;
