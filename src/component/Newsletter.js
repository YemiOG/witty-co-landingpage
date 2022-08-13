import React from "react";

const Newsletter = () => {
  return (
    <div className="w-full py-16 text-white">
      <div className="max-w-[1240px] mx-auto grid lg:grid-cols-3">
        <div>
          <h1 className="md:text-4xl sm:text-4xl text-xl py-2">
            Want trips and tricks to optimize your portfolio positions?
          </h1>

          <p>Sign up to our newsletter and stay up to date.</p>
        </div>
        <div>
          <input
            className="p-3 flex w-full rounded-md text-black"
            type="email"
            placeholder="Enter Email"
          />
          <button
            className="bg-[#cfff04] w-[200px] rounded-md font-medium ml-4
           my-6 mx-auto py-3 md:mx-0  text-[black]"
          >
            Notify Me!
          </button>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
