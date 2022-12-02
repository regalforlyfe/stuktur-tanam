import React from "react";

const Header = ({onClick}) => {
  return (
    <div className="flex sm:justify-end space-x-4 bg-white">
      <div>notif</div>
      <div>lang</div>
      <div>login</div>
    </div>
  );
};

export default Header;
