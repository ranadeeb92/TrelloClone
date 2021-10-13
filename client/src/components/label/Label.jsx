import React from "react";

const Label = ({ label }) => {
  return (
    <div className="member-container">
      <div className="green label colorblindable">{label}</div>
    </div>
  );
};

export default Label;
