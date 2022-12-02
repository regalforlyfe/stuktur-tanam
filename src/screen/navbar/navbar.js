import React, { useEffect } from "react";
import Action from "./controller/action";

const Navbar = ({ onClick }) => {
  
  return (
    <div className="h-full text-white" style={{ background: "#26473D" }}>
      <div className="py-10"> </div>
      <div className="flex flex-col pl-8">
        <div className="text-2xl text-amber-200 pb-5">
          TANAM
          <br />
          EMAS
        </div>
        {Action.checkPrivilege().map(([title, url]) => (
          <div>
            <button
              className="rounded-lg px-3 py-2 font-medium  hover:text-amber-200"
              onClick={() => {
                onClick(url);
              }}
            >
              {title}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
