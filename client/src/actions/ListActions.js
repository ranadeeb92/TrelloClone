import apiClient from "../lib/ApiClient";
import * as types from "../constants/ActionTypes";


export function createListRequest() {
  return { type: types.CREATE_LIST_REQUEST };
}

export function createListSuccess(list) {
  return { type: types.CREATE_LIST_SUCCESS, list: list };
}

export function createList(title, boardId, callback) {
  return function (dispatch) {
    dispatch(createListRequest());

    apiClient.createList(title, boardId, (data) => {
      dispatch(createListSuccess(data.list));
      if (callback) {
        callback(data.list);
      }
    });
  };
}

export function updateList(title, listId, callback) {
  return function (dispatch) {
    dispatch(updateListRequest());

    apiClient.updateList(title, listId, data => {
      dispatch(updateListSuccess(data.list));
      if (callback) {
        callback(data.list);
      }
    })
  }
}

export function updateListRequest() {
  return { type: types.UPDATE_LIST_REQUEST }
}

export function updateListSuccess(list) {
  return { type: types.UPDATE_LIST_SUCCESS, list };
}