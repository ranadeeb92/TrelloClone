import apiClient from "../lib/ApiClient";
import * as types from "../constants/ActionTypes";

export function createCardRequest() {
  return { type: types.CREATE_CARD_REQUEST };
}

export function createCardSuccess(card) {
  return { type: types.CREATE_CARD_SUCCESS, card: card };
}

export function createCard(title, listId, callback) {
  return (dispatch) => {
    dispatch(createCardRequest());
    apiClient.createCard(title, listId, (data) => {
      dispatch(createCardSuccess(data.card));
      if (callback) {
        callback(data.card);
      }
    });
  };
}
