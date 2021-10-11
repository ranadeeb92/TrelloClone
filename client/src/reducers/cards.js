export default function cards(state = [], action) {
  switch (action.type) {
    case "CREATE_CARD_SUCCESS": {
      const newCard = action.card;
      return state.concat(newCard);
    }
    case "FETCH_BOARD_SUCCESS": {
      let newCards = action.board.lists.reduce((acc, list) => {
        const copiedCards = list.cards.map(c => {
          let card = { ...c };
          delete card.comments;
          delete card.actions;
          return card;
        })
        acc.push(...copiedCards);
        return acc;
      }, []);
      return newCards;
    }
    case "UPDATE_CARD_SUCCESS": {
      return state.map(c => c._id === action.card._id ? action.card : c);
    }
    default:
      return state;
  }
}
