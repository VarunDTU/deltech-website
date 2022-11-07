import Slider from "react-slick";
import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const Main = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <div>
    <section className='text-gray-600 -z-50 w-screen' id="home" >
      <div className="mx-0 content-center">
      <Slider  {...settings}>
      <div className="relative w-screen h-screen ">
        <div
            className="w-screen h-full bg-[url('party1.jpg')] bg-cover bg-center blur-sm">
        </div>
        <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col justify-center items-center">
            <h1 className="mt-5 text-center text-7xl text-white font-semibold drop-shadow-lg">
            DelTech MUN
            </h1>
            <div className="py-5 justify-center flex md:flex-row flex-col">
            <div className="md:inline-flex border-0 py-1 px-3 focus:outline-none bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 rounded text-base mx-2">
          Register Now
        </div>
        <button className="md:inline-flex border-0 py-1 px-3 focus:outline-none bg-white hover:outline-2 outline hover:bg-transparent hover:text-red-900 rounded text-base mx-2">
          Know More
        </button>

            </div>
        
        </div>
    </div>
    </Slider>
    </div>
    </section>
    </div>
  );
};

export default Main;