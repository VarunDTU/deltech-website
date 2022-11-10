import React from "react";
import Timer from "./timeer";
const Main = () => {
  return (
    <div>
    <section className='text-gray-600 -z-50 w-full' id="home" >
      <div className="mx-0 content-center">
      
      <div className="relative w-screen h-screen ">
        <div
            className="w-full h-full bg-[url('without_text.jpg')] bg-cover bg-center backdrop-blur-3xl mix-blend-darken">
       
        <div
            className="content-center flex flex-col h-screen justify-center items-center">
            <h1 className="mt-5 text-center md:text-7xl text-5xl text-white bg-black/70 backdrop-blur-sm font-semibold drop-shadow-lg py-2 border-black mix-blend-darken">
            DELTECH MODEL UNITED NATIONS CONFERENCE 2023
            </h1>
            <div className="flex flex-row ">
            <div className="py-5 justify-center flex md:flex-row flex-col z-5 mx-3">
            <a href="#_" class="relative inline-block text-lg group">
<span class="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
<span class="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
<span class="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span>
<span class="relative">Explore</span>
</span>
<span class="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0" data-rounded="rounded-lg"></span>
</a>

            </div>
            <div className="py-5 justify-center flex md:flex-row flex-col z-5 mx-3">
            <a href="#_" class="relative inline-block text-lg group">
<span class="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
<span class="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
<span class="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gradient-to-r from-pink-500 to-purple-500 group-hover:rotate-180 ease"></span>
<span class="relative">Register Now</span>
</span>
<span class="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-700 rounded-lg group-hover:mb-0 group-hover:mr-0" data-rounded="rounded-lg"></span>
</a>

            </div>
            </div>
            
    <Timer></Timer> 
        </div>
        </div>
    </div> 
    </div>
    </section>
    </div>
  );
};

export default Main;