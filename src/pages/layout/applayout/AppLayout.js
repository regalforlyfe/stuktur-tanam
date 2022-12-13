import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../header/Header";

const AppLayout = () => {
  return (
    <div className="h-screen w-screen">
      <div className="h-14">
        <Header />
      </div>
      <div className="m-3 p-3 ">
        <Outlet />
      </div>
    </div>
  );
};

export default AppLayout;
