import React from "react";
const Main = () => {
  return (
    <div>
    <section className='text-gray-600 -z-50 w-full' id="home" >
      <div className="mx-0 content-center">
      
      <div className="relative w-screen h-screen ">
        <div
            className="w-full h-full bg-[url('landing_notext.png')] bg-cover bg-center">
       
        <div
            className="content-center flex flex-col h-screen justify-center items-center">
            <h1 className="mt-5 text-center md:text-7xl text-5xl text-white bg-black/70 backdrop-blur-sm font-semibold drop-shadow-lg py-2 border-black mix-blend-darken">
            DELTECH MODEL UNITED NATIONS CONFERENCE 2023
            </h1>
            <div className="py-5 justify-center flex md:flex-row flex-col bg-transparent">
            <button class="relative group px-6 h-12 rounded-full bg-red-500
                      before:absolute 
                      before:inset-0 
                      before:bg-red-700 
                      before:scale-x-0 
                      before:origin-right
                      before:transition
                      before:duration-300
                      hover:before:scale-x-100
                      hover:before:origin-left
                      ">
          <span class="relative uppercase text-base text-white">Shop now</span>
        </button>
        <button class="relative group overflow-hidden px-6 h-12 rounded-full flex space-x-2 items-center bg-gradient-to-r from-pink-500 to-purple-500 hover:to-purple-600">
          <span class="relative text-sm text-white">Get Started</span>
          <div class="flex items-center -space-x-3 translate-x-3">
            <div class="w-2.5 h-[1.6px] rounded bg-white origin-left scale-x-0 transition duration-300 group-hover:scale-x-100"></div>
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 stroke-white -translate-x-2 transition duration-300 group-hover:translate-x-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </div>
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