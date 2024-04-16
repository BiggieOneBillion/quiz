import React from "react";
import { Outlet } from "react-router-dom";

const SetQuestionLayout = () => {
  return (
    <section className="w-full h-full pt-20 px-10">
      <Outlet />
    </section>
  );
};

export default SetQuestionLayout;
