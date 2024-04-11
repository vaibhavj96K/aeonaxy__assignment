import React, { useState } from "react";

import data from "../data/data";

const tabs = ["Personal Help", "Bussiness Help", "Technical Help"];
const Tabs = () => {
  const [currentTab, setCurrentTab] = useState(tabs[0]);
  const [currentQ, setCurrentQ] = useState(data[0].questions);
  const [message, setMessage] = useState(data[0].help);

  function handleClick(tab) {
    setCurrentTab(tab);
    let result = data.filter((ele) => ele.tag === tab);
    setCurrentQ(result[0]?.questions);
    setMessage(result[0]?.help);
  }
  return (
    <div className="w-screen ">
      <div className="w-10/12 mx-auto mt-3 mb-2">
        <div className="w-[85%]  lg:w-[55%] mx-auto">
          <div className="mt-2 gap-4 flex justify-center  items-center lg:gap-6 border border-transparent rounded-full bg-[#f4f3f1]  py-2 px-1 lg:py-1">
            {tabs.map((tab, index) => (
              <div
                key={index}
                className={` text-black text-[10px]${
                  tab === currentTab &&
                  "  bg-white px-3 py-2 lg:text-black rounded-full lg:px-6 lg:py-2"
                } hover:cursor-pointer `}
                onClick={() => handleClick(tab)}
              >
                <p className="text-[11px] lg:text-xl">{tab}</p>
              </div>
            ))}
          </div>
        </div>

        {/* tab Data */}
        <div className="flex gap-5 mt-6 px-8">
          {/* 1st part */}
          <div className=" hidden lg:flex flex-col lg:w-[22%]">
            <div className="flex items-center bg-blue-100 ">
              <span className="border-l-2 border-blue-900 w-2 h-6"></span>
              <p className="font-semibold text-blue-900 ">Common Questions</p>
            </div>
            <div className="mt-3 flex flex-col gap-2 ">
              {message.map((que, index) => (
                <p
                  key={index}
                  className="hover:cursor-pointer py-1 px-2 hover:bg-blue-100"
                >
                  {que}
                </p>
              ))}
            </div>
          </div>
          {/* 2nd part of Questions */}
          <div className="w-[100%] lg:w-[45%] ml-2 ">
            <h2 className="font-semibold text-xl">Common Questions </h2>
            <div className="mt-3 flex flex-col gap-2 font-semibold text-blue-800 ">
              {currentQ.map((mes, index) => (
                <p key={index} className="hover:cursor-pointer">
                  {mes}
                </p>
              ))}
            </div>
          </div>
          {/* #rd part */}
          <div className=" hidden w-10/12 lg:flex lg:w-[30%]  h-fit   flex-col justify-center items-center gap-2 bg-slate-50  rounded-lg p-6 border box-shadow: 0px 2px 3px -1px rgba(0,0,0,0.1), 0px 1px 0px 0px rgba(25,28,33,0.02), 0px 0px 0px 1px rgba(25,28,33,0.08);">
            <p className="flex flex-col font-semibold w-[100%] text-center">
              Get customized help with your account and access your message
              center.
            </p>
            <button className="mt-2 border-2 border-blue-900 rounded-full px-3 py-1 text-blue-900 font-semibold">
              Log In
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tabs;
