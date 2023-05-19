import React from "react";
import "./Tooltip.css";

const Tooltip = (props) => {
  return (
    <main>
      <div className="tooltip">
        <span data-tooltip={props.data}>{props.children}</span>
      </div>
    </main>
  );
};

export default Tooltip;
