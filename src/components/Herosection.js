import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoSearch } from "react-icons/io5";
import { PiWarningCircleFill } from "react-icons/pi";

import Cards from "./Cards";

import { IoClose } from "react-icons/io5";

const Herosection = () => {
  const [show, setShow] = useState(false);
  const cardData = [
    {
      icon: "PiHandsClappingFill",
      heading: "Resolution Center",
      message: "Resolve transaction or account issues",
    },
    {
      icon: "BsFillSuitHeartFill",
      heading: "Ask the Community",
      message: "Find answers or join the convesation",
    },
    {
      icon: "BsFillSuitHeartFill",
      heading: "Message Center",
      message: "Send, receice, and view your PayPal messages",
    },
  ];

  function handleClick() {
    setShow(!show);
  }
  return (
    <div className="w-screen ">
      <div className="w-10/12  mx-auto mt-3">
        {/* section 1 */}
        <div>
          <div className="text-blue-600 font-semibold">
            <Link to="/help">Help Center</Link>
          </div>
          <div className="flex flex-col justify-center items-center mt-3 ">
            <h1 className="text-2xl font-semibold w-fit">How can we help ?</h1>

            <div className=" relative mt-4">
              <input
                type="text"
                placeholder="Search by keyword"
                className="border-2 border-gray-400 rounded-full px-12 py-2 md:w-[400px]"
              />
              <div className="absolute top-3 left-4">
                <IoSearch className="text-2xl text-gray-[#E5DDC5]" />
              </div>
            </div>
            {/* Warning message */}
            <div
              className={`relative flex mt-6 m-3 mx-auto w-10/12 gap-2 bg-yellow-300 rounded-md p-4 ${
                show && "hidden"
              }`}
            >
              <PiWarningCircleFill className="text-2xl absolute top-4 left-2 text-yellow-800" />
              <p className="px-6 relative">
                Received a suspicious email, fake invoice, or message? Don't
                reply, open links, download attachments, or call any listed
                phones numbers. We'll never ask for your PayPal password or
                financial details by email or message. or over the phone.
                Forward suspicous message to{" "}
                <span className="text-blue-600 font-semibold ">
                  phishing@paypal.com
                </span>{" "}
                and then delete them.
              </p>
              <IoClose
                className={`relative text-6xl -top-5 cursor-pointer  `}
                onClick={handleClick}
              />
            </div>
            {/* cards */}
            <Cards data={cardData} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Herosection;
