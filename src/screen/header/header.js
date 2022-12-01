import React from "react";

const Header = ({ onClick }) => {

  const checkPrivilege = () => {
    var privilege = ""//get from session;
    if (privilege === "admin") {
      return [
        ["Home", ""],
        ["Dashboard", "dashboard"],
        ["Product", "product"],
      ]
    } else if (privilege === "merchant") {
      return [
        ["Home", ""]
      ]
    } else {
      return [
        ["Home", ""]
      ]
    }
  }

  return (
    <div className="flex sm:justify-center space-x-4 bg-white">
      {checkPrivilege().map(([title, url]) => (
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
