export default function comments(state = [], action) {
  switch (action.type) {
    case "CREATE_COMMENT_SUCCESS": {
      const newComment = action.comment;
      return state.concat(newComment);
    }
    case "FETCH_CARD_SUCCESS": {
      let allBoardComments = action.cards.reduce((acc, card) => {
        acc.push(...card.comments);
        return acc;
      }, [])

      return allBoardComments;
    }
    default: {
      return state;
    }
  }
}