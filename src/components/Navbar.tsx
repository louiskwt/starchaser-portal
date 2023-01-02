import { useRef, useState } from "react";
import Sidebar from "./Sidebar";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const sideBarToggler = useRef<HTMLButtonElement>(null);
  const navClosed = useRef<SVGSVGElement>(null);
  const navOpen = useRef<SVGSVGElement>(null);
  const navRef = useRef<HTMLMenuElement>(null);

  return (
    <>
      <nav
        ref={navRef}
        className="fixed top-0 z-40 flex w-full flex-row bg-gray-700 px-4 justify-between "
      >
        <a href="/" className="flex items-center py-4 text-lg text-white">
          <span className="self-center text-lg font-semibold whitespace-nowrap">
            Louis's Class 2023
          </span>
        </a>

        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="py-4 text-2xl text-white hover:text-gray-200"
          aria-controls="navbar-default"
          aria-expanded="false"
          ref={sideBarToggler}
          onClick={() => {
            setIsOpen(!isOpen);
            navClosed?.current?.classList.toggle("hidden");
            navOpen?.current?.classList.toggle("hidden");
            console.log(navRef?.current?.clientHeight);
          }}
        >
          <svg
            id="navClosed"
            ref={navClosed}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="h-8 w-8"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
          <svg
            ref={navOpen}
            id="navOpen"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="hidden h-8 w-8"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </nav>
      <Sidebar isOpen={isOpen} navHeight={navRef?.current?.clientHeight || 0} />
    </>
  );
};

export default Navbar;
