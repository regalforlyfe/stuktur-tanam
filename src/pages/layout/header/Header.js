import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";
import Action from "./redux/Action";

const Header = () => {
  return (
    <div className="flex justify-center items-center bg-lime-700 h-full">
      {Action.checkPrivilege().map(([title, url]) => (
        <div key={title} className="flex-initial w-30 header px-4">
          <NavLink to={url} className="hover:text-amber-200">
            {title}
          </NavLink>
        </div>
      ))}
    </div>
  );
};

export default Header;
