import React from "react";
import { Outlet } from "react-router-dom";
import SideMenu from "./SideMenu";
import { MdDashboard } from "react-icons/md";

const Layout = () => {
  return (
    <section className="h-screen w-screen grid lg:grid-cols-[300px_1fr]">
      <div className="sidebar h-full border px-5 pt-10 space-y-10">
        {/* title */}
        <div className="flex items-center gap-2">
          <span className="text-2xl">
            <MdDashboard />
          </span>
          <h1 className="text-2xl font-bold text-black">Dashboard</h1>
        </div>
        <SideMenu />
      </div>
      <div className="right-section h-full">
        {/* top section */}
        <section className="py-5 mt-5 px-10 flex items-center justify-between w-full border-b">
          <h4 className="text-sm text-black capitalize">
            Welcome To Your Dashboard
          </h4>
          <p className="text-sm text-black capitalize">Raymond Chukwu</p>
        </section>
        {/* main-section */}
        <section>
          <Outlet />
        </section>
      </div>
    </section>
  );
};

export default Layout;
