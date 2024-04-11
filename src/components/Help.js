import React from "react";
import { ImUsers } from "react-icons/im";
import { FaHandshake } from "react-icons/fa";
import { FaQuestionCircle } from "react-icons/fa";
const Help = () => {
  const data = [
    {
      icon: <ImUsers />,
      heading: "Community Forum",
      description: "Find answers or join the conversation",
    },
    {
      icon: <FaHandshake />,
      heading: "Resolution Center",
      description: "Resolve transaction or account issues",
    },
    {
      icon: <FaQuestionCircle />,
      heading: "Contact us",
      description: "Contact Customer Service",
    },
  ];
  return (
    // mobile view
    <>
      <div className=" md:hidden md:w-10/12 w-10/12  mx-auto mt-4">
        <div className="md:w-[100%] flex flex-col items-center w-10/12 mx-auto">
          {/* first part */}
          <div className="md:w-10/12 ">
            <h2 className="text-xl font-semibold">More ways to get help</h2>
          </div>
          {/* Secong part */}
          <div className="md:hidden mt-5 md:w-10/12 md:border-2 border-red-900">
            <div className="md:flex md:w-10/12  flex flex-col w-[100%] mx-auto gap-4">
              {data.map((card, index) => (
                <div
                  key={index}
                  className="md:flex md:flex-row md:w-[33%] w-[100%] flex flex-col items-center justify-center border border-blue-200 rounded-md hover:cursor-pointer"
                >
                  <p className="font-semibold text-4xl"> {card.icon}</p>
                  <p className="font-semibold text-2xl text-blue-800">
                    {card.heading}
                  </p>
                  <p className="text-xl w-[80%] text-center">
                    {card.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* third part */}
          <div className="mt-4 mb-4 bg-gray-200  rounded-md p-2 mx-auto text-center flex flex-col items-center gap-3">
            <div className="flex flex-col gap-2 items-center">
              <h2 className="font-semibold text-xl">How are we doing?</h2>
              <p className="text-[0.85rem] text-center">
                Help improve the{" "}
                <span className="font-semibold">
                  PayPal Help Center experience
                </span>{" "}
                eith some quick feedback.
              </p>
            </div>

            <div className="text-white bg-blue-700 w-[90%] rounded-full p-2 hover:bg-slate-800 transition-all ">
              <button>Take the survey</button>
            </div>
          </div>
        </div>
      </div>
      {/* ****************  // Desktiop view *************/}
      <div className="hidden md:block mt-4  ">
        <div className="flex flex-col items-center md:w-10/12 mx-auto  ">
          {/* first part */}
          <div className=" ">
            <h2 className="">More ways to get help</h2>
          </div>
          {/* Secong part */}
          <div className=" mt-5">
            <div className=" flex">
              {data.map((card, index) => (
                <div
                  key={index}
                  className="flex flex-col justify-center items-center mx-auto text-center w-[33%]  "
                >
                  <p className="text-3xl "> {card.icon}</p>
                  <p className="text-blue-800 font-semibold">{card.heading}</p>
                  <p className="">{card.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* third part */}
          <div className="mt-6 w-10/12 mx-auto flex  justify-center items-center mb-4 bg-slate-200 rounded-md">
            <div className="flex flex-col gap-2  px-8 py-4">
              <h2 className="font-semibold">How are we doing?</h2>
              <p className="text-sm w-[70%]">
                Help improve the{" "}
                <span className="font-semibold">
                  PayPal Help Center experience
                </span>{" "}
                with some quick feedback.
              </p>
            </div>

            <div className=" bg-blue-900 px-4 py-1 rounded-full">
              <button className="font-semibold text-[0.85rem] text-white">
                Take the survey
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Help;
