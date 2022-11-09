import React from "react";
const Main = () => {
  return (
    <div>
    <section className='text-gray-600 -z-50 w-screen' id="home" >
      <div className="mx-0 content-center">
      
      <div className="relative w-screen h-screen ">
        <div
            className="w-screen h-full bg-[url('landing_notext.png')] bg-cover bg-center backdrop-blur-3xl mix-blend-darken">
       
        <div
            className="content-center flex flex-col h-screen justify-center items-center">
            <h1 className="mt-5 text-center md:text-7xl text-5xl text-white bg-black/70 backdrop-blur-sm font-semibold drop-shadow-lg py-2 border-black mix-blend-darken">
            DELTECH MODEL UNITED NATIONS CONFERENCE 2023
            </h1>
            <div className="py-5 justify-center flex md:flex-row flex-col">
            <div className="md:inline-flex border-0 py-1 mt-2 px-3 focus:outline-none bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 rounded text-base mx-2 transition-all ease-linear">
          Register Now
        </div>
        <button className="md:inline-flex border-0 py-1 px-3 mt-2 focus:outline-none bg-white hover:outline-2 outline hover:bg-transparent hover:text-black rounded text-base mx-2 ease-linear transition-all">
          Know More
        </button>

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