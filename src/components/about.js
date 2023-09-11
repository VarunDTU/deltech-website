import React from "react";

const About = () => {
  return (
    <section className="text-white bg-slate-800 backdrop-blur-md" id="aboutus">
      <h1 className="text-4xl md:text-5xl text-center font-sans bg-slate-900 py-12 font-semibold md:font-bold">
        DELTECH MUN'24
      </h1>

      <div className="flex flex-col md:flex-row justify-center w-full items-center ">

        <h1 className="uppercase font-serif text-yellow-300 font-semibold py-36 md:text-7xl text-5xl leading-10  align-middle text-center ">Details <br /> Coming soon</h1>
        {/* <div className="md:py-10 py-5 pb-8">
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
        </div> */}
      </div>
    </section>
  );
};

export default About;
