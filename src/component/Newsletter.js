import React from "react";

const Newsletter = () => {
  return (
    <div className="w-full py-16 px-4 text-white">
      <div className="max-w-[1240px] mx-auto grid lg:grid-cols-3">
        <div className="lg:col-span-2 my-4">
          <h1 className="md:text-4xl sm:text-4xl text-xl py-2">
            Want trips and tricks to optimize your portfolio positions?
          </h1>

          <p>Sign up to our newsletter and stay up to date.</p>
        </div>
        <div className="my-4">
          <div className="flex flex-col sm:flex-row items-center justify-between w-full">
            {" "}
            <input
              className="p-3 flex w-full rounded-md text-black"
              type="email"
              placeholder="Enter Email"
            />
            <button
              className="bg-[#cfff04] w-[200px] rounded-md font-medium ml-4
           my-6 px-6 py-3 text-[black]"
            >
              Notify Me!
            </button>
          </div>
          <p className="text-sm text-center">
            We care bout the protection of your data. Read our{" "}
            <span className="text-[#cfff04]">Privacy Policy.</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
