export default function cards(state = [], action) {
  switch (action.type) {
    case "CREATE_CARD_SUCCESS": {
      const newCard = action.card;
      return state.concat(newCard);
    }
    case "FETCH_BOARD_SUCCESS": {
      return action.board.lists.cards
    }
    default:
      return state;
  }
}
