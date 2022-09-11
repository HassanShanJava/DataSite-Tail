import React from "react";
import Typed from "react-typed";

const Hero = () => {
  return (
    <div className="text-white">
      <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center ">
        <p className="uppercase text-[#00df98] font-bold p-2">
          Growing with Data Analytics
        </p>
        <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-6 ">
          Grow with Data.
        </h1>
        <div className="flex justify-center items-center">
          <p className="md:text-5xl sm:text-4xl text-xl font-bold py-4">
            Fast, flexible financing for 
          </p>
          <Typed
            className="text-gray-400 md:text-5xl sm:text-4xl text-xl font-bold md:pl-4 pl-2"
            strings={["B2B", "BTC", "BTB", "SASS"]}
            typeSpeed={120}
            backSpeed={140}
            loop
          />
        </div>
        <p className="md:text-2xl text-gray-200">Monitor your data analytics to increase revenue for BTB, BTC, & SASS platforms.</p>
        <button className="bg-[#00df98] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3 text-black">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Hero;
