import { Popover } from "@headlessui/react";
import { useState } from "react";
import { Link } from "react-scroll";
import { Userposition } from "../hook/navscroll";

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
          ? "bg-white z-10 shadow-black shadow-sm fixed w-full"
          : " md:bg-transparent bg-white  fixed z-10 w-full"
      }
    >
      <nav className="w-screen text-black font-medium z-10 ">
        <div className="justify-between px-4 lg:max-w-7xl md:items-center md:flex md:px-8">
          <div>
            <div className="flex items-center justify-between py-3 md:py-3 md:block">
              <a href="/" className="flex title-font font-medium items-center mb-4">
                <img
                  alt="/"
                  height="50"
                  className="h-8 pr-1 mx-auto"
                  src="/images/deltech.png"
                ></img>
                <span className="ml-3 text-xl">DelTech MUN</span>
              </a>
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
              <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
                <li className="hover:text-blue-600">
                  <Link
                    activeClass="active"
                    className="mr-2 hover:text-yellow-600"
                    to="home"
                    smooth={true}
                    duration={500}
                  >
                    HOME
                  </Link>
                </li>
                <li className="hover:text-blue-600">
                  <Link
                    activeClass="active"
                    className="mr-2 hover:text-red-600"
                    to="temp"
                    smooth={true}
                    duration={500}
                  >
                    ABOUT
                  </Link>
                </li>
                <li className="hover:text-blue-600">
                  <Link
                    activeClass="active"
                    className="mr-2 hover:text-red-600"
                    to="contacts"
                    smooth={true}
                    offset={50}
                    duration={500}
                  >
                    CONTACT
                  </Link>
                </li>
                <li className="hover:text-blue-600">
                  <Link
                    activeClass="active"
                    className="mr-2 hover:text-red-600"
                    to="contacts"
                    smooth={true}
                    offset={50}
                    duration={500}
                  >
                    COMMITTEES
                  </Link>
                </li>
                <li className="hover:text-blue-600">
                  <a href="#_" class="relative inline-block text-lg group">
                    <span class="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
                      <span class="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
                      <span class="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gradient-to-r from-blue-500 to-purple-500 group-hover:rotate-180 ease"></span>
                      <span class="relative">Register Now</span>
                    </span>
                    <span
                      class="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-700 rounded-lg group-hover:mb-0 group-hover:mr-0"
                      data-rounded="rounded-lg"
                    ></span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </Popover>
  );
}
