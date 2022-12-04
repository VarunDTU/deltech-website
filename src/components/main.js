import React from "react";
import Timer from "./timeer";
const Main = () => {
  return (
    <div>
      <section className="text-gray-600 -z-20 w-full" id="home">
        <div className=" w-screen h-screen object-fit absolute blur-md -z-50">
          <img
            alt=""
            className="w-screen h-screen"
            src="/images/without_text.jpg"
          ></img>
        </div>
        <div className="mx-0 content-center">
          <div className="relative w-full h-screen ">
            <div className="w-full h-full absolute -z-10 bg-transparent"></div>
            <div className="content-center flex flex-col h-screen justify-center items-center py-10">
              <div className="items-center justify-center flex flex-col py-2">
                <h2 className="mt-9 text-center md:text-2xl text-xl text-gray-800 italic font-Montserrat md:lh1 drop-shadow-lg py-2 border-black">
                  Deltech MUN & Debating Society <br />
                  presents
                </h2>
                <h1 className="mt-5 text-center md:text-8xl text-6xl text-white/80 font-lato lh1 font-bold  border-black">
                  DELTECH MUN 2023
                </h1>

                <i className="mt-5 text-center md:text-xl text-md text-gray-800 font-Montserrat italic drop-shadow-lg border-black">
                  Where The Diplomacy Begins
                </i>
                <i className="mt-1 text-center md:text-xl text-md text-gray-800 font-Montserrat italic drop-shadow-lg border-black">
                  On
                  <br />
                  7th & 8th January 2023
                </i>
              </div>

              <Timer></Timer>
              <div className="inline-flex py-3">
                <div className="py-5 justify-center flex md:flex-row flex-col z-5 mx-3">
                  <a
                    href="https://forms.gle/KdMctqbH2dCU6mE26"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative inline-block text-lg group"
                  >
                    <span className="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
                      <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
                      <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span>
                      <span className="relative">Apply Now</span>
                    </span>
                    <span
                      className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0"
                      data-rounded="rounded-lg"
                    ></span>
                  </a>
                </div>
                <div className="peer py-5 justify-center flex md:flex-row flex-col z-5 mx-3">
                  <a href="#_" className="relative inline-block text-lg group">
                    <span className="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
                      <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
                      <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gradient-to-r from-blue-500 to-purple-500 group-hover:rotate-180 ease"></span>
                      <span className="relative">Register Now</span>
                    </span>
                    <span
                      className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-700 rounded-lg group-hover:mb-0 group-hover:mr-0"
                      data-rounded="rounded-lg"
                    ></span>
                  </a>
                </div>
                {/* <!-- the menu here --> */}
                <div className="hidden peer-hover:flex hover:flex rounded-lg flex-col bg-white drop-shadow-lg">
                  <a
                    className="px-5 py-3 hover:bg-blue-200"
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://forms.gle/oZKzN6vKpyEtEgaC7"
                  >
                    Delegate Application
                  </a>
                  <a
                    className="px-5 py-3 hover:bg-blue-200"
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://forms.gle/aFJrRfyevoUmt7SS7"
                  >
                    IP Application
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Main;
