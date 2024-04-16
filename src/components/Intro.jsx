import React from "react";
import { v4 } from "uuid";
import { useNavigate } from "react-router-dom";

const Intro = () => {
  const navigate = useNavigate();

  const data = [
    {
      title: "Set Quiz",
      message: "Click to set the quiz question",
      link: "/set-quiz",
    },
    {
      title: "Manage Dashboard",
      message: "Click to go to dashboard",
      link: "/dashboard",
    },
  ];

  const handleNavigation = (route) => {
    navigate(route)
  };
  return (
    <section className="h-screen w-screen grid grid-rows-3">
      <div></div>
      {/* middle section */}
      <main className=" h-full space-y-10">
        <h3 className="font-semibold text-base text-slate-900 w-full text-center uppercase">
          Choose an option
        </h3>
        <div className="flex items-center justify-center gap-10">
          {data.map((datum) => (
            <div
              key={v4()}
              onClick={() => handleNavigation(datum.link)}
              className="border h-[200px] bg-[#F0F0F2] w-fit px-10 flex flex-col items-center justify-center hover:border-[rgba(0,0,0,0.5)] active:scale-95 cursor-pointer transition-all duration-300 ease-in-out"
            >
              <h3 className="font-semibold text-2xl text-[rgba(0,0,0,0.8)]">
                {datum.title}
              </h3>
              <p className="text-sm font-light text-slate-500">
                {datum.message}
              </p>
            </div>
          ))}
        </div>
      </main>
    </section>
  );
};

export default Intro;
