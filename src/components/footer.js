import React from "react";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";

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

      <footer className=" bg-white dark:bg-gray-900 p-10 w-full">
        <div className="md:pt-5 w-full flex flex-col items-center justify-evenly">
          <div className="mb-5 flex flex-col items-center justify-evenly lg:flex-row">
            <div className="flex flex-col items-center mb-6 ml-4 md:mb-0">
              <h2 className="self-center mb-8 text-lg md:text-2xl  font-semibold whitespace-nowrap dark:text-white">
                For Any Queries Contact :
              </h2>
              <div className="flex flex-col justify-evenly items-center md:flex-row ">
                <div className="p-4 w-64 mb-5 flex flex-col justify-evenly items-center md:mr-5 bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                  <p className="text-gray-500 text-xs text-center font-normal pb-2">
                    President
                  </p>
                  <h5 className="mb-2  md:text-lg font-bold text-gray-900 dark:text-white">
                    Divit Goel
                  </h5>
                  <div className="font-normal flex flex-row items-center text-gray-700 dark:text-gray-400">
                    <span>
                      <FaPhoneAlt size={15} />
                    </span>
                    <span className="ml-3 text-sm ">1 2 ka 4</span>
                  </div>
                </div>
                <div className="p-4 w-64 mb-5 bg-white flex flex-col justify-evenly items-center rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                  <p className="text-gray-500 text-xs text-center font-normal pb-2">
                    Vice President
                  </p>
                  <h5 className="mb-2 md:text-lg font-bold text-gray-900 dark:text-white">
                    Ashwin Rao
                  </h5>
                  <div className="font-normal flex flex-row items-center text-gray-700 dark:text-gray-400">
                    <span>
                      <FaPhoneAlt size={15} />
                    </span>
                    <span className="ml-3 text-sm">4 2 ka 1</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="py-8 md:px-10 w-72 mb-5 flex flex-col items-center">
              <h5 className="mb-2 md:text-lg font-bold text-gray-900 dark:text-white">
                Get In TOUCH
              </h5>
              <div className="font-normal items-center flex flex-row text-gray-700 dark:text-gray-400">
                <span>
                  <FaEnvelope />
                </span>
                <span className="ml-2 text-sm ">Lorem ipsum dolor</span>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-evenly lg:flex-row">
          <div className="pb-8 md:px-10 w-72 mb-5 flex flex-col items-center">
            <h5 className="mb-2 md:text-lg font-bold text-gray-900 dark:text-white">
              CONNECT WITH US
            </h5>
            <div className="flex flex-row mt-4 space-x-6 sm:justify-center sm:mt-0">
              <a
                href="/"
                className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <span className="sr-only">Facebook page</span>
              </a>
              <a
                href="/"
                className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <span className="sr-only">Instagram page</span>
              </a>
              <a
                href="/"
                className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <span className="sr-only">LinkedIn</span>
              </a>
              <a
                href="/"
                className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                </svg>
                <span className="sr-only">Twitter page</span>
              </a>
            </div>
          </div>
            <div className="md:px-10 w-64 mb-5 flex flex-col items-center">
              <h2 className="mb-4 md:text-lg font-bold text-gray-900 dark:text-white">
                HELPFUL LINKS
              </h2>
              <div className="text-gray-600 flex flex-col items-center dark:text-gray-400">
                <div className="mb-4">
                  <a href="/" className="hover:underline">
                    Privacy Policy
                  </a>
                </div>
                <div>
                  <a href="/" className="hover:underline">
                    Terms &amp; Conditions
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
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
