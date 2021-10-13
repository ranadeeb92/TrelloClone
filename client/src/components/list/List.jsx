import React, { useState } from "react";
import CardsContainer from "../card/CardsContainer";
import { useDispatch } from "react-redux";
import { updateList } from "../../actions/ListActions";
import AddNewCard from "../card/AddNewCard";

const List = ({ list }) => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState(list.title);

  const handleUpdate = () => {
    dispatch(updateList(title, list._id));
  };

  const handleEnter = (e) => {
    if (e.key === "Enter") {
      e.target.blur();
    }
  };

  return (
    <div className="list-wrapper">
      <div className="list-background">
        <div className="list">
          <a className="more-icon sm-icon" href=""></a>
          <div>
            <input
              type="text"
              className="list-title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              onBlur={(e) => handleUpdate(e)}
              onKeyDown={(e) => handleEnter(e)}
            />
          </div>
          {/* <div className="add-dropdown add-top">
            <div className="card"></div>
            <a className="button">Add</a>
            <i className="x-icon icon"></i>
            <div className="add-options">
              <span>...</span>
            </div>
          </div> */}
          <CardsContainer listId={list._id} />
          <AddNewCard listId={list._id} />
        </div>
      </div>
    </div>
  );
};

export default List;
