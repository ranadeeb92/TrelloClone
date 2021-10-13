import React from "react";
import { useDispatch } from "react-redux";
import { updateCard } from "../../actions/CardActions";

const ArchiveButton = ({ card }) => {
  const dispatch = useDispatch();

  const handleArchive = (e) => {
    e.preventDefault();
    const updatedCard = { ...card, archived: true };
    dispatch(updateCard(updatedCard, card._id));
  }

  return (
    <li className="archive-button" onClick={handleArchive}>
      <i className="file-icon sm-icon "></i>Archive
    </li>
  );
}

export default ArchiveButton;