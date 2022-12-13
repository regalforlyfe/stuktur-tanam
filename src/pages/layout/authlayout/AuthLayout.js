import React from "react";
import { Outlet } from "react-router-dom";

const AuthLayout = () => {
  return (
    <div className="h-screen w-screen flex flex-row items-center bg-lime-700  p-16">
      <div className="basis-1/2 text-white m-3 p-3">
        <h1 className="text-5xl">Login</h1>
        <div className="text-3xl pt-3">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          <br /> sed do eiusmod tempor incididunt ut labore.
        </div>
      </div>
      <div className="basis-1/2 m-3 p-3">
        <Outlet />
      </div>
    </div>
  );
};

export default AuthLayout;
