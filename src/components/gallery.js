import React from "react";

const Gallery = () => {
  return (
    <section class="overflow-hidden text-gray-700 justify-center">
      <h1 className="md:text-5xl text-3xl text-slate-800 font-extrabold text-center py-10 mx-auto">
            GALLERY
          </h1>
      <div class="py-6 lg:py-10 bg-gray-200 pb-10 md:px-10 justify-center items-center">
        <div class="flex md:flex-row flex-col">
          <div class="">
            <div class="w-full p-1 md:p-2">
              <img
                alt="gallery"
                class="block object-cover object-center w-full h-full rounded-lg"
                src="/images/polaroid-02.jpg"
              />
            </div>
          </div>
          <div class="flex flex-wrap">
            <div class="w-full p-1 md:p-2">
              <img
                alt="gallery"
                class="block object-cover object-center w-full h-full rounded-lg"
                src="/images/polaroid-01.jpg"
              />
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
