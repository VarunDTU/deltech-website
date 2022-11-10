<<<<<<< Updated upstream
import React, { useState } from "react";
import { Transition } from "@headlessui/react";
import {Link} from 'react-scroll';
function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <nav className="bg-gray-800 fixed z-10 w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <img
                  className="h-8 w-8"
                  src="../images/whiteDelTech.png"
                  alt="Workflow"
                />
              </div>
              <div className="hidden md:block">
          <div className="ml-10 flex items-baseline text-white">
          <Link activeClass="active" className="mr-5 hover:text-red-600"  to="home"  smooth={true} duration={500}>
          HOME
          </Link>
          <Link activeClass="active" className="mr-5 hover:text-red-600"  to="temp"  smooth={true}  duration={500}>
          ABOUT
          </Link>
          
          <Link activeClass="active" className="mr-5 hover:text-red-600"  to="contacts" smooth={true} offset={50} duration={500}>
          CONTACT
          </Link>
          <Link activeClass="active" className="mr-5 hover:text-red-600"  to="contacts" smooth={true} offset={50} duration={500}>
          COMMITTEES
          </Link>
          <Link activeClass="active" className="mr-5 hover:text-red-600"  to="contacts" smooth={true} offset={50} duration={500}>
          JUDGES
          </Link>
                </div>
              </div>
            </div>
            <div className="-mr-2 flex md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        <Transition
          show={isOpen}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          {(ref) => (
            <div className="md:hidden" id="mobile-menu">
              <div ref={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Link activeClass="active" className=" mr-5 hover:text-red-600"  to="home"  smooth={true} duration={500}>
          HOME
          </Link>
          <Link activeClass="active" className="mr-5 hover:text-red-600"  to="temp"  smooth={true}  duration={500}>
          ABOUT
          </Link>
          
          <Link activeClass="active" className="mr-5 hover:text-red-600"  to="contacts" smooth={true} offset={50} duration={500}>
          CONTACT
          </Link>
          <Link activeClass="active" className="mr-5 hover:text-red-600"  to="contacts" smooth={true} offset={50} duration={500}>
          COMMITTEES
          </Link>
          <Link activeClass="active" className="mr-5 hover:text-red-600"  to="contacts" smooth={true} offset={50} duration={500}>
          JUDGES
          </Link>
              </div>
            </div>
          )}
        </Transition>
      </nav>


    </div>
  );
}

export default Nav;
=======
import { useState } from "react";
import { Link } from "react-scroll";
export default function NavBar2() {
  const [navbar, setNavbar] = useState(false);

  return (
    <nav className="w-full bg-gray-800 shadow z-10 text-white fixed">
      <div className="justify-between px-4 mx-auto lg:max-w-7xl lg:items-center lg:flex lg:px-8">
        <div>
          <div className="flex items-center justify-between py-3 lg:py-3 lg:block">
            <a href="/" className="flex title-font font-medium items-center mb-4">
              <img
                alt="/"
                height="50"
                className="h-8 pr-1 mx-auto"
                src="/images/whiteDelTech.png"
              ></img>
              <span className="ml-3 text-xl">DelTech MUN</span>
            </a>
            <div className="lg:hidden">
              <button
                className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
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
            className={`flex-1 justify-self-center pb-3 mt-8 lg:block lg:pb-0 lg:mt-0 ${
              navbar ? "block" : "hidden"
            }`}
          >
            <ul className="items-center justify-center space-y-8 lg:flex lg:space-x-6 lg:space-y-0">
              <li className="text-gray-600 hover:text-blue-600">
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
              <li className="text-gray-600 hover:text-blue-600">
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
              <li className="text-gray-600 hover:text-blue-600">
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
              <li className="text-gray-600 hover:text-blue-600">
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
              <li className="text-gray-600 hover:text-blue-600">
                <button className="inline-flex border-0 py-1 px-5 focus:outline-none bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 rounded text-base">
                  Register Now
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
>>>>>>> Stashed changes
