import React from "react";
import Single from "../assets/single.png";
import Double from "../assets/double.png";
import Triple from "../assets/triple.png";

const Cards = () => {
  return (
    <div className="w-full py-[10rem] px-4 bg-white">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8">
        <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
          <img
            src={Single}
            alt="/"
            className="w-20 mx-auto mt-[-3rem] bg-white "
          />
          <h2 className="text-2xl text-center py-8">Single Pringle</h2>
          <p className="text-center text-4xl font-bold">N10,000</p>
          <div className="text-center font-medium">
            <p className="py-2 border-b mx-8 mt-8">Capped at 5m</p>
            <p className="py-2 border-b mx-8">Limited to Crypto</p>
            <p className="py-2 border-b mx-8">Weekly Analyst Meeting - Once</p>
          </div>
          <button className="bg-[#cfff04] w-[200px] h-[35px] rounded-md font-medium my-6 mx-auto">
            Start Trial
          </button>
        </div>
        <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
          <img
            src={Double}
            alt="/"
            className="w-20 mx-auto mt-[-3rem] bg-white "
          />
          <h2 className="text-2xl text-center py-8">Two by Two</h2>
          <p className="text-center text-4xl font-bold">N25,000</p>
          <div className="text-center font-medium">
            <p className="py-2 border-b mx-8 mt-8">Capped at 20m</p>
            <p className="py-2 border-b mx-8">Limited to Crypto and FX</p>
            <p className="py-2 border-b mx-8">Weekly Analyst Meeting - Once</p>
          </div>
          <button className="bg-[#cfff04]  w-[200px] h-[35px] rounded-md font-medium my-6 mx-auto">
            Start Trial
          </button>
        </div>
        <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
          <img
            src={Triple}
            alt="/"
            className="w-20 mx-auto mt-[-3rem] bg-white "
          />
          <h2 className="text-2xl text-center py-8">Treble</h2>
          <p className="text-center text-4xl font-bold">N50,000</p>
          <div className="text-center font-medium">
            <p className="py-2 border-b mx-8 mt-8">No Cap 🚫🧢 </p>
            <p className="py-2 border-b mx-8">No Limit</p>
            <p className="py-2 border-b mx-8">
              Weekly Analyst Meeting - Thrice
            </p>
          </div>
          <button className="bg-[#cfff04]  w-[200px] h-[35px] rounded-md font-medium my-6 mx-auto">
            Start Trial
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cards;
