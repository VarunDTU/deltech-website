import React from "react";
import Timer from "./timeer";
import {Link} from 'react-scroll';
const Main = () => {
  return (
    <div>
    <section className='text-gray-600 -z-50 w-full' id="home" >
      <div className="mx-0 content-center">
      
      <div className="relative w-full h-screen ">
        <div
            className="w-full h-full absolute -z-10 bg-delbg backdrop-blur-sm bg-cover bg-center">
       </div>
        <div
            className="content-center flex flex-col h-screen justify-center items-center py-10 backdrop-blur-md">
              <div className="items-center justify-center flex flex-col py-2">
              <h2 className="mt-9 text-center md:text-2xl text-xl text-gray-800 italic font-Montserrat md:lh1 drop-shadow-lg py-2 border-black">
            Deltech MUN & Debating Society <br/>presents
            </h2>
            <h1 className="mt-5 text-center md:text-8xl text-6xl text-white/80 font-lato lh1 font-bold  border-black">
            DELTECH MUN 2023
            </h1>
            
            <i className="mt-5 text-center md:text-xl text-md text-gray-800 font-Montserrat italic drop-shadow-lg border-black">
            Where The Diplomacy Begins
            </i>
            <i className="mt-1 text-center md:text-xl text-md text-gray-800 font-Montserrat italic drop-shadow-lg border-black">
            On<br/>7th & 8th January 2023
            </i>
          
            </div>

    <Timer></Timer> 
            <div className="flex flex-row py-3">
              <Link  to="aboutus"  smooth={true}  duration={200}>
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
              </Link >
            <div className="py-5 justify-center flex md:flex-row flex-col z-5 mx-3">
            <a href="#_" class="relative inline-block text-lg group">
<span class="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
<span class="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
<span class="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gradient-to-r from-blue-500 to-purple-500 group-hover:rotate-180 ease"></span>
<span class="relative">Register Now</span>
</span>
<span class="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-700 rounded-lg group-hover:mb-0 group-hover:mr-0" data-rounded="rounded-lg"></span>
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