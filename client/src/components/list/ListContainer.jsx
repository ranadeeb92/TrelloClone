import React from "react";
import List from "./List";
import { useSelector } from "react-redux";
import AddNewList from "./AddNewList";

const ListContainer = () => {
  const lists = useSelector((state) => state.lists);

  return (
    <div id="list-container" className="list-container">
      <div id="existing-lists" className="existing-lists">
        {lists.map((list) => {
          return <List key={list._id} list={list} />;
        })}
      </div>
      <AddNewList />
    </div>
  );
};

export default ListContainer;
