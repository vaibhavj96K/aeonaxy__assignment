import React from "react";
import { PiHandsClappingFill } from "react-icons/pi";
const Cards = ({ data }) => {
  return (
    <div className="md:flex-row flex flex-col gap-6 mt-4">
      {data.map((card, index) => {
        return (
          <div
            key={index}
            className=" flex justify-center items-center border-2 border-transparent gap-6 p-2 px-3 rounded-xl shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]"
          >
            <PiHandsClappingFill className="text-xl" />
            <div className="flex flex-col">
              <p className="font-bold">{card.heading}</p>
              <p className="w-56">{card.message}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Cards;
