import React from "react";
import Navbar from "../components/Navbar";

import Herosection from "../components/Herosection";
import Tabs from "../components/Tabs";
import Help from "../components/Help";
import Footer from "../components/Footer";
const Home = () => {
  return (
    <div className="w-screen  bg-white ">
      <Navbar />
      <div>
        <Herosection />
        <Tabs />
        <Help />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
