import React from "react";
import { Link } from "react-scroll";
import deltech from "../images/whiteDelTech.png";
const Navbar = () => {
  return (
    <header className="text-white body-font z-10 top-0 sticky w-screen bg-gray-800">
      <div className="flex justify-between items-center h-20 px-4">
        <a href="/" className="flex title-font font-medium items-center mb-4">
          <img alt="" className="h-10 ml-4 mr-2 mx-auto" src={deltech}></img>
          <span className="ml-3 text-xl">DelTech MUN</span>
        </a>
        <nav className=" mx-1 md:block hidden">
          <Link
            activeClass="active"
            className=" mr-5 hover:text-red-600"
            to="home"
            smooth={true}
            duration={500}
          >
            HOME
          </Link>
          <Link
            activeClass="active"
            className="mr-5 hover:text-red-600"
            to="temp"
            smooth={true}
            duration={500}
          >
            ABOUT
          </Link>

          <Link
            activeClass="active"
            className="mr-5 hover:text-red-600"
            to="contacts"
            smooth={true}
            offset={50}
            duration={500}
          >
            CONTACT
          </Link>
          <Link
            activeClass="active"
            className="mr-5 hover:text-red-600"
            to="contacts"
            smooth={true}
            offset={50}
            duration={500}
          >
            COMMITTEES
          </Link>
          <button className="inline-flex border-0 py-1 px-3 focus:outline-none bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 rounded text-base">
            Register Now
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
