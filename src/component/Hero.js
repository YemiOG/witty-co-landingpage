import React from "react";
import Typed from "react-typed";

const Hero = () => {
  return (
    <div className="text-white">
      <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center">
        <p className="text-[#CFFF04] font-bold p-2">
          GROWING WITH PASSIVE INCOME
        </p>
        <h1 className="md:text-6xl md:py-6 sm:text-5xl text-3xl font-bold">
          Invest in your Future
        </h1>
        <div className="flex justify-center items-center ">
          <p className="md:text-4xl sm:text-4xl text-xl py-4">
            Secure, Flexible investments for
          </p>
          <Typed
            className="md:text-4xl sm:text-4xl text-xl md:pl-4 pl-2 text-gray-500"
            strings={["Crypto", "FX", "Stocks"]}
            typeSpeed={120}
            backSpeed={140}
            loop
          />
        </div>
        <p className="md:text-2xl text-sm text-gray-500">
          Monitor your portfolio using our algorithm to improve your position
          for Crypto, FX & Stocks investments.{" "}
        </p>
        <button className="bg-[#cfff04] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Hero;
