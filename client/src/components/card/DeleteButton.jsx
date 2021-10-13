import React from "react";
import { useDispatch } from "react-redux";
import { useHistory, useParams } from "react-router";
import { deleteCard } from "../../actions/CardActions";

const DeleteButton = () => {
  const dispatch = useDispatch();
  const cardId = useParams().id;
  const history = useHistory();


  const handleDelete = (e) => {
    e.preventDefault();
    dispatch(deleteCard(cardId, (card) => history.push(`/boards/${card.boardId}`)));
  }

  return (
    <li className="red-button" onClick={handleDelete}>
      <i className="minus-icon sm-icon" />Delete
    </li>
  );
}

export default DeleteButton;