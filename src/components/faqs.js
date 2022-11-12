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
    <section className=" text-white bg-cyan-800">
      <div className="container w-11/12 mx-auto flex flex-col px-5 py-24 justify-center ">
        <h1 className="text-5xl mb-16 font-bold text-center">FAQ&#39;S</h1>
        <div className="mb-5 text-md sm:text-lg">
          <div className="border-b-2 border-white mb-4">
            <div className=" flex flex-row justify-between  pb-2 hover:-translate-y-1 hover:text-cyan-400 hover:cursor-pointer" onClick={toggle1}>
              <h2 className="">What is DELTECH-MUN?</h2>
              <span className="right-0" style={{ transform: open1 ? "rotate(180deg)" : "" }}>
                <FaAngleDown size={25} />
              </span>
            </div>
            <p
              className="text-xs leading-relaxed mb-3 sm:text-base ml-4 overflow-hidden "
              style={{ height: open1 ? "" : "0" }}
             
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi,
              laudantium cum! Eos incidunt fugiat, corrupti impedit libero
              veniam? Eum quidem cupiditate inventore ducimus asperiores quaerat
              a, nemo iure. Doloremque, officia. Tenetur sapiente quae ab?
              Eveniet, deserunt ducimus! Magni et libero odio quibusdam
              doloremque officia est, fugiat adipisci iure minima mollitia quasi
              aperiam, quo ratione numquam.
            </p>
          </div>
          <div className="border-b-2 border-white mb-4 ">
            <div className="flex flex-row justify-between pb-2 hover:-translate-y-1 hover:text-cyan-400 hover:cursor-pointer" onClick={toggle2}>
            <h2 className=" ">What is DELTECH-MUN?</h2>
              <span className="right-0" style={{ transform: open2 ? "rotate(180deg)" : "" }}>
                <FaAngleDown size={25} />
              </span>
            </div>
            <p
              className="text-xs leading-relaxed mb-3 ml-4 sm:text-base overflow-hidden"
              style={{ height: open2 ? "" : "0" }}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi,
              laudantium cum! Eos incidunt fugiat, corrupti impedit libero
              veniam? Eum quidem cupiditate inventore ducimus asperiores quaerat
              a, nemo iure. Doloremque, officia. Tenetur sapiente quae ab?
              Eveniet, deserunt ducimus! Magni et libero odio quibusdam
              doloremque officia est, fugiat adipisci iure minima mollitia quasi
              aperiam, quo ratione numquam.
            </p>
          </div>
          <div className="border-b-2 border-white mb-4 ">
            <div className="flex flex-row justify-between pb-2 hover:-translate-y-1 hover:text-cyan-400 hover:cursor-pointer" onClick={toggle3}>
            <h2 className="  ">What is DELTECH-MUN?</h2>
              <span className="right-0" style={{ transform: open3 ? "rotate(180deg)" : "" }}>
                <FaAngleDown size={25} />
              </span>
            </div>
            <p
              className="text-xs leading-relaxed mb-3 ml-4 sm:text-base overflow-hidden"
              style={{ height: open3 ? "" : "0" }}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi,
              laudantium cum! Eos incidunt fugiat, corrupti impedit libero
              veniam? Eum quidem cupiditate inventore ducimus asperiores quaerat
              a, nemo iure. Doloremque, officia. Tenetur sapiente quae ab?
              Eveniet, deserunt ducimus! Magni et libero odio quibusdam
              doloremque officia est, fugiat adipisci iure minima mollitia quasi
              aperiam, quo ratione numquam.
            </p>
          </div>
          <div className="border-b-2 border-white mb-4 ">
            <div className="flex flex-row justify-between pb-2 hover:text-cyan-400 hover:-translate-y-1 hover:cursor-pointer" onClick={toggle4}>
            <h2 className="">What is DELTECH-MUN?</h2>
              <span className="right-0"  style={{ transform: open4 ? "rotate(180deg)" : "" }}>
                <FaAngleDown size={25} />
              </span>
            </div>
            <p
              className="text-xs leading-relaxed mb-3 ml-4 sm:text-base overflow-hidden"
              style={{ height: open4 ? "" : "0" }}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi,
              laudantium cum! Eos incidunt fugiat, corrupti impedit libero
              veniam? Eum quidem cupiditate inventore ducimus asperiores quaerat
              a, nemo iure. Doloremque, officia. Tenetur sapiente quae ab?
              Eveniet, deserunt ducimus! Magni et libero odio quibusdam
              doloremque officia est, fugiat adipisci iure minima mollitia quasi
              aperiam, quo ratione numquam.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faqs;