import React from "react";

const About = () => {
  return (
    <section className="text-white bg-slate-800" id="aboutus">
      <div className="container w-full mx-auto flex flex-col px-8 py-24 justify-center items-center">
        <h1 className="text-4xl md:text-5xl mb-16 font-semibold md:font-bold">
          ABOUT US
        </h1>
        <p className="text-xs leading-relaxed md:text-base mb-5 md:px-24 text-center">
        DelTech MUN and Debating society, the oldest debating society in DTU, is a collection of discussing
enthusiasts spread out across both verticals of the University, the Main Campus, and the University
School of Management & Entrepreneurship (East Campus). The society organizes an array of events
over the year, the main event being the DelTech Model United Nations Conference, which is one of
the most eminent conferences in the Delhi circuit. Other events include weekly charchas,
'Youth ki
Awaa,
' mock MUNs, group discussions, and intra-MUN.
        </p>
      </div>
    </section>
  );
};

export default About;
