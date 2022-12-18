import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

const Dashboard = () => {
  const { currentUser, logout } = useAuth();
  let del_status = "Not Applied",
    ip_status = "Not Applied";
  const handlelogout = async () => {
    await logout();
  };
  return (
    <div className="">
      <div className="w-screen bg-slate-800 h-20 justify-between px-10 flex flex-row">
        <p1 className="text-slate-100 py-5">Hi! {currentUser.email}</p1>
        <button onClick={handlelogout}>
          <p1 className="py-5 hover:text-red-400 text-white">Logout</p1>
        </button>
      </div>
      <div className="flex w-screen md:flex-row flex-col px-10 items-center justify-center py-10 ">
        <div className="w-full rounded-lg shadow-md my-5 lg:max-w-sm mx-10 ">
          <img
            className="object-full px-5 w-full h-52"
            src="/images/ip.jpg"
            alt=""
          />
          <div className="p-4">
            <h4 className="text-xl font-semibold tracking-tight text-blue-600">
              International Press
            </h4>
            <p className="mb-2 py-10 leading-normal">Status: {ip_status}</p>
            <div className="flex flex-row justify-evenly">
              <button className="px-4 py-2 text-sm text-blue-100 bg-blue-500 rounded shadow">
                Read more
              </button>
              <Link
                href="/ipRegistration"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="px-4 py-2 text-sm text-blue-100 bg-blue-500 rounded shadow">
                  Application
                </button>
              </Link>
            </div>
          </div>
        </div>

        <div className="w-full rounded-lg shadow-md lg:max-w-sm mx-10">
          <img
            className="object-cover w-full h-52 px-5"
            src="https://cdn.pixabay.com/photo/2022/08/18/09/20/houses-7394390__340.jpg"
            alt=""
          />
          <div className="p-4">
            <h4 className="text-xl font-semibold tracking-tight text-blue-600">
              Delegate Application
            </h4>
            <p className="mb-2 py-10 leading-normal">Status: {del_status}</p>
            <div className="flex flex-row justify-evenly">
              <button className="px-4 py-2 text-sm text-blue-100 bg-blue-500 rounded shadow">
                Read more
              </button>
              <Link
                href="/dgRegistration"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="px-4 py-2 text-sm text-blue-100 bg-blue-500 rounded shadow">
                  Form
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
