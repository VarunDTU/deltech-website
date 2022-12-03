import React from "react";

const About = () => {
  return (
    <section className="text-white bg-slate-800" id="aboutus">
      <h1 className="text-4xl md:text-5xl text-center bg-slate-900 py-8 mb-16 font-semibold md:font-bold">
        ABOUT US
      </h1>
      
      <div className="flex flex-col md:flex-row-reverse justify-end items-center pb-16">
        <div className="w-full">
        <p className="leading-normal mb-5 text-center mx-10">
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
        <div className="w-full mx-10 items-center">
        <img src="/images/whiteDelTech.png" className="w-80 h-80 align-middle ml-12"></img>
          
        </div>
      </div>
    </section>
    
  );
};

export default About;
