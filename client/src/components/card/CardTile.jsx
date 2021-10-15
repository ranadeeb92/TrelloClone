import React from "react";
import { Link } from "react-router-dom";

const CardTile = ({ card }) => {
  return (
    <Link to={`/cards/${card._id}`}>
      <div className="card-background">
        <div className="card ">
          <i className="edit-toggle edit-icon sm-icon"></i>
          <div className="card-info">
            {card.labels.map(l => <div key={Math.random() * card._id} className={`card-label ${l} colorblindable`} />)}

            {/* <div className="card-label yellow colorblindable"></div>
            <div className="card-label red colorblindable"></div>
            <div className="card-label orange colorblindable"></div>
            <div className="card-label blue colorblindable"></div>
            <div className="card-label purple colorblindable"></div> */}
            <div>
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
    </Link>
  );
};

export default CardTile;
