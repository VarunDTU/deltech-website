import React from "react";
import disec from "../images/disec.png";
import sc from "../images/sc.png";
import gst from "../images/gst.png";
import unhrc from "../images/unhrc.png";
import securityCouncil from "../images/securityCouncil.png";

const Committees = () => {
  return (
    <div>
      <div className="container flex justify-center mx-auto pt-16">
        <div>
          <p className="text-gray-500 text-lg text-center font-normal pb-3">
            DELTECH MUN
          </p>
          <h1 className="xl:text-4xl text-3xl text-gray-800 font-extrabold pb-6  mx-auto">
            Our Committees
          </h1>
        </div>
      </div>
      <div className="w-full bg-gray-100 px-10 pt-10">
        <div className="container mx-auto">
          <div className="lg:flex md:flex sm:flex items-center xl:justify-between flex-wrap md:justify-around sm:justify-around lg:justify-around">
            <div className="xl:w-1/3 sm:w-3/4 md:w-2/5 relative mt-16 mb-32 sm:mb-24 xl:max-w-sm lg:w-2/5">
              <div className="rounded overflow-hidden shadow-md bg-white">
                <div className="absolute -mt-20 w-full flex justify-center">
                  <div className="h-32 w-32">
                    <img
                      src={disec}
                      alt=""
                      className="rounded-full object-cover h-full w-full shadow-md"
                    />
                  </div>
                </div>
                <div className="px-6 mt-16">
                  <div className="font-bold text-3xl text-center pb-1">
                    Andres Berlin
                  </div>
                  <p className="text-gray-800 text-sm text-center">Chief</p>
                  <p className="text-center text-gray-600 text-base pt-3 font-normal">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Eius, delectus?
                  </p>
                  <div className="w-full flex justify-center pt-5 pb-5">
                    <a href="/" className="mx-5">
                      <div></div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="xl:w-1/3 sm:w-3/4 md:w-2/5 relative mt-16 mb-32 sm:mb-24 xl:max-w-sm lg:w-2/5">
              <div className="rounded overflow-hidden shadow-md bg-white">
                <div className="absolute -mt-20 w-full flex justify-center">
                  <div className="h-32 w-32">
                    <img
                      src={gst}
                      alt=""
                      className="rounded-full object-cover h-full w-full shadow-md"
                    />
                  </div>
                </div>
                <div className="px-6 mt-16">
                  <div className="font-bold text-3xl text-center pb-1">
                    Silene Tokyo
                  </div>
                  <p className="text-gray-800 text-sm text-center">Head</p>
                  <p className="text-center text-gray-600 text-base pt-3 font-normal">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Eaque rem unde accusantium ratione neque quisquam alias
                    ullam? Commodi, dolore tenetur!
                  </p>
                  <div className="w-full flex justify-center pt-5 pb-5"></div>
                </div>
              </div>
            </div>
            <div className="xl:w-1/3 sm:w-3/4 md:w-2/5 relative mt-16 mb-32 sm:mb-24 xl:max-w-sm lg:w-2/5">
              <div className="rounded overflow-hidden shadow-md bg-white">
                <div className="absolute -mt-20 w-full flex justify-center">
                  <div className="h-32 w-32">
                    <img
                      src={sc}
                      alt=""
                      className="rounded-full object-cover h-full w-full shadow-md"
                    />
                  </div>
                </div>
                <div className="px-6 mt-16">
                  <div className="font-bold text-3xl text-center pb-1">
                    Johnson Stone
                  </div>
                  <p className="text-gray-800 text-sm text-center">
                    Development
                  </p>
                  <p className="text-center text-gray-600 text-base pt-3 font-normal">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Odit eius error iure maxime nemo culpa!
                  </p>
                  <div className="w-full flex justify-center pt-5 pb-5"></div>
                </div>
              </div>
            </div>
            <div className="xl:w-1/3 sm:w-3/4 md:w-2/5 relative mt-16 mb-32 sm:mb-24 xl:max-w-sm lg:w-2/5">
              <div className="rounded overflow-hidden shadow-md bg-white">
                <div className="absolute -mt-20 w-full flex justify-center">
                  <div className="h-32 w-32">
                    <img
                      src={securityCouncil}
                      alt=""
                      className="rounded-full object-cover h-full w-full shadow-md"
                    />
                  </div>
                </div>
                <div className="px-6 mt-16">
                  <div className="font-bold text-3xl text-center pb-1">
                    Dean Jones
                  </div>
                  <p className="text-gray-800 text-sm text-center">Principal</p>
                  <p className="text-center text-gray-600 text-base pt-3 font-normal">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex
                    voluptas eaque quaerat!
                  </p>
                  <div className="w-full flex justify-center pt-5 pb-5"></div>
                </div>
              </div>
            </div>
            <div className="xl:w-1/3 sm:w-3/4 md:w-2/5 relative mt-16 mb-32 sm:mb-24 xl:max-w-sm lg:w-2/5">
              <div className="rounded overflow-hidden shadow-md bg-white">
                <div className="absolute -mt-20 w-full flex justify-center">
                  <div className="h-32 w-32">
                    <img
                      src={unhrc}
                      alt=""
                      className="rounded-full object-cover h-full w-full shadow-md"
                    />
                  </div>
                </div>
                <div className="px-6 mt-16">
                  <div className="font-bold text-3xl text-center pb-1">
                    Rachel Adams
                  </div>
                  <p className="text-gray-800 text-sm text-center">Product</p>
                  <p className="text-center text-gray-600 text-base pt-3 font-normal">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Consequatur, beatae.
                  </p>
                  <div className="w-full flex justify-center pt-5 pb-5"></div>
                </div>
              </div>
            </div>
            <div className="xl:w-1/3 sm:w-3/4 md:w-2/5 relative mt-16 mb-32 sm:mb-24 xl:max-w-sm lg:w-2/5">
              <div className="rounded overflow-hidden shadow-md bg-white">
                <div className="absolute -mt-20 w-full flex justify-center">
                  <div className="h-32 w-32">
                    <img
                      src="https://cdn.tuk.dev/assets/photo-1570211776045-af3a51026f4a.jfif"
                      alt=""
                      className="rounded-full object-cover h-full w-full shadow-md"
                    />
                  </div>
                </div>
                <div className="px-6 mt-16">
                  <div className="font-bold text-3xl text-center pb-1">
                    Charles Keith
                  </div>
                  <p className="text-gray-800 text-sm text-center">Uv</p>
                  <p className="text-center text-gray-600 text-base pt-3 font-normal">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Expedita, sunt?
                  </p>
                  <div className="w-full flex justify-center pt-5 pb-5"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Committees;
