export default function cards(state = [], action) {
  switch (action.type) {
    case "CREATE_CARD_SUCCESS": {
      const newCard = action.card;
      return state.concat(newCard);
    }
    case "FETCH_BOARD_SUCCESS": {
      let newCards = action.board.lists.reduce((acc, list) => {
        acc.push(...list.cards);
        return acc;
      }, []);
      return newCards;
    }
    default:
      return state;
  }
}
