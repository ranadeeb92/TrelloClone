import React from "react";

const DeleteButton = () => {
  const handleDelete = (e) => {
    e.preventDefault();
    console.log("needs to be deleted!!");
  }

  return (
    <li className="red-button" onClick={handleDelete}>
      <i className="minus-icon sm-icon" />Delete
    </li>
  );
}

export default DeleteButton;