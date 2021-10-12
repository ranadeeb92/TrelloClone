import React, { useState } from "react";
import { updateCard } from "../../actions/CardActions";
import { useDispatch } from "react-redux";

const CardDescription = ({ card }) => {
  const dispatch = useDispatch();
  const [showEdit, setShowEdit] = useState(false);
  const [cardDescription, setCardDescription] = useState(card.description);

  const handleEdit = (e) => {
    e.preventDefault();
    const updatedCard = { ...card, description: cardDescription };
    dispatch(
      updateCard(updatedCard, card._id, () => {
        setShowEdit(false);
      })
    );
  };

  return (
    <form className="description">
      <p>Description</p>

      {!showEdit ? (
        <>
          <span
            id="description-edit"
            className="link"
            onClick={() => setShowEdit(true)}
          >
            Edit
          </span>
          <p className="textarea-overlay">{cardDescription}</p>
        </>
      ) : (
        <>
          <textarea
            className="textarea-toggle"
            rows="1"
            autoFocus
            defaultValue={cardDescription}
            onChange={(e) => setCardDescription(e.target.value)}
          ></textarea>
          <div>
            <div className="button" value="Save" onClick={handleEdit}>
              Save
            </div>
            <i className="x-icon icon" onClick={() => setShowEdit(false)}></i>
          </div>
        </>
      )}

      <p id="description-edit-options" className="hidden">
        You have unsaved edits on this field.{" "}
        <span className="link">View edits</span> -{" "}
        <span className="link">Discard</span>
      </p>
    </form>
  );
};

export default CardDescription;
