import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

const Landing = ({ setCurrent }) => {
  const handleGoToLogin = () => {
    setCurrent("Login");
  };
  return (
    <section className="flex justify-center items-center h-screen w-screen">
      <div className="space-y-1 flex flex-col items-center">
        <h3 className="font-medium text-sm text-slate-700">
          Test your knowledge. Take the quiz!
        </h3>
        <h1 className="font-bold text-[60px] text-slate-900">
          Welcome To Quiz App
        </h1>
        <button
          onClick={handleGoToLogin}
          className="font-normal hover:gap-4 hover:border-black transition-all duration-300 ease-in-out py-2 w-[180px] rounded-lg flex items-center lg:justify-center gap-2 border border-[rgba(0,0,0,0.5)]"
        >
          <span>click to start</span>
          <span className="font-mediumy">
            <FaArrowRightLong />
          </span>
        </button>
      </div>
    </section>
  );
};

export default Landing;
