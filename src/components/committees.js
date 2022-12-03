import React from "react";
import { FaTimes } from "react-icons/fa";

const Committees = () => {
  return (
    <>
      <section className="text-center">
        <div
          class="modal fade z-10 fixed top-0 left-0 hidden text-center w-full h-full outline-none overflow-x-hidden overflow-y-auto"
          id="disec"
          tabindex="-1"
          aria-labelledby="disecModalLgLabel"
          aria-modal="true"
          role="dialog"
        >
          <div className="modal-dialog modal-lg relative w-auto pointer-events-none">
            <div className="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-slate-100 bg-clip-padding rounded-md outline-none text-current">
              <div className="modal-header flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200 rounded-t-md">
                <h5
                  className="text-lg font-medium leading-normal text-gray-800 "
                  id="disecModalLgLabel"
                >
                  Disarmament and International Security Committee
                </h5>

                <button
                  type="button"
                  class="btn-close box-content w-4 h-4 p-1 text-black rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                >
                  <FaTimes size={20} />
                </button>
              </div>
              <div className="modal-body relative p-10">
                <p className="text-center text-gray-600 text-sm font-medium ">
                  Deliberation on the Treaty on Amity and Cooperation ("TAC")
                  signed by Ukraine at the annual summit of the Association of
                  Southeast Asian Nations (ASEAN).
                </p>
                <div class="container mx-auto space-y-9 pt-6 flex md:flex-row flex-col justify-center md:justify-evenly items-center md:items-baseline">
                  <div class="flex justify-center">
                    <div class="rounded-lg shadow-lg bg-white max-w-sm">
                      <img
                        class="rounded-t-lg w-80 h-72"
                        src="/images/Committees/DhruvJain_UNGA_Chairperson.jpeg"
                        alt=""

                      />
                      <div class="p-6">
                        <h5 class="text-gray-900 text-xl font-medium mb-2">
                          Chair
                        </h5>
                        <p class="text-gray-700 text-base mb-4">Dhruv Jain</p>
                      </div>
                    </div>
                  </div>
                  <div class="flex justify-center">
                    <div class="rounded-lg shadow-lg bg-white max-w-sm">
                      <img
                        class="rounded-t-lg w-72 h-72"
                        src="/images/Committees/Pulkit Taneja_UNGA_Vice_Chair.jpeg"
                        alt=""
                      />
                      <div class="p-6">
                        <h5 class="text-gray-900 text-xl font-medium mb-2">
                          Vice Chairperson
                        </h5>
                        <p class="text-gray-700 text-base mb-4">
                          Pulkit Taneja
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-full flex justify-center pt-5 pb-5"></div>
                <a href="#_" class="relative inline-block text-sm group">
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
              </div>
            </div>
          </div>
        </div>
        {/* <------------------------------------------------------------------------------------------------------> */}

        <div
          class="modal fade z-10 fixed top-0 left-0 hidden text-center w-full h-full outline-none overflow-x-hidden overflow-y-auto"
          id="gst"
          tabindex="-1"
          aria-labelledby="gstModalLgLabel"
          aria-modal="true"
          role="dialog"
        >
          <div className="modal-dialog modal-lg relative w-auto pointer-events-none">
            <div className="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-slate-100 bg-clip-padding rounded-md outline-none text-current">
              <div className="modal-header flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200 rounded-t-md">
                <h5
                  className="text-lg font-medium leading-normal text-gray-800 "
                  id="gstModalLgLabel"
                >
                  Goods And Sevices Tax Council
                </h5>
                <button
                  type="button"
                  className="btn-close box-content w-4 h-4 p-1 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                >
                  <FaTimes size={20} />
                </button>
              </div>
              <div className="modal-body relative p-4">
                <p className="text-center text-gray-600 text-sm font-medium">
                  Deliberation on the GST Act, With special emphasis on
                  Jurisdictional issues.
                </p>
                {/* vice chairperson name */}
                <div class="container mx-auto space-y-9 pt-8 flex md:flex-row flex-col justify-center md:justify-evenly items-center md:items-baseline">
                  <div class="flex justify-center">
                    <div class="rounded-lg shadow-lg bg-white max-w-sm">
                      <img
                        class="rounded-t-lg w-80 h-72 "
                        src="/images/Committees/Aniket Basu_GST_Council_Chairperson.jpg"
                        alt=""
                      />
                      <div class="p-6">
                        <h5 class="text-gray-900 text-xl font-medium mb-2">
                          Chair
                        </h5>
                        <p class="text-gray-700 text-base mb-4">Aniket Basu</p>
                      </div>
                    </div>
                  </div>
                  <div class="flex justify-center">
                    <div class="rounded-lg shadow-lg bg-white max-w-sm">
                      <img
                        class="rounded-t-lg w-80 h-72"
                        src="/images/Committees/Aditya Sharma_GSTCouncil_Vice_Chair.png"
                        alt=""
                      />
                      <div class="p-6">
                        <h5 class="text-gray-900 text-xl font-medium mb-2">
                          Vice Chairperson
                        </h5>
                        <p class="text-gray-700 text-base mb-4">
                          Aditya Sharma
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-full flex justify-center pt-5 pb-5"></div>
                <a href="#_" class="relative inline-block text-sm group">
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
              </div>
            </div>
          </div>
        </div>
        {/* <------------------------------------------------------------------------------------------------------> */}

        <div
          class="modal fade z-10 fixed top-0 left-0 hidden text-center w-full h-full outline-none overflow-x-hidden overflow-y-auto"
          id="uncsw"
          tabindex="-1"
          aria-labelledby="uncswModalLgLabel"
          aria-modal="true"
          role="dialog"
        >
          <div className="modal-dialog modal-lg relative w-auto pointer-events-none">
            <div className="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-slate-100 bg-clip-padding rounded-md outline-none text-current">
              <div className="modal-header flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200 rounded-t-md">
                <h5
                  className="text-lg font-medium leading-normal text-gray-800 "
                  id="uncswModalLgLabel"
                >
                  United Nations Commission on the Status of Women
                </h5>
                <button
                  type="button"
                  className="btn-close box-content w-4 h-4 p-1 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                >
                  <FaTimes size={20} />
                </button>
              </div>
              <div className="modal-body relative p-4">
                <p className="text-center text-gray-600 text-sm font-medium">
                  Issue of decriminalization and legalization of sex work,
                  including the commercial exchange of sexual services
                </p>
                {/* vice chairperson name */}
                <div class="container mx-auto space-y-9 pt-8 flex md:flex-row flex-col justify-center md:justify-evenly items-center md:items-baseline">
                  <div class="flex justify-center">
                    <div class="rounded-lg shadow-lg bg-white max-w-sm">
                      <img
                        class="rounded-t-lg w-72 h-72"
                        src="/images/Committees/Kaveri Rawal_UNCSW_Chairperson.jpeg"
                        alt=""
                      />
                      <div class="p-6">
                        <h5 class="text-gray-900 text-xl font-medium mb-2">
                          Chair
                        </h5>
                        <p class="text-gray-700 text-base mb-4">Kaveri Rawal</p>
                      </div>
                    </div>
                  </div>
                  <div class="flex justify-center">
                    <div class="rounded-lg shadow-lg bg-white max-w-sm">
                      <img
                        class="rounded-t-lg w-72 h-72"
                        src="/images/Committees/Maheen Faizal_UNCSW_Vice_Chair.jpeg"
                        alt=""
                      />
                      <div class="p-6">
                        <h5 class="text-gray-900 text-xl font-medium mb-2">
                          Vice Chairperson
                        </h5>
                        <p class="text-gray-700 text-base mb-4">
                          Maheen Faisal
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="w-full flex justify-center pt-5 pb-5"></div>
                <a href="#_" class="relative inline-block text-sm group">
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
              </div>
            </div>
          </div>
        </div>
        {/* <------------------------------------------------------------------------------------------------------> */}

        <div
          class="modal fade z-10 fixed top-0 left-0 hidden text-center w-full h-full outline-none overflow-x-hidden overflow-y-auto"
          id="unsc"
          tabindex="-1"
          aria-labelledby="unscModalLgLabel"
          aria-modal="true"
          role="dialog"
        >
          <div className="modal-dialog modal-lg relative w-auto pointer-events-none">
            <div className="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-slate-100 bg-clip-padding rounded-md outline-none text-current">
              <div className="modal-header flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200 rounded-t-md">
                <h5
                  className="text-lg font-medium leading-normal text-gray-800 "
                  id="unscModalLgLabel"
                >
                  United Nations security council
                </h5>
                <button
                  type="button"
                  className="btn-close box-content w-4 h-4 p-1 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                >
                  <FaTimes size={20} />
                </button>
              </div>
              <div className="modal-body relative p-4"></div>
              <p className="text-center text-gray-600 text-sm font-medium">
                Deliberation on Taiwan crisis
              </p>
              {/* vice chairperson name */}
              <div class="container mx-auto space-y-9 pt-8 flex md:flex-row flex-col justify-center md:justify-evenly items-center md:items-baseline">
                <div class="flex justify-center">
                  <div class="rounded-lg shadow-lg bg-white max-w-sm">
                    <img
                      class="rounded-t-lg w-72 h-72"
                      src="/images/Committees/Siddharth Kapoor_UNSC_President.jpeg"
                      alt=""
                    />
                    <div class="p-6">
                      <h5 class="text-gray-900 text-xl font-medium mb-2">
                        Chair
                      </h5>
                      <p class="text-gray-700 text-base mb-4">
                        Siddharth Kapoor
                      </p>
                    </div>
                  </div>
                </div>
                <div class="flex justify-center">
                  <div class="rounded-lg shadow-lg bg-white max-w-sm">
                    <img
                      class="rounded-t-lg w-72 h-72"
                      src="/images/Committees/Aryan Singh_UNSC_Vice President.JPG"
                      alt=""
                    />
                    <div class="p-6">
                      <h5 class="text-gray-900 text-xl font-medium mb-2">
                        Vice Chairperson
                      </h5>
                      <p class="text-gray-700 text-base mb-4">Aryan Singh</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="modal-body relative p-4">
                <a href="#_" class="relative inline-block text-sm group">
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
              </div>
            </div>
          </div>
        </div>
        {/* <------------------------------------------------------------------------------------------------------> */}

        <div
          class="modal fade z-10 fixed top-0 left-0 hidden text-center w-full h-full outline-none overflow-x-hidden overflow-y-auto"
          id="unhrc"
          tabindex="-1"
          aria-labelledby="unhrcModalLgLabel"
          aria-modal="true"
          role="dialog"
        >
          <div className="modal-dialog modal-lg relative w-auto pointer-events-none">
            <div className="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-slate-100 bg-clip-padding rounded-md outline-none text-current">
              <div className="modal-header flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200 rounded-t-md">
                <h5
                  className="text-lg font-medium leading-normal text-gray-800 "
                  id="unhrcModalLgLabel"
                >
                  United Nations Human Rights Council
                </h5>
                <button
                  type="button"
                  className="btn-close box-content w-4 h-4 p-1 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                >
                  <FaTimes size={20} />
                </button>
              </div>
              <div className="modal-body relative p-4">
                <p className="text-center text-gray-600 text-sm font-medium">
                  Discussing the humanitarian violations by PMSCs, with a
                  special emphasis on conflicted regions.
                </p>
                {/* vice chairperson name */}
                <div class="container mx-auto space-y-9 pt-8 flex md:flex-row flex-col justify-center md:justify-evenly items-center md:items-baseline">
                  <div class="flex justify-center">
                    <div class="rounded-lg shadow-lg bg-white max-w-sm">
                      <img
                        class="rounded-t-lg 2-72 h-72"
                        src="/images/Committees/Rahul Menon_UNHRC_President.jpg"
                        alt=""
                      />
                      <div class="p-6">
                        <h5 class="text-gray-900 text-xl font-medium mb-2">
                          Chair
                        </h5>
                        <p class="text-gray-700 text-base mb-4">Rahul Menon</p>
                      </div>
                    </div>
                  </div>
                  <div class="flex justify-center">
                    <div class="rounded-lg shadow-lg bg-white max-w-sm">
                      <img
                        class="rounded-t-lg w-72 h-72"
                        src="/images/Committees/Ishan Jain_UNHRC_Vice_President.jpg"
                        alt=""
                      />
                      <div class="p-6">
                        <h5 class="text-gray-900 text-xl font-medium mb-2">
                          Vice Chairperson
                        </h5>
                        <p class="text-gray-700 text-base mb-4">Ishaan Jain</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="w-full flex justify-center pt-5 pb-5"></div>
                <a href="#_" class="relative inline-block text-sm group">
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
              </div>
            </div>
          </div>
        </div>
        {/* <------------------------------------------------------------------------------------------------------> */}

        <div
          class="modal fade z-10 fixed top-0 left-0 hidden text-center w-full h-full outline-none overflow-x-hidden overflow-y-auto"
          id="ip"
          tabindex="-1"
          aria-labelledby="ipModalLgLabel"
          aria-modal="true"
          role="dialog"
        >
          <div className="modal-dialog modal-lg relative w-auto pointer-events-none">
            <div className="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-slate-100 bg-clip-padding rounded-md outline-none text-current">
              <div className="modal-header flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200 rounded-t-md">
                <h5
                  className="text-lg font-medium leading-normal text-gray-800 "
                  id="ipModalLgLabel"
                >
                  International Press
                </h5>
                <button
                  type="button"
                  className="btn-close box-content w-4 h-4 p-1 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                >
                  <FaTimes size={20} />
                </button>
              </div>
              <div className="modal-body relative p-4">
                <p className="text-center text-gray-600 text-sm font-medium"></p>
                {/* vice chairperson name */}
                <div class="container mx-auto space-y-9 pt-8 flex md:flex-row flex-col justify-center md:justify-evenly items-center md:items-baseline">
                  <div class="flex justify-center">
                    <div class="rounded-lg shadow-lg bg-white max-w-sm">
                      <img
                        class="rounded-t-lg w-72 h-72"
                        src="/images/Committees/Shreya_IP_Editor_In_Chief.jpeg"
                        alt=""
                      />
                      <div class="p-6">
                        <h5 class="text-gray-900 text-xl font-medium mb-2">
                          Editor in Chief
                        </h5>
                        <p class="text-gray-700 text-base mb-4">
                          Shreya Chatterjee
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="flex justify-center">
                    <div class="rounded-lg shadow-lg bg-white max-w-sm">
                      <img
                        class="rounded-t-lg"
                        src="/images/Committees/"
                        alt=""
                      />
                      <div class="p-6">
                        <h5 class="text-gray-900 text-xl font-medium mb-2">
                          Head Of Photography
                        </h5>
                        <p class="text-gray-700 text-base mb-4">
                          Gaurish Chawla
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-full flex justify-center pt-5 pb-5"></div>
                <a href="#_" class="relative inline-block text-sm group">
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
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <------------------------------------------------------------------------------------------------------> */}

      {/* <------------------------------------------------------------------------------------------------------> */}

      <section>
        <div className="container flex justify-center mx-auto" id="committees">
          <div>
            <h1 className="xl:text-5xl text-3xl text-gray-800 font-extrabold text-center py-12 mx-auto">
              Our Committees
            </h1>
          </div>
        </div>
        <div className="w-full bg-gray-100 px-10 pt-10">
          <div className="container mx-auto">
            <div className="lg:flex md:flex sm:flex items-center xl:justify-between flex-wrap md:justify-around sm:justify-around lg:justify-around">
              <div
                data-bs-toggle="modal"
                data-bs-target="#disec"
                className="cursor-pointer xl:w-1/3 sm:w-3/4 md:w-2/5 relative mt-16 mb-32 sm:mb-24 xl:max-w-sm lg:w-2/5"
              >
                <div className="rounded overflow-hidden shadow-md bg-white">
                  <div className="absolute -mt-20 w-full flex justify-center">
                    <div className="h-32 w-32">
                      <img
                        src="images/disec.png"
                        alt=""
                        className="rounded-full object-cover h-30 w-30 shadow-md"
                      />
                    </div>
                  </div>
                  <div className="px-6 mt-16">
                    <div className="font-bold text-2xl text-center pb-1">
                      UNGA DISEC
                    </div>
                    <p className="text-gray-800 text-sm text-center">
                      Disarmament and International Security Committee
                    </p>
                    <p className="text-center pt-4 text-xs font-medium">
                      Deliberation on the Treaty on Amity and Cooperation
                      ("TAC") signed by Ukraine at the annual summit of the
                      Association of Southeast Asian Nations (ASEAN).
                    </p>
                    <div className="w-full flex justify-center pt-5 pb-5">
                      <a href="/" className="mx-5">
                        <div></div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div
                data-bs-toggle="modal"
                data-bs-target="#gst"
                className="xl:w-1/3 sm:w-3/4 md:w-2/5 relative mt-16 mb-32 sm:mb-24 xl:max-w-sm lg:w-2/5 cursor-pointer "
              >
                <div className="rounded overflow-hidden shadow-md bg-white">
                  <div className="absolute -mt-20 w-full flex justify-center ">
                    <div className="h-32 w-32">
                      <img
                        src="/images/gst.png"
                        alt=""
                        className="rounded-full object-cover h-30 w-30shadow-md"
                      />
                    </div>
                  </div>
                  <div className="px-6 mt-16">
                    <div className="font-bold text-2xl text-center pb-1">
                      GST COUNCIL
                    </div>
                    <p className="text-gray-800 text-sm text-center">
                      Goods And Sevices Tax Council
                    </p>
                    <p className="text-center pt-4 text-xs font-medium  ">
                      Deliberation on the GST Act, With special emphasis on
                      Jurisdictional issues.
                    </p>
                    <div className="w-full flex justify-center pt-5 pb-5"></div>
                  </div>
                </div>
              </div>
              <div
                data-bs-toggle="modal"
                data-bs-target="#uncsw"
                className="xl:w-1/3 sm:w-3/4 md:w-2/5 relative mt-16 mb-32 sm:mb-24 xl:max-w-sm lg:w-2/5 cursor-pointer "
              >
                <div className="rounded overflow-hidden shadow-md bg-white">
                  <div className="absolute -mt-20 w-full flex justify-center">
                    <div className="h-32 w-32">
                      <img
                        src="/images/sc.png"
                        alt=""
                        className="rounded-full object-cover h-30 w-30 shadow-md"
                      />
                    </div>
                  </div>
                  <div className="px-6 mt-16">
                    <div className="font-bold text-2xl text-center pb-1">
                      UNCSW
                    </div>
                    <p className="text-gray-800 text-sm text-center">
                      United Nations Commission on the Status of Women
                    </p>
                    <p className="text-center pt-4 text-xs font-medium">
                      Issue of decriminalization and legalization of sex work,
                      including the commercial exchange of sexual services.
                    </p>
                    <div className="w-full flex justify-center pt-5 pb-5"></div>
                  </div>
                </div>
              </div>
              <div
                data-bs-toggle="modal"
                data-bs-target="#unsc"
                className="xl:w-1/3 sm:w-3/4 md:w-2/5 relative mt-16 mb-32 sm:mb-24 xl:max-w-sm lg:w-2/5 cursor-pointer "
              >
                <div className="rounded overflow-hidden shadow-md bg-white">
                  <div className="absolute -mt-20 w-full flex justify-center">
                    <div className="h-32 w-32">
                      <img
                        src="/images/unsc.png"
                        alt=""
                        className="rounded-full object-cover h-30 w-30 shadow-md"
                      />
                    </div>
                  </div>
                  <div className="px-6 mt-16">
                    <div className="font-bold text-2xl text-center pb-1">
                      UNSC
                    </div>
                    <p className="text-gray-800 text-sm text-center">
                      United Nations security council
                    </p>
                    <p className="text-center pt-4 text-xs font-medium">
                      Deliberation on Taiwan crisis
                    </p>
                    <div className="w-full flex justify-center pt-5 pb-5"></div>
                  </div>
                </div>
              </div>
              <div
                data-bs-toggle="modal"
                data-bs-target="#unhrc"
                className="xl:w-1/3 sm:w-3/4 md:w-2/5 relative mt-16 mb-32 sm:mb-24 xl:max-w-sm lg:w-2/5 cursor-pointer "
              >
                <div className="rounded overflow-hidden shadow-md bg-white">
                  <div className="absolute -mt-20 w-full flex justify-center">
                    <div className="h-32 w-32">
                      <img
                        src="/images/unhrc.png"
                        alt=""
                        className="rounded-full object-cover h-full w-full shadow-md"
                      />
                    </div>
                  </div>
                  <div className="px-6 mt-16">
                    <div className="font-bold text-2xl text-center pb-1">
                      UNHRC
                    </div>
                    <p className="text-gray-800 text-sm text-center">
                      United Nations Human Rights Council
                    </p>
                    <p className="text-center pt-4 text-xs font-medium">
                      Discussing the humanitarian violations by PMSCs, with a
                      special emphasis on conflicted regions.
                    </p>
                    <div className="w-full flex justify-center pt-5 pb-5"></div>
                  </div>
                </div>
              </div>
              <div
                data-bs-toggle="modal"
                data-bs-target="#ip"
                className="xl:w-1/3 sm:w-3/4 md:w-2/5 relative mt-16 mb-32 sm:mb-24 xl:max-w-sm lg:w-2/5 cursor-pointer "
              >
                <div className="rounded overflow-hidden shadow-md bg-white">
                  <div className="absolute -mt-20 w-full flex justify-center">
                    <div className="h-32 w-32">
                      <img
                        src="/images/ip.jpg"
                        alt=""
                        className="rounded-full object-cover h-full w-full shadow-md"
                      />
                    </div>
                  </div>
                  <div className="px-6 mt-16">
                    <div className="font-bold text-2xl text-center pb-1">
                      IP
                    </div>
                    <p className="text-gray-800 text-sm text-center">
                      International Press
                    </p>
                    <p className="text-center pt-4 text-xs font-medium"></p>
                    <div className="w-full flex justify-center pt-5 pb-5"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Committees;
