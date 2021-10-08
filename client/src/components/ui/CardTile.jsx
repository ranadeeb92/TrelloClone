import React from "react";
import { useHistory } from "react-router";

const CardTile = ({ card }) => {
  let history = useHistory();

  const handleClick = () => {
    history.push(history.location.pathname + `/cards/${card._id}`);
  };
  return (
    <div className="card-background">
      <div className="card ">
        <i className="edit-toggle edit-icon sm-icon"></i>
        <div className="card-info">
          <div className="card-label green colorblindable"></div>
          <div className="card-label yellow colorblindable"></div>
          <div className="card-label red colorblindable"></div>
          <div className="card-label orange colorblindable"></div>
          <div className="card-label blue colorblindable"></div>
          <div className="card-label purple colorblindable"></div>
          <div onClick={handleClick}>
            <p>{card.title}</p>
          </div>
        </div>
        <div className="card-icons">
          <i className="clock-icon sm-icon overdue-recent completed">
            Due Date
          </i>
          <i className="description-icon sm-icon"></i>
          <i className="comment-icon sm-icon"></i>
        </div>
      </div>
    </div>
  );
};

export default CardTile;
