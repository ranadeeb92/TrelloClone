import React, { useState } from "react";
import CardsContainer from "./CardsContainer";
import { useDispatch } from "react-redux";
import { updateList } from "../../actions/ListActions";

const List = ({ list }) => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState(list.title);

  const handleUpdate = () => {
    dispatch(updateList(title, list._id));
  }

  const handleEnter = (e) => {
    if (e.key === 'Enter') {
      e.target.blur();
    }
  }

  return (
    <div className="list-wrapper">
      <div className="list-background">
        <div className="list">
          <a className="more-icon sm-icon" href=""></a>
          <div>
            <input type="text" className="list-title" value={title} onChange={(e) => setTitle(e.target.value)} onBlur={(e) => handleUpdate(e)} onKeyDown={e => handleEnter(e)} />
          </div>
          <div className="add-dropdown add-top">
            <div className="card"></div>
            <a className="button">Add</a>
            <i className="x-icon icon"></i>
            <div className="add-options">
              <span>...</span>
            </div>
          </div>
          <CardsContainer listId={list._id} />
          <div className="add-dropdown add-bottom">
            <div className="card">
              <div className="card-info"></div>
              <textarea name="add-card"></textarea>
              <div className="members"></div>
            </div>
            <a className="button">Add</a>
            <i className="x-icon icon"></i>
            <div className="add-options">
              <span>...</span>
            </div>
          </div>
          <div className="add-card-toggle" data-position="bottom">
            Add a card...
          </div>
        </div>
      </div>
    </div>
  );
};

export default List;
