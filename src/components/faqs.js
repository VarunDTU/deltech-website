import React, { useState } from "react";
import { FaAngleDown } from "react-icons/fa";

const Faqs = () => {
  const [open1, setOpen1] = useState(false);
  const toggle1 = () => setOpen1(!open1);
  const [open2, setOpen2] = useState(false);
  const toggle2 = () => setOpen2(!open2);
  const [open3, setOpen3] = useState(false);
  const toggle3 = () => setOpen3(!open3);
  const [open4, setOpen4] = useState(false);
  const toggle4 = () => setOpen4(!open4);
  return (
    <section className=" text-white bg-cyan-900">
      <div className="container flex flex-col pb-6 justify-center">
        <h1 className="text-5xl mb-16 font-bold w-full text-white bg-cyan-800 text-center py-10">FAQ&#39;S</h1>
        <div className="mb-5 text-md sm:text-lg px-10">
          <div className=" mb-4">
            <div className=" flex flex-row justify-between py-2 pb-2  hover:-translate-y-1 hover:text-cyan-400 rounded px-2  hover:cursor-pointer" onClick={toggle1}>
              <h2 className="">Where is the venue?</h2>
              <span className="right-0" style={{ transform: open1 ? "rotate(180deg)" : "" }}>
                <FaAngleDown size={25} />
              </span>
            </div>
            <p
              className="text-xs leading-relaxed mb-3 sm:text-base mt-4 text-white ml-10 overflow-hidden "
              style={{ height: open1 ? "" : "0" }}
             
            >
              B.R. Auditorium Delhi Technological University.
            </p>
          </div>
          <div className=" mb-4 ">
            <div className="flex flex-row py-2 px-2  rounded  justify-between pb-2 hover:-translate-y-1 hover:text-cyan-400 hover:cursor-pointer" onClick={toggle2}>
            <h2 className=" ">What are the dates?</h2>
              <span className="right-0" style={{ transform: open2 ? "rotate(180deg)" : "" }}>
                <FaAngleDown size={25} />
              </span>
            </div>
            <p
              className="text-xs leading-relaxed mb-3 ml-10 mt-4 sm:text-base text-white overflow-hidden"
              style={{ height: open2 ? "" : "0" }}
            >
              7th & 8th January 2023.
            </p>
          </div>
          <div className=" mb-4 ">
            <div className="flex flex-row justify-between py-2 px-2 rounded pb-2 hover:-translate-y-1 hover:text-cyan-400 hover:cursor-pointer" onClick={toggle3}>
            <h2 className="  ">Will Outstation delegates be provided with accomodation?</h2>
              <span className="right-0" style={{ transform: open3 ? "rotate(180deg)" : "" }}>
                <FaAngleDown size={25} />
              </span>
            </div>
            <p
              className="text-xs leading-relaxed mb-3 ml-10 mt-4 sm:text-base text-white overflow-hidden"
              style={{ height: open3 ? "" : "0" }}
            >
              Accomodation would be on requirement basis. The charges for each day would be bare by the delegates themselves.
            </p>
          </div>
          <div className="mb-4 ">
            <div className="flex flex-row justify-between pb-2 py-2 px-2 rounded  hover:text-cyan-400 hover:-translate-y-1 hover:cursor-pointer" onClick={toggle4}>
            <h2 className="">What all is included in the delegation fees?</h2>
              <span className="right-0"  style={{ transform: open4 ? "rotate(180deg)" : "" }}>
                <FaAngleDown size={25} />
              </span>
            </div>
            <p
              className="text-xs leading-relaxed mb-3 ml-10 mt-4 sm:text-base text-white overflow-hidden"
              style={{ height: open4 ? "" : "0" }}
            >
              The fees would cover,breakfast,lunch and Night tea on the 7th & 8th January 2023. However, the delegates who opt for accomodation would bear the prices separately.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faqs;