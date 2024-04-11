import React from "react";
import { FaPaypal } from "react-icons/fa";
const Footer = () => {
  const links = [
    "Help",
    "Contact",
    "Fees",
    "Security",
    "Apps",
    "Shop",
    "Enterprise",
    "Partners",
  ];
  const footerLinks = [
    "About",
    "Newsroom",
    "Jobs",
    "Investor Relations",
    "Values in Action",
    "Public Policy",
    "Sitemap",
  ];
  return (
    <>
      <div className=" hidden w-10/12 mb-12 px-8 mt-16  mx-auto md:flex flex-col gap-4 ">
        {/* first part */}
        <div className="flex gap-3 items-center">
          <FaPaypal className="text-4xl text-blue-800" />
          <p className="text-blue-950 font-bold text-xl">
            Pay<span className="text-blue-600">Pal</span>
          </p>
        </div>
        {/* second part */}
        <div className="flex gap-3 text-sm font-semibold text-blue-800">
          {links.map((link, index) => (
            <p key={index}>{link}</p>
          ))}
        </div>
        {/* horzontal bar */}
        <div className="border-b-2 border-blue-600 "></div>
        {/* third part */}
        <div className="flex justify-between">
          <div className="flex gap-3 text-sm font-semibold text-blue-800">
            {footerLinks.map((link, index) => (
              <p key={index}>{link}</p>
            ))}
          </div>
          <div className="flex gap-3 text-sm font-semibold text-blue-800">
            <p>Accessibility </p>
            <p>Privacy</p>
            <p>Cookies</p>
            <p>Legal</p>
          </div>
        </div>
      </div>

      {/* ******mobile view */}

      <div className="md:hidden mb-6 mt-8 flex flex-col w-10/12 mx-auto">
        {/* first part */}
        <div className=" flex gap-3 text-center items-center justify-center">
          <FaPaypal className="text-4xl text-blue-800" />
          <p className="text-2xl font-bold text-blue-950">
            Pay<span className="text-blue-600">Pal</span>
          </p>
        </div>
        {/* second part */}
        {/* horzontal bar */}
        <div className=" mt-3 border-b-2 border-blue-800"></div>
        {/* third part */}
        <div className="mt-3">
          <div className="flex gap-4 justify-center flex-wrap items-center">
            {footerLinks.map((link, index) => (
              <p
                key={index}
                className="max-w-[40%] text-blue-950 font-semibold"
              >
                {link}
              </p>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
