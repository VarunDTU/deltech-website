import React from "react";

const About = () => {
  return (
    <section className="text-white bg-slate-800" id="aboutus">
      <h1 className="text-4xl md:text-5xl text-center bg-slate-900 py-8 mb-6 md:mb-16 font-semibold md:font-bold">
        ABOUT US
      </h1>

      <div className="flex flex-col md:flex-row justify-evenly w-full items-center pb-16">
      <div className="md:py-10 py-5 pb-8">
          <img
            src="/images/whiteDelTech.png"
            alt=""
            className="md:h-60 h-48"
          ></img>
        </div>
        <div className="w-full md:w-1/2">
          <p className="leading-normal mb-5 mx-10">
            DelTech MUN and Debating society, the oldest debating society in
            DTU, is a collection of discussing enthusiasts spread out across
            both verticals of the University, the Main Campus, and the
            University School of Management & Entrepreneurship (East Campus).
            The society organizes an array of events over the year, the main
            event being the DelTech Model United Nations Conference, which is
            one of the most eminent conferences in the Delhi circuit. Other
            events include weekly charchas, 'Youth ki Awaaz, ' mock MUNs, group
            discussions, and intra-MUN.
          </p>
        </div>
       
      </div>
    </section>
  );
};

export default About;
