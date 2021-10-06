import React from "react";
import { useSelector } from "react-redux";
import CardTile from "./CardTile";

const CardsContainer = ({ listId }) => {
  const listCards = useSelector((state) =>
    state.cards.filter((card) => card.listId === listId)
  );

  return (
    <div id="cards-container" data-id="list-1-cards">
      {listCards.map((card) => {
        return <CardTile key={card._id} {...card} />;
      })}
    </div>
  );
};

export default CardsContainer;
