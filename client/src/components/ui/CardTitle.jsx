import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { updateCard } from "../../actions/CardActions";

const CardTitle = ({ card }) => {
  let dispatch = useDispatch();
  const [title, setTitle] = useState(card.title);

  const handleUpdateCard = () => {
    const updatedCard = { ...card, title };
    dispatch(updateCard(updatedCard, card._id));
  };

  return (
    <textarea
      className="list-title"
      style={{ height: "45px" }}
      onChange={(e) => setTitle(e.target.value)}
      onBlur={handleUpdateCard}
    >
      {title}
    </textarea>
  );
};

export default CardTitle;
