import React from "react";

const Header = ({onClick}) => {
  return (
    <div className="flex sm:justify-center space-x-4 bg-white">
      {[
        ["Home", ""],
        ["Dashboard", "dashboard"],
        ["Product", "product"],
      ].map(([title, url]) => (
        <button
          className="rounded-lg px-3 py-2 text-slate-700 font-medium hover:bg-slate-100 hover:text-slate-900"
          onClick={() => {
            onClick(url);
          }}
        >
          {title}
        </button>
      ))}
    </div>
  );
};

export default Header;
