import React from "react";
import { Link, Outlet } from "react-router-dom";
import { IoMdAdd } from "react-icons/io";
import { FaUsers } from "react-icons/fa";
import { GoBook } from "react-icons/go";
import { LiaHourglassStartSolid } from "react-icons/lia";

const SetQuizLayout = () => {
  const menuData = [
    {
      title:"Set Quiz",
      icon: <LiaHourglassStartSolid />,
      path: "/set-quiz/set-question"
    },
    {
      title: "Add Questions",
      icon: <IoMdAdd />,
      path: "/set-quiz",
    },
    {
      title: "View Quizes",
      icon: <GoBook />,
      path: "/set-quiz/view-quizes",
    },
    {
      title: "Users",
      icon: <FaUsers />,
      path: "/set-quiz/users",
    },
  ];
  return (
    <section className="h-screen w-screen grid grid-cols-[200px_1fr]">
      {/* menu */}
      <div className="border-r border-blue-600y space-y-20 pt-20 px-5 bg-[#C0C2BF] text-slate-950">
        {/* heading  */}
        <h2 className="font-bold text-xl py-2 px-1 ">Quiz Dashboard</h2>
        {/* navigation-links */}
        <main className="flex flex-col gap-10">
          {menuData.map((menu) => (
            <Link
              to={menu.path}
              className="py-3 grid place-content-center px-1 rounded-md text-base font-semibold bg-black text-white hover:scale-[0.98] active:scale-[0.96] transition-transform duration-200 ease-linear"
            >
              {menu.title}
            </Link>
          ))}
        </main>
      </div>
      {/* Add question */}
      <main className="w-full h-full">
        <Outlet />
      </main>
    </section>
  );
};

export default SetQuizLayout;
