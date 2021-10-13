import axios from "axios";
import * as routes from "../constants/ApiRoutes";

function logError(errorResponse) {
  const response = errorResponse.response;

  if (response && response.data && response.data.error) {
    console.error(`HTTP Error: ${response.data.error}`);
  } else {
    console.error("Error: ", errorResponse);
  }
}

function unwrapData(response) {
  return response.data;
}

axios.defaults.headers.common["X-Requested-With"] = "XMLHttpRequest";
axios.defaults.headers.common["Accept"] = "application/json";

const apiClient = {
  getBoards: function (callback) {
    return axios
      .get(routes.BOARDS_INDEX_URL)
      .then(unwrapData)
      .then(callback)
      .catch(logError);
  },
  createBoard: function (board, callback) {
    return axios
      .post(routes.CREATE_BOARD_URL, { board })
      .then(unwrapData)
      .then(callback)
      .catch(logError);
  },
  getBoard: function (boardId, callback) {
    return axios
      .get(routes.BOARDS_INDEX_URL + `/${boardId}`)
      .then(unwrapData)
      .then(data => {
        console.log("we're looking for this", data)
        return data;
      })
      .then(callback)
      .catch(logError);
  },

  createList: function (title, boardId, callback) {
    return axios
      .post(routes.CREATE_LIST_URL, {
        boardId,
        list: { title },
      })
      .then(unwrapData)
      .then(callback)
      .catch(logError);
  },

  updateList: function (title, listId, callback) {
    return axios
      .put(routes.UPDATE_LIST_URL + `/${listId}`, { title })
      .then(unwrapData)
      .then(callback)
      .catch(logError);
  },

  getCard: function (cardId, callback) {
    return axios
      .get(routes.FETCH_CARD_URL + `/${cardId}`)
      .then(unwrapData)
      .then(callback)
      .catch(logError);
  },

  createCard: function (title, listId, callback) {
    return axios
      .post(routes.CREATE_CARD_URL, {
        listId,
        card: { title },
      })
      .then(unwrapData)
      .then(callback)
      .catch(logError);
  },

  updateCard: function (card, cardId, callback) {
    return axios
      .put(routes.UPDATE_CARD_URL + `/${cardId}`, { card })
      .then(unwrapData)
      .then(callback)
      .catch(logError);
  },

  deleteCard: function (cardId, callback) {
    return axios
      .delete(routes.DELETE_CARD_URL + `/${cardId}`)
      .then(unwrapData)
      .then(callback)
      .catch(logError);
  },

  createComment: function (text, cardId, callback) {
    return axios
      .post(routes.CREATE_COMMENT_URL, {
        cardId,
        comment: { text }
      })
      .then(unwrapData)
      .then(callback)
      .catch(logError);
  }
};

export default apiClient;
