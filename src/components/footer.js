import React from "react";
import {
  FaPhoneAlt,
  FaLinkedinIn,
  FaEnvelope,
  FaFacebookF,
  // FaYoutube,
  FaInstagram,
} from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row">
        <div className="w-full h-60 md:h-96  ">
          <iframe
            title="bing bing boo"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3497.997443658061!2d77.11617251501175!3d28.749493282371805!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d0138a74f7da7%3A0xf09fad683c23bd5d!2sDelhi%20Technological%20University!5e0!3m2!1sen!2sin!4v1668174548995!5m2!1sen!2sin"
            style={{ border: "0", height: "inherit", width: "inherit" }}
            allowfullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className=" text-white p-10 bg-slate-700 w-full ">
          <h1 className="text-4xl lg:text-5xl font-bold mt-5 text-center">
            Venue
          </h1>
          <p className="text-md text-center lg:text-lg leading-relaxed py-10 ">
            BR AUDITORIUM, Delhi Technological University (formerly DCE), Bawana
            Rd, Shahbad Daulatpur Village, Rohini, New Delhi, Delhi 110042
          </p>
        </div>
      </div>

      <footer className=" bg-white dark:bg-gray-900 p-8 w-full">
        <div className=" flex flex-col justify-evenly items-center lg:items-start py-4 lg:flex-row">
          <div className="flex flex-col items-center">
            <h2 className="mb-6 text-lg md:text-xl  font-semibold whitespace-nowrap dark:text-white">
              For Any Queries Contact
            </h2>
            <div className="flex flex-col justify-evenly items-center md:flex-row ">
              <div className="p-4 w-52  h-24  mb-5 flex flex-col justify-evenly items-center md:mr-5 bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                <p className=" text-neutral-300 text-xs text-center font-normal pb-2">
                  President
                </p>
                <h5 className="mb-2 font-bold text-gray-900 dark:text-white">
                  Divit Goel
                </h5>
                <div className="font-normal text-sm flex flex-row items-center  text-neutral-300">
                  <span>
                    <FaPhoneAlt size={15} />
                  </span>
                  <span className="ml-2">1 2 ka 4</span>
                </div>
              </div>
              <div className="p-4 w-52  h-24 mb-5 bg-white flex flex-col justify-evenly items-center rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                <p className=" text-neutral-300 text-xs text-center font-normal pb-2">
                  Vice President
                </p>
                <h5 className="mb-2  font-bold text-gray-900 dark:text-white">
                  Ashwin Rao
                </h5>
                <div className="font-normal  text-xs flex flex-row items-center text-neutral-300   ">
                  <span>
                    <FaPhoneAlt size={15} />
                  </span>
                  <span className="ml-2 leading-loose ">9891777321</span>
                </div>
              </div>
            </div>
          </div>
          <div className="space-y-2 mb-6 mt-2  flex flex-col">
            <h5 className="mb-2 md:text-lg font-bold text-gray-900 dark:text-white">
              Helpful Links
            </h5>
            <div>
              <a
                href="/"
                className="font-normal text-gray-700 dark:text-gray-400 text-sm hover:underline"
              >
                Privacy Policy
              </a>
            </div>
            <div>
              <a
                href="/"
                className="font-normal text-gray-700 dark:text-gray-400 text-sm hover:underline"
              >
                Terms &amp; Conditions
              </a>
            </div>
            <div>
              <a
                href="/"
                className="font-normal text-gray-700 dark:text-gray-400 text-sm hover:underline"
              >
                Payment Policy
              </a>
            </div>
          </div>
          <div className=" space-y-2  flex flex-col ">
            <h5 className="mb-2 md:text-lg font-bold text-gray-900 dark:text-white">
              Connect With Us
            </h5>
            <div className=" items-center flex flex-row font-normal text-gray-700 dark:text-gray-400">
              <span>
                <FaEnvelope />
              </span>
              <span className="ml-2 text-sm ">Email</span>
            </div>
            <div className="font-normal items-center flex flex-row text-gray-700 dark:text-gray-400">
              <span>
                <FaInstagram />
              </span>
              <span className="ml-2 text-sm ">Instagram</span>
            </div>
            <div className="font-normal items-center flex flex-row text-gray-700 dark:text-gray-400">
              <span>
                <FaFacebookF />
              </span>
              <span className="ml-2 text-sm ">Facebook</span>
            </div>
            <div className="font-normal items-center flex flex-row text-gray-700 dark:text-gray-400">
              <span>
                <FaLinkedinIn />
              </span>
              <span className="ml-2 text-sm ">LinkedIn</span>
            </div>
            {/* <div className="font-normal items-center flex flex-row text-gray-700 dark:text-gray-400">
                <span>
                  <FaYoutube />
                </span>
                <span className="ml-2 text-sm ">Youtube</span>
              </div> */}
          </div>
        </div>
        <hr className="mb-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:mb-6" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2023
            <a href="/" className="ml-1 hover:underline">
              deltech-mun™
            </a>
            . All Rights Reserved.
          </span>
        </div>
      </footer>
    </>
  );
};

export default Footer;
