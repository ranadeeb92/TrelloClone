import React, { useState } from 'react';
import { useParams } from "react-router";
import { useSelector } from "react-redux";
import LabelsPopover from './LabelsPopover';

const LabelButton = () => {
  const cardId = useParams().id;
  const [showPopover, setShowPopover] = useState(false);
  const card = useSelector((state) =>
    state.cards.find((c) => c._id === cardId)
  );

  return (
    <>
      <li className="label-button" onClick={() => setShowPopover(true)}>
        <i className="label-icon sm-icon"></i>Labels
      </li>
      {showPopover ? <LabelsPopover card={card} setShowPopover={setShowPopover} /> : null}
    </>
  );
}

export default LabelButton;