import React, { useState } from "react";
import DueDatePopover from "./DueDatePopover";

const DueDateButton = ({ dueDate }) => {
  const [showPopover, setShowPopover] = useState(false);

  return (
    <>
      <li className="date-button" onClick={() => setShowPopover(true)}>
        <i className="clock-icon sm-icon"></i>Due Date
      </li>
      {showPopover ? <DueDatePopover dueDate={dueDate} setShowPopover={setShowPopover} /> : null}
    </>
  );
};

export default DueDateButton;
