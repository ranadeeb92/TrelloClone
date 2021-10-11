export default function comments(state = [], action) {
  switch (action.type) {
    case "CREATE_COMMENT_SUCCESS": {
      const newComment = action.comment;
      return state.concat(newComment);
    }
    case "FETCH_BOARD_SUCCESS": {
      console.log("prior to reduce", action.board.lists);
      let allBoardComments = action.board.lists.reduce((acc, list) => {
        acc.push(...(list.cards.reduce((acc, card) => {
          acc.push(...card.comments);
          return acc;
        }, [])));
        return acc;
      }, [])

      console.log("all board comments", allBoardComments);

      return allBoardComments;
    }
    default: {
      return state;
    }
  }
}