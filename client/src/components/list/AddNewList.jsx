import React, { useState } from "react";
import { useDispatch } from 'react-redux';
import { useParams } from "react-router";
import { createList } from "../../actions/ListActions";

const AddNewList = () => {
  const dispatch = useDispatch();
  const [selected, setSelected] = useState(false);
  const [title, setTitle] = useState("");
  const boardId = useParams().id;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title === "") return;

    dispatch(createList(title, boardId, () => {
      setSelected("false");
      setTitle("");
    }))
    // get the text from the input
    // if its empty, do nothing
    // otherwise, change selected to false
    // empty input
    // post new list.
  }

  return (
    <div id="new-list" className={`new-list ${selected ? "selected" : ""}`}>
      <span onClick={() => setSelected(true)}>Add a list...</span>
      <input type="text" placeholder="Add a list..." value={title} onChange={(e) => setTitle(e.target.value)} />
      <div>
        <input type="submit" className="button" value="Save" onClick={handleSubmit} />
        <i className="x-icon icon" onClick={() => setSelected(false)}></i>
      </div>
    </div>
  );
};

export default AddNewList;
