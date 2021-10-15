import React from "react";

const Label = ({ label }) => {
  return (
    <div className="member-container">
      <div className={`${label.color} label colorblindable`}></div>
    </div>
  );
};

export default Label;
