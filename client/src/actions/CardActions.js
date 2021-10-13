import apiClient from "../lib/ApiClient";
import * as types from "../constants/ActionTypes";

export function fetchCardRequest() {
  return { type: types.FETCH_CARD_REQUEST };
}

export function fetchCardSuccess(card) {
  return { type: types.FETCH_CARD_SUCCESS, card };
}

export function fetchCard(cardId, callback) {
  return (dispatch) => {
    dispatch(fetchCardRequest());
    apiClient.getCard(cardId, (data) => {
      dispatch(fetchCardSuccess(data.card));
      if (callback) {
        callback(data.card);
      }
    });
  };
}

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

export function updateCardRequest() {
  return { type: types.UPDATE_CARD_REQUEST };
}

export function updateCardSuccess(card) {
  return { type: types.UPDATE_CARD_SUCCESS, card };
}

export function updateCard(card, cardId, callback) {
  return (dispatch) => {
    dispatch(updateCardRequest());
    apiClient.updateCard(card, cardId, (data) => {
      dispatch(updateCardSuccess(data.card));
      if (callback) {
        callback(data.card);
      }
    });
  };
}

export function deleteCardRequest() {
  return { type: types.DELETE_CARD_REQUEST };
}

export function deleteCardSuccess(card) {
  return { type: types.DELETE_CARD_SUCCESS, card };
}

export function deleteCard(cardId, callback) {
  return (dispatch) => {
    dispatch(deleteCardRequest());
    apiClient.deleteCard(cardId, (data) => {
      dispatch(deleteCardSuccess(data.card));
      if (callback) {
        callback(data.card);
      }
    });
  }
}
