import React, { useState } from "react";
import DueDatePopover from "./DueDatePopover";
// import DueDatePopoverFunComponent from "./DueDatePopoverFuncComponent";

const DueDateButton = ({ dueDate }) => {
  const [showDueDatePopover, setShowDueDatePopover] = useState(false);
  console.log(dueDate);
  return (
    <>
      <li className="date-button" onClick={() => setShowDueDatePopover(true)}>
        <i className="clock-icon sm-icon"></i>Due Date
      </li>
      {showDueDatePopover ? <DueDatePopover dueDate={dueDate} /> : null}
      {/* {showDueDatePopover ? <DueDatePopoverFunComponent /> : null} */}
    </>
  );
};

export default DueDateButton;
