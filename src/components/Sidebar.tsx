import { useEffect, useRef } from "react";

interface SidebarProps {
  isOpen: boolean;
  navHeight: number;
}

const Sidebar = ({ isOpen, navHeight }: SidebarProps) => {
  const sideBar = useRef<HTMLMenuElement>(null);
  useEffect(() => {
    if (isOpen) {
      sideBar?.current?.classList?.add("show");
      sideBar.current.style.top = `${navHeight - 1}px`;
    } else {
      sideBar?.current?.classList?.remove("show");
    }
  }, [isOpen]);
  return (
    <div id="containerSidebar" className="z-40">
      <div className="navbar-menu relative z-40">
        <nav
          ref={sideBar}
          id="sidebar"
          className="fixed left-0 bottom-0 flex w-3/4 -translate-x-full flex-col overflow-y-auto bg-gray-700 pt-6 pb-8 sm:max-w-xs lg:w-80"
        >
          <div className="px-4 pb-6">
            <h3 className="mb-2 text-xs font-medium uppercase text-gray-500">
              Main
            </h3>
            <ul className="mb-8 text-sm font-medium">
              <li>
                <a
                  className="active flex items-center rounded py-3 pl-3 pr-4 text-gray-50 hover:bg-gray-600"
                  href="#homepage"
                >
                  <span className="select-none">Homepage</span>
                </a>
              </li>
              <li>
                <a
                  className="flex items-center rounded py-3 pl-3 pr-4 text-gray-50 hover:bg-gray-600"
                  href="#link1"
                >
                  <span className="select-none">link1</span>
                </a>
              </li>
            </ul>
          </div>

          <div className="px-4 pb-6">
            <h3 className="mb-2 text-xs font-medium uppercase text-gray-500">
              Legal
            </h3>
            <ul className="mb-8 text-sm font-medium">
              <li>
                <a
                  className="flex items-center rounded py-3 pl-3 pr-4 text-gray-50 hover:bg-gray-600"
                  href="#tc"
                >
                  <span className="select-none">Terms and Condition</span>
                </a>
              </li>
              <li>
                <a
                  className="flex items-center rounded py-3 pl-3 pr-4 text-gray-50 hover:bg-gray-600"
                  href="#privacy"
                >
                  <span className="select-none">Privacy policy</span>
                </a>
              </li>
              <li>
                <a
                  className="flex items-center rounded py-3 pl-3 pr-4 text-gray-50 hover:bg-gray-600"
                  href="#imprint"
                >
                  <span className="select-none">Imprint</span>
                </a>
              </li>
            </ul>
          </div>

          <div className="px-4 pb-6">
            <h3 className="mb-2 text-xs font-medium uppercase text-gray-500">
              Others
            </h3>
            <ul className="mb-8 text-sm font-medium">
              <li>
                <a
                  className="flex items-center rounded py-3 pl-3 pr-4 text-gray-50 hover:bg-gray-600"
                  href="#ex1"
                >
                  <span className="select-none">...</span>
                </a>
              </li>
              <li>
                <a
                  className="flex items-center rounded py-3 pl-3 pr-4 text-gray-50 hover:bg-gray-600"
                  href="#ex2"
                >
                  <span className="select-none">...</span>
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
      <div className="mx-auto lg:ml-80"></div>
    </div>
  );
};

export default Sidebar;
