import React from "react";
import { FaPaypal } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";
import { Link } from "react-router-dom";
const Navbar = () => {
  const navLinks = [
    { id: 1, title: "Personal", path: "/personal" },
    { id: 2, title: "Business", path: "/business" },
    { id: 3, title: "Developer", path: "/developer" },
    { id: 4, title: "Help", path: "/help" },
  ];

  function handleClick() {}
  return (
    <div className="w-[100%] h-[100%] ">
      <div className=" w-11/12 p-4  mx-auto flex justify-between items-center ">
        <Link to="/">
          <p>
            <FaPaypal className="text-3xl text-blue-900" />
          </p>
        </Link>
        {/* for small screen */}
        <div className="md:hidden" onClick={handleClick}>
          <RxHamburgerMenu className="text-3xl" />
        </div>
        {/* for large screen */}
        <div className="hidden md:flex text-lg font-semibold gap-3 text-blue-800">
          {navLinks.map((link) => {
            return (
              <Link key={link.id} to={link.path}>
                <p>{link.title}</p>
              </Link>
            );
          })}
        </div>

        {/* login and signup btn */}
        <div className="hidden md:flex gap-3">
          <div className="border-2 border-blue-700  rounded-full px-8 py-2 font-semibold text-blue-800 text-lg">
            <Link to="/login">
              <p>Log in</p>
            </Link>
          </div>
          <div className="border border-blue-700 rounded-full px-8 py-2 font-semibold text-white text-lg bg-blue-900">
            <Link to="/login">
              <p>Sign Up</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
