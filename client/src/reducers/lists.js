export default function lists(state = [], action) {
  switch (action.type) {
    case "CREATE_LIST_SUCCESS": {
      const newList = action.list;
      return state.concat(newList);
    }
    case "FETCH_BOARD_SUCCESS": {
      return action.board.lists
    }
    default:
      return state;
  }
}
