import { Popover } from "@headlessui/react";
import { useState } from "react";
import { Link } from "react-scroll";
import { Userposition } from "../hook/navscroll";
// import { Link as Linkr } from "react-router-dom";
// import RegisterButton from "./registerbutton";
export default function NavBar2() {
  const [navbar, setNavbar] = useState(false);
  const scrollPosition = Userposition();
  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  return (
    <Popover
      className={
        classNames(scrollPosition > 10)
          ? "bg-white z-50 shadow-black shadow-sm fixed w-full"
          : "  fixed z-50 w-full"
      }
    >
      
        <div className={`justify-between px-4 md:items-center md:flex md:px-8  text-black font-medium z-10  ${
        navbar ? "bg-white" : "bg-transparent"
      }`}>
          <div>
            <div className="flex items-center justify-between py-3 md:py-3 md:block">
              <div className="flex title-font font-medium items-center mb-4">
                <img
                  alt="/"
                  height="50"
                  className="h-8 pr-1 mx-auto"
                  src="/images/deltech.png"
                ></img>
                <span className="ml-3 text-xl">DelTech MUN</span>
              </div>
              <div className="md:hidden">
                <button
                  className="p-2 text-gray-900 rounded-md outline-none focus:border-gray-400 focus:border"
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  )}
                </button>
              </div>
            </div>
          </div>
          <div>
            <div
              className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                navbar ? "block" : "hidden"
              }`}
            >
              <ul className="items-center text-sm justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
                <li className="hover:text-blue-600">
                  <Link
                    activeClass="active"
                    className="mr-2 hover:text-red-600 cursor-pointer"
                    to="home"
                    smooth={true}
                    duration={300}
                  >
                    HOME
                  </Link>
                </li>
                <li className="hover:text-blue-600">
                  <Link
                    activeClass="active"
                    className="mr-2 hover:text-red-600 cursor-pointer"
                    to="aboutus"
                    smooth={true}
                    duration={300}
                  >
                    ABOUT
                  </Link>
                </li>
                <li className="hover:text-blue-600 animate-pulse">
                  <Link
                    activeClass="active"
                    className="mr-2 hover:text-red-600 cursor-pointer"
                    to="committees"
                    smooth={true}
                    duration={300}
                  >
                    COMMITTEES
                  </Link>
                </li>
                {/* <li className="hover:text-blue-600 animate-pulse">
                  <Linkr
                    to="/CampusAmbassador"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-normal text-red-400 text-sm"
                  >
                    DelTech MUN'24
                  </Linkr>
                </li> */}
                <li className="hover:text-blue-600 pb-4 md:pb-0">
                  <Link
                    activeClass="active"
                    className="mr-2 hover:text-red-600 cursor-pointer"
                    to="contacts"
                    smooth={true}
                    duration={300}
                  >
                    CONTACT
                  </Link>
                </li>
                {/* <RegisterButton /> */}
              </ul>
            </div>
          </div>
        </div>
    </Popover>
  );
}
