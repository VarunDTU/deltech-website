import React from "react";
// import Timer from "./timeer";
// import { Link } from "react-router-dom";
// import RegisterButton from "./registerbutton";
const Main = () => {
  return (
    <div>
      <section className="text-gray-600 -z-20 w-full" id="home">
        <div className=" w-full h-full object-fit absolute">
          <img
            alt=""
            className="w-full h-screen"
            src="/images/without_text.jpg"
          ></img>
        </div>
        <div className="mx-0 content-center">
          <div className="relative w-full h-screen ">
            <div className="w-full h-full absolute -z-10 bg-transparent"></div>
            <div className="content-center flex flex-col h-screen justify-center items-center py-10">
              <div className="items-center justify-center flex flex-col py-2">
                <h2 className="mt-9 text-center md:text-3xl font-semibold text-2xl text-gray-800 italic font-Montserrat md:lh1 drop-shadow-lg py-2 border-black">
                  Deltech MUN & Debating Society <br />
                  presents
                </h2>
                <h1 className="mt-5 text-center md:text-8xl text-6xl text-white/90 font-lato lh1 font-bold  border-black">
                  DELTECH MUN 2024
                </h1>

                <i className="mt-5 text-center md:text-xl text-md text-gray-800 font-Montserrat italic drop-shadow-lg border-black">
                  Where The Diplomacy Begins
                </i>
                <i className="mt-1 text-center md:text-xl text-md text-gray-800 font-Montserrat italic drop-shadow-lg border-black">
                  On
                  <br />
                  6th & 7th January 2024
                </i>
              </div>

              {/* <Timer></Timer>
              <div className="inline-flex py-3">
                <Link
                  to="/CampusAmbassador"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-normal text-gray-400 text-sm"
                >
                  <div className="py-5 justify-center flex md:flex-row flex-col z-5 mx-3">
                    <div href="#_" class="relative inline-block text-lg group">
                      <span class="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
                        <span class="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
                        <span class="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span>
                        <span class="relative">Join us</span>
                      </span>
                      <span
                        class="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0"
                        data-rounded="rounded-lg"
                      ></span>
                    </div>
                  </div>
                </Link>
                <RegisterButton></RegisterButton>
              </div> */}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Main;
