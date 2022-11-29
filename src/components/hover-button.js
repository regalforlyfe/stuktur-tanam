import React from "react";

const HoverButton = ({ title, onClick, backgroundColor }) => {
  return (
    <button
      className="text-stone-50 rounded w-40 py-1 m-1 button tooltip"
      style={{ background: backgroundColor }}
      onClick={() => {
        onClick();
      }}
    >
      {title}
      <div className="tooltiptext">
        <div className="grid grid-cols-2">
          <div>Tooltip text</div>
          <div>Tooltip text</div>
          <div>Tooltip text</div>
          <div>Tooltip text</div>
        </div>
      </div>
    </button>
  );
};

export default HoverButton;
