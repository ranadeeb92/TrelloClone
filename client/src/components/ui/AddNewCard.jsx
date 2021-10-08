import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createCard } from "../../actions/CardActions";

const AddNewCard = ({ listId }) => {
  const [newCard, setNewCard] = useState(false);
  const [newTitle, setNewTitle] = useState("");
  const dispatch = useDispatch();

  const handleAddNewCard = (e) => {
    e.preventDefault();
    dispatch(createCard(newTitle, listId, () => setNewCard(false)));
  };
  return (
    <>
      <div
        className="add-dropdown add-bottom"
        style={{ display: newCard ? "block" : "none" }}
      >
        <div className="card">
          <div className="card-info"></div>
          <textarea
            name="add-card"
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
          ></textarea>
          <div className="members"></div>
        </div>
        <a className="button" onClick={(e) => handleAddNewCard(e)}>
          Add
        </a>
        <i className="x-icon icon" onClick={() => setNewCard(false)}></i>
        <div className="add-options">
          <span>...</span>
        </div>
      </div>

      <div
        className="add-card-toggle"
        data-position="bottom"
        style={{ display: newCard ? "none" : "block" }}
        onClick={() => setNewCard(true)}
      >
        + Add a card
      </div>
    </>
  );
};

export default AddNewCard;
