export default function comments(state = [], action) {
  switch (action.type) {
    case "CREATE_COMMENT_SUCCESS": {
      console.log(action.comment);
      const newComment = action.comment;
      return state.concat(newComment);
    }
    case "FETCH_CARD_SUCCESS": {
      return action.card.comments;
    }
    default: {
      return state;
    }
  }
}
