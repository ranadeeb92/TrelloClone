import React from "react";
import Label from "./Label";

const LabelsContainer = ({ labels }) => {
  return (
    <li className="labels-section">
      <h3>Labels</h3>
      {labels.map((label, index) => {
        return <Label key={index} label={label} />;
      })}
      <div className="member-container">
        <i className="plus-icon sm-icon"></i>
      </div>
    </li>
  );
};

export default LabelsContainer;
