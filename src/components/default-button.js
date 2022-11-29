import React from "react";

const DefaultButton = ({ title, onClick, backgroundColor }) => {
  return (
    <button
      className="text-stone-50 rounded w-40 py-1 m-1 button"
      style={{ background: backgroundColor }}
      onClick={() => {
        onClick();
      }}
    >
      {title}
    </button>
  );
};

export default DefaultButton;
