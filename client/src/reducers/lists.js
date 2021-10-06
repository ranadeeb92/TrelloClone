export default function lists(state = [], action) {
  switch (action.type) {
    case "CREATE_LIST_SUCCESS": {
      const newList = action.list;
      return state.concat(newList);
    }
    case "FETCH_BOARD_SUCCESS": {
      let newLists = action.board.lists.map((list) => {
        let newlist = { ...list };
        delete newlist.cards;
        return newlist;
      });
      return newLists;
    }
    default:
      return state;
  }
}
