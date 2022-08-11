import React from "react";
import Dashboard from "../assets/laptop.jpg";

const Analytics = () => {
  return (
    <div className="w-full bg-white py-16 px-4">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
        <img
          className="w-[500px] mx-auto my-4"
          src={Dashboard}
          alt="dashboard showing graphs"
        />
        <div className="flex flex-col justify-center">
          <p className="text-[#3e4c01]">PORTFOLIO DASHBOARD</p>
          <h1 className="md:text-3xl sm:text-3xl text-2xl font-bold py-2 ">
            Monitor your portfolio centrally
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel
            veniam, quas reiciendis dolor repellendus aperiam architecto natus
            quae eos odit at minima. Doloremque deleniti similique molestias
            enim? Exercitationem, nobis deleniti.
          </p>
          <button>Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
